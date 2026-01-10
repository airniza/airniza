import sharp from "sharp";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

/* ---------------- HELPERS ---------------- */

// Slug ko "Los Angeles" style mein badalne ke liye
function humanize(str: string) {
  if (!str) return "";
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getAQIData(aqi: number) {
  if (aqi <= 50) return { color: "#2d9d43", text: "GOOD" };
  if (aqi <= 100) return { color: "#dcb92d", text: "MODERATE" };
  if (aqi <= 150) return { color: "#f29201", text: "POOR" };
  if (aqi <= 200) return { color: "#e30321", text: "UNHEALTHY" };
  if (aqi <= 300) return { color: "#e30321", text: "SEVERE" };
  return { color: "#8a24bd", text: "HAZARDOUS" };
}

/* ---------------- SVG GENERATORS ---------------- */

function generateMainBadge(aqi: number) {
  const { color, text } = getAQIData(aqi);
  return Buffer.from(`
<svg width="900" height="350" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur" />
    
    <feOffset in="blur" dx="0" dy="4" result="offsetBlur" />
    
    <feFlood flood-color="#00000" flood-opacity="2.5" result="colorBlur" />
    
    <feComposite in="colorBlur" in2="offsetBlur" operator="in" result="shadow" />
    
    <feMerge>
      <feMergeNode in="shadow"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
</defs>
  
  <rect x="250" y="115" width="600" height="160" rx="25" fill="${color}" filter="url(#shadow)" />

  <circle cx="255" cy="195" r="130" fill="${color}" stroke="#ffffff" stroke-width="5" filter="url(#shadow)" />
  
  <text x="255" y="155" text-anchor="middle" fill="white" font-size="52" font-weight="800" font-family="Arial, sans-serif" opacity="0.95">AQI</text>

  <text x="255" y="250" text-anchor="middle" fill="white" font-size="100" font-weight="900" font-family="Arial, sans-serif">${aqi}</text>

  <text x="450" y="220" fill="white" font-size="60" font-weight="900" font-family="Poppins, sans-serif" style="text-transform: uppercase; letter-spacing: -2px;">${text}</text>
</svg>
`);
}

function generateLocationFooter(citySlug: string, stateSlug: string) {
  const cityName = humanize(citySlug);
  const stateName = humanize(stateSlug);

  return Buffer.from(`
<svg width="1200" height="300" xmlns="http://www.w3.org/2000/svg">
  
  
  <text x="600" y="25" text-anchor="middle" fill="white" font-size="20" font-weight="700" font-family="Arial, sans-serif" style="letter-spacing: 4px; text-transform: uppercase;">
    AIR QUALITY INDEX • PM2.5
  </text>
  <rect x="400" y="45" width="400" height="1.5" fill="white" fill-opacity="0.3" />
  
  <text x="600" y="90" text-anchor="middle" fill="white" font-size="40" font-weight="800" font-family="Montserrat, sans-serif">
    ${cityName}, ${stateName}
  </text>
</svg>
`);
}

/* ---------------- GET HANDLER ---------------- */

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const country = searchParams.get("country") || "";
  const city = searchParams.get("city") || "";
  const state = searchParams.get("state") || "";

  const aqi = Number(searchParams.get("aqi") ?? "0");


  const dynamicImageUrl = `https://airniza.com/images/${country}/${state}/${city}/air-quality-good.webp`;

  try {
    const bgResponse = await fetch(dynamicImageUrl);
    
    if (!bgResponse.ok) {
      throw new Error(`Image not found at: ${dynamicImageUrl}`);
    }

    const bgArrayBuffer = await bgResponse.arrayBuffer();
    const bgBuffer = Buffer.from(bgArrayBuffer);

    // Dark overlay for visibility
   const { color } = getAQIData(aqi);
const overlay = Buffer.from(`
  <svg width="1200" height="630">
    <rect width="1200" height="630" fill="${color}" fill-opacity="0.3"/>
  </svg>
`);

    const finalImage = await sharp(bgBuffer)
      .resize(1200, 630)
      .composite([
        { input: overlay },
        // Badge at the center-left
        { input: generateMainBadge(aqi), left: 100, top: 40 },
        // Footer positioned lower down
        { input: generateLocationFooter(city, state), left: 0, top: 405 },
      ])
      .png()
      .toBuffer();

    return new Response(new Uint8Array(finalImage), {
      headers: { "Content-Type": "image/png", "Cache-Control": "no-store" },
    });
  } catch (err) {
    return new Response("Error generating image", { status: 500 });
  }
}