// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Update `site` once a custom domain is purchased. Until then this is the
// Vercel deployment URL; it is only used for sitemap + canonical URLs.
export default defineConfig({
  site: 'https://chimdalu-egwu.vercel.app',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
