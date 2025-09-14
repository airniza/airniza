import Link from "next/link";
import { locations } from "./Locations";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type PlacesListProps = {
  country: string;       // e.g. "United States"
  currentState: string;  // e.g. "California"
  currentPlace: string;  // e.g. "Los Angeles"
};

// Convert to slug (spaces -> dash, lowercase)
const toSlug = (str: string) =>
  str.toLowerCase().trim().replace(/\s+/g, "-");

// Capitalize from slug
const formatSlug = (slug: string) =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export function RelatedCities({ country, currentState, currentPlace }: PlacesListProps) {
  const normalizedCountry = toSlug(country);
  const normalizedState = toSlug(currentState);
  const normalizedPlace = toSlug(currentPlace);

  // Find country object
  const countryData = locations.find((c) => c.country === normalizedCountry);
  if (!countryData) return null;

  // Find state object
  const stateData = countryData.states.find((s) => s.state === normalizedState);
  if (!stateData) return null;

  // Exclude current city
  const filtered = stateData.cities.filter((city) => city !== normalizedPlace);

  // Pick max 10 random cities
  const random10 = [...filtered].sort(() => Math.random() - 0.5).slice(0, 10);

  if (random10.length === 0) return null;

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h3 className="mb-4 text-2xl font-bold">
        Explore Air Quality in Popular {formatSlug(normalizedState)} Cities
      </h3>

      <div className="flex flex-wrap gap-3">
        {random10.map((place) => (
          <Link
            key={place}
            href={`/${normalizedCountry}/${normalizedState}/${place}-air-quality`}
          >
            <Badge
              variant="secondary"
              className="cursor-pointer text-sm px-4 py-2 text-primary"
            >
              {formatSlug(place)}
            </Badge>
          </Link>
        ))}

        <Link href={`/${normalizedCountry}/${normalizedState}`} >
  <Button className="gap-x-3 px-5 py-3 min-h-[48px] min-w-[48px]">
    See All
  </Button>
</Link>

      </div>
    </div>
  );
}
