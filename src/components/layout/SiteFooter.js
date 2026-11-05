import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const groups = [
  [
    "Company",
    [
      ["About Us", "/about"],
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
    <footer className="bg-ssp-dark text-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 py-16 grid lg:grid-cols-[1.5fr_2fr] gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-12 bg-ssp-gold text-ssp-dark flex items-center justify-center font-serif text-xl">
              SSP
            </span>
            <div>
              <b className="tracking-wide">SWAYAM SAMPADA</b>
              <small className="block text-[10px] tracking-[.2em] text-white/70">
                PROPERTIES PVT LTD
              </small>
            </div>
          </div>
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
