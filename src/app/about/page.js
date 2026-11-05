
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About SSP",
  description:
    "Learn about Swayam Sampada Properties and its integrated real estate approach.",
};

export default function About() {
  const highlights = [
    "Transparent dealings and verified information",
    "A location- and segment-led approach",
    "Support across buying, selling, leasing and advisory",
    "Residential, commercial and infrastructure capabilities",
  ];

  return (
    <>
      <PageHero
        title="Building Wealth Through Real Estate"
        description="An integrated real estate partner connecting sales, property solutions, investment advisory and infrastructure development."
        image="photo-1486406146926-c627a92ad1ab"
      />

      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
          <SectionHeading
            eyebrow="WHO WE ARE"
            title="One partner across the property journey"
            description="Swayam Sampada Properties Pvt Ltd brings multiple real estate capabilities together under one brand. The name 'Swayam Sampada' reflects self-built prosperity and the company's focus on helping customers make informed property decisions."
          />

          <div className="space-y-5">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 border-b border-gray-100 pb-4 text-sm"
              >
                <CheckCircle2 className="text-ssp-green shrink-0" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ssp-cream py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="OUR POSITIONING"
            title="Connecting expertise. Creating a considered path forward."
            description="SSP combines on-ground market knowledge with verified information. Specific leadership profiles, company milestones, vision and mission statements should be added after client confirmation."
          />
        </div>
      </section>
    </>
  );
}
