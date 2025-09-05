import { PlaceToSlug } from "../helpers/PlaceToSlug";

type schemaProps = {
  City: string;
  pageUrl: string;
  country: string;
  state: string;
  Aqi: number;
  Temp: number | null;
  Humidity: number;
  Ws: number | null;
  Pm2five?: number;
  Pm10: number;
  O3: number;
  NO2: number;
  SO2: number;
  CO: number;
  Condition: string;
  exp: string;
};

export function CitypageSchema({
  City,
  pageUrl,
  state,
  country,
  Aqi,
  Pm2five,
  Pm10,
  O3,
  NO2,
  SO2,
  CO,
  Temp,
  Humidity,
  Ws,
  Condition,
  exp,
}: schemaProps) {
  const stateSlug = PlaceToSlug(state);
  const countrySlug = PlaceToSlug(country);

  return [
    // WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${City} Air Quality Index (AQI) and Air Pollution`,
      description: `The current air quality in ${City} is ${Aqi} (${Condition}). PM2.5 is ${Pm2five} µg/m³, temperature ${Temp}°C, humidity ${Humidity}%, and wind speed ${Ws} km/h. Real-time updates.`,
      url: pageUrl,
      keywords: [
        `${City} AQI`,
        `${City} Air Quality`,
        `${City} Air Pollution`,
        `air quality ${City}`,
        `aqi ${City}`,
        `Air Quality Index ${City}`,
      ],
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
        logo: {
          "@type": "ImageObject",
          url: "https://airniza.com/logo.png",
          width: 250,
          height: 60,
        },
      },
      mainEntity: {
        "@type": "Thing",
        name: `${City} Air Quality Index and Air Pollution`,
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Aqi",
            value: `${Aqi}`,
          },
          {
            "@type": "PropertyValue",
            name: "Air Quality Status",
            value: `${Condition}`,
          },
          {
            "@type": "PropertyValue",
            name: "PM2.5",
            value: `${Pm2five}`,
          },
          {
            "@type": "PropertyValue",
            name: "PM10",
            value: `${Pm10}`,
          },
          {
            "@type": "PropertyValue",
            name: "O3",
            value: `${O3}`,
          },
          {
            "@type": "PropertyValue",
            name: "CO",
            value: `${CO}`,
          },
          {
            "@type": "PropertyValue",
            name: "NO2",
            value: `${NO2}`,
          },
          {
            "@type": "PropertyValue",
            name: "SO2",
            value: `${SO2}`,
          },
          {
            "@type": "PropertyValue",
            name: "Humidity",
            value: `${Humidity}%`,
          },
          {
            "@type": "PropertyValue",
            name: "Temperature",
            value: `${Temp} °C`,
          },
          {
            "@type": "PropertyValue",
            name: "Wind Speed",
            value: `${Ws} km/h`,
          },
        ],
      },
    },

    // Breadcrumb Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://airniza.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: country,
          item: `https://airniza.com/${countrySlug}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: state,
          item: `https://airniza.com/${countrySlug}/${stateSlug}`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: `${City} Air Quality`,
          item: pageUrl,
        },
      ],
    },

    // Dataset Schema
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: `${City} Air Quality Index and Air Pollution Data`,
      description: `Live Air Quality Index (AQI) and Air Pollution data for ${City}. Check real-time air quality updates`,
      url: pageUrl,
      creator: {
        "@type": "Organization",
        name: "Airniza",
        url: "https://airniza.com",
      },
      license: "https://creativecommons.org/licenses/by/4.0/",
      spatialCoverage: {
        "@type": "Place",
        name: `${City}`,
      },
      variableMeasured: [
        {
          "@type": "PropertyValue",
          name: "AQI",
          value: `${Aqi}`,
          unitText: "AQI",
        },
        {
          "@type": "PropertyValue",
          name: "PM2.5",
          value: `${Pm2five}`,
          unitText: "µg/m³",
        },
        {
          "@type": "PropertyValue",
          name: "PM10",
          value: `${Pm10}`,
          unitText: "µg/m³",
        },

        {
          "@type": "PropertyValue",
          name: "O3",
          value: `${O3}`,
          unitText: "ppm",
        },
        {
          "@type": "PropertyValue",
          name: "CO",
          value: `${CO}`,
          unitText: "ppm",
        },
        {
          "@type": "PropertyValue",
          name: "NO2",
          value: `${NO2}`,
          unitText: "ppb",
        },
        {
          "@type": "PropertyValue",
          name: "SO2",
          value: `${SO2}`,
          unitText: "ppb",
        },
        {
          "@type": "PropertyValue",
          name: "Temperature",
          value: `${Temp}`,
          unitText: "°C",
        },
        {
          "@type": "PropertyValue",
          name: "Humidity",
          value: `${Humidity}`,
          unitText: "%",
        },
        {
          "@type": "PropertyValue",
          name: "Wind Speed",
          value: `${Ws}`,
          unitText: "km/h",
        },
      ],
      measurementTechnique: "Standard air quality measurement methods",
      dateModified: new Date().toISOString(),
    },

    // FAQ Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `What is the air quality level in ${City} today?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `The Air Quality Index (AQI) in ${City} today is ${Aqi}, which is categorized as ${Condition}. ${exp}`,
          },
        },
        {
          "@type": "Question",
          name: `How often is the air quality in ${City} updated?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `The air quality data for ${City} is usually updated instantly using monitoring stations and sensors.`,
          },
        },
        {
          "@type": "Question",
          name: `What is a safe AQI level for healthy air quality?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `An AQI level of 0 to 50 is considered safe and healthy for breathing.`,
          },
        },
        {
          "@type": "Question",
          name: `Which AQI standard do you use to measure air quality?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `We use the US AQI (United States Air Quality Index) standard for measuring air quality.`,
          },
        },
      ],
    },
  ];
}
