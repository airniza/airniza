import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "../ui/breadcrumb";


export function StateBreadcrumbs({ country, state }: { country: string; state: string }) {
  const formatName = (str: string) =>
    str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const slugify = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

  const countrySlug = slugify(country);
  

  const countryName = formatName(country);
  const stateName = formatName(state);

  return (
    <Breadcrumb>
      <BreadcrumbList>

        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink href={`/${countrySlug}`} className="hover:underline">
            {countryName}
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage className="font-bold">{stateName}</BreadcrumbPage>
        </BreadcrumbItem>

      </BreadcrumbList>
    </Breadcrumb>
  );
}
