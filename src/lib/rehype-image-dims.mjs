import { getImageDims } from './image-dims.mjs';

/** Rehype plugin: add intrinsic width/height (CLS prevention) plus
 *  lazy-loading defaults to every markdown image served from /images/. */
export default function rehypeImageDims() {
  return (tree) => {
    walk(tree);
  };
}

function walk(node) {
  if (node.type === 'element' && node.tagName === 'img') {
    const src = node.properties?.src;
    if (typeof src === 'string' && src.startsWith('/images/')) {
      if (!node.properties.width || !node.properties.height) {
        const dims = getImageDims(src);
        if (dims) {
          node.properties.width = dims.width;
          node.properties.height = dims.height;
        }
      }
      if (!node.properties.loading) node.properties.loading = 'lazy';
      if (!node.properties.decoding) node.properties.decoding = 'async';
    }
  }
  for (const child of node.children ?? []) walk(child);
}
