import { readFile, writeFile, readdir } from 'fs/promises';
import { join } from 'path';
import { getImageDims } from '../src/lib/image-dims.mjs';

const pagesDir = new URL('../src/pages/', import.meta.url);

async function* astroFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir.pathname ?? dir, entry.name);
    if (entry.isDirectory()) yield* astroFiles(full);
    else if (entry.name.endsWith('.astro')) yield full;
  }
}

const imgTag = /<img src="(\/images\/[^"]+)"([^>]*?)\/>/g;

for await (const file of astroFiles(new URL(pagesDir).pathname.replace(/^\/([A-Z]:)/, '$1'))) {
  const src = await readFile(file, 'utf8');
  let first = true;
  const out = src.replace(imgTag, (full, imgSrc, attrs) => {
    if (/\bwidth=/.test(attrs)) { first = false; return full; }
    const dims = getImageDims(imgSrc);
    if (!dims) { console.warn(`  !! no dims for ${imgSrc} in ${file}`); return full; }
    let newAttrs = ` width="${dims.width}" height="${dims.height}"${attrs}`;
    if (first) {
      newAttrs = newAttrs.replace(/\s*loading="lazy"/, '') + ' loading="eager" fetchpriority="high"';
      first = false;
    } else {
      newAttrs += ' decoding="async"';
    }
    return `<img src="${imgSrc}"${newAttrs}/>`;
  });
  if (out !== src) {
    await writeFile(file, out, 'utf8');
    console.log(`updated: ${file.split(/[\\/]/).slice(-2).join('/')}`);
  }
}
console.log('done');
