
import { MapPin } from 'lucide-react';
import TextSection from '../TextSection';

export default function StrategicLocationSection({ index }) {
  return (
    <TextSection
      index={index}
      section={{
        id: 'strategic-location',
        title: 'Strategic location',
      }}
    >
      <div className="relative overflow-hidden border border-[#163D32]/10 bg-[#F1F3ED] p-4 sm:p-5">

        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full border border-[#163D32]/10" />
        <div className="pointer-events-none absolute -right-3 -top-9 h-32 w-32 rounded-full border border-[#C6A15B]/30" />

        <div className="relative flex items-center gap-4 sm:gap-6">

          {/* Icon panel */}
          <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center bg-[#163D32] text-[#D5B16D] shadow-lg shadow-[#163D32]/10 sm:h-[88px] sm:w-[88px]">
            <MapPin size={30} strokeWidth={1.5} />
          </div>

          {/* Text panel */}
          <div className="min-w-0 flex-1">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] w-7 bg-[#C6A15B]" />
              <span className="h-px flex-1 bg-[#163D32]/10" />
            </div>

            <p className="text-sm leading-7 text-[#46534C] sm:text-base sm:leading-8">
              {"The focus is the Zaheerabad region in Telangana. Add location-specific claims only after confirming them against current, reliable sources."}
            </p>
          </div>
        </div>
      </div>
    </TextSection>
  );
}
