import { PlaceToSlug } from "../helpers/PlaceToSlug";

type schemaProps = {
  Country: string;
  Aqi: number;
  Temp: number | null;
  Humidity: number;
  Ws: number | null;
  Pm2five: number;
  Pm10: number;
  O3: number;
  NO2: number;
  SO2: number;
  CO: number;
  Condition: string;
  exp: string;
  mainPollutant: string;
};

export function CountrypageSchema({
  Country,
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
  mainPollutant
}: schemaProps) {
  const countrySlug = PlaceToSlug(Country);

  return [
    // WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${Country} Air Quality Index (AQI) and Air Pollution`,
      description: `The current air quality in ${Country} is ${Aqi} (${Condition}). Main pollutant is ${mainPollutant}, temperature ${Temp}°C, humidity ${Humidity}%, and wind speed ${Ws} km/h. Real-time updates.`,
      url: `https://airniza.com/${countrySlug}`,
      keywords: [
        `${Country} AQI`,
        `${Country} Air Quality`,
        `${Country} Air Pollution`,
        `air quality ${Country}`,
        `aqi ${Country}`,
        `Air Quality Index ${Country}`,
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
        name: `${Country} Air Quality Index and Air Pollution`,
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "AQI",
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
          name: `${Country} Air Quality`,
          item: `https://airniza.com/${countrySlug}`,
        },
      ],
    },

    // Dataset Schema
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: `${Country} Air Quality Index and Air Pollution Data`,
      description: `Live Air Quality Index (AQI) and Air Pollution data for ${Country}. Check real-time air quality updates`,
      url: `https://airniza.com/${countrySlug}`,
      creator: {
        "@type": "Organization",
        name: "Airniza",
        url: "https://airniza.com",
      },
      license: "https://creativecommons.org/licenses/by/4.0/",
      spatialCoverage: {
        "@type": "Place",
        name: `${Country}`,
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
          name: `What is the air quality level in ${Country} today?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `The Air Quality Index (AQI) in ${Country} today is ${Aqi}, which is categorized as ${Condition}. ${exp}`,
          },
        },
        {
          "@type": "Question",
          name: `How often is the air quality in ${Country} updated?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `The air quality data for ${Country} is usually updated instantly using monitoring stations and sensors. This ensures residents can track real-time changes in the Air Quality Index (AQI).`,
          },
        },
        {
          "@type": "Question",
          name: `What is a safe AQI level for healthy air quality?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `An AQI level of 0 to 50 is considered safe and healthy for breathing. At this range, the air quality is clean, and there is little or no risk to human health. People of all age groups, including children, elderly, and those with respiratory or heart conditions, can safely spend time outdoors without concerns. Once the AQI rises above this level, sensitive groups may begin to experience mild health effects depending on the air quality category.`,
          },
        },
        {
          "@type": "Question",
          name: `Which AQI standard do you use to measure air quality?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `We use the US AQI (United States Air Quality Index) standard for measuring air quality. It is widely accepted internationally and provides a consistent way to understand how polluted the air is. Learn more on the <a href='https://www.epa.gov/air-trends'>U.S. Environmental Protection Agency (EPA)</a> website.`,
          },
        },
      ],
    },
  ];
}
