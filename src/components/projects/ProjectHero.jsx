import Image from 'next/image';
import Link from 'next/link';
import { getProjectImageSrc } from '@/lib/project-image';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import ProjectBadge from './ProjectBadge';

export default function ProjectHero({ project }) {
  const heroImage = project.hero || project.cover;

  if (project.id === 'nimz-zaheerabad') {
    return (
      <section className="relative isolate overflow-hidden bg-[#BDD4DE] pt-32 text-[#10251F] sm:pt-40">
        <div className="absolute inset-x-0 bottom-0 -z-20 h-[65%]">
          <Image src={getProjectImageSrc(heroImage.src)} alt={heroImage.alt} fill priority sizes="100vw" className="object-cover object-center" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-[#BDD4DE] via-[#BDD4DE]/85 to-transparent" />
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em]">National Investment and Manufacturing Zone</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">Zaheerabad: Built for the New Industrial Era.</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 sm:text-lg">Strategic connections. A growing manufacturing region. Explore the industrial story shaping Zaheerabad and discover Central Park at Chilkepalli, Kohir X Roads.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="#project-details" className="inline-flex min-h-12 items-center gap-3 bg-[#163D32] px-5 text-sm font-semibold text-white">Explore the region <ArrowDown size={16} /></Link>
            <Link href="/projects/central-park" className="inline-flex min-h-12 items-center gap-3 border border-[#163D32]/40 bg-white/60 px-5 text-sm font-semibold">Discover Central Park <ArrowUpRight size={16} /></Link>
          </div>
          <div aria-hidden="true" className="mt-16 select-none text-center text-[clamp(6rem,26vw,25rem)] font-semibold leading-[0.85] tracking-[-0.055em] text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif', maskImage: 'linear-gradient(to bottom, black 35%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 35%, transparent 100%)' }}>NIMZ</div>
        </div>
      </section>
    );
  }

  if (project.id === 'central-park') {
    return (
      <section className="relative isolate overflow-hidden bg-[#10251F] pt-32 text-white sm:pt-40 lg:pt-44">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#C6A15B]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-16">
          <div>
            <ProjectBadge project={project} plain />
            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E5C98F]">SSP'S FLAGSHIP RESIDENTIAL TOWNSHIP</p>
            <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.06] tracking-tight sm:text-5xl xl:text-6xl">{project.headline}</h1>
            <p className="mt-6 max-w-lg text-sm leading-8 text-white/75 sm:text-base">{project.description}</p>
            <p className="mt-5 flex items-start gap-2 text-sm leading-6 text-[#E5C98F]"><MapPin size={18} className="mt-0.5 shrink-0" />{project.location}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#project-details" className="inline-flex min-h-12 items-center gap-3 rounded-sm bg-ssp-gold px-5 py-3 text-sm font-bold text-ssp-dark transition-colors hover:bg-white">Explore Central Park <ArrowDown size={16} /></Link>
              <Link href="/booking" className="inline-flex min-h-12 items-center gap-3 rounded-sm border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:border-ssp-gold hover:text-ssp-gold">Plan a site visit <ArrowUpRight size={16} /></Link>
            </div>
          </div>
          <figure className="min-w-0 lg:-translate-y-8">
            <a href={getProjectImageSrc(heroImage.src)} target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-2 shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ssp-gold sm:p-3" aria-label="View the full Central Park site photograph">
              <Image src={getProjectImageSrc(heroImage.src)} alt={heroImage.alt} width={2128} height={1152} priority sizes="(min-width: 1024px) 55vw, 100vw" className="h-auto w-full rounded-xl" />
              <span className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-[#10251F]/85 text-white transition-colors group-hover:bg-ssp-gold group-hover:text-ssp-dark"><ArrowUpRight size={20} aria-hidden="true" /></span>
            </a>
          </figure>
        </div>
        <div aria-hidden="true" className="pointer-events-none relative mx-auto mt-12 max-w-[1440px] select-none overflow-hidden px-5 text-center sm:mt-16 sm:px-10 lg:px-16">
          <div className="whitespace-nowrap text-[clamp(2.5rem,11.5vw,11rem)] font-semibold leading-none tracking-[-0.055em] text-transparent" style={{ fontFamily: 'Arial, Helvetica, sans-serif', WebkitTextStroke: '1px rgba(255,255,255,0.3)', maskImage: 'linear-gradient(to bottom, black 20%, rgba(0,0,0,0.4) 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 20%, rgba(0,0,0,0.4) 100%)' }}>CENTRAL PARK</div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate min-h-[740px] overflow-hidden bg-[#10251F] text-white lg:min-h-[850px]">
      <Image
        src={getProjectImageSrc(heroImage.src)}
        alt={heroImage.alt || project.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#071812]/95 via-[#10251F]/75 to-[#10251F]/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071812] via-transparent to-[#071812]/30" />

      <div className="relative mx-auto flex min-h-[740px] max-w-[1440px] flex-col justify-end px-5 pb-24 pt-40 sm:px-10 lg:min-h-[850px] lg:px-16 lg:pb-36">
        <div className="max-w-5xl">
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <ProjectBadge project={project} plain />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/85">
              {project.category}
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

    </section>
  );
}
