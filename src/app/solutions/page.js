import PageHero from "@/components/common/PageHero";
import DivisionCards from "@/components/common/DivisionCards";
import SectionHeading from "@/components/common/SectionHeading";
import Link from "next/link";
const segments = [
  [
    "Residential homes",
    "End-users, families, professionals and NRIs",
    "Buyer representation and verified resale / new-project marketing",
  ],
  [
    "Open plots & land",
    "Plot buyers, landowners, developers and long-term investors",
    "Landowner mandates, plot marketing and due-diligence coordination",
  ],
  [
    "Commercial offices",
    "GCCs, IT/BFSI firms and professional services",
    "Tenant / landlord representation and leasing support",
  ],
  [
    "Retail & high street",
    "Retailers, F&B, service businesses and franchise operators",
    "Site selection and leasing mandates",
  ],
  [
    "Industrial & logistics",
    "Manufacturers, 3PL providers, e-commerce and distributors",
    "Industrial land and warehouse advisory",
  ],
  [
    "Project partnerships",
    "Developers, landowners and institutional partners",
    "Project marketing, channel networks and strategic coordination",
  ],
];
export const metadata = {
  title: "Real Estate Solutions",
  description:
    "Residential, plots, commercial, industrial and investment advisory solutions from SSP.",
};
export default function Solutions() {
  return (
    <>
      <PageHero
        title="Real Estate Solutions Built Around Your Goals"
        description="Buying a home, investing in land, leasing space or building a project — SSP brings sales, advisory and development together."
        image="photo-1486406146926-c627a92ad1ab"
      />
      <DivisionCards />
      <section className="bg-ssp-cream py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="SOLUTIONS BY SEGMENT"
            title="Find the support that fits your requirement"
            description="Explore the audiences SSP serves and the services available across each segment."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {segments.map(([title, audience, service], i) => (
              <article
                key={title}
                className="bg-white p-7 border border-ssp-green/15 border-t-2 border-t-ssp-gold"
              >
                <span className="text-xs text-ssp-green font-bold">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl mt-3">{title}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-5">
                  Who is looking
                </p>
                <p className="text-sm text-gray-600 mt-2 leading-6">
                  {audience}
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-5">
                  SSP opportunity
                </p>
                <p className="text-sm text-gray-700 mt-2 leading-6">
                  {service}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title="A considered process from brief to closing"
          />
          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              [
                "01",
                "Understand your goal",
                "We listen to your needs, budget and timeline.",
              ],
              [
                "02",
                "Assess the micro-market",
                "We apply the five-point opportunity check.",
              ],
              [
                "03",
                "Shortlist and verify",
                "We present options and coordinate due diligence.",
              ],
              [
                "04",
                "Close and support",
                "We assist with negotiation, documentation and handover.",
              ],
            ].map(([n, t, d]) => (
              <div key={n} className="border-t border-ssp-gold pt-5">
                <b className="text-ssp-green text-sm">{n}</b>
                <h3 className="font-serif text-xl mt-3">{t}</h3>
                <p className="text-sm text-gray-500 leading-6 mt-2">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-8">
            The process description is subject to final client confirmation.
          </p>
        </div>
      </section>
    </>
  );
}
