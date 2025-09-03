type schemaProps = {
  City: string;
  pageUrl: string;
  country: string;
  state: string;
  Aqi: number;
  Temp: number | null;
  Humidity: number;
  Ws: number | null;
  Pm2five?: string;
  Pm10: string;
  O3: string;
  NO2: string;
  SO2: string;
  CO: string;
  Condition: string;
  exp: string;
};

export function CitySchema({
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
  exp
}: schemaProps) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      // ✅ Organization
      {
        "@type": "Organization",
        "@id": "https://airniza.com/#organization",
        "name": "Airniza",
        "url": "https://airniza.com/",
        "logo": "https://airniza.com/logo.png"
      },

      // ✅ WebPage
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        "name": `${City} Air Quality Index (AQI) and Air Pollution`,
        "description": `The current air quality in ${City} is ${Aqi} (${Condition}). PM2.5 is ${Pm2five} µg/m³, PM10 is ${Pm10} µg/m³, O3 is ${O3} µg/m³, NO2 is ${NO2} µg/m³, SO2 is ${SO2} µg/m³, CO is ${CO} mg/m³, temperature ${Temp}°C, humidity ${Humidity}%, and wind speed ${Ws} km/h.`,
        "url": pageUrl,
        "inLanguage": "en",
        "keywords": [
          `${City} AQI`,
          `${City} Air Quality`,
          `${City} Air Pollution`,
          `PM2.5 in ${City}`,
          `Weather and AQI in ${City}`,
          `Air Quality Index ${country}`
        ],
        "about": [
          { "@type": "Thing", "name": "Air Quality Index" },
          { "@type": "Thing", "name": "PM2.5" },
          { "@type": "Thing", "name": "PM10" },
          { "@type": "Thing", "name": "O3" },
          { "@type": "Thing", "name": "NO2" },
          { "@type": "Thing", "name": "SO2" },
          { "@type": "Thing", "name": "CO" },
          { "@type": "Thing", "name": "Air Pollution" }
        ],
        "mentions": [
          { "@type": "Place", "name": `${City}` },
          { "@type": "Place", "name": `${state}, ${country}` }
        ],
        "isPartOf": {
          "@id": "https://airniza.com/#website"
        },
        "breadcrumb": {
          "@id": `${pageUrl}#breadcrumb`
        },
        // ✅ FIXED mainEntity
        "mainEntity": {
          "@type": "Dataset",
          "name": `${City} Air Quality Data`,
          "description": `Real-time AQI and pollutant data for ${City}, ${state}, ${country}.`,
          "spatialCoverage": {
            "@type": "Place",
            "name": `${City}, ${state}, ${country}`
          },
          "dateModified": new Date().toISOString(),
          "variableMeasured": [
            { "@type": "PropertyValue", "name": "Air Quality Index", "value": Aqi, "unitText": "AQI" },
            { "@type": "PropertyValue", "name": "PM2.5", "value": Pm2five, "unitText": "µg/m³" },
            { "@type": "PropertyValue", "name": "PM10", "value": Pm10, "unitText": "µg/m³" },
            { "@type": "PropertyValue", "name": "O3", "value": O3, "unitText": "ppb" },
            { "@type": "PropertyValue", "name": "NO2", "value": NO2, "unitText": "ppb" },
            { "@type": "PropertyValue", "name": "SO2", "value": SO2, "unitText": "ppb" },
            { "@type": "PropertyValue", "name": "CO", "value": CO, "unitText": "ppm" },
            { "@type": "PropertyValue", "name": "Temperature", "value": Temp, "unitText": "°C" },
            { "@type": "PropertyValue", "name": "Humidity", "value": Humidity, "unitText": "%" },
            { "@type": "PropertyValue", "name": "Wind Speed", "value": Ws, "unitText": "km/h" },
            { "@type": "PropertyValue", "name": "Air Quality Category", "value": Condition }
          ]
        }
      },

      // ✅ Dataset (extra block)
      {
        "@type": "Dataset",
        "@id": `${pageUrl}#dataset`,
        "name": `Current Air Quality Index (AQI) for ${City}`,
        "description": `Live AQI and pollutant data for ${City}. Check real-time air quality updates.`,
        "url": pageUrl,
        "creator": { "@id": "https://airniza.com/#organization" },
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "spatialCoverage": { "@type": "Place", "name": `${City}` },
        "keywords": [
          `${City} AQI data`,
          `Air Quality Dataset`,
          `${City} PM2.5 levels`,
          `Air Pollution Statistics`,
          `Air Quality Monitoring Data`
        ],
        "variableMeasured": [
          { "@type": "PropertyValue", "name": "AQI", "value": Aqi, "unitText": "AQI" },
          { "@type": "PropertyValue", "name": "PM2.5", "value": Pm2five, "unitText": "µg/m³" },
          { "@type": "PropertyValue", "name": "PM10", "value": Pm10, "unitText": "µg/m³" },
          { "@type": "PropertyValue", "name": "O3", "value": O3, "unitText": "ppb" },
          { "@type": "PropertyValue", "name": "NO2", "value": NO2, "unitText": "ppb" },
          { "@type": "PropertyValue", "name": "SO2", "value": SO2, "unitText": "ppb" },
          { "@type": "PropertyValue", "name": "CO", "value": CO, "unitText": "ppm" },
          { "@type": "PropertyValue", "name": "Temperature", "value": Temp, "unitText": "°C" },
          { "@type": "PropertyValue", "name": "Humidity", "value": Humidity, "unitText": "%" },
          { "@type": "PropertyValue", "name": "Wind Speed", "value": Ws, "unitText": "km/h" }
        ],
        "measurementTechnique": "Standard air quality measurement methods",
        "dateModified": new Date().toISOString()
      },

      // ✅ FAQPage
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": `What is the air quality level in ${City} today?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `The Air Quality Index (AQI) in ${City} today is ${Aqi}, which is categorized as ${Condition}. ${exp}`
            }
          },
          {
            "@type": "Question",
            "name": `How often is the air quality in ${City} updated?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `The air quality data for ${City} is usually updated instantly using monitoring stations and sensors.`
            }
          },
          {
            "@type": "Question",
            "name": `What is a safe AQI level for healthy air quality?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `An AQI level of 0 to 50 is considered safe and healthy for breathing.`
            }
          },
          {
            "@type": "Question",
            "name": `Which AQI standard do you use to measure air quality?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `We use the US AQI (United States Air Quality Index) standard for measuring air quality.`
            }
          }
        ]
      },

      // ✅ BreadcrumbList
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://airniza.com/" },
          { "@type": "ListItem", "position": 2, "name": country, "item": `https://airniza.com/${country.toLowerCase()}` },
          { "@type": "ListItem", "position": 3, "name": state, "item": `https://airniza.com/${country.toLowerCase()}/${state.toLowerCase()}` },
          { "@type": "ListItem", "position": 4, "name": `${City} Air Quality`, "item": pageUrl }
        ]
      }
    ]
  };
}
