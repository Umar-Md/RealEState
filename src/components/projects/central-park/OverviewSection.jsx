import {
  MapPin,
  Building2,
  FileCheck,
  ArrowUpRight,
  Landmark,
  ShieldCheck,
} from "lucide-react";

import TextSection from "../TextSection";

const projectDetails = [
  {
    number: "01",
    label: "Project Category",
    value: "Residential",
    subtext: "Plotted Township",
    icon: Building2,
  },
  {
    number: "02",
    label: "Project Location",
    value: "Kohir X Roads",
    subtext: "NH-65, Telangana",
    icon: MapPin,
  },
];

export default function OverviewSection({ index }) {
  return (
    <TextSection
      index={index}
      section={{
        id: "overview",
        title: "Project overview",
      }}
    >
      <div className="space-y-6">
        {/* Project introduction */}
        <div className="relative overflow-hidden rounded-2xl bg-[#163D32] p-6 sm:p-8">
          <div className="absolute -right-12 -top-16 h-56 w-56 rounded-full border border-white/10" />
          <div className="absolute -right-5 -top-8 h-36 w-36 rounded-full border border-white/10" />

          <div className="relative max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5B16D]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E5C98F]">
                Residential plotted township
              </span>
            </div>

            <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
              A residential address at
              <span className="block text-[#E5C98F]">
                Kohir X Roads, NH-65.
              </span>
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Central Park is a residential plotted township at Kohir X Roads on
              NH-65, Telangana. Explore the project overview and its supplied
              development details.
            </p>
          </div>

          <div className="relative mt-7 flex items-center gap-2 border-t border-white/15 pt-5 text-xs text-white/65">
            <MapPin size={15} className="text-[#D5B16D]" />
            Kohir X Roads · NH-65 · Telangana
          </div>
        </div>

        {/* Project details */}
        <div className="grid gap-3 sm:grid-cols-2">
          {projectDetails.map((item) => {
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
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#A7803E]">
                    {item.label}
                  </p>
                  <h4 className="mt-1 text-base font-semibold text-[#163D32]">
                    {item.value}
                  </h4>
                  <p className="mt-0.5 text-xs text-[#858B83]">
                    {item.subtext}
                  </p>
                </div>

                <span className="self-start text-[10px] font-semibold tracking-widest text-[#B8AD99]">
                  {item.number}
                </span>
              </div>
            );
          })}
        </div>

        {/* Approval reference */}
        <div className="flex flex-col gap-4 rounded-xl border border-[#E8E2D6] bg-[#F8F6EF] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#163D32] text-[#E5C98F]">
              <FileCheck size={20} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A7803E]">
                Layout approval reference
              </p>
              <h4 className="mt-1 text-sm font-semibold text-[#163D32]">
                DTCP Approval
              </h4>
              <p className="mt-1 text-sm font-medium text-[#606A62]">
                T.L.P. No. 332/2022/H
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-[#DCD5C7] bg-white/70 px-3 py-2 text-xs font-medium text-[#68736B]">
            <ShieldCheck size={15} className="text-[#A7803E]" />
            Reference supplied
          </div>
        </div>

        {/* Information note */}
        <p className="flex items-start gap-2 text-[11px] leading-6 text-[#92958D]">
          <Landmark size={15} className="mt-1 shrink-0 text-[#A7803E]" />
          Project information is based on details supplied for this website
          update. Verify approval documents, project particulars and applicable
          records independently before making a decision.
        </p>
      </div>
    </TextSection>
  );
}
