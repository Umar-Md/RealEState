import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, MapPin, Route, Trees, LayoutGrid } from 'lucide-react';
import { getProjectImageSrc } from '@/lib/project-image';
import ProjectBadge from './ProjectBadge';

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#173D33]/10 bg-white shadow-[0_8px_32px_-16px_rgba(23,61,51,0.15)] transition-shadow duration-300 hover:shadow-[0_16px_48px_-16px_rgba(23,61,51,0.22)] dark:border-white/10 dark:bg-[#152D25] motion-reduce:transition-none">
      <div className={`grid ${featured ? 'lg:grid-cols-[1.15fr_1fr]' : 'md:grid-cols-[0.85fr_1.15fr]'}`}>
        <Link
          href={project.href}
          aria-label={`Explore ${project.title}`}
          className={`relative block overflow-hidden bg-[#244B3C] focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#E7C887] ${featured ? 'min-h-72 sm:min-h-96 lg:min-h-[520px]' : 'min-h-64 md:min-h-80'}`}
        >
          <Image
            src={getProjectImageSrc(project.cover.src)}
            alt={project.cover.alt}
            fill
            priority={featured}
            sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025] motion-reduce:transition-none"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/15" />
          <div className="absolute left-6 top-6"><ProjectBadge project={project} /></div>
          <span className="absolute bottom-6 right-6 grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-md transition-colors group-hover:bg-[#C6A15B] group-hover:text-[#173D33]">
            <ArrowUpRight size={22} aria-hidden="true" />
          </span>
        </Link>

        <div className={`flex min-w-0 flex-col justify-center p-8 ${featured ? 'sm:p-12' : 'lg:p-12'}`}>
          <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#765724] dark:text-[#E7C887]">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#B48A42]" />
            {featured ? 'Flagship residential project' : 'Regional perspective'}
          </p>
          <h3 className={`mt-4 font-display leading-[1.08] tracking-tight ${featured ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'}`}>
            <Link href={project.href} className="decoration-[#C6A15B] underline-offset-8 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A15B]">{project.title}</Link>
          </h3>
          <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-[#59645D] dark:text-[#C0CCC4]">
            <MapPin size={16} className="mt-1 shrink-0 text-[#967130] dark:text-[#E7C887]" aria-hidden="true" />
            {project.location}
          </p>
          <p className="mt-6 text-sm leading-8 text-[#59645D] dark:text-[#C0CCC4]">
            {featured
              ? 'A residential plotted township at Kohir X Roads. Discover the location, explore the supplied master plan and get a closer understanding of the place you could call your own.'
              : 'Understand the industrial ecosystem around Zaheerabad, its regional connections and the factors shaping development. A regional overview, separate from our residential project.'}
          </p>

          {featured && (
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-[#173D33]/10 py-6 dark:border-white/10">
              {[
                { Icon: Route, label: 'NH-65 location' },
                { Icon: LayoutGrid, label: 'Master plan' },
                { Icon: Trees, label: 'Planned spaces' },
              ].map(({ Icon, label }) => (
                <div key={label}><Icon size={20} strokeWidth={1.5} aria-hidden="true" className="mb-3 text-[#967130] dark:text-[#E7C887]" /><p className="text-xs leading-5">{label}</p></div>
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href={project.href} className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-xl px-6 py-3 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A15B] ${featured ? 'w-full bg-[#173D33] text-white hover:bg-[#285646] dark:bg-[#C6A15B] dark:text-[#102A23] dark:hover:bg-[#E7C887] sm:w-auto' : 'border border-[#173D33]/20 hover:bg-[#F7F5EF] dark:border-white/25 dark:hover:bg-white/5'}`}>
              {featured ? 'Explore Central Park' : 'Explore the region'}
              <ArrowRight size={17} aria-hidden="true" className="transition-transform motion-safe:group-hover:translate-x-1 motion-reduce:transition-none" />
            </Link>
            {featured && <Link href={`${project.href}#master-plan`} className="inline-flex min-h-12 items-center gap-2 text-sm text-[#59645D] underline-offset-4 hover:underline dark:text-[#C0CCC4]">View master plan <ArrowUpRight size={15} aria-hidden="true" /></Link>}
          </div>
        </div>
      </div>
    </article>
  );
}
