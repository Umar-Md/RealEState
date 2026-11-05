import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
const items = [
  "Buyer representation — shortlist, compare and negotiate on your behalf",
  "Verified resale and new-project marketing — listings checked before they are shown",
  "Landowner mandates and plot marketing — structured marketing for land and layouts",
  "Developer and project marketing — channel networks and coordinated sales support",
];
export const metadata = {
  title: "SSP Realty – Property Sales & Marketing",
  description:
    "Verified property listings, buyer representation and smart marketing with SSP Realty.",
};
export default function Realty() {
  return (
    <>
      <PageHero
        eyebrow="SSP REALTY"
        title="Property Sales & Marketing"
        description="Verified listings, smart marketing and end-to-end buying support."
        image="photo-1600607687939-ce8a6c25118c"
        cta="Talk to an Advisor"
      />
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-14">
          <SectionHeading
            eyebrow="OVERVIEW"
            title="Connecting the right property with the right person"
            description="SSP Realty is the sales and marketing arm of Swayam Sampada Properties. We represent buyers, sellers, landowners and developers with a focus on verified information."
          />
          <div className="space-y-5">
            {items.map((x) => (
              <div
                key={x}
                className="border-b pb-5 text-sm leading-7 text-gray-700"
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ssp-cream py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="WHY SSP REALTY"
            title="Local knowledge. Verification before recommendation."
            description="Our approach is segment- and locality-led rather than relying only on city averages. A single point of contact from enquiry to closing is subject to operational confirmation."
          />
        </div>
      </section>
    </>
  );
}
