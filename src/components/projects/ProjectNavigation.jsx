import Link from 'next/link';

export default function ProjectNavigation({ project }) {
  const sections = project.sections.filter(
    (section) => section.id !== 'promoter'
  );

  return (
    <nav
      id="project-details"
      aria-label={`${project.title} sections`}
      className="sticky top-0 z-40 border-y border-white/10 bg-[#10251F]/95 shadow-lg backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-[1440px] items-center gap-2 overflow-x-auto px-5 py-3.5 scrollbar-hide sm:px-10 lg:px-16">
        <span className="mr-3 hidden shrink-0 text-[9px] font-bold uppercase tracking-[0.2em] text-ssp-gold lg:block">
          Explore
        </span>

        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-[10px] font-semibold tracking-wide text-white/70 transition-all hover:border-ssp-gold hover:bg-ssp-gold hover:text-ssp-dark"
          >
            {section.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
