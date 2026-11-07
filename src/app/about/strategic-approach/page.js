
import PageHero from "@/components/common/PageHero";
import StrategicApproach from "./Content";

export const metadata = {
  title: "Strategic Approach",
  description: "Strategic Approach at Swayam Sampada Properties.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F6EF] text-[#163D32]">
      <PageHero
        title="Strategic Approach"
        description="Swayam Sampada Properties"
        image="photo-1486406146926-c627a92ad1ab"
      />

      <section className="pb-0 pt-6 md:pt-10">
        <StrategicApproach />
      </section>
    </div>
  );
}
