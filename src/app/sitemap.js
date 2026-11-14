import { insights } from '@/data/insights';

export const dynamic = "force-static";

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const paths = [
    "",
    "/about",
    "/about/vision-mission",
    "/about/strategic-approach",
    "/about/story-journey",
    "/about/leadership-management",
    "/solutions",
    "/solutions/realty",
    "/solutions/properties",
    "/solutions/wealth",
    "/solutions/infrastructure",
    "/insights",
    "/projects",
    "/projects/central-park",
    "/projects/nimz-zaheerabad",
    "/partner",
    "/contact",
    "/booking",
    "/faqs",
    "/privacy-policy",
    "/terms",
  ];
  return [...paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  })), ...insights.map((article) => ({
    url: `${base}/insights/${article.slug}`,
    lastModified: new Date(`${article.updated}T09:00:00+05:30`),
  }))];
}
