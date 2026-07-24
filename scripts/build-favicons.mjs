// Generates the full favicon set for All About Jerky from the SVG master.
// Concept C — gold "J-strip" on a maroon tile (brand-consistent with the header).
import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { join } from 'path';

const pub = fileURLToPath(new URL('../public', import.meta.url));
const MAROON = '#7C1D2C';
const GOLD = '#EEA63A';

// Rounded tile — for the browser tab / SERP favicon (transparent corners).
const tileSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-label="All About Jerky">
<title>All About Jerky</title>
<rect width="48" height="48" rx="11" fill="${MAROON}"/>
<path d="M30 11 V27 a9 9 0 0 1 -18 0" fill="none" stroke="${GOLD}" stroke-width="9.5" stroke-linecap="round"/>
<line x1="30" y1="16" x2="30" y2="22" stroke="${MAROON}" stroke-width="1.7" stroke-linecap="round"/>
</svg>`;

// Full-bleed square — for apple-touch + manifest icons (must be opaque; iOS/Android
// apply their own masking, transparent corners would render black on iOS).
const squareSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
<rect width="48" height="48" fill="${MAROON}"/>
<path d="M30 11 V27 a9 9 0 0 1 -18 0" fill="none" stroke="${GOLD}" stroke-width="9.5" stroke-linecap="round"/>
<line x1="30" y1="16" x2="30" y2="22" stroke="${MAROON}" stroke-width="1.7" stroke-linecap="round"/>
</svg>`;

// 1) favicon.svg (scalable master)
writeFileSync(join(pub, 'favicon.svg'), tileSvg);

// 2) favicon.ico — 32x32 PNG wrapped in a minimal ICO container (PNG-in-ICO,
//    accepted by all modern browsers and Google).
function pngToIco(png, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0);
  entry.writeUInt8(size >= 256 ? 0 : size, 1);
  entry.writeUInt8(0, 2); entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4); entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8); entry.writeUInt32LE(22, 12);
  return Buffer.concat([header, entry, png]);
}
const ico32 = await sharp(Buffer.from(tileSvg)).resize(32, 32).png().toBuffer();
writeFileSync(join(pub, 'favicon.ico'), pngToIco(ico32, 32));

// 3) apple-touch-icon.png (180, opaque square)
await sharp(Buffer.from(squareSvg)).resize(180, 180).png().toFile(join(pub, 'apple-touch-icon.png'));

// 4) manifest icons (192 + 512, opaque square)
await sharp(Buffer.from(squareSvg)).resize(192, 192).png().toFile(join(pub, 'icon-192.png'));
await sharp(Buffer.from(squareSvg)).resize(512, 512).png().toFile(join(pub, 'icon-512.png'));

console.log('favicons written: favicon.svg, favicon.ico (32), apple-touch-icon.png (180), icon-192.png, icon-512.png');
