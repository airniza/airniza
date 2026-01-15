import { NextRequest, NextResponse } from "next/server";

// Environment variables
const SUPABASE_PROJECT_URL = process.env.SUPABASE_PROJECT_ID!;
const SUPABASE_BUCKET = process.env.SUPABASE_BUCKET!;

type Params = {
  path: string[];
};

export async function GET(
  req: NextRequest,
  context: { params: Promise<Params> } // ✅ params is a Promise of type Params
) {
  // Await the params promise
  const { path: pathParam } = await context.params;

  const path = Array.isArray(pathParam) ? pathParam : [String(pathParam)];

  const imagePath = path.join("/");
  const baseURL = `https://${SUPABASE_PROJECT_URL}.supabase.co/storage/v1/object/public/${SUPABASE_BUCKET}/`;

  // 1️⃣ Try Supabase image
  let res = await fetch(baseURL + imagePath);

  // 2️⃣ Fallback if not found
  if (!res.ok) {
    const fallbackURL = `/api/og?city=${encodeURIComponent(path.at(-2) ?? "")}&aqi=${encodeURIComponent(
      path.at(-1)?.replace(/^air-quality-/, "").replace(/\.webp$/, "") ?? ""
    )}`;

    res = await fetch(fallbackURL);

    if (!res.ok) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }
  }

  // 3️⃣ Return response with headers
  return new NextResponse(res.body, {
    headers: {
      "Content-Type": res.headers.get("content-type") ?? "image/webp",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
