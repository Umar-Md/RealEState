
import Link from "next/link";
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
    <section className="py-16 md:py-20 lg:py-24 bg-[#F8F6EF]">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-[#C6A15B] text-xs tracking-[0.25em] font-semibold mb-4">
              THE SSP ECOSYSTEM
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#163D32] leading-[1.12]">
              Everything Real Estate.
              <br />
              <span className="italic text-[#C6A15B]">
                One Partner.
              </span>
            </h2>
          </div>

          <p className="text-[#626262] text-sm md:text-base leading-7 max-w-md">
            From finding the right property to creating long-term
            investment opportunities, our four specialised divisions
            bring the entire real estate journey together.
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 gap-5 ${
          compact ? "" : "xl:grid-cols-4"
        }`}>
          {divisions.map((division) => (
            <Link
              href={division.href}
              key={division.number}
              className="group relative block overflow-hidden bg-[#163D32] min-h-[400px] md:min-h-[460px]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/${division.image}?auto=format&fit=crop&w=1000&q=85)`,
                }}
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D19] via-[#101D19]/35 to-black/10 transition-opacity duration-500 group-hover:from-[#101D19]/95" />

              {/* Card Content */}
              <div className="relative z-10 h-full min-h-[400px] md:min-h-[460px] flex flex-col justify-between p-6 md:p-7 text-white">

                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.2em] text-white/80">
                    DIVISION {division.number}
                  </span>

                  <span className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C6A15B] group-hover:border-[#C6A15B] group-hover:text-[#163D32]">
                    <ArrowUpRight size={19} />
                  </span>
                </div>

                <div>
                  <div className="w-10 h-[2px] bg-[#C6A15B] mb-5 transition-all duration-300 group-hover:w-16" />

                  <p className="text-[9px] md:text-[10px] tracking-[0.18em] text-[#E5C78E] font-semibold mb-3">
                    {division.tag}
                  </p>

                  <h3 className="font-serif text-3xl leading-tight mb-4">
                    {division.name}
                  </h3>

                  <p className="text-white/75 text-sm leading-6 max-w-xs">
                    {division.desc}
                  </p>

                  <div className="mt-7 pt-5 border-t border-white/25 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.16em] font-semibold">
                      EXPLORE DIVISION
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
