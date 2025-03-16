/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://omdental.clinic',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api',
          '/admin',
          '/_next',
          '/static',
        ],
      },
    ],
    additionalSitemaps: [
      'https://omdental.clinic/server-sitemap.xml',
    ],
  },
  exclude: ['/admin/*', '/api/*'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: true,
  alternateRefs: [
    {
      href: 'https://omdental.clinic',
      hreflang: 'en',
    },
    {
      href: 'https://omdental.clinic/hi',
      hreflang: 'hi',
    },
  ],
} 