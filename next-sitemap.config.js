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
          '/private',
          '/*.json$',
          '/404',
          '/500'
        ],
      },
    ],
    additionalSitemaps: [
      'https://omdental.clinic/server-sitemap.xml',
      'https://omdental.clinic/sitemap-treatments.xml',
      'https://omdental.clinic/sitemap-services.xml'
    ],
  },
  exclude: ['/admin/*', '/api/*', '/private/*', '/404', '/500'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: true,
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customConfig = {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }

    // Homepage gets highest priority
    if (path === '/') {
      return {
        ...customConfig,
        priority: 1.0,
        changefreq: 'daily',
      }
    }

    // Service pages get high priority
    if (path.includes('/services') || path.includes('/treatments')) {
      return {
        ...customConfig,
        priority: 0.9,
        changefreq: 'weekly',
      }
    }

    // About, contact pages
    if (path.includes('/about') || path.includes('/contact')) {
      return {
        ...customConfig,
        priority: 0.8,
        changefreq: 'monthly',
      }
    }

    // Gallery, testimonials
    if (path.includes('/gallery') || path.includes('/testimonials')) {
      return {
        ...customConfig,
        priority: 0.6,
        changefreq: 'weekly',
      }
    }

    return customConfig
  },
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