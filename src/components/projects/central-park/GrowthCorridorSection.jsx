
import {
  ArrowUpRight,
  MapPin,
  Factory,
  Route,
  ShieldCheck,
} from "lucide-react";
import TextSection from "../TextSection";

export default function GrowthCorridorSection({ index }) {
  return (
    <TextSection
      index={index}
      section={{
        id: "growth-corridor",
        title: "NIMZ and industrial growth corridor",
      }}
    >
      <div className="relative space-y-8">

        {/* Intro */}
        <div className="max-w-3xl">
          <p className="text-base leading-8 text-[#555F58] sm:text-lg sm:leading-9">
            Central Park is a residential township positioned along the
            Hyderabad–Zaheerabad industrial growth corridor. Explore the
            broader regional context and understand how residential
            development and industrial growth are distinct.
          </p>
        </div>

        {/* Corridor visual */}
        <div className="relative overflow-hidden rounded-3xl border border-[#E6E2D7] bg-[#F8F6EF] p-6 sm:p-9">

          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#C6A15B]/10 blur-3xl" />

          <div className="relative">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A7803E]">
                  Regional overview
                </span>
                <h3 className="mt-2 text-xl font-semibold text-[#163D32] sm:text-2xl">
                  Hyderabad – Zaheerabad
                </h3>
              </div>

              <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#163D32] shadow-sm sm:flex">
                <Route size={23} />
              </div>
            </div>

            {/* Location line */}
            <div className="relative grid grid-cols-3 items-start gap-2 sm:gap-6">

              <div className="relative z-10">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#D8D4C9] bg-white text-[#163D32] shadow-sm">
                  <MapPin size={19} />
                </div>
                <h4 className="text-sm font-semibold text-[#163D32] sm:text-base">
                  Hyderabad
                </h4>
                <p className="mt-1 text-xs text-[#7B817B] sm:text-sm">
                  Regional centre
                </p>
              </div>

              <div className="relative z-10 text-center">
                <div className="mb-4 mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#C6A15B]/50 bg-[#163D32] text-[#E5C98F] shadow-md shadow-[#163D32]/15">
                  <MapPin size={19} />
                </div>
                <h4 className="text-sm font-semibold text-[#163D32] sm:text-base">
                  Central Park
                </h4>
                <p className="mt-1 text-xs text-[#A7803E] sm:text-sm">
                  Residential township
                </p>
              </div>

              <div className="relative z-10 text-right">
                <div className="mb-4 ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#D8D4C9] bg-white text-[#163D32] shadow-sm">
                  <Factory size={19} />
                </div>
                <h4 className="text-sm font-semibold text-[#163D32] sm:text-base">
                  Zaheerabad
                </h4>
                <p className="mt-1 text-xs text-[#7B817B] sm:text-sm">
                  Industrial region
                </p>
              </div>

              {/* Connecting line */}
              <div className="absolute left-[12%] right-[12%] top-[22px] h-px border-t-2 border-dashed border-[#C6A15B]/70" />
            </div>

            <div className="mt-9 flex items-center gap-2 border-t border-[#E5E0D4] pt-5 text-xs text-[#85877F]">
              <MapPin size={14} />
              <span>Illustrative regional representation – not to scale</span>
            </div>
          </div>
        </div>

        {/* Supporting information */}
        <div className="grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-[#E8E5DC] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#163D32]/5">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#163D32]/[0.07] text-[#163D32]">
              <Route size={21} />
            </div>
            <h3 className="text-lg font-semibold text-[#163D32]">
              Regional connectivity
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#707770]">
              Understand the wider Hyderabad–Zaheerabad corridor and the
              regional context in which Central Park is positioned.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E8E5DC] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#163D32]/5">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#C6A15B]/15 text-[#A7803E]">
              <Factory size={21} />
            </div>
            <h3 className="text-lg font-semibold text-[#163D32]">
              Industrial development
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#707770]">
              NIMZ Zaheerabad is a separate industrial development. Its
              development should be understood independently of residential
              projects in the region.
            </p>
          </div>
        </div>

        {/* Transparency notice */}
        <div className="relative overflow-hidden rounded-2xl bg-[#163D32] p-6 sm:p-7">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10" />
          <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full border border-white/10" />

          <div className="relative flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#E5C98F]">
              <ShieldCheck size={22} />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D5B16D]">
                Important clarification
              </span>
              <p className="mt-3 text-sm leading-7 text-white/85 sm:text-base">
                Central Park is a residential township and is not part of,
                owned by, or officially affiliated with NIMZ Zaheerabad.
                References to NIMZ are provided only to explain the broader
                regional industrial context.
              </p>
            </div>
          </div>
        </div>

      </div>
    </TextSection>
  );
}
