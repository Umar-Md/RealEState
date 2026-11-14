
import {
  MapPin,
  Route,
  Factory,
  ArrowUpRight,
  Navigation,
} from "lucide-react";

import TextSection from "../TextSection";

const locationHighlights = [
  {
    number: "01",
    title: "NH-65",
    description: "Project location along National Highway 65.",
    icon: Route,
  },
  {
    number: "02",
    title: "Hyderabad–Zaheerabad",
    description: "Part of the wider industrial growth corridor.",
    icon: Factory,
  },
];

export default function WhyKohirSection({ index }) {
  return (
    <TextSection
      index={index}
      section={{
        id: "why-kohir",
        title: "Why Kohir X Roads?",
      }}
    >
      <div className="space-y-6">

        {/* Location hero */}
        <div className="relative overflow-hidden rounded-2xl border border-[#E7E1D5] bg-[#F8F6EF] p-5 sm:p-7">
          <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full border border-[#C6A15B]/20" />
          <div className="absolute -right-5 -top-9 h-32 w-32 rounded-full border border-[#C6A15B]/20" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A7803E]">
                Project location
              </span>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#163D32] sm:text-3xl">
                Kohir X Roads
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#707970]">
                Located along NH-65, within the broader
                Hyderabad–Zaheerabad industrial growth corridor.
              </p>
            </div>

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#163D32] text-[#E5C98F] shadow-lg shadow-[#163D32]/10">
              <MapPin size={29} strokeWidth={1.5} />
            </div>
          </div>

          <div className="relative mt-6 flex flex-wrap items-center gap-2 border-t border-[#E5DFD2] pt-4">
            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#163D32]">
              NH-65
            </span>
            <ArrowUpRight size={14} className="text-[#A7803E]" />
            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#68736B]">
              Kohir X Roads
            </span>
            <ArrowUpRight size={14} className="text-[#A7803E]" />
            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#68736B]">
              Telangana
            </span>
          </div>
        </div>

        {/* Location highlights */}
        <div className="grid gap-3 sm:grid-cols-2">
          {locationHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group flex items-center gap-4 rounded-xl border border-[#EAE7DE] bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C6A15B]/50 hover:shadow-lg hover:shadow-[#163D32]/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EC] text-[#163D32] transition-colors group-hover:bg-[#163D32] group-hover:text-white">
                  <Icon size={20} strokeWidth={1.7} />
                </div>

                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-semibold tracking-widest text-[#B29A6C]">
                    {item.number}
                  </span>

                  <h4 className="mt-1 text-sm font-semibold text-[#163D32]">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-[#858B83]">
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={15}
                  className="shrink-0 text-[#C5BDAE] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#A7803E]"
                />
              </div>
            );
          })}
        </div>

        {/* Context note */}
        <div className="flex items-start gap-3 rounded-xl border border-[#EAE5D9] bg-[#F8F6EF] px-4 py-3.5">
          <Navigation
            size={18}
            className="mt-0.5 shrink-0 text-[#A7803E]"
          />

          <p className="text-xs leading-6 text-[#777F76]">
            Location context is provided to help visitors understand
            the project's stated regional setting. Exact distances,
            travel times and connectivity claims should be verified
            independently.
          </p>
        </div>

      </div>
    </TextSection>
  );
}
