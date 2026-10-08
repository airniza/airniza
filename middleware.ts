import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  let lang = "en"; // Default language for all other routes

  // Country Based Language Mapping (English only, region-specific)
 if (pathname.startsWith("/air-quality/united-states")) lang = "en-US";
else if (pathname.startsWith("/air-quality/canada")) lang = "en-CA";
else if (pathname.startsWith("/air-quality/united-kingdom")) lang = "en-GB";
else if (pathname.startsWith("/air-quality/united-arab-emirates")) lang = "en-AE";
else if (pathname.startsWith("/air-quality/australia")) lang = "en-AU";
else if (pathname.startsWith("/air-quality/india")) lang = "en-IN";

  const res = NextResponse.next();
  res.headers.set("x-lang", lang);

  return res;
}

// Apply middleware only on country-based routes
export const config = {
  matcher: ["/air-quality/:country/:path*"],
};
