import { ShieldCheck, Flag, TrendingUp, Globe2 } from "lucide-react";
const items = [
  [ShieldCheck, "Trusted Partner"],
  [Flag, "Strategic Solutions"],
  [TrendingUp, "Sustainable Growth"],
  [Globe2, "Global Outlook"],
];
export default function TrustBar() {
  return (
    <div className="bg-ssp-dark text-white">
      <div className="container-wide grid grid-cols-2 lg:grid-cols-4">
        {items.map(([Icon, label]) => (
          <div
            key={label}
            className="flex items-center justify-center gap-3 py-6 border-white/10 [&:nth-child(odd)]:border-r lg:border-r last:border-r-0"
          >
            <Icon className="text-ssp-gold" size={21} />
            <span className="text-xs md:text-sm font-semibold">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
