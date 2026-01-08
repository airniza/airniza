import sharp from "sharp";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs"; // Node runtime required for Sharp

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const country = searchParams.get("country");
  const state = searchParams.get("state");
  const city = searchParams.get("city");

  if (!country || !state || !city) {
    return NextResponse.json({ error: "Missing country, state, or city parameter" }, { status: 400 });
  }

  try {
    // 🔹 Step 1: Build WebP URL from /public/images
    const webpUrl = `https://airniza.com/images/${country}/${state}/${city}/air-quality-good.webp`;

    const webpRes = await fetch(webpUrl);

    if (!webpRes.ok) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    const webpBuffer = Buffer.from(await webpRes.arrayBuffer());

    // 🔹 Step 2: Convert WebP → PNG (no resize, original quality)
    const pngBuffer = await sharp(webpBuffer).png().toBuffer();

    // 🔹 Step 3: Return PNG with OG-safe headers
    return new NextResponse(new Uint8Array(pngBuffer), {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable", // 1 year cache
      },
    });
  } catch (err) {
    console.error("Node OG route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
