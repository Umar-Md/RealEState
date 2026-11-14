import Link from 'next/link';
import { House, Store, Factory } from 'lucide-react';

export default function CorridorGrowth() {
  const items = [
    { Icon: Factory, title: 'Industrial activity', text: 'Manufacturing, engineering and supplier businesses can bring employees, contractors and service providers into the wider Zaheerabad region.' },
    { Icon: House, title: 'Residential growth', text: 'As employment and services develop, households may look for places to live and build. Central Park offers residential plots for buyers considering a future home in this corridor.' },
    { Icon: Store, title: 'Commercial growth', text: 'An expanding working and residential population can support shops, food outlets, everyday services and logistics businesses across the region. This is regional context; Central Park is presented as a residential township.' },
  ];
  return (
    <div className="space-y-5">
      <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#85652F]">Residential &amp; commercial growth</p><h3 className="mt-3 font-display text-3xl text-[#163D32]">Industry brings activity. Communities create a place.</h3><p className="mt-4 text-sm leading-7 text-[#46534C]">The guide connects industrial investment with potential demand for housing and everyday services. Central Park offers buyers a planned residential setting within that wider regional story.</p></div>
      {items.map(({ Icon, title, text }) => <div key={title} className="rounded-xl border border-[#163D32]/10 bg-white p-5 sm:p-6"><div className="flex items-center gap-3 text-[#163D32]"><Icon size={23} className="text-[#A7803E]" aria-hidden="true" /><h4 className="font-semibold">{title}</h4></div><p className="mt-3 text-sm leading-7 text-[#46534C]">{text}</p></div>)}
      <div className="rounded-xl bg-[#163D32] p-6 text-white"><h4 className="font-display text-2xl">Explore Central Park with SSP</h4><p className="mt-3 text-sm leading-7 text-white/80">Start with the location, review the plot layout and approvals, then ask our team about current availability and a site visit.</p><div className="mt-5 flex flex-wrap gap-4"><Link href="/projects/central-park#master-plan" className="inline-flex min-h-12 items-center bg-[#E5C98F] px-5 text-sm font-bold text-[#163D32]">View Central Park layout</Link><Link href="/contact#enquiry" className="inline-flex min-h-12 items-center border border-white/40 px-5 text-sm font-semibold">Ask about available plots</Link></div></div>
      <p className="text-xs leading-6 text-gray-500">Growth themes: SSP investment guide, pages 2 and 5. Demand depends on actual development and local market conditions; appreciation and rental returns are not guaranteed. Central Park is a separate private residential project with no represented NIMZ or government affiliation.</p>
    </div>
  );
}
