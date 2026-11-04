import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    default: "Swayam Sampada Properties | Your Real Estate Growth Partner",
    template: "%s | Swayam Sampada Properties",
  },
  description:
    "Connecting properties, creating assets and building wealth. Explore real estate sales, residential and commercial properties, advisory and infrastructure solutions from SSP.",
  openGraph: {
    title: "Swayam Sampada Properties",
    description: "Your Real Estate Growth Partner",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
