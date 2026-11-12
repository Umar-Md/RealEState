import Link from 'next/link';
import { projectsData } from '../data/projectsData';

export function ProjectNavigation({ concept = false }) {
  return (
    <nav aria-label="Central Park pages" className="flex flex-wrap gap-3 border-b border-ssp-green/15 pb-6 text-sm font-semibold text-ssp-green">
      {[
        ['/projects', 'Project overview', !concept],
        ['/projects/concept-note', 'Concept note & key facts', concept],
      ].map(([href, label, active]) => (
        <Link key={href} href={href} aria-current={active ? 'page' : undefined}
          className={`inline-flex min-h-11 items-center border px-4 py-2 transition-colors ${active ? 'border-ssp-green bg-ssp-green text-white' : 'border-ssp-green/20 hover:border-ssp-gold hover:bg-white'}`}>
          {label}
        </Link>
      ))}
    </nav>
  );
}

export function PartnerCards() {
  const project = projectsData[0];
  const partners = [
    ['Project company', project.client, 'Residential open-plot venture'],
    ['Marketed by', project.marketer, 'Research and strategy'],
    ['Developed by', 'SRR Infra Developers', 'Hyderabad, Telangana'],
  ];
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-3">
      {partners.map(([role, name, description]) => (
        <div key={role} className="border border-ssp-green/15 border-t-2 border-t-ssp-gold bg-white p-6 sm:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ssp-green">{role}</p>
          <h3 className="mt-4 font-display text-2xl leading-tight text-ssp-dark">{name}</h3>
          <p className="mt-3 text-sm leading-7 text-gray-600">{description}</p>
        </div>
      ))}
    </div>
  );
}
