import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import TrustBar from "@/components/common/TrustBar";
import DivisionCards from "@/components/common/DivisionCards";
import SectionHeading from "@/components/common/SectionHeading";
import EnquiryForm from "@/components/forms/EnquiryForm";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[600px] md:min-h-[680px] flex items-center bg-ssp-dark text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ssp-dark/95 via-ssp-dark/75 to-ssp-dark/25" />
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 relative py-20 md:py-24">
          <p className="text-ssp-gold tracking-[.25em] text-[11px] font-bold mb-6">
            YOUR REAL ESTATE GROWTH PARTNER
          </p>
          <h1 className="font-display tracking-[-0.035em] leading-[1.08] text-[2.65rem] sm:text-6xl lg:text-7xl max-w-3xl">
            Connecting Properties.
            <br />
            Creating Assets.
            <br />
            <span className="text-ssp-gold">Building Wealth.</span>
          </h1>
          <p className="text-white/75 max-w-xl leading-7 mt-7">
            From property sales to investment advisory and large-scale
            development, Swayam Sampada Properties brings real estate solutions
            together under one trusted roof.
          </p>
          <div className="flex flex-wrap gap-3 mt-9 rounded-sm">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 bg-ssp-gold px-6 py-3.5 text-sm font-semibold text-ssp-dark transition-colors hover:bg-ssp-dark hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ssp-gold">
              Book a Free Consultation <ArrowUpRight size={16} />
            </Link>
            <Link href="/solutions" className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/50 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ssp-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ssp-gold">
              Explore Services
            </Link>
          </div>
          <p className="text-white/55 text-xs mt-10 tracking-wide">
            స్వయంగా సంపదను సృష్టించండి
          </p>
        </div>
        <div className="hidden xl:block absolute right-[6%] bottom-12 border border-white/30 bg-black/15 backdrop-blur-sm p-5 max-w-[230px]">
          <p className="text-ssp-gold text-xs tracking-widest">ONE PARTNER</p>
          <p className="font-serif text-xl mt-2">
            Four focused divisions. A connected approach.
          </p>
        </div>
      </section>
      <TrustBar />
      <DivisionCards />
      <section className="bg-ssp-cream py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div
              className="h-[420px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85)",
              }}
            />
            <div className="absolute -bottom-5 -right-2 md:right-[-22px] bg-ssp-green text-white p-7 max-w-[230px]">
              <p className="font-serif text-3xl">One trusted partner</p>
              <p className="text-xs text-white/65 mt-2">
                Across the real estate journey.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="ABOUT SWAYAM SAMPADA"
              title="Building Wealth Through Real Estate"
              description="Swayam Sampada Properties Pvt Ltd is a growth-focused real estate company. Our name speaks to self-built prosperity, and our integrated approach is designed to help customers make informed property decisions."
            />
            <ul className="space-y-4 mt-8">
              {[
                "Transparent dealings and verified property information",
                "Support from site visit to registration coordination",
                "Investment guidance aligned with customer goals",
                "Residential, commercial and infrastructure expertise",
              ].map((x) => (
                <li key={x} className="flex gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="text-ssp-green shrink-0" size={18} />
                  {x}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-ssp-green font-bold text-sm mt-8"
            >
              Discover SSP <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="OUR APPROACH"
            title="A clearer way to assess property opportunities"
            description="Every property decision is local. We combine on-ground market understanding with verified information to help customers compare options with confidence."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
            {[
              ["01", "Location", "Micro-market, access and surroundings"],
              [
                "02",
                "Product type",
                "Home, plot, office, retail or industrial",
              ],
              ["03", "Buyer segment", "Who the property is really for"],
              [
                "04",
                "Competing supply",
                "What is available or launching nearby",
              ],
              [
                "05",
                "Transaction evidence",
                "Verified transactions, not only asking prices",
              ],
            ].map(([n, t, d]) => (
              <div key={n} className="border-t-2 border-ssp-gold pt-5">
                <span className="text-ssp-green text-xs font-bold">{n}</span>
                <h3 className="font-serif text-xl mt-3">{t}</h3>
                <p className="text-sm text-gray-500 leading-6 mt-2">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ssp-dark text-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ssp-gold mb-4">LET'S MOVE FORWARD</p>
            <h2 className="font-display tracking-[-0.035em] leading-[1.08] text-4xl md:text-5xl">
              Ready to find the right opportunity?
            </h2>
            <p className="text-white/65 mt-4">
              Talk to an SSP advisor about your property requirement.
            </p>
          </div>
          <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 bg-ssp-gold px-6 py-3.5 text-sm font-semibold text-ssp-dark transition-colors hover:bg-ssp-dark hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ssp-gold">
            Talk to our team <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="py-16 md:py-20 lg:py-24 bg-ssp-cream">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[.8fr_1.2fr] gap-12">
          <div>
            <SectionHeading
              eyebrow="CONTACT"
              title="Let's Talk Property"
              description="Share your requirement and the SSP team can follow up once the enquiry channel is configured."
            />
            <p className="text-xs text-gray-500 mt-6">
              Company contact details are awaiting client confirmation.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
