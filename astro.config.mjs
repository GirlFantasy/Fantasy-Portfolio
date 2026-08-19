// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ─────────────────────────────────────────────────────────────────────────────
//  ► When you buy a custom domain, change `site` below and nothing else.
//    It drives canonical URLs, Open Graph tags, sitemap.xml and robots.txt.
// ─────────────────────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://www.chimdalu.xyz',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
