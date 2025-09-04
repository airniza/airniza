// ✅ US EPA AQI Calculation – works with OpenWeatherMap Air Pollution API response
// Author: Rahul Kumar Yadav

// -------------------- Type Definitions --------------------
export type Pollutant = "pm2_5" | "pm10" | "o3" | "co" | "no2" | "so2";

export interface OWMHour {
  dt: number;
  components: {
    pm2_5: number; // µg/m³
    pm10: number;  // µg/m³
    o3: number;    // µg/m³ (needs conversion)
    co: number;    // µg/m³ (needs conversion)
    no2: number;   // µg/m³ (needs conversion)
    so2: number;   // µg/m³ (needs conversion)
  };
}

export interface AQIResult {
  finalAQI: number;
  category: string;
  primaryPollutant: string;
  details: string[];
  pollutants: {
    name: string;
    unit: string;
    aqi: number;
    avg?: number;    // optional for PM
    max8h?: number;  // optional for O3, CO
    last1h?: number; // optional for NO2, SO2
  } [];
}


// -------------------- Helper Functions --------------------
function ugm3ToPpm(ugm3: number, molecularWeight: number): number {
  return (ugm3 * 24.45) / (molecularWeight * 1000);
}

function ugm3ToPpb(ugm3: number, molecularWeight: number): number {
  return (ugm3 * 24.45) / molecularWeight;
}

// -------------------- AQI Breakpoints --------------------
const breakpoints: Record<Pollutant, { concLow: number; concHigh: number; indexLow: number; indexHigh: number }[]> = {
  pm2_5: [
    { concLow: 0, concHigh: 12, indexLow: 0, indexHigh: 50 },
    { concLow: 12.1, concHigh: 35.4, indexLow: 51, indexHigh: 100 },
    { concLow: 35.5, concHigh: 55.4, indexLow: 101, indexHigh: 150 },
    { concLow: 55.5, concHigh: 150.4, indexLow: 151, indexHigh: 200 },
    { concLow: 150.5, concHigh: 250.4, indexLow: 201, indexHigh: 300 },
    { concLow: 250.5, concHigh: 350.4, indexLow: 301, indexHigh: 400 },
    { concLow: 350.5, concHigh: 500.4, indexLow: 401, indexHigh: 500 },
  ],
  pm10: [
    { concLow: 0, concHigh: 54, indexLow: 0, indexHigh: 50 },
    { concLow: 55, concHigh: 154, indexLow: 51, indexHigh: 100 },
    { concLow: 155, concHigh: 254, indexLow: 101, indexHigh: 150 },
    { concLow: 255, concHigh: 354, indexLow: 151, indexHigh: 200 },
    { concLow: 355, concHigh: 424, indexLow: 201, indexHigh: 300 },
    { concLow: 425, concHigh: 504, indexLow: 301, indexHigh: 400 },
    { concLow: 505, concHigh: 604, indexLow: 401, indexHigh: 500 },
  ],
  o3: [
    { concLow: 0.000, concHigh: 0.054, indexLow: 0, indexHigh: 50 },
    { concLow: 0.055, concHigh: 0.070, indexLow: 51, indexHigh: 100 },
    { concLow: 0.071, concHigh: 0.085, indexLow: 101, indexHigh: 150 },
    { concLow: 0.086, concHigh: 0.105, indexLow: 151, indexHigh: 200 },
    { concLow: 0.106, concHigh: 0.200, indexLow: 201, indexHigh: 300 },
  ],
  co: [
    { concLow: 0.0, concHigh: 4.4, indexLow: 0, indexHigh: 50 },
    { concLow: 4.5, concHigh: 9.4, indexLow: 51, indexHigh: 100 },
    { concLow: 9.5, concHigh: 12.4, indexLow: 101, indexHigh: 150 },
    { concLow: 12.5, concHigh: 15.4, indexLow: 151, indexHigh: 200 },
    { concLow: 15.5, concHigh: 30.4, indexLow: 201, indexHigh: 300 },
    { concLow: 30.5, concHigh: 40.4, indexLow: 301, indexHigh: 400 },
    { concLow: 40.5, concHigh: 50.4, indexLow: 401, indexHigh: 500 },
  ],
  no2: [
    { concLow: 0, concHigh: 53, indexLow: 0, indexHigh: 50 },
    { concLow: 54, concHigh: 100, indexLow: 51, indexHigh: 100 },
    { concLow: 101, concHigh: 360, indexLow: 101, indexHigh: 150 },
    { concLow: 361, concHigh: 649, indexLow: 151, indexHigh: 200 },
    { concLow: 650, concHigh: 1249, indexLow: 201, indexHigh: 300 },
    { concLow: 1250, concHigh: 1649, indexLow: 301, indexHigh: 400 },
    { concLow: 1650, concHigh: 2049, indexLow: 401, indexHigh: 500 },
  ],
  so2: [
    { concLow: 0, concHigh: 35, indexLow: 0, indexHigh: 50 },
    { concLow: 36, concHigh: 75, indexLow: 51, indexHigh: 100 },
    { concLow: 76, concHigh: 185, indexLow: 101, indexHigh: 150 },
    { concLow: 186, concHigh: 304, indexLow: 151, indexHigh: 200 },
    { concLow: 305, concHigh: 604, indexLow: 201, indexHigh: 300 },
    { concLow: 605, concHigh: 804, indexLow: 301, indexHigh: 400 },
    { concLow: 805, concHigh: 1004, indexLow: 401, indexHigh: 500 },
  ],
};

