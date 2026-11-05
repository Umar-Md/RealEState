import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import EnquiryForm from "@/components/forms/EnquiryForm";
export const metadata = {
  title: "Partner with SSP | Build a Real Estate Career",
  description:
    "Explore a realtor partner opportunity with Swayam Sampada Properties.",
};
export default function Partner() {
  return (
    <>
      <PageHero
        eyebrow="CAREERS & PARTNERSHIPS"
        title="Build Your Real Estate Career with SSP"
        description="Grow with a four-pillar service brand and learn sales, leasing and advisory."
        image="photo-1521737711867-e3b97375f902"
        cta="Partner with SSP" ctaHref="#enquiry"
      />
      <section id="enquiry" className="scroll-mt-36 py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-14">
          <div>
            <SectionHeading
              eyebrow="PARTNER WITH SSP"
              title="Build knowledge. Earn trust. Grow your network."
              description="Aspiring realtors can explore residential, plots, commercial and industrial segments, supported by a brand that connects properties, creates assets and builds wealth."
            />
            <h3 className="font-serif text-2xl mt-10">
              What you can learn and do
            </h3>
            <ul className="list-disc pl-5 mt-4 space-y-3 text-sm text-gray-600">
              <li>Residential and plot sales and marketing</li>
              <li>Commercial leasing and tenant or landlord representation</li>
              <li>Market reading using demand and supply indicators</li>
              <li>Client advisory and due-diligence coordination</li>
            </ul>
            <p className="text-xs text-gray-500 mt-8">
              Training duration, eligibility, commission structure and
              application steps require client confirmation. No earning figures
              are advertised.
            </p>
          </div>
          <EnquiryForm partner />
        </div>
      </section>
    </>
  );
}
