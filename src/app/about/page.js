import PageHero from "@/components/common/PageHero";
import AboutClient from "./AboutClient";
import VisionMission from "./vision-mission/Content";
import StrategicApproach from "./strategic-approach/Content";
import StoryJourney from "./story-journey/Content";
import LeadershipManagement from "./leadership-management/Content";

export const metadata = {
  title: "About Us | Swayam Sampada Properties",
  description:
    "Explore Swayam Sampada Properties' vision, mission, strategic approach, journey, and leadership.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#F8F6EF] text-[#163D32]">
      {/* PAGE HERO */}
      <PageHero
        title="About Swayam Sampada Properties"
        description="Integrated Real Estate, Property & Asset Solutions — Connecting Properties. Creating Assets. Building Wealth."
        image="photo-1486406146926-c627a92ad1ab"
      />

      {/* ABOUT PAGE CONTENT */}
      <div className="relative">
        {/* ABOUT OVERVIEW */}
        <section className="relative">
          <AboutClient />
        </section>

        {/* VISION & MISSION */}
        <section
          id="vision-mission"
          className="scroll-mt-28 border-t border-[#C6A15B]/20 py-16 md:py-24"
        >
          <VisionMission />
        </section>

        {/* STRATEGIC APPROACH */}
        <section
          id="strategic-approach"
          className="scroll-mt-28 border-t border-[#C6A15B]/20"
        >
          <StrategicApproach />
        </section>

        {/* STORY & JOURNEY */}
        <section
          id="story-journey"
          className="scroll-mt-28 border-t border-[#C6A15B]/20"
        >
          <StoryJourney />
        </section>

        {/* LEADERSHIP & MANAGEMENT */}
        <section
          id="leadership-management"
          className="scroll-mt-28 border-t border-[#C6A15B]/20 py-16 md:py-24"
        >
          <LeadershipManagement />
        </section>
      </div>
    </div>
  );
}
