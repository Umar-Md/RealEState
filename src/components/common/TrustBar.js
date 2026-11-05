
import {
  ShieldCheck,
  Flag,
  TrendingUp,
  Globe2,
} from "lucide-react";

const items = [
  {
    number: "01",
    Icon: ShieldCheck,
    label: "Trusted Partner",
    description: "Built on transparency",
  },
  {
    number: "02",
    Icon: Flag,
    label: "Strategic Solutions",
    description: "Focused on your goals",
  },
  {
    number: "03",
    Icon: TrendingUp,
    label: "Sustainable Growth",
    description: "Creating lasting value",
  },
  {
    number: "04",
    Icon: Globe2,
    label: "Global Outlook",
    description: "Thinking beyond boundaries",
  },
];

export default function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-[#163D32] text-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {items.map(({ number, Icon, label, description }) => (
            <div
              key={number}
              className="group flex items-center gap-4 border-b border-white/15 px-2 sm:px-4 lg:border-b-0 lg:px-5 py-7 md:py-9 transition-colors duration-300 hover:bg-white/[0.04]"
            >
              {/* Icon */}
              <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full border border-[#C6A15B]/50 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C6A15B] group-hover:border-[#C6A15B]">
                <Icon
                  size={21}
                  strokeWidth={1.5}
                  className="text-[#C6A15B] transition-colors duration-300 group-hover:text-[#163D32]"
                />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <span className="block text-[9px] tracking-[0.2em] text-[#C6A15B] mb-1">
                  {number} / SSP
                </span>

                <h3 className="text-xs sm:text-sm font-semibold tracking-wide text-white">
                  {label}
                </h3>

                <p className="text-[10px] sm:text-xs text-white/70 mt-1 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
