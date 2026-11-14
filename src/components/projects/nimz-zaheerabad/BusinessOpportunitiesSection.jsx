
import { BriefcaseBusiness, ShieldCheck, ArrowUpRight } from 'lucide-react';
import TextSection from '../TextSection';

export default function BusinessOpportunitiesSection({ index }) {
  return (
    <TextSection
      index={index}
      section={{
        id: 'business-opportunities',
        title: 'Investment and business opportunities',
      }}
    >
      <div className="group relative isolate overflow-hidden rounded-2xl border border-[#163D32]/10 bg-[#F8F6EF] shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/10 dark:bg-[#17251F]">
        <div className="grid md:grid-cols-[minmax(0,1fr)_220px]">

          {/* Main content */}
          <div className="relative min-w-0 p-5 sm:p-7 lg:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#163D32] text-[#D5B16D] dark:bg-[#D5B16D]/15">
                <BriefcaseBusiness size={19} strokeWidth={1.6} />
              </div>

              <div className="h-px flex-1 bg-[#163D32]/10 dark:bg-white/10" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A7803E]">
                Business information
              </span>
            </div>

            <p className="max-w-3xl break-words font-sans text-sm leading-7 text-[#46534C] sm:text-[15px] sm:leading-8 dark:text-[#D0D8D2]">
              {"This page does not offer or represent industrial plots, government allotments, prices, ownership interests or guaranteed returns. Confirm relevant policies and opportunities with the appropriate authorities and qualified advisers."}
            </p>

            <div className="mt-6 h-[3px] w-12 rounded-full bg-[#C6A15B] transition-all duration-300 group-hover:w-20" />
          </div>

          {/* Supporting visual */}
          <div className="relative flex min-h-[120px] flex-col justify-between overflow-hidden bg-[#163D32] p-5 sm:p-6">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />
            <div className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full border border-[#C6A15B]/20" />

            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#D5B16D]/40 bg-white/[0.06] text-[#D5B16D]">
              <ShieldCheck size={21} strokeWidth={1.5} />
            </div>

            <div className="relative mt-5 flex items-center justify-between">
              <span className="text-xs font-medium tracking-wide text-white/70">
                Information clarity
              </span>
              <ArrowUpRight size={17} className="text-[#D5B16D]" />
            </div>
          </div>
        </div>
      </div>
    </TextSection>
  );
}
