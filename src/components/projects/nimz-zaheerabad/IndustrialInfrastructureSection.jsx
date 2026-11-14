
import {
  Network,
  Zap,
  Truck,
  Building2,
  ArrowUpRight,
} from 'lucide-react';
import TextSection from '../TextSection';

export default function IndustrialInfrastructureSection({ index }) {
  return (
    <TextSection
      index={index}
      section={{
        id: 'industrial-infrastructure',
        title: 'Industrial infrastructure',
      }}
    >
      <div className="group relative isolate overflow-hidden rounded-2xl border border-[#163D32]/10 bg-[#F8F6EF] shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/10 dark:bg-[#17251F]">
        <div className="grid md:grid-cols-[minmax(0,1fr)_230px]">

          {/* Main information */}
          <div className="relative min-w-0 p-5 sm:p-7 lg:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#163D32] text-[#D5B16D]">
                <Network size={20} strokeWidth={1.5} />
              </div>

              <div className="h-px flex-1 bg-[#163D32]/10 dark:bg-white/10" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A7803E] dark:text-[#D5B16D]">
                Infrastructure overview
              </span>
            </div>

            <p className="max-w-3xl break-words font-sans text-sm leading-7 text-[#46534C] sm:text-[15px] sm:leading-8 dark:text-[#D0D8D2]">
              {"Specific utilities, transport links, facilities and delivery status have not been verified for publication. Any proposed development must be clearly labelled proposed and supported by a current official source."}
            </p>

            <div className="mt-6 h-[3px] w-12 rounded-full bg-[#C6A15B] transition-all duration-300 group-hover:w-20" />
          </div>

          {/* Infrastructure visual */}
          <div className="relative flex min-h-[150px] flex-col justify-between overflow-hidden bg-[#163D32] p-5 sm:p-6">
            <div className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#D5B16D]/20" />

            <div className="relative flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#D5B16D]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                Key categories
              </span>
            </div>

            <div className="relative mt-6 grid grid-cols-3 gap-2">
              {[
                { icon: Zap, label: 'Utilities' },
                { icon: Truck, label: 'Transport' },
                { icon: Building2, label: 'Facilities' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex min-w-0 flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-2 py-3 text-center transition-colors duration-300 hover:border-[#D5B16D]/50 hover:bg-white/10"
                >
                  <Icon size={19} className="text-[#D5B16D]" strokeWidth={1.5} />
                  <span className="text-[10px] text-white/75">{label}</span>
                </div>
              ))}
            </div>

            <ArrowUpRight
              size={17}
              className="absolute right-5 top-5 text-white/50"
            />
          </div>
        </div>
      </div>
    </TextSection>
  );
}
  