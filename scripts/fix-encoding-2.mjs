import { readFile, writeFile } from 'fs/promises';

const files = [
  'src/content/recipes/peppered-beef-jerky.md',
  'src/content/recipes/korean-beef-jerky.md',
  'src/content/recipes/bbq-beef-jerky.md',
  'src/content/guides/when-is-beef-jerky-done.md',
  'src/content/cuts/round-beef-jerky.md',
  'src/content/cuts/eye-of-round-beef-jerky.md',
];

const root = new URL('../', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');

for (const rel of files) {
  const path = root + rel;
  let c = await readFile(path, 'utf8');
  const before = c;
  c = c.replaceAll('””', '—').replaceAll('”“', '–');
  if (c !== before) {
    await writeFile(path, c, 'utf8');
    console.log('fixed:', rel);
  }
}
console.log('done');