// -------------------- Categories --------------------
const categories = [
  { label: "Good", max: 50 },
  { label: "Moderate", max: 100 },
  { label: "Unhealthy for Sensitive Groups", max: 150 },
  { label: "Unhealthy", max: 200 },
  { label: "Very Unhealthy", max: 300 },
  { label: "Hazardous", max: 500 },
];

// -------------------- Core AQI Function --------------------
function calculateSubIndex(conc: number, pollutant: Pollutant): number {
  const bps = breakpoints[pollutant];
  for (const bp of bps) {
    if (conc >= bp.concLow && conc <= bp.concHigh) {
      return Math.round(
        ((bp.indexHigh - bp.indexLow) / (bp.concHigh - bp.concLow)) *
          (conc - bp.concLow) +
          bp.indexLow
      );
    }
  }
  return -1; // out of range
}

// -------------------- Main Calculation --------------------
export function calculateAQI(opwData: OWMHour[]): AQIResult {
  const details: string[] = [];

  // --- PM2.5 (24h avg) ---
  const pm25Avg =
    opwData.reduce((sum, h) => sum + h.components.pm2_5, 0) / opwData.length;
  const pm25AQI = calculateSubIndex(pm25Avg, "pm2_5");
  details.push(`PM2.5 24-h avg = ${pm25Avg.toFixed(2)} µg/m³ → AQI ≈ ${pm25AQI}`);

  // --- PM10 (24h avg) ---
  const pm10Avg =
    opwData.reduce((sum, h) => sum + h.components.pm10, 0) / opwData.length;
  const pm10AQI = calculateSubIndex(pm10Avg, "pm10");
  details.push(`PM10 24-h avg = ${pm10Avg.toFixed(2)} µg/m³ → AQI ≈ ${pm10AQI}`);

  // --- O3 (8h max avg) ---
  const o3Arr = opwData.map((h) => ugm3ToPpm(h.components.o3, 48));
  let o3Max8h = 0;
  for (let i = 0; i <= o3Arr.length - 8; i++) {
    const avg = o3Arr.slice(i, i + 8).reduce((a, b) => a + b, 0) / 8;
    if (avg > o3Max8h) o3Max8h = avg;
  }
  const o3AQI = calculateSubIndex(o3Max8h, "o3");
  details.push(`O₃ 8-h max avg = ${o3Max8h.toFixed(4)} ppm → AQI ≈ ${o3AQI}`);

  // --- CO (8h max avg) ---
  const coArr = opwData.map((h) => ugm3ToPpm(h.components.co, 28));
  let coMax8h = 0;
  for (let i = 0; i <= coArr.length - 8; i++) {
    const avg = coArr.slice(i, i + 8).reduce((a, b) => a + b, 0) / 8;
    if (avg > coMax8h) coMax8h = avg;
  }
  const coAQI = calculateSubIndex(coMax8h, "co");
  details.push(`CO 8-h max avg = ${coMax8h.toFixed(3)} ppm → AQI ≈ ${coAQI}`);

  // --- NO2 (1h latest) ---
  const no2Ppb = ugm3ToPpb(opwData[opwData.length - 1].components.no2, 46);
  const no2AQI = calculateSubIndex(no2Ppb, "no2");
  details.push(`NO₂ last 1-h = ${no2Ppb.toFixed(2)} ppb → AQI ≈ ${no2AQI}`);

  // --- SO2 (1h latest) ---
  const so2Ppb = ugm3ToPpb(opwData[opwData.length - 1].components.so2, 64);
  const so2AQI = calculateSubIndex(so2Ppb, "so2");
  details.push(`SO₂ last 1-h = ${so2Ppb.toFixed(2)} ppb → AQI ≈ ${so2AQI}`);

  // -------------------- Final AQI --------------------
  const pollutantAQIs = {
    "PM2.5": pm25AQI,
    PM10: pm10AQI,
    O3: o3AQI,
    CO: coAQI,
    NO2: no2AQI,
    SO2: so2AQI,
  };

  const finalAQI = Math.max(...Object.values(pollutantAQIs));
  const primaryPollutant =
    Object.keys(pollutantAQIs).find(
      (p) => pollutantAQIs[p as keyof typeof pollutantAQIs] === finalAQI
    ) || "";

  const category =
    categories.find((c) => finalAQI <= c.max)?.label || "Beyond Index";

  return {
  finalAQI,
  category,
  primaryPollutant,
  details,
  pollutants: [
    { name: "PM2.5", unit: "µg/m³", avg: pm25Avg, aqi: pm25AQI },
    { name: "PM10", unit: "µg/m³", avg: pm10Avg, aqi: pm10AQI },
    { name: "O₃", unit: "ppm", max8h: o3Max8h, aqi: o3AQI },
    { name: "CO", unit: "ppm", max8h: coMax8h, aqi: coAQI },
    { name: "NO₂", unit: "ppb", last1h: no2Ppb, aqi: no2AQI },
    { name: "SO₂", unit: "ppb", last1h: so2Ppb, aqi: so2AQI },
  ]
};

}
