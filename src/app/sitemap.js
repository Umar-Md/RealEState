export const dynamic = "force-static";

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const paths = [
    "",
    "/about",
    "/solutions",
    "/solutions/realty",
    "/solutions/properties",
    "/solutions/wealth",
    "/solutions/infrastructure",
    "/insights",
    "/partner",
    "/contact",
    "/faqs",
    "/privacy-policy",
    "/terms",
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
