import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
const stats = [
  ["19,249", "Residential sales · H1 2026"],
  ["20,466", "Residential launches · H1 2026"],
  ["₹8,258*", "Average residential price / sq. ft. · H1 2026"],
  ["7.5M sq. ft.", "Office leasing · H1 2026"],
  ["4.21M sq. ft.", "Office leasing · Q3 2026"],
  ["10,312", "Residential launches · Q3 2026"],
];
export const metadata = {
  title: "Real Estate Market Insights 2026 | Swayam Sampada",
  description: "Market indicators for buyers, investors and businesses.",
};
export default function Insights() {
  return (
    <>
      <PageHero
        eyebrow="MARKET INSIGHTS"
        title="What the Numbers Say"
        description="Demand is active. Supply is competitive. Strategy decides who wins."
        image="photo-1486406146926-c627a92ad1ab"
        cta="Talk to an Advisor"
      />
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="REPORTED INDICATORS"
            title="Market context for better questions"
            description="The content document provides the following H1 and Q3 2026 figures. The city / region and original data source are still awaiting confirmation, so these figures must not be treated as independently verified."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {stats.map(([n, l]) => (
              <div key={l} className="bg-ssp-cream p-7">
                <p className="font-serif text-4xl text-ssp-green">{n}</p>
                <p className="text-sm text-gray-600 mt-3">{l}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 border border-gray-200 p-5 text-xs leading-6 text-gray-500">
            * The ₹ symbol and geographic coverage must be confirmed. The source
            document also reports warehousing leasing of 1.49 million sq. ft.
            for H1 2026. Market figures are for reference only, not a property
            valuation or investment advice. Confirm source and region before
            publication.
          </div>
        </div>
      </section>
    </>
  );
}
