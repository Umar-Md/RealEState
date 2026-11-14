
import {
  IndianRupee,
  FileCheck,
  ShieldCheck,
  SearchCheck,
  Info,
  ArrowUpRight,
} from "lucide-react";

import TextSection from "../TextSection";

const investmentDetails = [
  {
    number: "01",
    title: "Pricing & Plot Availability",
    description:
      "Current pricing and plot availability must be confirmed directly with the project team.",
    icon: IndianRupee,
    status: "Not published",
  },
  {
    number: "02",
    title: "Payment Terms",
    description:
      "Request the latest payment schedule and terms before proceeding.",
    icon: FileCheck,
    status: "Confirm directly",
  },
  {
    number: "03",
    title: "Promoter & TG-RERA Details",
    description:
      "Promoter identity and TG-RERA applicability and registration details are pending verification.",
    icon: ShieldCheck,
    status: "Pending verification",
  },
];

export default function InvestmentSection({ index }) {
  return (
    <TextSection
      index={index}
      section={{
        id: "investment",
        title: "Investment information",
      }}
    >
      <div className="space-y-6">

        {/* Intro */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-[#68736B] sm:text-base">
            Make informed property decisions with verified project
            information, transparent communication and independent
            due diligence.
          </p>

          <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[#E8E1D3] bg-[#F8F6EF] px-3 py-2">
            <Info size={14} className="text-[#A7803E]" />
            <span className="text-xs font-semibold text-[#163D32]">
              Buyer information
            </span>
          </div>
        </div>

        {/* Information cards */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {investmentDetails.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group relative rounded-xl border border-[#EAE7DE] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A15B]/50 hover:shadow-lg hover:shadow-[#163D32]/5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F3EC] text-[#163D32] transition-colors group-hover:bg-[#163D32] group-hover:text-white">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <span className="text-[10px] font-semibold tracking-widest text-[#B29A6C]">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-5 text-sm font-semibold text-[#163D32]">
                  {item.title}
                </h3>

                <p className="mt-2 min-h-[66px] text-xs leading-6 text-[#7B837B]">
                  {item.description}
                </p>

                <div className="mt-4 border-t border-[#EEEAE1] pt-3">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#A7803E]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]" />
                    {item.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Due diligence notice */}
        <div className="relative overflow-hidden rounded-2xl bg-[#163D32] p-5 sm:p-6">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />
          <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-white/10" />

          <div className="relative flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#E5C98F]">
              <SearchCheck size={21} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D5B16D]">
                Before making a decision
              </p>

              <h3 className="mt-2 text-lg font-semibold text-white">
                Independent due diligence matters.
              </h3>

              <p className="mt-2 text-sm leading-7 text-white/75">
                Confirm all project details, review relevant approvals
                and documents, verify applicable regulatory requirements,
                and understand the payment terms independently before
                making a purchase decision.
              </p>
            </div>
          </div>
        </div>

        {/* Investment disclaimer */}
        <div className="flex items-start gap-3 rounded-xl border border-[#EAE5D9] bg-[#F8F6EF] px-4 py-3.5">
          <ShieldCheck
            size={19}
            className="mt-0.5 shrink-0 text-[#A7803E]"
          />

          <p className="text-xs leading-6 text-[#737B73]">
            No investment returns or guaranteed appreciation are promised.
            Pricing, plot availability, payment terms, promoter identity
            and TG-RERA details must be independently confirmed where
            applicable.
          </p>
        </div>

      </div>
    </TextSection>
  );
}
