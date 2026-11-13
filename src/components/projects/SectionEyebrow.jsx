

export default function SectionEyebrow({ children, light = false }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className={`h-px w-9 ${light ? 'bg-ssp-gold' : 'bg-ssp-green'}`} />
      <span className={`text-[10px] font-bold uppercase tracking-[0.28em] ${
        light ? 'text-ssp-gold' : 'text-ssp-green'
      }`}>
        {children}
      </span>
    </div>
  );
}
