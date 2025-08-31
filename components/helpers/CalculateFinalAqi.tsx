// aqiUtils.ts

// ---------- Types ----------
export type Pollutant = "pm2_5" | "pm10" | "no2" | "so2" | "o3" | "co";
export type Unit = "ug/m3" | "mg/m3" | "ppm" | "ppb";

// ---------- EPA AQI Breakpoints ----------
// Units:
// - PM2.5, PM10 → µg/m³
// - NO2, SO2, O3, CO → ppm
const breakpoints: Record<
  Pollutant,
  { concLow: number; concHigh: number; indexLow: number; indexHigh: number }[]
> = {
  pm2_5: [
    { concLow: 0.0, concHigh: 12.0, indexLow: 0, indexHigh: 50 },
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
  no2: [
    { concLow: 0.000, concHigh: 0.053, indexLow: 0, indexHigh: 50 },
    { concLow: 0.054, concHigh: 0.100, indexLow: 51, indexHigh: 100 },
    { concLow: 0.101, concHigh: 0.360, indexLow: 101, indexHigh: 150 },
    { concLow: 0.361, concHigh: 0.649, indexLow: 151, indexHigh: 200 },
    { concLow: 0.650, concHigh: 1.249, indexLow: 201, indexHigh: 300 },
    { concLow: 1.250, concHigh: 1.649, indexLow: 301, indexHigh: 400 },
    { concLow: 1.650, concHigh: 2.049, indexLow: 401, indexHigh: 500 },
  ],
  so2: [
    { concLow: 0.000, concHigh: 0.035, indexLow: 0, indexHigh: 50 },
    { concLow: 0.036, concHigh: 0.075, indexLow: 51, indexHigh: 100 },
    { concLow: 0.076, concHigh: 0.185, indexLow: 101, indexHigh: 150 },
    { concLow: 0.186, concHigh: 0.304, indexLow: 151, indexHigh: 200 },
    { concLow: 0.305, concHigh: 0.604, indexLow: 201, indexHigh: 300 },
    { concLow: 0.605, concHigh: 0.804, indexLow: 301, indexHigh: 400 },
    { concLow: 0.805, concHigh: 1.004, indexLow: 401, indexHigh: 500 },
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
};

// ---------- Constants ----------
const MW: Record<Pollutant, number> = {
  pm2_5: 0,
  pm10: 0,
  no2: 46,
  so2: 64,
  o3: 48,
  co: 28,
};

// EPA truncation rules (how many decimals to KEEP, by pollutant, in breakpoint units)
const TRUNC_DECIMALS: Record<Pollutant, number> = {
  pm2_5: 1, // µg/m³ → 1 decimal
  pm10: 0,  // µg/m³ → integer
  o3: 3,    // ppm → 3 decimals
  co: 1,    // ppm → 1 decimal
  no2: 3,   // ppm → 3 decimals
  so2: 3,   // ppm → 3 decimals
};

// ---------- Helpers ----------
function truncateTo(x: number, decimals: number): number {
  const f = Math.pow(10, decimals);
  // Truncate (not round)
  return Math.trunc(x * f) / f;
}

// Convert an input value to the **breakpoint units** for that pollutant
function toBreakpointUnits(
  pollutant: Pollutant,
  value: number,
  unit: Unit = "ug/m3"
): number {
  if (pollutant === "pm2_5" || pollutant === "pm10") {
    // PM breakpoints are µg/m³
    if (unit === "ug/m3") return value;
    if (unit === "mg/m3") return value * 1000;
    // If someone passes ppm/ppb for PM, it's invalid; ignore by returning NaN
    return Number.NaN;
  }

  // Gases breakpoints are in ppm
  if (unit === "ppm") return value;
  if (unit === "ppb") return value / 1000;

  // ug/m3 → ppm   IMPORTANT: divide by 1000 (µg → mg)
  if (unit === "ug/m3") return (value * 24.45) / (MW[pollutant] * 1000);

  // mg/m3 → ppm
  if (unit === "mg/m3") return (value * 24.45) / MW[pollutant];

  return Number.NaN;
}

// ---------- AQI Core ----------
export function calculateAQIForPollutant(
  pollutant: Pollutant,
  rawValue: number,
  unit: Unit = "ug/m3"
): number {
  // Normalize to breakpoint units
  const concInBreakpointUnits = toBreakpointUnits(pollutant, rawValue, unit);

  if (!isFinite(concInBreakpointUnits)) return Number.NaN;

  // Apply EPA truncation (in breakpoint units)
  const C = truncateTo(concInBreakpointUnits, TRUNC_DECIMALS[pollutant]);

  const ranges = breakpoints[pollutant];
  if (!ranges?.length) return Number.NaN;

  // Below first range
  if (C < ranges[0].concLow) return 0;

  // Find matching range
  for (const r of ranges) {
    if (C >= r.concLow && C <= r.concHigh) {
      const { concLow: Clow, concHigh: Chigh, indexLow: Ilow, indexHigh: Ihigh } = r;
      const I = ((Ihigh - Ilow) / (Chigh - Clow)) * (C - Clow) + Ilow;
      return Math.round(I);
    }
  }

  // Above highest range → cap at 500 (standard AQI ceiling)
  return 500;
}

// Overall AQI (max of available pollutant AQIs). Returns number only.
export function calculateOverallAQI(
  pollutants: Partial<Record<Pollutant, number>>,
  units: Partial<Record<Pollutant, Unit>> = {}
): number {
  let maxAQI = 0;
  let found = false;

  (Object.keys(pollutants) as Pollutant[]).forEach((p) => {
    const val = pollutants[p];
    if (typeof val !== "number") return;
    const unit = units[p] ?? "ug/m3";
    const aqi = calculateAQIForPollutant(p, val, unit);
    if (isFinite(aqi)) {
      found = true;
      if (aqi > maxAQI) maxAQI = aqi;
    }
  });

  return found ? maxAQI : 0;
}
