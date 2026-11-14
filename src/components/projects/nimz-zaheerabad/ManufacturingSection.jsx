
import {
  Factory,
  Cog,
  Boxes,
  Settings2,
  ArrowUpRight,
} from 'lucide-react';
import TextSection from '../TextSection';

export default function ManufacturingSection({ index }) {
  return (
    <TextSection
      index={index}
      section={{
        id: 'manufacturing',
        title: 'Manufacturing opportunities',
      }}
    >
      <div className="group relative isolate overflow-hidden rounded-2xl border border-[#163D32]/10 bg-[#F8F6EF] shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/10 dark:bg-[#17251F]">
        <div className="grid md:grid-cols-[220px_minmax(0,1fr)]">

          {/* Industrial visual */}
          <div className="relative flex min-h-[170px] flex-col justify-between overflow-hidden bg-[#163D32] p-5 sm:p-6">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />
            <div className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full border border-[#D5B16D]/20" />

            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#D5B16D]/40 bg-white/[0.06] text-[#D5B16D]">
              <Factory size={23} strokeWidth={1.5} />
            </div>

            <div className="relative mt-6">
              <div className="mb-2 h-[2px] w-8 bg-[#C6A15B]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Manufacturing
              </span>
            </div>

            <Cog
              size={100}
              strokeWidth={0.7}
              className="absolute -bottom-7 -right-5 rotate-12 text-white/[0.07] transition-transform duration-700 group-hover:rotate-45"
            />
          </div>

          {/* Information */}
          <div className="relative flex min-w-0 items-center p-5 sm:p-7 lg:p-8">
            <div className="w-full">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#163D32]/[0.07] text-[#A7803E] dark:bg-white/[0.07] dark:text-[#D5B16D]">
                  <Boxes size={18} strokeWidth={1.6} />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A7803E] dark:text-[#D5B16D]">
                  Regional business context
                </span>

                <ArrowUpRight
                  size={16}
                  className="ml-auto text-[#A7803E] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 dark:text-[#D5B16D]"
                />
              </div>

              <p className="max-w-3xl break-words font-sans text-sm leading-7 text-[#46534C] sm:text-[15px] sm:leading-8 dark:text-[#D0D8D2]">
                {"The guide highlights automotive and electric vehicles, vehicle research and testing, advanced defence manufacturing, and associated supplier industries. It cites Hyundai Motor India Engineering, Triton Electric Vehicles and VEM Technologies as examples of regional announcements. Announced investment and production targets should be read separately from operational capacity."}
              </p>

              <div className="mt-6 flex items-center gap-2">
                <Settings2 size={15} className="text-[#A7803E] dark:text-[#D5B16D]" />
                <div className="h-px flex-1 bg-[#163D32]/10 dark:bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TextSection>
  );
}
