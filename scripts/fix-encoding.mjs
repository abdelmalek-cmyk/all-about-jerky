import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const files = [
  'src/content/recipes/peppered-beef-jerky.md',
  'src/content/recipes/korean-beef-jerky.md',
  'src/content/recipes/bbq-beef-jerky.md',
  'src/content/guides/when-is-beef-jerky-done.md',
  'src/content/guides/how-long-does-beef-jerky-last.md',
  'src/content/guides/can-dogs-eat-beef-jerky.md',
  'src/content/guides/beef-jerky-time-and-temperature.md',
  'src/content/cuts/round-beef-jerky.md',
  'src/content/cuts/eye-of-round-beef-jerky.md',
];

const replacements = [
  [/â€"/g, '—'],   // em dash —
  [/â€"/g, '–'],   // en dash –
  [/â€˜/g, '‘'],   // left single quote '
  [/â€™/g, '’'],   // right single quote '
  [/â€œ/g, '“'],   // left double quote "
  [/â€/g,  '”'],   // right double quote "
  [/â˜…/g, '★'],   // ★
  [/âœ…/g, '✅'],   // ✅
  [/âŒ/g,  '❌'],   // ❌
  [/Â°/g,  '°'],   // °
  [/Ã—/g,  '×'],   // ×
  [/â€¦/g, '…'],   // …
];

const root = new URL('../', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');

for (const rel of files) {
  const path = join(root, rel);
  let content = await readFile(path, 'utf8');
  let changed = false;
  for (const [pattern, replacement] of replacements) {
    const next = content.replace(pattern, replacement);
    if (next !== content) { content = next; changed = true; }
  }
  if (changed) {
    await writeFile(path, content, 'utf8');
    console.log(`Fixed: ${rel}`);
  } else {
    console.log(`Clean: ${rel}`);
  }
}
console.log('Done.');
