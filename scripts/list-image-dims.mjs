import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const imgDir = new URL('../public/images/', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const files = (await readdir(imgDir)).filter(f => f.endsWith('.webp'));

const out = {};
for (const f of files) {
  const { width, height } = await sharp(join(imgDir, f)).metadata();
  out[`/images/${f}`] = { width, height };
}
console.log(JSON.stringify(out, null, 1));
