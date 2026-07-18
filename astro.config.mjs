import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeImageDims from './src/lib/rehype-image-dims.mjs';

export default defineConfig({
  site: 'https://allaboutjerky.com',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypeImageDims],
  },
});
