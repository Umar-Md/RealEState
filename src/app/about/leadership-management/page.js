import PageHero from "@/components/common/PageHero";
import LeadershipManagement from "./Content";

export const metadata = { title: "Leadership & Management", description: "Leadership & Management at Swayam Sampada Properties." };

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F6EF] text-[#163D32]">
      <PageHero title="Leadership & Management" description="Swayam Sampada Properties" image="photo-1486406146926-c627a92ad1ab" />
      <section className="pb-16 pt-6 md:pb-24"><LeadershipManagement /></section>
    </div>
  );
}

