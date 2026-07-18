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

/** Images to advertise in Recipe JSON-LD. Google recommends supplying 16:9,
 *  4:3 and 1:1 variants so it can pick the best fit per search surface.
 *  Falls back to the original if the generated crops aren't present. */
export function getSchemaImages(src) {
  const stem = src.replace(/\.webp$/, '');
  const variants = [];

  for (const ratio of ['16x9', '4x3', '1x1']) {
    const url = `${stem}-${ratio}.webp`;
    const dims = getImageDims(url);
    if (dims) variants.push({ url, ...dims });
  }

  if (variants.length === 0) {
    const dims = getImageDims(src);
    if (dims) variants.push({ url: src, ...dims });
  }

  return variants;
}
