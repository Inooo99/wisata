const fs = require('fs');
const path = require('path');
const { destinations } = require('../src/data/destinations.js');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const baseUrl = 'https://www.jelajahntb.my.id';
const today = new Date().toISOString().split('T')[0];

const staticUrls = [
  { loc: baseUrl + '/', changefreq: 'daily', priority: '1.0' },
  { loc: baseUrl + '/destinasi', changefreq: 'weekly', priority: '0.9' },
  { loc: baseUrl + '/kategori', changefreq: 'weekly', priority: '0.8' },
  { loc: baseUrl + '/kategori/pantai', changefreq: 'weekly', priority: '0.8' },
  { loc: baseUrl + '/kategori/bukit-pegunungan', changefreq: 'weekly', priority: '0.8' },
  { loc: baseUrl + '/kategori/air-terjun', changefreq: 'weekly', priority: '0.8' },
  { loc: baseUrl + '/kategori/budaya-religi', changefreq: 'weekly', priority: '0.8' },
  { loc: baseUrl + '/profil', changefreq: 'monthly', priority: '0.5' },
  { loc: baseUrl + '/kontak', changefreq: 'monthly', priority: '0.5' },
];

const destUrls = destinations.map((d) => ({
  loc: `${baseUrl}/wisata/${d.id}`,
  changefreq: 'weekly',
  priority: '0.8',
}));

const allUrls = [...staticUrls, ...destUrls];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml.trim(), 'utf8');

const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8');
console.log(`Success! Generated sitemap.xml with ${allUrls.length} URLs and robots.txt in public/ folder.`);

