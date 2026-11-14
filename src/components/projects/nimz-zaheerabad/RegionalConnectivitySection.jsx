
import {
  Route,
  MapPin,
  Clock3,
  Ruler,
  Truck,
} from 'lucide-react';
import TextSection from '../TextSection';

export default function RegionalConnectivitySection({ index }) {
  const categories = [
    { icon: Route, label: 'Routes' },
    { icon: Clock3, label: 'Travel times' },
    { icon: Ruler, label: 'Distances' },
    { icon: Truck, label: 'Transport capacity' },
  ];

  return (
    <TextSection
      index={index}
      section={{
        id: 'regional-connectivity',
        title: 'Regional connectivity',
      }}
    >
      <div className="group relative isolate overflow-hidden rounded-2xl border border-[#163D32]/10 bg-[#F8F6EF] shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/10 dark:bg-[#17251F]">
        <div className="grid md:grid-cols-[minmax(0,1fr)_210px]">

          {/* Main content */}
          <div className="relative min-w-0 p-5 sm:p-7 lg:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#163D32] text-[#D5B16D]">
                <MapPin size={20} strokeWidth={1.5} />
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A7803E] dark:text-[#D5B16D]">
                Regional transport
              </span>

              <div className="h-px flex-1 bg-[#163D32]/10 dark:bg-white/10" />
            </div>

            <p className="max-w-3xl break-words font-sans text-sm leading-7 text-[#46534C] sm:text-[15px] sm:leading-8 dark:text-[#D0D8D2]">
              {"SSP’s guide quotes approximately 80 km to Hyderabad, 14 km to Zaheerabad railway station, 120 km to Rajiv Gandhi International Airport and 25 km to Bidar Airport. It also describes a 9.5 km greenfield road connecting the Mumbai Highway with NIMZ. Distances are guide references, depend on the starting point and route, and are not travel-time estimates."}
            </p>

            <div className="mt-6 h-[3px] w-12 rounded-full bg-[#C6A15B] transition-all duration-300 group-hover:w-20" />
          </div>

          {/* Route information visual */}
          <div className="relative flex flex-col justify-center gap-3 overflow-hidden bg-[#163D32] p-5 sm:p-6">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.10]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)',
                backgroundSize: '22px 22px',
              }}
            />

            <div className="relative mb-1 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                Information scope
              </span>
              <Route size={16} className="text-[#D5B16D]" />
            </div>

            {categories.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="relative flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2.5 transition-all duration-200 hover:border-[#D5B16D]/40 hover:bg-white/[0.09]"
              >
                <Icon size={16} className="shrink-0 text-[#D5B16D]" strokeWidth={1.5} />
                <span className="text-xs text-white/75">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TextSection>
  );
}
