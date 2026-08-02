// Generate responsive width variants (-480, -960) for content images so
// ContentImage can serve a right-sized file instead of the full 1254px hero
// to small screens. Run manually after adding images (like generate-crops),
// then commit the output. NOT part of the client bundle (sharp/fs stay here).
import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const root = new URL('../', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const imgDir = join(root, 'public/images');

// Must match ContentImage's srcset rule: -480 when wider than 480, -960 when wider than 960.
const WIDTHS = [480, 960];

const files = (await readdir(imgDir)).filter(
  (f) =>
    /\.webp$/i.test(f) &&
    !/-(1x1|4x3|16x9)\.webp$/i.test(f) && // skip Recipe schema crops
    !/-(480|960)\.webp$/i.test(f),        // skip already-generated variants
);

let made = 0;
for (const file of files) {
  const src = join(imgDir, file);
  const { width } = await sharp(src).metadata();
  if (!width) continue;
  const base = file.replace(/\.webp$/i, '');
  const done = [];
  for (const w of WIDTHS) {
    if (width <= w) continue; // never upscale
    await sharp(src).resize({ width: w }).webp({ quality: 80, effort: 4 }).toFile(join(imgDir, `${base}-${w}.webp`));
    made++;
    done.push(`${w}w`);
  }
  if (done.length) console.log(`✓ ${file} (${width}w) → ${done.join(', ')}`);
}

console.log(`\nDone: ${made} responsive variants.`);
