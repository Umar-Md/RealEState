import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { getProjectImageSrc } from '@/lib/project-image';

export default function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden border border-ssp-green/15 bg-white shadow-[0_12px_40px_rgba(22,61,50,0.06)] transition duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_22px_55px_rgba(22,61,50,0.14)]">
      <Link
        href={project.href}
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-ssp-gold"
        aria-label={`View ${project.title} project`}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-ssp-cream">
          <Image
            src={getProjectImageSrc(project.cover.src)}
            alt={project.cover.alt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 600px"
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
          />
          <span className="absolute left-5 top-5 bg-ssp-green px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
            {project.projectNumber}
          </span>
          <span className="absolute bottom-4 right-4 bg-white/90 px-3 py-1.5 text-[10px] font-medium text-ssp-dark">
            {project.cover.caption}
          </span>
        </div>
        <div className="p-6 sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ssp-green">
            {project.category}
          </p>
          <h3 className="mt-3 font-display text-3xl text-ssp-dark sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 flex items-start gap-2 text-sm text-gray-600">
            <MapPin size={17} className="mt-0.5 shrink-0 text-ssp-gold" aria-hidden="true" />
            {project.location}
          </p>
          <p className="mt-5 line-clamp-2 text-sm leading-7 text-gray-600">
            {project.description}
          </p>
          <span className="mt-7 inline-flex min-h-11 items-center gap-3 border-b border-ssp-gold pb-1 text-sm font-bold text-ssp-green transition-colors group-hover:text-ssp-dark">
            View Project
            <ArrowUpRight size={17} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
