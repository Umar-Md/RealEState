import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Compass, MapPin } from 'lucide-react';
import { projectsData } from '@/data/projectsData';
import ProjectCard from '@/components/projects/ProjectCard';
import { getProjectImageSrc } from '@/lib/project-image';

export default function ProjectsSection() {
  return (
    <>
      <header className="relative isolate overflow-hidden bg-[#102A23] pb-16 pt-40 text-[#F7F5EF] sm:pb-24 sm:pt-48">
        <Image
          src={getProjectImageSrc('/images/architecture/photo-1487958449943-2429e8be8625-1920.webp')}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#081B14]/95 via-[#102A23]/80 to-[#102A23]/45" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#102A23]/80 via-transparent to-black/15" />
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="mb-12 flex items-center gap-3 text-xs text-[#B9C7BD]">
            <Link href="/" className="underline-offset-4 hover:text-white hover:underline">Home</Link><span aria-hidden="true">/</span><span aria-current="page" className="text-[#E7C887]">Projects</span>
          </nav>
          <div className="grid items-end gap-12 lg:grid-cols-[1.5fr_0.75fr] lg:gap-16">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#E7C887]"><span aria-hidden="true" className="h-px w-8 bg-[#C6A15B]" />THE SSP COLLECTION</p>
              <h1 className="mt-6 font-display text-5xl leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">Good decisions<br />begin with <span className="italic text-[#E7C887]">place.</span></h1>
              <p className="mt-8 max-w-lg text-base leading-8 text-[#C0CCC4]">Explore our flagship residential project and the regional context around it. Thoughtful places. A clearer perspective.</p>
              <Link href="#featured-projects" className="mt-8 inline-flex min-h-12 items-center gap-4 rounded-xl bg-[#C6A15B] px-6 py-3 text-sm font-bold text-[#102A23] transition-colors hover:bg-[#E7C887] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E7C887]">Discover the collection <ArrowDown size={16} aria-hidden="true" /></Link>
            </div>
            <aside className="pt-8 lg:pb-2">
              <Compass size={32} strokeWidth={1.2} aria-hidden="true" className="text-[#E7C887]" />
              <p className="mt-6 font-display text-2xl leading-snug">The location is only<br />the beginning.</p>
              <p className="mt-4 max-w-xs text-sm leading-7 text-[#C0CCC4]">Look closer at the layout, the surroundings and the details that make a property decision your own.</p>
              <div className="mt-8 flex items-center gap-2 text-xs text-[#E7C887]"><MapPin size={15} aria-hidden="true" />Telangana, India</div>
            </aside>
          </div>
        </div>
      </header>

      <section id="featured-projects" className="scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-[#173D33]/15 pb-8 dark:border-white/15 sm:mb-12 sm:flex-row sm:items-end">
            <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#765724] dark:text-[#E7C887]">A PLACE TO START</p><h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">Find your perspective.</h2></div>
            <p className="max-w-sm text-sm leading-7 text-[#59645D] dark:text-[#C0CCC4]">A residential address to explore.<br />An industrial region to understand.</p>
          </div>
          <div className="space-y-8">
            {projectsData.map((project) => <ProjectCard key={project.id} project={project} featured={project.id === 'central-park'} />)}
          </div>
          <p className="mt-6 max-w-3xl text-xs leading-6 text-[#59645D] dark:text-[#C0CCC4]">Central Park is a private residential development, independent of NIMZ. The NIMZ overview provides regional information and does not represent industrial allotments or government affiliation.</p>
        </div>
      </section>

      <section className="border-t border-[#173D33]/10 bg-[#ECE9DF] py-16 dark:border-white/10 dark:bg-[#12271F] sm:py-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-6 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-12">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#765724] dark:text-[#E7C887]">FROM EXPLORING TO EXPERIENCING</p><h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">See the place. Ask the questions.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-[#59645D] dark:text-[#C0CCC4]">A conversation can help you understand the location, review project details and plan a visit to Central Park.</p></div>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
            <Link href="/booking" className="inline-flex min-h-12 w-full items-center justify-center gap-4 rounded-xl bg-[#173D33] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[#285646] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#967130] dark:bg-[#C6A15B] dark:text-[#102A23] dark:hover:bg-[#E7C887] sm:w-auto">Plan a site visit <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link href="/contact#enquiry" className="inline-flex min-h-12 items-center justify-center gap-2 text-sm font-semibold underline-offset-4 hover:underline">Talk to our team <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
