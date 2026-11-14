import { Factory, Trees } from 'lucide-react';

export default function ProjectBadge({ project, plain = false }) {
  const isNimz = project.id === 'nimz-zaheerabad';
  const Icon = isNimz ? Factory : Trees;

  return (
    <span className={`inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white ${plain ? '' : 'rounded-full border border-white/40 bg-white/10 px-4 py-2.5 shadow-sm backdrop-blur-md'}`}>
      <Icon size={18} strokeWidth={1.5} aria-hidden="true" className="shrink-0 text-[#E5C78E]" />
      {isNimz ? 'NIMZ' : project.title.toUpperCase()}
    </span>
  );
}
