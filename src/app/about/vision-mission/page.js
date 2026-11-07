import PageHero from "@/components/common/PageHero";
import VisionMission from "./Content";

export const metadata = {
  title: "Vision & Mission | Swayam Sampada Properties",
  description:
    "Discover Swayam Sampada Properties' vision, mission and philosophy for transparent, evidence-led real estate solutions across Telangana.",
};

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F6EF] text-[#163D32]">
      <PageHero
        title="Vision & Mission"
        description="The Philosophy Behind Every Property Decision."
        image="photo-1486406146926-c627a92ad1ab"
      />

      <section className="pb-20 pt-10 md:pb-28 md:pt-16">
        <VisionMission />
      </section>
    </main>
  );
}
