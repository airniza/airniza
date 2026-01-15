"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, Suspense } from "react";

function SearchComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("query");

  // Slugify helper
  const slugify = (text: string): string => {
    return text
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  useEffect(() => {
    if (query && query.trim() !== "") {
      const slug = slugify(query);
      router.replace(`/current-air-quality/${slug}`);
    }
  }, [query, router]);

  if (!query || query.trim() === "") {
    return (
      <div style={{ padding: "20px", fontSize: "18px" }}>
        <p className="text-3xl p-5 text-center">
          ❌ Please enter a valid location to check air quality.
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontSize: "18px" }}>
      <p className="text-center mt-6 text-3xl p-5">
        Searching for <strong>{query}</strong>...
      </p>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-5 text-center">Loading...</div>}>
      <SearchComponent />
    </Suspense>
  );
}
