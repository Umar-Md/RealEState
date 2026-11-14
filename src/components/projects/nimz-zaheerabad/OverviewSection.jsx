
import { Factory, ShieldCheck } from 'lucide-react';
import TextSection from '../TextSection';

export default function OverviewSection({ index }) {
  return (
    <TextSection
      index={index}
      section={{
        id: 'overview',
        title: 'NIMZ overview',
      }}
    >
      <div className="relative overflow-hidden border border-[#163D32]/10 bg-white">

        {/* Compact header */}
        <div className="relative flex items-center gap-4 overflow-hidden bg-[#163D32] px-5 py-4 sm:px-7">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C6A15B]/40 bg-white/[0.06] text-[#D5B16D]">
            <Factory size={21} strokeWidth={1.6} />
          </div>

          <div className="relative">
            <p className="font-display text-lg text-white">
              NIMZ
            </p>
            <div className="mt-1 h-[2px] w-9 bg-[#C6A15B]" />
          </div>

          <div className="pointer-events-none absolute -right-8 -top-16 h-40 w-40 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-2 -top-12 h-32 w-32 rounded-full border border-[#C6A15B]/20" />
        </div>

        {/* Information */}
        <div className="grid sm:grid-cols-2">
          <div className="flex gap-3 border-b border-[#163D32]/10 p-5 sm:border-b-0 sm:border-r sm:p-6">
            <span className="mt-1 shrink-0 text-[#A7803E]">
              <Factory size={17} strokeWidth={1.7} />
            </span>

            <p className="text-sm leading-7 text-gray-600">
              {"NIMZ stands for National Investment and Manufacturing Zone. This page provides a regional overview of industrial development and business context around Zaheerabad, Telangana."}
            </p>
          </div>

          <div className="flex gap-3 bg-[#F8F6EF] p-5 sm:p-6">
            <span className="mt-1 shrink-0 text-[#A7803E]">
              <ShieldCheck size={17} strokeWidth={1.7} />
            </span>

            <p className="text-sm leading-7 text-gray-600">
              {"No project-specific allotment, ownership, plot inventory or confirmed infrastructure is represented on this page."}
            </p>
          </div>
        </div>
      </div>
    </TextSection>
  );
}
