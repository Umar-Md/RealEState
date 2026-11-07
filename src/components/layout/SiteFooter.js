import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const groups = [
  [
    "Company",
    [
      ["About Us", "/about"],
      ["Vision & Mission", "/about#vision-mission"],
      ["Strategic Approach", "/about#strategic-approach"],
      ["Our Story & Journey", "/about#story-journey"],
      ["Leadership & Management", "/about#leadership-management"],
      ["What We Do", "/solutions"],
      ["Careers", "/partner"],
      ["Insights", "/insights"],
    ],
  ],
  [
    "Solutions",
    [
      ["SSP Realty", "/solutions/realty"],
      ["SSP Properties", "/solutions/properties"],
      ["SSP Wealth", "/solutions/wealth"],
      ["SSP Infrastructure", "/solutions/infrastructure"],
    ],
  ],
  [
    "Explore",
    [
      ["Contact", "/contact"],
      ["FAQs", "/faqs"],
      ["Privacy Policy", "/privacy-policy"],
      ["Terms", "/terms"],
    ],
  ],
];
export default function SiteFooter() {
  return (
    <footer className="relative border-t border-white/15 bg-[#102A23]/80 text-white shadow-[0_-8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 py-16 grid lg:grid-cols-[1.5fr_2fr] gap-12">
        <div>
          <Link href="/" aria-label="Swayam Sampada Properties Home" className="mb-6 inline-flex flex-col items-center gap-2">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logo-transparent.png`}
              alt="Swayam Sampada Properties — Home"
              width={128}
              height={136}
              unoptimized
              className="h-14 w-32 object-contain"
            />
            <span className="text-center text-[11px] font-semibold leading-tight tracking-[0.14em] text-white">
              SWAYAM SAMPADA
              <span className="mt-0.5 block text-[9px] tracking-[0.12em] text-[#D5B16D]">PROPERTIES PVT.LTD</span>
            </span>
          </Link>
          <p className="font-serif text-2xl leading-snug max-w-sm">
            Connecting Properties. Creating Assets. Building Wealth.
          </p>
          <p className="text-sm text-white/70 mt-4">
            Your Real Estate Growth Partner.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-ssp-gold mt-7 text-sm font-semibold"
          >
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {groups.map(([title, items]) => (
            <div key={title}>
              <h3 className="text-xs uppercase tracking-[.18em] text-ssp-gold mb-5">
                {title}
              </h3>
              {items.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-sm text-white/65 hover:text-white py-2"
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 py-6 grid md:grid-cols-2 gap-4 text-xs text-white/65">
          <p>
            © {new Date().getFullYear()} Swayam Sampada Properties Pvt Ltd. All
            rights reserved.
          </p>
          <p className="md:text-right">
            Prices, availability and approvals are subject to change. Verify all
            details before purchase.
          </p>
        </div>
      </div>
    </footer>
  );
}
