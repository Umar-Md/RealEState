
import {
  Building2,
  Sparkles,
  Trees,
  ArrowUpRight,
} from "lucide-react";

import TextSection from "../TextSection";

const lifestyleFeatures = [
  {
    number: "01",
    title: "Clubhouse",
    description:
      "A dedicated clubhouse included in the supplied project brief.",
    icon: Building2,
    featured: true,
  },
  {
    number: "02",
    title: "Leisure Amenities",
    description:
      "Leisure-focused amenities planned as part of the project brief.",
    icon: Sparkles,
  },
];

export default function LifestyleSection({ index }) {
  return (
    <TextSection
      index={index}
      section={{
        id: "lifestyle",
        title: "Lifestyle facilities",
      }}
    >
      <div className="space-y-6">

        {/* Introduction */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-2xl text-sm leading-7 text-[#68736B] sm:text-base">
            Beyond the layout, lifestyle spaces are part of the project's
            vision for a more enjoyable residential environment.
          </p>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#E8E1D3] bg-[#F8F6EF] px-3 py-2 text-xs font-semibold text-[#163D32]">
            <Sparkles size={14} className="text-[#A7803E]" />
            Lifestyle & leisure
          </span>
        </div>

        {/* Feature cards */}
        <div className="grid gap-3 sm:grid-cols-2">
          {lifestyleFeatures.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className={`group relative flex min-h-[145px] items-start gap-4 overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  item.featured
                    ? "border-[#163D32] bg-[#163D32] shadow-md shadow-[#163D32]/10"
                    : "border-[#EAE7DE] bg-white hover:border-[#C6A15B]/50 hover:shadow-[#163D32]/5"
                }`}
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    item.featured
                      ? "bg-white/10 text-[#E5C98F]"
                      : "bg-[#F5F3EC] text-[#163D32] group-hover:bg-[#163D32] group-hover:text-white"
                  }`}
                >
                  <Icon size={21} strokeWidth={1.7} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={`text-[10px] font-semibold tracking-widest ${
                        item.featured ? "text-[#D5B16D]" : "text-[#B29A6C]"
                      }`}
                    >
                      {item.number}
                    </span>
                    <span
                      className={`h-px w-6 ${
                        item.featured ? "bg-[#D5B16D]/50" : "bg-[#D9D3C5]"
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-base font-semibold ${
                      item.featured ? "text-white" : "text-[#163D32]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-2 text-xs leading-6 ${
                      item.featured ? "text-white/70" : "text-[#7B837B]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className={`absolute right-4 top-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                    item.featured
                      ? "text-[#D5B16D]"
                      : "text-[#C5BDAE] group-hover:text-[#A7803E]"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Detail confirmation note */}
        <div className="flex items-start gap-3 rounded-xl border border-[#EAE5D9] bg-[#F8F6EF] px-4 py-3.5">
          <Trees size={19} className="mt-0.5 shrink-0 text-[#A7803E]" />

          <div>
            <p className="text-sm font-semibold text-[#163D32]">
              More details coming after confirmation
            </p>
            <p className="mt-1 text-xs leading-6 text-[#777F76]">
              Detailed clubhouse and leisure facility specifications
              will be published once confirmed by the project team.
            </p>
          </div>
        </div>

      </div>
    </TextSection>
  );
}
