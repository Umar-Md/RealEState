
import SectionHeading from "@/components/common/SectionHeading";
import {
  ShieldCheck,
  FileCheck2,
  Handshake,
  Scale,
  TrendingUp,
  Award,
} from "lucide-react";

const coreValues = [
  {
    title: "Transparency",
    description:
      "Clear fees, written mandates, and dated, sourced information across every transaction.",
    icon: FileCheck2,
  },
  {
    title: "Verification",
    description:
      "Facts rigorously checked against verified documents before any property recommendation.",
    icon: ShieldCheck,
  },
  {
    title: "Trust",
    description:
      "Honest advice offered with integrity, with all parameters and limitations stated upfront.",
    icon: Handshake,
  },
  {
    title: "Compliance",
    description:
      "Careful attention to TGRERA frameworks and legal mandates to ensure peace of mind.",
    icon: Scale,
  },
  {
    title: "Responsible Growth",
    description:
      "Sustainable, long-term wealth and asset creation for clients, families, and partners.",
    icon: TrendingUp,
  },
  {
    title: "Partnership",
    description:
      "Carefully vetted network of developers, brokers, and industry professionals.",
    icon: Award,
  },
];

export default function StrategicApproach() {
  return (
    <div className="overflow-hidden bg-[#F8F6EF]">
      <section className="relative py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[#C6A15B]/10" />

        <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="STRATEGIC FRAMEWORK"
            title="Our Strategic Approach & Core Values"
            description="SSP combines micro-market intelligence with rigorous documentation review to help stakeholders compare options with absolute confidence."
          />

          {/* STRATEGIC FRAMEWORK FEATURE */}
          <div className="relative mt-14 overflow-hidden bg-[#102A23] p-8 sm:p-12 lg:p-14">
            <div className="pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full border border-[#D5B16D]/15" />
            <div className="pointer-events-none absolute -right-4 -top-12 h-56 w-56 rounded-full border border-[#D5B16D]/10" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D5B16D]">
                  The SSP Framework
                </span>

                <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Built on Principles.
                  <span className="block text-[#D5B16D]">
                    Guided by Trust.
                  </span>
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
                  SSP combines micro-market intelligence with rigorous
                  documentation review to help stakeholders compare options
                  with absolute confidence.
                </p>
              </div>

              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#D5B16D]/40 bg-white/[0.03] lg:h-36 lg:w-36">
                <ShieldCheck
                  size={58}
                  strokeWidth={1}
                  className="text-[#D5B16D] lg:h-[72px] lg:w-[72px]"
                />
              </div>
            </div>
          </div>

          {/* CORE VALUES */}
          <div className="mt-20">
            <div className="mb-9 flex items-end justify-between gap-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A7803E]">
                  What Defines Us
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-[#163D32] sm:text-3xl">
                  Our Core Values
                </h3>
              </div>

              <span className="hidden font-display text-5xl font-bold text-[#163D32]/10 sm:block">
                06
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((value, idx) => {
                const VIcon = value.icon;

                return (
                  <article
                    key={value.title}
                    className="group relative flex min-h-[260px] flex-col overflow-hidden border border-[#163D32]/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#C6A15B]/60 hover:shadow-[0_20px_45px_rgba(22,61,50,0.09)] sm:p-8"
                  >
                    <span className="absolute -right-2 -top-5 font-display text-[100px] font-bold leading-none text-[#163D32]/[0.035] transition-colors duration-500 group-hover:text-[#C6A15B]/10">
                      0{idx + 1}
                    </span>

                    <div className="relative flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center bg-[#163D32] text-[#D5B16D] transition-all duration-500 group-hover:bg-[#C6A15B] group-hover:text-[#102A23]">
                        <VIcon size={25} strokeWidth={1.6} />
                      </div>

                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#A7803E]">
                        VALUE 0{idx + 1}
                      </span>
                    </div>

                    <div className="relative mt-9">
                      <h4 className="font-display text-xl font-semibold text-[#163D32] sm:text-2xl">
                        {value.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-[#66736A]">
                        {value.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-7">
                      <div className="h-px w-10 bg-[#C6A15B] transition-all duration-500 group-hover:w-full" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
