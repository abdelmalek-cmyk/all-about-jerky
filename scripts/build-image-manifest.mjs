// Pre-build step: read every public image's intrinsic dimensions and write them
// to src/data/image-dims.json. This runs as its own Node process BEFORE
// `astro build`, so `fs` and `image-size` never enter the bundled/SSR graph —
// the site pages only ever import the resulting JSON.
import { readdir, writeFile, mkdir, readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { imageSize } from 'image-size';

const root = fileURLToPath(new URL('../', import.meta.url));
const imgDir = join(root, 'public/images');
const outFile = join(root, 'src/data/image-dims.json');

const files = (await readdir(imgDir)).filter(
  (f) => /\.(webp|jpg|jpeg|png|gif|avif)$/i.test(f) && !/-(480|960)\.webp$/i.test(f),
);

const manifest = {};
for (const file of files) {
  try {
    const { width, height } = imageSize(await readFile(join(imgDir, file)));
    if (width && height) manifest[`/images/${file}`] = { width, height };
  } catch {
    /* unreadable file — skip; callers fall back */
  }
}

// stable key order keeps the committed JSON diff-friendly
const sorted = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]));

await mkdir(dirname(outFile), { recursive: true });
await writeFile(outFile, JSON.stringify(sorted, null, 2) + '\n', 'utf8');

console.log(`image-dims manifest: ${Object.keys(sorted).length} images → src/data/image-dims.json`);
