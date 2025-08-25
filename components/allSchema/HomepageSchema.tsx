export default function HomepageSchema () {



   const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Airniza",
    description:
      "Check real-time air quality index (AQI) data, PM2.5, humidity, temperature, and pollution levels for cities across the world. Updated instantly.",
    url: "https://airniza.com",
    datePublished: "2025-08-08T00:00:00.000Z",
    dateModified: new Date().toISOString(),
    inLanguage: "en",
    author: {
      "@type": "Organization",
      name: "Airniza",
    },
    publisher: {
      "@type": "Organization",
      name: "Airniza",
    },
    mainEntity: {
      "@type": "Thing",
      name: "Global Air Quality Data",
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Data Coverage",
          value: "Worldwide",
        },
        {
          "@type": "PropertyValue",
          name: "Update Frequency",
          value: "Hourly",
        },
        {
          "@type": "PropertyValue",
          name: "Parameters",
          value: "AQI, PM2.5, Humidity, Temperature, Wind Speed",
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://airniza.com",
      },
    ],
  },
];

  return schemaData;
}