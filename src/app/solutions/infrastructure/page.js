import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
export const metadata = {
  title: "Industrial, Logistics & Project Partnerships | SSP Infrastructure",
  description:
    "Industrial land, warehouse advisory and project partnerships from SSP Infrastructure.",
};
export default function Infrastructure() {
  return (
    <>
      <PageHero
        eyebrow="SSP INFRASTRUCTURE"
        title="Development & Projects"
        description="Quality-driven development and project partnerships across industrial and logistics real estate."
        image="photo-1487958449943-2429e8be8625"
        cta="Talk to an Advisor"
      />
      <section className="section-pad">
        <div className="container-wide">
          <SectionHeading
            eyebrow="WHAT WE SUPPORT"
            title="The larger side of real estate"
            description="SSP Infrastructure supports industrial and logistics space, and projects that bring developers, landowners and institutional partners together."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <article className="bg-ssp-cream p-8">
              <h3 className="font-serif text-2xl">Industrial & Logistics</h3>
              <p className="text-sm leading-7 text-gray-600 mt-4">
                For manufacturers, 3PL providers, e-commerce players and
                distributors. We evaluate zoning, power, road access, truck
                movement and clearances, with industrial land and warehouse
                advisory.
              </p>
            </article>
            <article className="bg-ssp-cream p-8">
              <h3 className="font-serif text-2xl">Project Partnerships</h3>
              <p className="text-sm leading-7 text-gray-600 mt-4">
                For developers, landowners and institutional partners. We review
                project approvals, sales velocity, partner capability and
                capital needs, supporting project marketing and channel
                coordination.
              </p>
            </article>
          </div>
          <div className="mt-10 border border-gray-200 p-6 text-sm text-gray-600">
            Completed and ongoing project showcases will be published only after
            client approval and receipt of project names, locations, status and
            approved images.
          </div>
        </div>
      </section>
    </>
  );
}
