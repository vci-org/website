import { readFile, writeFile } from 'node:fs/promises';

const SITE_URL = 'https://venetocomunitaitinerante.it';
const PROJECTS_SOURCE = new URL('../src/data/projects.ts', import.meta.url);
const SITEMAP_TARGET = new URL('../public/sitemap.xml', import.meta.url);

const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/chi-siamo', changefreq: 'monthly', priority: '0.8' },
  { path: '/progetti', changefreq: 'weekly', priority: '0.9' },
  { path: '/associazioni', changefreq: 'monthly', priority: '0.8' },
  { path: '/diario', changefreq: 'weekly', priority: '0.8' },
  { path: '/partecipa', changefreq: 'monthly', priority: '0.7' },
  { path: '/info', changefreq: 'monthly', priority: '0.6' }
];

const projectPriority = (projectId) => {
  if (projectId === 'ecocamp-trieste-2026' || projectId === 'cammino-2026') {
    return '0.8';
  }

  if (projectId === 'cammino-2025' || projectId === 'ecocamp-2025' || projectId === 'ecocamp-2024' || projectId === 'cammino-2024') {
    return '0.7';
  }

  return '0.6';
};

const escapeXml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const source = await readFile(PROJECTS_SOURCE, 'utf8');
const projectIds = [...source.matchAll(/id:\s*'([^']+)'/g)].map((match) => match[1]);

const urls = [
  ...staticRoutes,
  ...projectIds.map((projectId) => ({
    path: `/progetti/${projectId}`,
    changefreq: 'monthly',
    priority: projectPriority(projectId)
  }))
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${escapeXml(`${SITE_URL}${path}`)}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

await writeFile(SITEMAP_TARGET, sitemap, 'utf8');
