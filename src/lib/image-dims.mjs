import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { imageSize } from 'image-size';

const publicDir = fileURLToPath(new URL('../../public', import.meta.url));
const cache = new Map();

/** Build-time lookup of intrinsic pixel dimensions for a public image path
 *  like "/images/foo.webp". Returns { width, height } or null if unreadable. */
export function getImageDims(src) {
  if (cache.has(src)) return cache.get(src);
  let dims = null;
  try {
    const { width, height } = imageSize(readFileSync(join(publicDir, src)));
    if (width && height) dims = { width, height };
  } catch {
    /* file missing — caller falls back */
  }
  cache.set(src, dims);
  return dims;
}
