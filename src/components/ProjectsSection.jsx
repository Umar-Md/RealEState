import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { projectsData } from '@/data/projectsData';
import ProjectCard from '@/components/projects/ProjectCard';

export default function ProjectsSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-ssp-green pb-16 pt-36 text-white sm:pb-20 lg:pb-24">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" aria-hidden="true" />
        <div className="absolute -right-8 -top-16 h-64 w-64 rounded-full border border-ssp-gold/30" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-ssp-gold">
            SWAYAM SAMPADA PROPERTIES · PROJECT PORTFOLIO
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Two distinct opportunities. One considered portfolio.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Explore a residential plotted township and a separate industrial development overview in Telangana.
          </p>
          <Link href="#featured-projects" className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white underline decoration-ssp-gold underline-offset-4 hover:text-ssp-gold">
            Explore projects <ArrowDown size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section id="featured-projects" className="scroll-mt-24 bg-ssp-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ssp-green">MY PROJECTS</p>
              <h2 className="mt-3 font-display text-3xl text-ssp-dark sm:text-4xl">Explore our projects</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-gray-600">
              Each project has its own details, imagery and enquiry path. Regional industrial context is kept separate from Central Park’s residential project information.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {projectsData.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </div>
      </section>
    </>
  );
}
