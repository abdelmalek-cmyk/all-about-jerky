// Build-time search index: collects { title, url, description } for every page
// from the SAME title/description already used for SEO meta. Runs before
// `astro build` (like the image manifest) and writes src/data/search-index.json,
// which the client SearchBox imports. No `fs` ever enters the browser bundle.
import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, basename } from 'path';

const root = new URL('../', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const pagesDir = join(root, 'src/pages');
const contentDir = join(root, 'src/content');
const outFile = join(root, 'src/data/search-index.json');

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&#38;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();

// Read a frontmatter scalar (quoted or bare) from a YAML block.
function fmValue(block, key) {
  const m = block.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, 'm'));
  if (!m) return null;
  let v = m[1].trim();
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    v = v.slice(1, -1);
  }
  return decode(v);
}

// Handles both `title="..."` (JSX attribute) and `const title = '...'` (JS const).
function extractAstro(src, key) {
  let m = src.match(new RegExp(`\\b${key}="([^"]*)"`));
  if (m) return decode(m[1]);
  m = src.match(new RegExp(`\\bconst\\s+${key}\\s*=\\s*(['"])(.*?)\\1`));
  if (m) return decode(m[2]);
  return null;
}

const EXCLUDE = new Set(['404.astro']);
const entries = [];

// 1) Top-level .astro pages — pull the page title/description (the layout call)
const astroFiles = (await readdir(pagesDir)).filter(
  (f) => f.endsWith('.astro') && !EXCLUDE.has(f)
);
for (const f of astroFiles) {
  const src = await readFile(join(pagesDir, f), 'utf8');
  const title = extractAstro(src, 'title');
  if (!title) {
    console.warn(`  !! search-index: no title in ${f} — skipped`);
    continue;
  }
  const slug = basename(f, '.astro');
  entries.push({
    title,
    url: slug === 'index' ? '/' : `/${slug}/`,
    description: extractAstro(src, 'description') || '',
  });
}

// 2) Content collections — recipes / cuts / guides
const collections = [
  ['recipes', 'recipes'],
  ['cuts', 'cuts'],
  ['guides', 'guides'],
];
for (const [dir, seg] of collections) {
  let files = [];
  try {
    files = (await readdir(join(contentDir, dir))).filter((f) => f.endsWith('.md'));
  } catch {
    continue;
  }
  for (const f of files) {
    const src = await readFile(join(contentDir, dir, f), 'utf8');
    const fm = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    const block = fm ? fm[1] : src;
    const title = fmValue(block, 'title');
    if (!title) {
      console.warn(`  !! search-index: no title in ${dir}/${f} — skipped`);
      continue;
    }
    entries.push({
      title,
      url: `/${seg}/${basename(f, '.md')}/`,
      description: fmValue(block, 'description') || '',
    });
  }
}

// Home first, then alphabetical by title for stable output.
entries.sort((a, b) =>
  a.url === '/' ? -1 : b.url === '/' ? 1 : a.title.localeCompare(b.title)
);

await mkdir(join(root, 'src/data'), { recursive: true });
await writeFile(outFile, JSON.stringify(entries));
console.log(`✓ search index: ${entries.length} pages → src/data/search-index.json`);
