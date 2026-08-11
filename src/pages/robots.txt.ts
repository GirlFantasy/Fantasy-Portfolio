import type { APIRoute } from 'astro';

/**
 * robots.txt is generated from `site` in astro.config.mjs, so changing the
 * domain in one place updates the sitemap URL here too. Nothing to remember.
 */
export const GET: APIRoute = ({ site }) => {
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', site)}
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
