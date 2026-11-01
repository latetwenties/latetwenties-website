// Google listing names are often keyword-stuffed ("Lewis Build – Luxury Home
// Builders Auckland"), but people and AI answers use the brand part.
export function brandName(name: string): string {
  return name.split(/\s[–—\-|:]\s|\s*[|(,]/)[0].trim() || name;
}
