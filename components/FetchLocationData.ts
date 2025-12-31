import AqiStatus from "./AqiStatus";
import { calculateAQI } from "./helpers/AqiCalculator";

// Radar API response type
type RadarResponse = {
  addresses?: {
    latitude: number;
    longitude: number;
    state: string;
    country: string;
  }[];
};

// OpenWeather Pollution API response type
type PollutionDataPoint = {
  main: {
    aqi: number;
  };
  components: {
    co: number;
    no: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    nh3: number;
  };
  dt: number; // timestamp
};

type OpenWeatherPollutionResponse = {
  list?: PollutionDataPoint[];
};

// OpenWeather Weather API response type
type OpenWeatherWeatherResponse = {
  main?: {
    temp: number;
    humidity: number;
  };
  wind?: {
    speed: number;
  };
};

export default async function FetchLocationData(city: string) {
  // 1. Radar API call (for state, country, lat, lon)
  const radarRes = await fetch(
    `https://api.radar.io/v1/geocode/forward?query=${city}`,
    {
      headers: {
        Authorization: process.env.RADAR_SECRET_KEY || "",
      },
      cache: "no-store",
    }
  );

  const radarData = (await radarRes.json()) as RadarResponse;
  const location = radarData.addresses?.[0];

  if (!location) {
    throw new Error("Location not found..");
  }

  const { latitude, longitude, state, country } = location;

  // 2. OpenWeather Air Pollution API
  const end = Math.floor(Date.now() / 1000);
  const start = end - 86400;

  const url = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${latitude}&lon=${longitude}&start=${start}&end=${end}&appid=${process.env.openweatherkey}`;

  const res = await fetch(url, { next: { revalidate: 3600 } });
  const opwdata = (await res.json()) as OpenWeatherPollutionResponse;

  const result = calculateAQI(opwdata.list ?? []);

  if (!result) {
    throw new Error("Air Quality data is not available..");
  }

  const aqi = result.finalAQI;
  const mainPollutant = result.primaryPollutant;

  const pm2_5 = Number(
    (result.pollutants.find((p) => p.name === "PM2.5")?.avg ?? 0).toFixed(1)
  );
  const pm10 = Number(
    (result.pollutants.find((p) => p.name === "PM10")?.avg ?? 0).toFixed(1)
  );
  const o3 = Number(
    (result.pollutants.find((p) => p.name === "O₃")?.max8h ?? 0).toFixed(3)
  );
  const co = Number(
    (result.pollutants.find((p) => p.name === "CO")?.max8h ?? 0).toFixed(3)
  );
  const no2 = Number(
    (result.pollutants.find((p) => p.name === "NO₂")?.last1h ?? 0).toFixed(1)
  );
  const so2 = Number(
    (result.pollutants.find((p) => p.name === "SO₂")?.last1h ?? 0).toFixed(1)
  );

  // 3. OpenWeather Weather API
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.openweatherkey2}`,
    {
      cache: "no-store",
    }
  );

  const weatherData =
    (await weatherRes.json()) as OpenWeatherWeatherResponse;

  const temp = weatherData.main?.temp
  ? Math.round(weatherData.main.temp)
  : 0;

const humidity = weatherData.main?.humidity ?? 0;

const ws = weatherData.wind?.speed
  ? Math.round(weatherData.wind.speed * 3.6)
  : 0;


  const { condition, exp, ic } = AqiStatus(aqi);

  // ✅ Final return
  return {
    aqi,
    condition,
    exp,
    ic,
    mainPollutant,
    pm2_5,
    pm10,
    co,
    no2,
    so2,
    o3,
    temp,
    humidity,
    ws,
    state,
    country,
  };
}
