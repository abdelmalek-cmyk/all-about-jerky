import sharp from 'sharp';
import { readdir, access } from 'fs/promises';
import { join, basename } from 'path';

const root = new URL('../', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const imgDir = join(root, 'public/images');
const recipesDir = join(root, 'src/content/recipes');

// Google's Recipe structured-data guidance recommends supplying each recipe
// image in 16:9, 4:3, and 1:1 so it can pick the best fit per surface.
const RATIOS = [
  { name: '1x1', r: 1 },
  { name: '4x3', r: 4 / 3 },
  { name: '16x9', r: 16 / 9 },
];

// Hero images referenced by RecipeSchema: one per recipe collection entry,
// plus the hero of each method page that carries Recipe JSON-LD.
const methodHeroes = [
  'dehydrator-beef-jerky-machine',
  'smoked-beef-jerky-smoker',
  'beef-jerky-in-oven-rack',
  'air-fryer-beef-jerky-basket',
  'ground-beef-jerky-trays',
  'venison-jerky-rustic',
  'beef-jerky-done',
];

const recipeSlugs = (await readdir(recipesDir))
  .filter((f) => f.endsWith('.md'))
  .map((f) => basename(f, '.md'));

const targets = [...new Set([...recipeSlugs, ...methodHeroes])];

let made = 0;
for (const name of targets) {
  const src = join(imgDir, `${name}.webp`);
  try {
    await access(src);
  } catch {
    console.warn(`  !! missing source: ${name}.webp`);
    continue;
  }

  const { width, height } = await sharp(src).metadata();

  for (const { name: rname, r } of RATIOS) {
    // Largest rectangle of this ratio that fits inside the source — never upscale.
    let ow, oh;
    if (width / height > r) {
      oh = height;
      ow = Math.round(oh * r);
    } else {
      ow = width;
      oh = Math.round(ow / r);
    }

    const out = join(imgDir, `${name}-${rname}.webp`);
    await sharp(src)
      .resize(ow, oh, { fit: 'cover', position: 'attention' })
      .webp({ quality: 82, effort: 4 })
      .toFile(out);
    made++;
  }
  console.log(`✓ ${name}.webp (${width}x${height}) → 1x1, 4x3, 16x9`);
}

console.log(`\nDone: ${made} crops from ${targets.length} source images.`);
