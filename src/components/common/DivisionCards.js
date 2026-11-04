import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
const divisions = [
  {
    name: "SSP Realty",
    tag: "SALES & MARKETING",
    desc: "Verified listings, smart marketing and end-to-end buying support.",
    href: "/solutions/realty",
    image: "photo-1600607687920-4e2a09cf159d",
  },
  {
    name: "SSP Properties",
    tag: "RESIDENTIAL & COMMERCIAL",
    desc: "Homes, plots, offices and retail spaces in carefully assessed locations.",
    href: "/solutions/properties",
    image: "photo-1600566753086-00f18fb6b3ea",
  },
  {
    name: "SSP Wealth",
    tag: "ASSET & INVESTMENT ADVISORY",
    desc: "Data-led guidance to understand markets and your real estate portfolio.",
    href: "/solutions/wealth",
    image: "photo-1486406146926-c627a92ad1ab",
  },
  {
    name: "SSP Infrastructure",
    tag: "DEVELOPMENT & PROJECTS",
    desc: "Industrial, logistics and project partnerships built around informed decisions.",
    href: "/solutions/infrastructure",
    image: "photo-1487958449943-2429e8be8625",
  },
];
export default function DivisionCards({ compact = false }) {
  return (
    <section className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="OUR STRATEGIC SERVICE FRAME"
          title="Everything Real Estate, One Partner"
          description="Four focused divisions working together to buy, sell, invest and build."
        />
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-12">
          {divisions.map((d, i) => (
            <Link
              href={d.href}
              key={d.name}
              className="group border border-gray-200 bg-white card-lift"
            >
              <div className="h-48 overflow-hidden">
                <div
                  className="h-full bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/${d.image}?auto=format&fit=crop&w=800&q=80)`,
                  }}
                />
              </div>
              <div className="p-6">
                <p className="text-[9px] tracking-[.18em] text-ssp-green font-bold">
                  {d.tag}
                </p>
                <h3 className="font-serif text-2xl text-ssp-dark mt-3">
                  {d.name}
                </h3>
                <p className="text-sm text-gray-600 leading-6 mt-3 min-h-[72px]">
                  {d.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-ssp-green mt-5">
                  Explore division <ArrowUpRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
