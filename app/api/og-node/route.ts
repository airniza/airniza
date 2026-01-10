import { NextRequest } from "next/server";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

export const runtime = "nodejs";

/* ---------------- HELPERS ---------------- */
function humanize(str: string) {
  if (!str) return "";
  return str
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
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

/* ---------------- GET HANDLER ---------------- */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const country = searchParams.get("country") || "";
  const state = searchParams.get("state") || "";
  const city = searchParams.get("city") || "";
  const aqi = Number(searchParams.get("aqi") ?? "0");

  const cityName = humanize(city);
  const stateName = humanize(state);
  const { color, text } = getAQIData(aqi);

  const bgImage = `https://airniza.com/images/${country}/${state}/${city}/air-quality-good.webp`;

  // Launch Vercel-safe Puppeteer browser
  const browser = await puppeteer.launch({
  args: chromium.args,
  executablePath: await chromium.executablePath(),
  headless: true,   // <- fix yahi
});

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });

    // HTML + Montserrat font + AQI Badge + Footer
    await page.setContent(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Montserrat', sans-serif; }
    body {
      width: 1200px;
      height: 630px;
      background:
        linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)),
        url('${bgImage}');
      background-size: cover;
      background-position: center;
      color: #fff;
      position: relative;
    }
    .badge {
      position: absolute;
      left: 100px;
      top: 40px;
      display: flex;
      align-items: center;
    }
    .circle {
      width: 260px;
      height: 260px;
      border-radius: 50%;
      background: ${color};
      border: 5px solid #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 0 12px 30px rgba(0,0,0,0.45);
    }
    .circle span:first-child { font-size: 52px; font-weight: 800; opacity: 0.95; }
    .circle span:last-child { font-size: 100px; font-weight: 900; line-height: 1; }
    .rect {
      margin-left: -10px;
      height: 160px;
      width: 600px;
      background: ${color};
      border-radius: 25px;
      display: flex;
      align-items: center;
      padding-left: 80px;
      font-size: 60px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -2px;
      box-shadow: 0 12px 30px rgba(0,0,0,0.45);
    }
    .footer {
      position: absolute;
      bottom: 60px;
      width: 100%;
      text-align: center;
    }
    .footer .meta { font-size: 20px; letter-spacing: 4px; opacity: 0.9; }
    .footer .line { width: 400px; height: 2px; background: rgba(255,255,255,0.35); margin: 14px auto; }
    .footer .location { font-size: 40px; font-weight: 800; }
  </style>
</head>
<body>
  <div class="badge">
    <div class="circle">
      <span>AQI</span>
      <span>${aqi}</span>
    </div>
    <div class="rect">${text}</div>
  </div>
  <div class="footer">
    <div class="meta">AIR QUALITY INDEX • PM2.5</div>
    <div class="line"></div>
    <div class="location">${cityName}, ${stateName}</div>
  </div>
</body>
</html>
    `);

    // Wait for all fonts to load
    await page.evaluateHandle("document.fonts.ready");

    // Take screenshot
    const buffer = await page.screenshot({ type: "png" });
    await browser.close();

    // Return PNG image (TS-friendly)
    return new Response(Buffer.from(buffer), {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    await browser.close();
    return new Response("OG generation failed", { status: 500 });
  }
}
