export function PlaceToSlug(place: string): string {
  return place
    .toLowerCase()
    .trim()
    .normalize("NFD")                // accents ko split karta hai
    .replace(/[\u0300-\u036f]/g, "") // accents hatao (é -> e)
    .replace(/[^a-z0-9]+/g, "-")     // letters/digits ke alawa sab ko hyphen
    .replace(/^-+|-+$/g, "")         // start/end ke extra hyphens hatao
    .replace(/-{2,}/g, "-");         // multiple hyphens ko single karo
}
