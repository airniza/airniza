/** @type {import('next-sitemap').IConfig} */
const { locations } = require('./components/Locations.ts');

module.exports = {
  siteUrl: 'https://airniza.com',
  generateRobotsTxt: false,
  sitemapSize: 5000,
  additionalPaths: async () => {
    const urls = [];

    locations.forEach((country) => {
      const countrySlug = country.country;

      // Country page
      urls.push({
        loc: `/${countrySlug}`,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      });

      country.states.forEach((state) => {
        const stateSlug = state.state;

        // State page
        urls.push({
          loc: `/${countrySlug}/${stateSlug}`,
          changefreq: 'daily',
          priority: 0.9,
          lastmod: new Date().toISOString(),
        });

        state.cities.forEach((city) => {
          const citySlug = city;

          // City page
          urls.push({
            loc: `/${countrySlug}/${stateSlug}/${citySlug}-air-quality`,
            changefreq: 'daily',
            priority: 0.8,
            lastmod: new Date().toISOString(),
          });
        });
      });
    });

    return urls;
  },
};
