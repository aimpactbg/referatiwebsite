/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://referati.website';

module.exports = {
  siteUrl,
  generateRobotsTxt: true, // създава също robots.txt
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  // ако имаш неща, които искаш да изключиш:
  // exclude: ['/some-secret'],
};
