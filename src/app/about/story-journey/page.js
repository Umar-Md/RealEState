import PageHero from "@/components/common/PageHero";
import StoryJourney from "./Content";

export const metadata = {
  title: "Our Story & Journey",
  description: "Our Story & Journey at Swayam Sampada Properties.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F6EF] text-[#163D32]">
      <PageHero
        title="Our Story & Journey"
        description="Swayam Sampada Properties"
        image="photo-1486406146926-c627a92ad1ab"
      />

      <section className="pb-0 pt-6 md:pt-10">
        <StoryJourney />
      </section>
    </div>
  );
}