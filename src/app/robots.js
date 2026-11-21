
export const dynamic = "force-static";

export default function robots() {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://sspwealth.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
