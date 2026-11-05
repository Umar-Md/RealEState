import Link from "next/link";
import ArchitecturalImage from "@/components/common/ArchitecturalImage";
import { ArrowUpRight, CheckCircle2, MoveUpRight } from "lucide-react";

import TrustBar from "@/components/common/TrustBar";
import DivisionCards from "@/components/common/DivisionCards";
import SectionHeading from "@/components/common/SectionHeading";
import EnquiryForm from "@/components/forms/EnquiryForm";

const strengths = [
  "Transparent dealings and verified property information",
  "Support from site visit to registration coordination",
  "Investment guidance aligned with customer goals",
  "Residential, commercial and infrastructure expertise",
];

const approach = [
  {
    number: "01",
    title: "Location",
    description:
      "Micro-market, accessibility, connectivity and surrounding developments.",
  },
  {
    number: "02",
    title: "Property Type",
    description: "Homes, plots, offices, retail and industrial opportunities.",
  },
  {
    number: "03",
    title: "Buyer Segment",
    description: "Understanding the people and businesses a property serves.",
  },
  {
    number: "04",
    title: "Market Supply",
    description: "Evaluating available properties and upcoming developments.",
  },
  {
    number: "05",
    title: "Transaction Evidence",
    description: "Considering verified transactions, not just asking prices.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#163D32] pt-20 text-white sm:min-h-[720px] lg:min-h-[800px] lg:pt-28">
        <ArchitecturalImage image="photo-1600607687939-ce8a6c25118c" priority />

        <div className="absolute inset-0 bg-gradient-to-r from-[#102A23]/95 via-[#102A23]/80 to-[#102A23]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102A23]/50 via-transparent to-black/10" />

        <div className="relative mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 md:py-28 lg:px-16">
          <div className="max-w-[850px]">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#C6A15B]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D9B976] sm:text-xs">
                Your Real Estate Growth Partner
              </p>
            </div>

            <h1 className="font-display text-[2.8rem] leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-[5.25rem]">
              Connecting Properties.
              <br />
              Creating Assets.
              <br />
              <span className="text-[#D5B16D]">Building Wealth.</span>
            </h1>

            <p className="mt-7 max-w-[610px] text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Swayam Sampada Properties connects buyers, sellers, developers,
              investors and businesses with residential, commercial, land and
              infrastructure-linked property opportunities across Hyderabad and
              Telangana.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-[54px] items-center justify-center gap-4 bg-[#C6A15B] px-6 text-sm font-semibold tracking-wide text-[#163D32] transition-all duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A15B]"
              >
                Book a Free Consultation
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#163D32] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#C6A15B] group-hover:text-[#163D32]">
                  <ArrowUpRight size={17} />
                </span>
              </Link>

              <Link
                href="/solutions"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 border border-white/45 px-7 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#163D32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A15B]"
              >
                Explore Our Services
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            <p className="mt-9 text-xs tracking-wide text-white/55">
              స్వయంగా సంపదను సృష్టించండి
            </p>
          </div>
        </div>

        {/* HERO DETAIL */}
        <div className="absolute bottom-10 right-8 hidden w-[230px] border-l border-[#C6A15B] bg-[#102A23]/45 px-5 py-4 backdrop-blur-sm xl:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D5B16D]">
            One Partner
          </p>
          <p className="mt-3 font-serif text-[22px] leading-snug text-white">
            Four focused divisions. One connected approach.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 h-[3px] w-28 bg-[#C6A15B] sm:w-40" />
      </section>

      {/* TRUST */}
      <TrustBar />

      {/* DIVISIONS */}
      <DivisionCards />

      {/* ABOUT */}
      <section className="overflow-hidden bg-[#F8F6EF] py-20 md:py-24 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-16">
          {/* IMAGE */}
          <div className="relative mx-2 mb-5 sm:mx-4 lg:mx-0">
            <div className="relative h-[360px] overflow-hidden bg-[#E9E5DA] sm:h-[460px] lg:h-[510px]">
              <ArchitecturalImage
                image="photo-1600607687920-4e2a09cf159d"
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
              />
            </div>

            <div className="absolute -bottom-3 right-0 w-[150px] bg-[#367966] p-4 text-white shadow-lg sm:w-[210px] sm:p-5">
              <span className="mb-3 block h-px w-7 bg-[#d3931b]" />
              <p className="font-serif text-xl leading-tight sm:text-2xl">
                One trusted partner
              </p>
              <p className="mt-2 text-[11px] leading-5 text-white/65">
                Across every step of your real estate journey.
              </p>
            </div>

            <div className="pointer-events-none absolute -left-4 -top-4 -z-0 h-24 w-24 border-l border-t border-[#C6A15B] sm:-left-6 sm:-top-6 sm:h-32 sm:w-32" />
          </div>

          {/* CONTENT */}
          <div className="lg:py-5">
            <SectionHeading
              eyebrow="About Swayam Sampada"
              title="Building Wealth Through Real Estate"
              description="Swayam Sampada Properties Pvt Ltd is a growth-focused real estate company. Our name speaks to self-built prosperity, and our integrated approach is designed to help customers make informed property decisions."
            />

            <div className="my-8 h-px w-full bg-[#163D32]/15" />

            <ul className="space-y-5">
              {strengths.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-sm leading-6 text-[#515852]"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#A7803E]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-3 border-b border-[#163D32]/30 pb-2 text-sm font-semibold text-[#163D32] transition-colors duration-300 hover:border-[#A7803E] hover:text-[#A7803E]"
            >
              Discover Swayam Sampada
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-white py-20 md:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-16">
          <div className="max-w-[720px]">
            <SectionHeading
              eyebrow="Our Approach"
              title="A clearer way to assess property opportunities"
              description="Every property decision is local. We combine on-ground market understanding with verified information to help customers compare options with confidence."
            />
          </div>

          {/* PROCESS GRID */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {approach.map((item, index) => (
              <div
                key={item.number}
                className={`group relative min-h-[220px] border border-[#163D32]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A15B]/70 hover:bg-[#F8F6EF] ${
                  index < 3 ? "lg:col-span-2" : "lg:col-span-2"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#A7803E]">
                    {item.number}
                  </span>
                  <MoveUpRight
                    size={17}
                    className="text-[#163D32]/35 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#A7803E]"
                  />
                </div>

                <div className="mb-6 mt-9 h-px w-9 bg-[#C6A15B] transition-all duration-300 group-hover:w-14" />

                <h3 className="font-serif text-xl leading-snug text-[#163D32]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#747A75]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-[#163D32] py-20 text-white md:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-20 -top-36 h-[380px] w-[380px] rounded-full border border-white/[0.08]" />
        <div className="pointer-events-none absolute -right-8 -top-24 h-[280px] w-[280px] rounded-full border border-white/[0.08]" />

        <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-16">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#C6A15B]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D5B16D] sm:text-xs">
                Let's Move Forward
              </p>
            </div>

            <h2 className="max-w-3xl font-display text-4xl leading-[1.12] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Ready to find the right opportunity?
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Talk to an SSP advisor about your property requirement and explore
              opportunities that align with your goals.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex min-h-[54px] items-center justify-center gap-4 bg-[#C6A15B] px-6 text-sm font-semibold text-[#163D32] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Talk to Our Team
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#163D32] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#C6A15B] group-hover:text-[#163D32]">
              <ArrowUpRight size={17} />
            </span>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 h-[3px] w-1/4 bg-[#C6A15B]" />
      </section>

      {/* CONTACT */}
      <section className="bg-[#F8F6EF] py-20 md:py-24 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="Contact"
              title="Let's Talk Property"
              description="Tell us what you are looking for. Share your requirement with our team and take the next step towards the right property opportunity."
            />

            <div className="mt-9 border-l-2 border-[#C6A15B] py-1 pl-5">
              <p className="font-serif text-xl text-[#163D32]">
                Your property journey starts here.
              </p>
              <p className="mt-2 text-sm leading-6 text-[#747A75]">
                Share your property requirements through the enquiry form.
              </p>
            </div>
          </div>

          <div className="border border-[#163D32]/10 bg-white p-5 shadow-[0_12px_45px_rgba(22,61,50,0.05)] sm:p-8 lg:p-10">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
