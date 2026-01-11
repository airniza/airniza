// app/api/og-bg/route.ts
import sharp from "sharp";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

/* ---------------- HELPERS ---------------- */

function getAQIData(aqi: number) {
  if (aqi <= 50) return { color: "#2d9d43" };
  if (aqi <= 100) return { color: "#dcb92d" };
  if (aqi <= 150) return { color: "#f29201" };
  if (aqi <= 200) return { color: "#e30321" };
  return { color: "#8a24bd" };
}

/* ---------------- SVG (NO TEXT) ---------------- */

function generateBadgeShape(aqi: number) {
  const { color } = getAQIData(aqi);

  return Buffer.from(`
<svg width="900" height="350" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="6"/>
      <feOffset dx="0" dy="4" result="off"/>
      <feMerge>
        <feMergeNode in="off"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect x="250" y="115" width="600" height="160" rx="25"
    fill="${color}" filter="url(#shadow)" />

  <circle cx="255" cy="195" r="130"
    fill="${color}" stroke="#ffffff" stroke-width="5"
    filter="url(#shadow)" />
</svg>
`);
}

/* ---------------- GET ---------------- */

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const country = searchParams.get("country") || "";
  const state = searchParams.get("state") || "";
  const city = searchParams.get("city") || "";
  const aqi = Number(searchParams.get("aqi") || 0);

  const bgUrl = `https://airniza.com/images/${country}/${state}/${city}/air-quality-good.webp`;

  try {
    const res = await fetch(bgUrl);
    if (!res.ok) throw new Error("BG not found");

    const bgBuffer = Buffer.from(await res.arrayBuffer());

    const overlay = Buffer.from(`
      <svg width="1200" height="630">
        <rect width="1200" height="630" fill="#000" fill-opacity="0.25"/>
      </svg>
    `);

    const image = await sharp(bgBuffer)
      .resize(1200, 630)
      .composite([
        { input: overlay },
        { input: generateBadgeShape(aqi), left: 100, top: 40 },
      ])
      .png()
      .toBuffer();

    return new Response(new Uint8Array(image), {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("OG BG Error", { status: 500 });
  }
}
