import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // Save to DB (Mongo / Postgres later)
  return NextResponse.json({ success: true });
}
