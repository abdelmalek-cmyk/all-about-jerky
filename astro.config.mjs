import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://allaboutjerky.com',
  trailingSlash: 'always',
  output: "hybrid",
  integrations: [sitemap()],
  adapter: cloudflare()
});