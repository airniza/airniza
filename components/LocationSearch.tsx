"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { FaSearchLocation } from "react-icons/fa";

type AddressSuggestion = {
  formattedAddress: string;
  latitude: number;
  longitude: number;
  city?: string;
  state?: string;
  country?: string;
};

type CleanAddress = {
  city: string;
  state: string;
  country: string;
};

export default function LocationSearch() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<CleanAddress[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]);
        setQuery("");
        setLoading(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch suggestions
  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const timeoutId = setTimeout(async () => {
      try {
        const apikey = `prj_live_pk_667f61d53d1fc82be88f89e64ec01b78a539d1ed`;
        const res = await fetch(
          `https://api.radar.io/v1/search/autocomplete?query=${encodeURIComponent(
            query
          )}`,
          {
            headers: {
              Authorization: apikey || "",
            },
          }
        );
        const data = await res.json();

        const filtered: CleanAddress[] = (data.addresses || [])
          .map((addr: AddressSuggestion) => ({
            city: addr.city || "",
            state: addr.state || "",
            country: addr.country || "",
          }))
          .filter(
            (addr: CleanAddress) => addr.city || addr.state || addr.country
          )
          .filter((addr: CleanAddress) => /^[\x00-\x7F]*$/.test(addr.city)) // ASCII only
          .filter(
            (addr: CleanAddress, index: number, self: CleanAddress[]) =>
              index ===
              self.findIndex(
                (a) =>
                  a.city.toLowerCase() === addr.city.toLowerCase() &&
                  a.state.toLowerCase() === addr.state.toLowerCase() &&
                  a.country.toLowerCase() === addr.country.toLowerCase()
              )
          );

        setSuggestions(filtered);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  // ✅ Handle selection and build SEO-friendly URL
  const handleSelect = (address: CleanAddress) => {
    const slugify = (str: string) =>
      str.toLowerCase().trim().replace(/\s+/g, "-");

    let url = "";

    if (address.country) {
      url += `/${slugify(address.country)}`;
    }
    if (address.state) {
      url += `/${slugify(address.state)}`;
    }
    if (address.city) {
      url += `/${slugify(address.city)}-air-quality`;
    }

    if (url) {
      router.push(url);
    }

    setSuggestions([]);
    setQuery("");
    setLoading(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-md mx-auto">
      <FaSearchLocation className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18}/>
      <Input
        value={query}
        placeholder="Search Location.."
        onChange={(e) => setQuery(e.target.value)}
        className="pl-9"
      />

      {(loading || suggestions.length > 0) && (
        <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow z-50">
          {loading ? (
            <li className="p-2 text-gray-500 italic">Loading...</li>
          ) : (
            suggestions.map((s, i) => (
              <li
                key={i}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(s)}
              >
                <span className="font-medium">{s.city}</span>
                {s.state && (
                  <span className="text-muted-foreground">, {s.state}</span>
                )}
                {s.country && (
                  <span className="text-muted-foreground">, {s.country}</span>
                )}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
