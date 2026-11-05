import Link from "next/link";
import ArchitecturalImage from "./ArchitecturalImage";
import { ArrowUpRight } from "lucide-react";

const divisions = [
  {
    number: "01",
    name: "SSP Realty",
    tag: "SALES & MARKETING",
    desc: "Discover verified properties, strategic marketing and seamless buying and selling experiences.",
    href: "/solutions/realty",
    image: "photo-1600607687920-4e2a09cf159d",
  },
  {
    number: "02",
    name: "SSP Properties",
    tag: "RESIDENTIAL & COMMERCIAL",
    desc: "Explore thoughtfully selected homes, plots, offices and commercial spaces.",
    href: "/solutions/properties",
    image: "photo-1600566753086-00f18fb6b3ea",
  },
  {
    number: "03",
    name: "SSP Wealth",
    tag: "ASSET & INVESTMENT ADVISORY",
    desc: "Make informed property investment decisions through market insights and strategic guidance.",
    href: "/solutions/wealth",
    image: "photo-1486406146926-c627a92ad1ab",
  },
  {
    number: "04",
    name: "SSP Infrastructure",
    tag: "DEVELOPMENT & PROJECTS",
    desc: "Build opportunities through industrial, logistics and infrastructure development partnerships.",
    href: "/solutions/infrastructure",
    image: "photo-1487958449943-2429e8be8625",
  },
];

export default function DivisionCards({ compact = false }) {
  return (
    <section className="relative overflow-hidden bg-[#F8F6EF] py-16 md:py-20 lg:py-24">
      {/* Subtle Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#C6A15B]/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#163D32]/[0.05] blur-[100px]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* SECTION INTRO */}

        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#C6A15B]" />
              <p className="text-[10px] font-bold tracking-[0.28em] text-[#A98243]">
                THE SSP ECOSYSTEM
              </p>
            </div>

            <h2 className="font-serif text-4xl leading-[1.12] text-[#163D32] sm:text-5xl lg:text-6xl">
              Everything Real Estate.
              <br />
              <span className="italic text-[#C6A15B]">One Partner.</span>
            </h2>
          </div>

          <div className="max-w-md lg:pb-2">
            <p className="text-sm leading-7 text-[#626262] md:text-base">
              From finding the right property to creating long-term investment
              opportunities, our four specialised divisions bring the entire
              real estate journey together.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C6A15B]" />
              <span className="text-[10px] font-semibold tracking-[0.18em] text-[#163D32]/60">
                FOUR SPECIALISED DIVISIONS
              </span>
            </div>
          </div>
        </div>

        {/* DIVISION CARDS */}

        <div
          className={`grid gap-5 sm:grid-cols-2 ${
            compact ? "" : "xl:grid-cols-4"
          }`}
        >
          {divisions.map((division) => (
            <Link
              href={division.href}
              key={division.number}
              className="group relative isolate block min-h-[420px] overflow-hidden rounded-sm border border-[#163D32]/10 bg-[#163D32] shadow-[0_10px_35px_rgba(22,61,50,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(22,61,50,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A15B] md:min-h-[470px]"
            >
              {/* BACKGROUND IMAGE */}

              <ArchitecturalImage
                image={division.image}
                sizes={
                  compact
                    ? "(min-width: 640px) 50vw, 100vw"
                    : "(min-width: 1280px) 280px, (min-width: 640px) 50vw, 100vw"
                }
                className="transition-transform duration-1000 ease-out motion-safe:group-hover:scale-110"
              />

              {/* CINEMATIC OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-[#101D19]/10 to-[#101D19]/95 transition-all duration-500 group-hover:from-black/35 group-hover:via-[#101D19]/20 group-hover:to-[#101D19]/90" />

              {/* TOP CONTENT */}

              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5 md:p-6">
                <span className="rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-[9px] font-medium tracking-[0.2em] text-white/90 backdrop-blur-md">
                  DIVISION {division.number}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:border-[#C6A15B] group-hover:bg-[#C6A15B] group-hover:text-[#163D32]">
                  <ArrowUpRight size={19} strokeWidth={1.7} />
                </span>
              </div>

              {/* BOTTOM GLASS CONTENT */}

              <div className="absolute inset-x-3 bottom-3 z-10 rounded-sm border border-white/20 bg-[#10251F]/45 p-5 text-white shadow-lg backdrop-blur-md transition-all duration-500 group-hover:border-[#C6A15B]/50 group-hover:bg-[#10251F]/65 md:inset-x-4 md:bottom-4 md:p-6">
                {/* GOLD ACCENT */}

                <div className="mb-4 flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-[#C6A15B] transition-all duration-500 group-hover:w-14" />
                  <span className="text-[9px] font-semibold tracking-[0.2em] text-[#E5C78E]">
                    {division.tag}
                  </span>
                </div>

                {/* TITLE */}

                <h3 className="mb-3 font-serif text-2xl leading-tight text-white md:text-3xl">
                  {division.name}
                </h3>

                {/* DESCRIPTION */}

                <p className="max-w-sm text-[12px] leading-6 text-white/75 md:text-[13px]">
                  {division.desc}
                </p>

                {/* CARD FOOTER */}

                <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4">
                  <span className="text-[9px] font-semibold tracking-[0.2em] text-white/90">
                    EXPLORE DIVISION
                  </span>

                  <span className="flex items-center gap-2 text-[#E5C78E] transition-all duration-300 group-hover:gap-3">
                    <span className="text-[10px] font-medium tracking-wider">
                      DISCOVER
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
