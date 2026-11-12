import Link from 'next/link';
import PageHero from '../../../components/common/PageHero';
import SectionHeading from '../../../components/common/SectionHeading';
import { ProjectNavigation } from '../../../components/CentralParkShared';
import { conceptDrivers, regionalFacts } from '../../../data/centralParkData';
import { projectsData } from '../../../data/projectsData';

export const metadata = {
  title: 'Central Park Venture | Concept Note & Key Facts',
  description: 'Central Park project snapshot, concept, and regional NIMZ Zaheerabad facts from the supplied project concept note.',
  alternates: { canonical: '/projects/concept-note' },
};

const project = projectsData[0];
const snapshot = [
  ['Project', `${project.title} — residential open-plot venture`],
  ['Location', project.location],
  ['Company', project.client],
  ['Marketed by', project.marketer],
  ['Developed by', 'SRR Infra Developers, Hyderabad – Telangana'],
  ['Target audience', project.audience],
];

export default function ConceptNotePage() {
  return (
    <>
      <PageHero eyebrow="CENTRAL PARK · CONCEPT NOTE & KEY FACTS" title="Understand the project. Explore the context."
        description="A residential open-plot venture in Zaheerabad, Sangareddy District, Telangana, and the regional growth story behind it."
        cta="View project overview" ctaHref="/projects" />
      <div className="bg-ssp-cream">
        <div className="mx-auto max-w-[1280px] px-5 py-10 sm:px-8 lg:px-12">
          <ProjectNavigation concept />
          <section className="grid gap-8 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-20" aria-label="Project snapshot">
            <SectionHeading eyebrow="PROJECT SNAPSHOT" title="Central Park at a glance" description="The project company, development partners, location, and intended audience, as outlined in the supplied concept note." />
            <dl className="divide-y divide-ssp-green/15 border-y border-ssp-green/15">
              {snapshot.map(([label, value]) => (
                <div key={label} className="grid gap-2 py-4 sm:grid-cols-[140px_1fr] sm:gap-5">
                  <dt className="text-sm font-semibold text-ssp-green">{label}</dt>
                  <dd className="min-w-0 text-sm leading-7 text-gray-600">{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>
      <section className="py-16 lg:py-24" aria-label="Concept in brief">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="CONCEPT IN BRIEF" title="A changing region. An informed decision." />
          <p className="mt-6 max-w-4xl text-base leading-8 text-gray-600">Central Park is a residential open-plot venture at Zaheerabad. The concept note describes the region as shifting from a farming-led area toward an <strong className="font-semibold text-ssp-dark">industry-led growth zone</strong>, with housing and land demand following jobs, investment, and infrastructure. The venture is positioned for buyers who want to understand the surrounding development and regional growth figures before deciding.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {conceptDrivers.map(([title, description], index) => (
              <div key={title} className="border border-ssp-green/15 border-t-2 border-t-ssp-gold p-6">
                <span className="text-xs font-bold text-ssp-green">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-2xl text-ssp-dark">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ssp-cream py-16 lg:py-24" aria-label="Regional NIMZ growth figures">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="THE GROWTH STORY" title="NIMZ Zaheerabad at a glance" description="Regional figures presented in the supplied concept note." />
          <dl className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {regionalFacts.map(([value, description]) => (
              <div key={value} className="flex flex-col border border-ssp-green/15 bg-white p-6 sm:p-8">
                <dt className="order-2 mt-4 text-sm leading-7 text-gray-600">{description}</dt>
                <dd className="order-1 font-display text-3xl text-ssp-green sm:text-4xl">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 max-w-4xl border-l-2 border-ssp-gold pl-5 text-sm leading-7 text-gray-600">
            <p><strong className="font-semibold text-ssp-dark">Source context.</strong> The concept note cites a news report dated 9 April 2026 (Hyderabad). It states that the NIMZ concept was introduced by the Centre in 2013 and that the project has officially commenced.</p>
            <p className="mt-3">{project.metricsNote} Land value outcomes depend on execution and timelines; appreciation is not guaranteed.</p>
          </div>
          <div className="mt-12 flex flex-col gap-5 border-t border-ssp-green/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/projects" className="inline-flex min-h-12 items-center justify-center bg-ssp-green px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-ssp-dark/90">View project overview →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
