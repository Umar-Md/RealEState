
import { Factory } from 'lucide-react';
import TextSection from '../TextSection';

export default function IndustrialCorridorSection({ index }) {
  return (
    <TextSection
      index={index}
      section={{
        id: 'industrial-corridor',
        title: 'Hyderabad–Mumbai industrial corridor',
      }}
    >
      <div className="relative overflow-hidden border border-[#163D32]/10 bg-[#F1F3ED]">
        <div className="grid sm:grid-cols-[88px_minmax(0,1fr)]">

          {/* Icon panel */}
          <div className="relative flex min-h-[76px] items-center justify-center overflow-hidden bg-[#163D32] sm:min-h-full">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-white/10" />
            <div className="absolute -bottom-10 -left-8 h-24 w-24 rounded-full border border-[#C6A15B]/25" />

            <div className="relative flex h-10 w-10 items-center justify-center border border-[#C6A15B]/40 bg-white/[0.06] text-[#D5B16D]">
              <Factory size={20} strokeWidth={1.5} />
            </div>
          </div>

          {/* Content */}
          <div className="relative flex min-w-0 items-center p-4 sm:p-6">
            <div className="absolute bottom-0 left-0 top-0 hidden w-[3px] bg-[#C6A15B] sm:block" />

            <p className="min-w-0 font-sans text-sm font-normal leading-7 text-[#46534C] sm:text-[15px] sm:leading-8">
              {"SSP’s guide places Zaheerabad in the Hyderabad–Mumbai industrial corridor context, linking its manufacturing potential with access to Hyderabad, Mumbai and Bengaluru. This regional positioning supports the guide’s focus on logistics, suppliers and ancillary industries."}
            </p>
          </div>
        </div>
      </div>
    </TextSection>
  );
}
