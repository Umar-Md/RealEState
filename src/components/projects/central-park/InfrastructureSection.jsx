import {
  Route,
  Trees,
  Droplets,
  Zap,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import TextSection from "../TextSection";

const infrastructure = [
  {
    number: "01",
    title: "Internal Roads",
    description: "33 ft and 40 ft road provisions",
    icon: Route,
  },
  {
    number: "02",
    title: "Black-top Roads",
    description: "With avenue plantation",
    icon: Trees,
  },
  {
    number: "03",
    title: "Underground Drainage",
    description: "Underground drainage provision",
    icon: Droplets,
  },
  {
    number: "04",
    title: "Water & Electricity",
    description: "Essential utility provisions",
    icon: Zap,
  },
  {
    number: "05",
    title: "Lighting & Security",
    description: "Street lights and security provisions",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Reserved Park Sites",
    description: "Three designated park sites",
    icon: Trees,
    featured: true,
  },
];

export default function InfrastructureSection({ index }) {
  return (
    <TextSection
      index={index}
      section={{
        id: "infrastructure",
        title: "Infrastructure and amenities",
      }}
    >
      <div className="space-y-7">
        {/* Intro */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-2xl text-sm leading-7 text-[#68736B] sm:text-base">
            Essential layout provisions designed around connectivity, everyday
            utilities and thoughtfully reserved open spaces.
          </p>

          <div className="flex items-center gap-2 rounded-full border border-[#E7E1D4] bg-[#F8F6EF] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#C6A15B]" />
            <span className="text-xs font-semibold text-[#163D32]">
              06 Provisions
            </span>
          </div>
        </div>

        {/* Compact cards */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {infrastructure.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className={`group relative flex min-h-[112px] items-center gap-4 overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                  item.featured
                    ? "border-[#163D32] bg-[#163D32] shadow-md shadow-[#163D32]/10"
                    : "border-[#EAE7DE] bg-white hover:border-[#C6A15B]/60 hover:shadow-[#163D32]/5"
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                    item.featured
                      ? "bg-white/10 text-[#E5C98F]"
                      : "bg-[#F5F3EC] text-[#163D32] group-hover:bg-[#163D32] group-hover:text-white"
                  }`}
                >
                  <Icon size={20} strokeWidth={1.7} />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <span
                      className={`text-[9px] font-semibold tracking-widest ${
                        item.featured ? "text-[#D5B16D]" : "text-[#B29A6C]"
                      }`}
                    >
                      {item.number}
                    </span>
                    <span
                      className={`h-px w-5 ${
                        item.featured ? "bg-[#D5B16D]/50" : "bg-[#D9D3C5]"
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-sm font-semibold leading-5 ${
                      item.featured ? "text-white" : "text-[#163D32]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-1 text-xs leading-5 ${
                      item.featured ? "text-white/65" : "text-[#858B83]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={15}
                  className={`absolute right-3 top-3 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                    item.featured
                      ? "text-[#D5B16D]"
                      : "text-[#C5BDAE] group-hover:text-[#A7803E]"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="flex items-start gap-3 rounded-xl border border-[#E9E4D9] bg-[#F8F6EF] px-4 py-3.5">
          <Trees size={19} className="mt-0.5 shrink-0 text-[#A7803E]" />

          <div className="flex-1">
            <p className="text-sm font-semibold text-[#163D32]">
              Three reserved park sites
            </p>
            <p className="mt-1 text-xs leading-6 text-[#777F76]">
              Open-space provisions identified in the supplied project
              information.
            </p>
          </div>

          <span className="text-xl font-semibold text-[#A7803E]">03</span>
        </div>

        <p className="text-[11px] leading-5 text-[#999B92]">
          Features represent planned layout provisions based on supplied project
          information. Actual execution and availability should be verified
          against approved project documents.
        </p>
      </div>
    </TextSection>
  );
}
