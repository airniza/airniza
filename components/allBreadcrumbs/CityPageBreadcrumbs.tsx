import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "../ui/breadcrumb";


export function CityPageBreadcrumbs({
  country,
  state,
  city,
}: {
  country: string;
  state: string;
  city: string;
}) {
  // For display only
  const formatName = (str: string) =>
    str
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  // For URLs
  const slugify = (str: string) =>
    str.toLowerCase().replace(/\s+/g, "-");

  const countrySlug = slugify(country);
  const stateSlug = slugify(state);
  
  const countryName = formatName(country);
  const stateName = formatName(state);
  const cityName = formatName(city.replace("-air-quality", "")); // Air Quality removed

  return (
    <Breadcrumb>
  <BreadcrumbList>

    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbSeparator />

    <BreadcrumbItem>
      <BreadcrumbLink href={`/${countrySlug}`} className="hover:underline">{countryName}</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbSeparator />

    <BreadcrumbItem>
      <BreadcrumbLink href={`/${countrySlug}/${stateSlug}`} className="hover:underline">{stateName}</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbSeparator />

    <BreadcrumbItem>
      <BreadcrumbPage className="font-bold">{cityName}</BreadcrumbPage>
    </BreadcrumbItem>



  </BreadcrumbList>
</Breadcrumb>
  );
}
