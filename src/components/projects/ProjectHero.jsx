import Image from 'next/image';
import Link from 'next/link';
import { getProjectImageSrc } from '@/lib/project-image';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';

export default function ProjectHero({ project }) {
  return (
    <section className="relative isolate min-h-[740px] overflow-hidden bg-[#10251F] text-white lg:min-h-[850px]">
      <Image
        src={getProjectImageSrc(project.cover.src)}
        alt={project.cover.alt || project.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#071812]/95 via-[#10251F]/75 to-[#10251F]/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071812] via-transparent to-[#071812]/30" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative mx-auto flex min-h-[740px] max-w-[1440px] flex-col justify-end px-5 pb-24 pt-40 sm:px-10 lg:min-h-[850px] lg:px-16 lg:pb-36">
        <div className="max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.07] px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-ssp-gold shadow-[0_0_12px_rgba(198,161,91,0.9)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/85">
              {project.projectNumber} / {project.category}
            </span>
          </div>

          <h1 className="max-w-5xl font-display text-5xl leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[6.5rem]">
            {project.headline}
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-8 text-white/75 sm:text-lg sm:leading-9">
            {project.description}
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-white/80">
            <MapPin size={18} className="text-ssp-gold" />
            {project.location}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#project-details"
              className="group inline-flex min-h-14 items-center gap-5 rounded-sm bg-ssp-gold px-7 text-xs font-bold uppercase tracking-[0.15em] text-ssp-dark transition-all hover:bg-white"
            >
              Explore Project
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
            </Link>

            {project.cta?.href && (
              <Link
                href={project.cta.href}
                className="inline-flex min-h-14 items-center gap-3 border border-white/35 bg-white/5 px-7 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md transition-all hover:border-ssp-gold hover:text-ssp-gold"
              >
                {project.cta.label || 'Enquire Now'}
                <ArrowUpRight size={16} />
              </Link>
            )}
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/50 lg:flex">
          <span>Scroll to discover</span>
          <span className="h-px w-14 bg-ssp-gold/60" />
        </div>
      </div>

      {project.cover.caption && (
        <p className="absolute bottom-5 left-6 text-[10px] text-white/50 sm:left-10 lg:left-16">
          {project.cover.caption}
        </p>
      )}
    </section>
  );
}
