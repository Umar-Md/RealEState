import Link from 'next/link';
import { Route, Plane, TrainFront, Factory, ArrowUpRight } from 'lucide-react';
import SectionShell from '../SectionShell';
import NimzLocationMap from '../NimzLocationMap';

const connections = [
  { number: '01', Icon: Route, label: 'THE HIGHWAY ADVANTAGE', title: 'NH-65 connectivity', detail: 'Hyderabad to Pune. A wider industrial network.', bullets: ['Highway connectivity through Zaheerabad', 'Access towards Mumbai and its logistics network', 'A regional base for manufacturing and suppliers'] },
  { number: '02', Icon: Plane, label: 'THE CITY CONNECTION', title: '80 km from Hyderabad', detail: 'A regional connection to the city and beyond.', bullets: ['Hyderabad international airport: 120 km', 'Bidar Airport: 25 km', 'Access to the wider Hyderabad business ecosystem'] },
  { number: '03', Icon: TrainFront, label: 'THE RAIL CONNECTION', title: '14 km to Zaheerabad station', detail: 'Road and rail come together in one region.', bullets: ['Connection to the South Central Railway network', 'Regional passenger and freight connections', 'Rail access alongside the NH-65 corridor'] },
];

export default function StrategicLocationSection() {
  return (
    <SectionShell id="strategic-location" cream>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#85652F]">LOCATION ADVANTAGE / ZAHEERABAD</p><h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-[#163D32] sm:text-6xl">The golden triangle<br />of <span className="text-[#967130]">location.</span></h2></div>
          <p className="max-w-lg text-base leading-8 text-[#46534C]">Highway reach. City access. Railway connections. Discover the three connections highlighted in SSP's investment guide, and the regional setting around Central Park.</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-3xl bg-[#163D32] px-4 pb-8 pt-5 text-white sm:px-8">
            <p className="pt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#E5C98F]">Three connections. One region.</p>
            <svg viewBox="0 0 600 490" className="mx-auto mt-4 w-full max-w-xl" role="img" aria-label="Triangle connecting NH-65, Hyderabad and airports, and Zaheerabad railway station, with NIMZ at the centre">
              <path d="M 100 110 L 500 110 L 300 405 Z" fill="#FFFFFF" fillOpacity="0.035" stroke="#D5B16D" strokeWidth="3" />
              <path d="M 100 110 L 300 230 L 500 110 M 300 230 L 300 405" fill="none" stroke="#D5B16D" strokeOpacity="0.5" strokeDasharray="5 8" />
              {[[100,110,'01'],[500,110,'02'],[300,405,'03']].map(([x,y,n]) => <g key={n}><circle cx={x} cy={y} r="39" fill="#E5C98F" /><text x={x} y={Number(y)+10} textAnchor="middle" fill="#163D32" fontSize="28" fontWeight="700">{n}</text></g>)}
              <circle cx="300" cy="230" r="67" fill="#163D32" stroke="#D5B16D" strokeWidth="2" />
              <text x="300" y="240" textAnchor="middle" fill="white" fontSize="34" fontWeight="800">NIMZ</text>
              <text x="100" y="43" textAnchor="middle" fill="white" fontSize="21" fontWeight="600">NH-65</text>
              <text x="500" y="36" textAnchor="middle" fill="white" fontSize="20" fontWeight="600">Hyderabad</text>
              <text x="500" y="62" textAnchor="middle" fill="#E5C98F" fontSize="17">&amp; airports</text>
              <text x="300" y="472" textAnchor="middle" fill="white" fontSize="21" fontWeight="600">Zaheerabad railway</text>
            </svg>
            <div className="flex items-start gap-3 border-t border-white/15 pt-5"><Factory size={22} className="shrink-0 text-[#E5C98F]" aria-hidden="true" /><p className="text-sm leading-7 text-white/80">Where geography meets opportunity: the Hyderabad-Mumbai industrial region.</p></div>
          </div>
          <div className="space-y-4">{connections.map(({ number, Icon, label, title, detail, bullets }) => <article key={number} className="rounded-2xl border border-[#163D32]/10 bg-white p-5 sm:p-7"><div className="flex items-start gap-4"><span className="font-display text-4xl text-[#967130]">{number}</span><div className="min-w-0 flex-1"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#85652F]">{label}</p><h3 className="mt-2 font-display text-2xl text-[#163D32]">{title}</h3></div><Icon size={25} className="shrink-0 text-[#85652F]" aria-hidden="true" /></div><p className="mt-4 text-sm font-medium leading-7 text-[#46534C]">{detail}</p><ul className="mt-3 space-y-2">{bullets.map(bullet => <li key={bullet} className="flex gap-3 text-sm leading-6 text-[#59645D]"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B48A42]" />{bullet}</li>)}</ul></article>)}</div>
        </div>
        <p className="mt-5 text-xs leading-6 text-[#59645D]">Source: SSP investment guide, page 2. Distances are quoted regional references, not measurements from Central Park. Diagram is conceptual and not to scale; airport references do not confirm current flight services.</p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <NimzLocationMap />
          <div className="rounded-2xl bg-[#163D32] p-7 text-white sm:p-10"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E5C98F]">YOUR RESIDENTIAL OPPORTUNITY</p><h3 className="mt-5 font-display text-4xl">See the corridor.<br />Discover Central Park.</h3><p className="mt-6 text-base leading-8 text-white/80">Central Park is SSP's residential plotted township at Chilkepalli, in the Kohir X Roads area. Explore a place to build within the wider NH-65 industrial region.</p><p className="mt-4 text-sm leading-7 text-white/75">Review the layout, discuss current plot availability and experience the access and surroundings on a site visit.</p><div className="mt-7 flex flex-wrap gap-4"><Link href="/booking" className="inline-flex min-h-12 items-center gap-3 bg-[#E5C98F] px-5 text-sm font-bold text-[#163D32]">Plan a site visit <ArrowUpRight size={17} /></Link><Link href="/projects/central-park" className="inline-flex min-h-12 items-center border-b border-[#E5C98F] text-sm font-semibold">Explore Central Park</Link></div><p className="mt-7 border-t border-white/15 pt-5 text-xs leading-6 text-white/65">Central Park is a separate private residential development with no represented NIMZ or government affiliation.</p></div>
        </div>
      </div>
    </SectionShell>
  );
}
