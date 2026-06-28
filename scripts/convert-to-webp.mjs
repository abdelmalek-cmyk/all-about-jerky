import sharp from 'sharp';
import { readdir, unlink, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const imgDir = new URL('../public/images/', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');

const files = await readdir(imgDir);
const targets = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

let totalBefore = 0, totalAfter = 0;

for (const file of targets) {
  const src = join(imgDir, file);
  const out = join(imgDir, basename(file, extname(file)) + '.webp');

  const before = (await stat(src)).size;
  totalBefore += before;

  await sharp(src)
    .webp({ quality: 82, effort: 4 })
    .toFile(out);

  const after = (await stat(out)).size;
  totalAfter += after;

  const pct = Math.round((1 - after / before) * 100);
  console.log(`✓ ${file} → ${basename(out)}  ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB (−${pct}%)`);

  await unlink(src);
}

console.log(`\nDone: ${targets.length} images`);
console.log(`Before: ${Math.round(totalBefore/1024/1024)}MB  →  After: ${Math.round(totalAfter/1024/1024)}MB`);
console.log(`Saved: ${Math.round((totalBefore-totalAfter)/1024/1024)}MB (${Math.round((1-totalAfter/totalBefore)*100)}%)`);
