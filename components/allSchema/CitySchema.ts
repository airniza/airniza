type schemaProps = {
  City: string;
  pageUrl: string;
  country: string;
  state: string;
  Aqi: number;
  Temp: number | null;
  Humidity: number;
  Ws: number | null;
  Pm2five: string | undefined;
  Condition: string;
  exp: string;
}

export function CitySchema({
  City,
  pageUrl,
  state,
  country,
  Aqi,
  Pm2five,
  Temp,
  Humidity,
  Ws,
  Condition,
  exp
}: schemaProps) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      // WebPage
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        "name": `${City} Air Quality Index (AQI) and ${country} Air Pollution`,
        "description": `Stay informed with ${City} air quality index (AQI) and pollution updates in ${country}. Monitor PM2.5, health risks, and daily air pollution levels.`,
        "url": pageUrl,
        "inLanguage": "en",
        "isPartOf": {
          "@id": "https://airniza.com/#website"
        },
        "breadcrumb": {
          "@id": `${pageUrl}#breadcrumb`
        },
        "mainEntity": {
          "@type": "AirQualityObservation",
          "location": {
            "@type": "Place",
            "name": `${City}, ${state}, ${country}`
          },
          "dateObserved": new Date().toISOString(),
          "observedProperty": [
            { "@type": "PropertyValue", "name": "Air Quality Index", "value": Aqi, "unitText": "AQI" },
            { "@type": "PropertyValue", "name": "PM2.5", "value": Pm2five, "unitText": "µg/m³" },
            { "@type": "PropertyValue", "name": "Temperature", "value": Temp, "unitText": "°C" },
            { "@type": "PropertyValue", "name": "Humidity", "value": Humidity, "unitText": "%" },
            { "@type": "PropertyValue", "name": "Wind Speed", "value": Ws, "unitText": "km/h" },
            { "@type": "PropertyValue", "name": "Air Quality Category", "value": Condition }
          ]
        }
      },

      // Dataset
      {
        "@type": "Dataset",
        "@id": `${pageUrl}#dataset`,
        "name": `Current Air Quality Index (AQI) for ${City}`,
        "description": `Live AQI and PM2.5 data for ${City}. Check real-time air quality updates.`,
        "url": pageUrl,
        "creator": { "@id": "https://airniza.com/#organization" },
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "spatialCoverage": { "@type": "Place", "name": `${City}` },
        "variableMeasured": [
          { "@type": "PropertyValue", "name": "AQI", "value": Aqi, "unitText": "AQI" },
          { "@type": "PropertyValue", "name": "PM2.5", "value": Pm2five, "unitText": "µg/m³" },
          { "@type": "PropertyValue", "name": "Temperature", "value": Temp, "unitText": "°C" },
          { "@type": "PropertyValue", "name": "Humidity", "value": Humidity, "unitText": "%" },
          { "@type": "PropertyValue", "name": "Wind Speed", "value": Ws, "unitText": "km/h" }
        ],
        "measurementTechnique": "Standard air quality measurement methods",
        "dateModified": new Date().toISOString()
      },

      // FAQPage
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
              "text": `The air quality data for ${City} is usually updated instantly using monitoring stations and sensors. This ensures residents can track real-time changes in the Air Quality Index (AQI).`
            }
          },
          {
            "@type": "Question",
            "name": `What is a safe AQI level for healthy air quality?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `An AQI level of 0 to 50 is considered safe and healthy for breathing. At this range, the air quality is clean, and there is little or no risk to human health. People of all age groups, including children, elderly, and those with respiratory or heart conditions, can safely spend time outdoors without concerns. Once the AQI rises above this level, sensitive groups may begin to experience mild health effects depending on the air quality category.`
            }
          },
          {
            "@type": "Question",
            "name": `Which AQI standard do use to measure air quality?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `We use the US AQI (United States Air Quality Index) standard for measuring air quality. It is widely accepted internationally and provides a consistent way to understand how polluted the air is.`
            }
          }
        ]
      },

      // BreadcrumbList
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
