/** @type {import('next-sitemap').IConfig} */
const { locations } = require('./components/Locations.ts');
const fs = require('fs');
const path = require('path');

module.exports = {
  siteUrl: 'https://airniza.com',
  generateRobotsTxt: false,
  sitemapSize: 5000,
  additionalPaths: async () => {
    const urls = [];

    // 1. Locations logic (Existing)
    locations.forEach((country) => {
      const countrySlug = country.country;
      urls.push({
        loc: `/${countrySlug}`,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      });

      country.states.forEach((state) => {
        const stateSlug = state.state;
        urls.push({
          loc: `/${countrySlug}/${stateSlug}`,
          changefreq: 'daily',
          priority: 0.9,
          lastmod: new Date().toISOString(),
        });

        state.cities.forEach((city) => {
          const citySlug = city;
          urls.push({
            loc: `/${countrySlug}/${stateSlug}/${citySlug}-air-quality`,
            changefreq: 'daily',
            priority: 0.8,
            lastmod: new Date().toISOString(),
          });
        });
      });
    });

    // 2. Web Stories logic (Adding now)
    const storiesDirectory = path.join(process.cwd(), 'lib/web-stories');
    if (fs.existsSync(storiesDirectory)) {
      const filenames = fs.readdirSync(storiesDirectory);
      
      filenames
        .filter(file => file.endsWith('.json'))
        .forEach(filename => {
          const slug = filename.replace('.json', '');
          const filePath = path.join(storiesDirectory, filename);
          const stats = fs.statSync(filePath);

          urls.push({
            loc: `/web-stories/${slug}`,
            changefreq: 'weekly',
            priority: 0.7, // Stories ke liye thoda low priority rakh sakte hain vs location pages
            lastmod: stats.mtime.toISOString(),
          });
        });
    }

    return urls;
  },
};