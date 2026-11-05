import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
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
    <html lang="en" className="scroll-smooth motion-reduce:scroll-auto">
      <body className="bg-white font-sans text-ssp-charcoal antialiased selection:bg-ssp-gold selection:text-ssp-dark [&_a]:focus-visible:outline-ssp-gold [&_button]:focus-visible:outline-ssp-gold">
        <a href="#main-content" className="sr-only fixed left-4 top-4 z-[100] bg-white px-5 py-3 text-ssp-dark focus:not-sr-only">Skip to content</a>
        <SiteHeader />
        <main id="main-content" className="min-w-0">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}