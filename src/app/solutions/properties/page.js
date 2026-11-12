import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";
const types = [
  [
    "Residential homes",
    "For families, professionals, end-users and NRIs. We review unsold stock, new launches, ticket size and construction stage.",
  ],
  [
    "Open plots & land",
    "We consider title chain, layout approvals, access, utilities and competing layouts. Due-diligence coordination is available.",
  ],
  [
    "Commercial offices",
    "We review grade, floorplate, vacancy, fit-out, rent and lease term for occupiers and owners.",
  ],
  [
    "Retail & high street",
    "We study footfall, frontage, catchment, parking and competing centres for retail site selection.",
  ],
];
export const metadata = {
  title: "Residential & Commercial Properties",
  description:
    "Homes, open plots, offices and retail spaces assessed for location, supply and demand.",
};
export default function Properties() {
  return (
    <>
      <PageHero
        eyebrow="SSP PROPERTIES"
        title="Residential & Commercial Properties"
        description="Homes, plots, offices and retail spaces in carefully assessed locations."
        image="photo-1600566753086-00f18fb6b3ea"
        cta="Schedule a Site Visit"
      />
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="PROPERTY SEGMENTS"
            title="Property decisions start with the right context"
          />
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {types.map(([t, d], i) => (
              <div className="p-6 sm:p-8 border border-ssp-green/15 border-t-2 border-t-ssp-gold" key={t}>
                <span className="text-xs font-bold text-ssp-green">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl mt-3">{t}</h3>
                <p className="text-sm text-gray-600 leading-7 mt-4">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 border border-ssp-green/15 bg-ssp-cream p-6 sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ssp-green">Featured project</p>
            <h3 className="mt-3 font-display text-2xl text-ssp-dark">{projectsData[0].title}</h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">{projectsData[0].subtitle}</p>
            <Link href="/projects" className="mt-5 inline-flex min-h-11 items-center text-sm font-bold text-ssp-green underline decoration-ssp-gold underline-offset-4 hover:decoration-ssp-green">Explore project details →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
