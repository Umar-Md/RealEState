
import { Network, MapPin, Building2 } from 'lucide-react';
import TextSection from '../TextSection';

export default function IndustrialEcosystemSection({ index }) {
  return (
    <TextSection
      index={index}
      section={{
        id: 'industrial-ecosystem',
        title: 'Nearby industrial ecosystem',
      }}
    >
      <div className="relative isolate overflow-hidden rounded-2xl border border-[#163D32]/10 bg-[#F8F6EF]">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border border-[#C6A15B]/20" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full border border-[#C6A15B]/15" />

        <div className="relative grid md:grid-cols-[180px_minmax(0,1fr)]">
          {/* Visual panel */}
          <div className="relative flex min-h-[130px] flex-col justify-between overflow-hidden bg-[#163D32] p-5 sm:p-6">
            <div className="absolute -bottom-12 -left-10 h-36 w-36 rounded-full border border-white/10" />

            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#D5B16D]/40 bg-white/[0.06] text-[#D5B16D]">
              <Network size={23} strokeWidth={1.5} />
            </div>

            <div className="relative mt-5 flex items-center gap-2 text-xs tracking-[0.16em] text-white/60">
              <MapPin size={13} className="text-[#D5B16D]" />
              INDUSTRIAL CONTEXT
            </div>
          </div>

          {/* Content panel */}
          <div className="flex min-w-0 items-center p-5 sm:p-7 md:p-8">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2">
                <Building2 size={16} className="text-[#A7803E]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A7803E]">
                  Regional developments
                </span>
              </div>

              <p className="break-words font-sans text-sm leading-7 text-[#46534C] sm:text-[15px] sm:leading-8">
                {"Mahindra’s tractor-manufacturing presence and its announced EV expansion feature in the guide’s account of Zaheerabad’s industrial ecosystem. Alongside vehicle engineering and defence-sector announcements, the guide identifies potential demand for logistics, ancillary units, housing and commercial services. These regional examples do not imply affiliation with SSP or Central Park."}
              </p>

              <div className="mt-5 h-[2px] w-12 rounded-full bg-[#C6A15B]" />
            </div>
          </div>
        </div>
      </div>
    </TextSection>
  );
}
