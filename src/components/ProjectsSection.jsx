import Link from 'next/link';
import { projectsData } from '../data/projectsData';
import PageHero from './common/PageHero';
import SectionHeading from './common/SectionHeading';
import { PartnerCards, ProjectNavigation } from './CentralParkShared';

const project = projectsData[0];
const details = [
  ['Property type', project.category],
  ['Location', project.location],
  ['Project period', project.timeline],
  ['Intended audience', project.audience],
];

export default function ProjectsSection() {
  return (
    <>
      <PageHero eyebrow="SSP PROPERTIES · FEATURED PROJECT" title={project.title}
        description={project.subtitle} cta="Explore project facts" ctaHref="/projects/concept-note" />
      <div className="bg-ssp-cream text-ssp-dark">
        <div className="mx-auto max-w-[1280px] px-5 py-10 sm:px-8 lg:px-12">
          <ProjectNavigation />
          <section className="grid gap-8 py-14 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:py-20" aria-label="Project introduction">
            <div>
              <SectionHeading eyebrow="RESIDENTIAL OPEN PLOTS" title="Explore the place. Understand the opportunity." />
              <p className="mt-6 text-base leading-8 text-gray-600">{project.summary}</p>
              <Link href="/projects/concept-note" className="mt-6 inline-flex min-h-11 items-center text-sm font-bold text-ssp-green underline decoration-ssp-gold underline-offset-4 hover:decoration-ssp-green">Read the project concept & regional growth facts →</Link>
            </div>
            <aside className="self-start border border-ssp-green/15 bg-white p-6 sm:p-8" aria-label="Project details">
              <h2 className="font-display text-2xl">Project details</h2>
              <dl className="mt-5 divide-y divide-ssp-green/15">
                {details.map(([label, value]) => (
                  <div key={label} className="py-4">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-ssp-green">{label}</dt>
                    <dd className="mt-2 text-sm leading-7 text-gray-600">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </section>
        </div>
      </div>
      <section className="py-16 lg:py-24" aria-label="Project context">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <SectionHeading eyebrow="LOCATION & GROWTH CONTEXT" title="A project within a changing region" />
          <div className="text-base leading-8 text-gray-600">
            <p>{project.context}</p>
            <p className="mt-5">{project.outlook}</p>
          </div>
        </div>
      </section>
      <section className="bg-ssp-cream py-16 lg:py-24" aria-label="Project partners">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="PROJECT PARTNERS" title="The team behind Central Park" />
          <PartnerCards />
        </div>
      </section>
    </>
  );
}
