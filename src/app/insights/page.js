import Link from 'next/link';
import { ArrowUpRight, Route, Factory, MapPin, BookOpen, FileCheck2, Trees } from 'lucide-react';
import InsightLibrary from '@/components/insights/InsightLibrary';
import { CentralParkDiscovery, EditorialHeading, EditorialLink, InsightImage, InsightsFinalCTA } from '@/components/insights/InsightPrimitives';
import { insights, insightCategories, formatInsightDate } from '@/data/insights';

export const metadata = {
  title: 'Property & Regional Growth Insights',
  description: 'Explore practical guides to NH-65 connectivity, NIMZ Zaheerabad, plot buying and residential layouts. Discover Central Park at Kohir X Roads.',
  alternates: { canonical: '/insights' },
  openGraph: { title: 'SSP Insights — Understand the Locations. Discover the Opportunities.', description: 'A thoughtful starting point for property decisions around Kohir, NH-65 and Zaheerabad.', url: '/insights', images: [{ url: '/images/CentralPark.png', alt: 'Central Park site at Kohir X Roads' }] },
};

const resources = [
  { Icon: BookOpen, title: 'Plot buying checklist', text: 'Prepare the questions before you commit.', slug: 'plot-buying-document-checklist' },
  { Icon: FileCheck2, title: 'Documentation guide', text: 'Match the seller, plot and supporting records.', slug: 'plot-buying-document-checklist' },
  { Icon: FileCheck2, title: 'Layout approval guide', text: 'Go beyond the approval label.', slug: 'understanding-layout-approval' },
  { Icon: MapPin, title: 'Location evaluation', text: 'Check the route, surroundings and everyday use.', slug: 'buying-land-near-nh-65' },
];
const spotlight = [
  { Icon: Route, status: 'EXISTING NETWORK', title: 'NH-65 & local access', text: 'The highway is regional context. Inspect the actual route and documented access to each property.', href: '/insights/buying-land-near-nh-65' },
  { Icon: Factory, status: 'OFFICIAL PROJECT / PHASED DELIVERY', title: 'Zaheerabad industrial node', text: 'NICDC describes the node within the Hyderabad–Nagpur Industrial Corridor. Its NH-65 greenfield connection is described as under construction.', href: '/insights/nimz-zaheerabad' },
  { Icon: Trees, status: 'PRIVATE RESIDENTIAL CONTEXT', title: 'Kohir X Roads', text: 'Evaluate residential layouts on their own documents, services and site conditions. Central Park is independent of NIMZ.', href: '/projects/central-park#connectivity' },
];
const faqs = [
  ['Does highway proximity guarantee a good plot?', 'No. Check legal access, surrounding uses, land-use position, noise and daily convenience for the exact property.'],
  ['Does NIMZ guarantee nearby property appreciation?', 'No. Industrial development is regional context. Demand, delivery, competing supply and the individual property all matter; returns are not guaranteed.'],
  ['Where can I inspect the Central Park layout?', 'Open the Central Park project page and its master plan viewer. Ask the team for the sanctioned drawing, current approval status and site infrastructure information.'],
  ['Is layout approval the same as title verification?', 'These address different questions. Have an independent property lawyer examine ownership and other interests, and separately verify the applicable planning and RERA position.'],
];

export default function InsightsPage() {
  const featured = insights[0];
  return <div className="bg-ssp-cream">
    <InsightLibrary>
      <section className="bg-white py-16 md:py-24"><div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12"><p className="mb-6 text-[10px] font-bold uppercase tracking-[0.22em] text-[#85652F]">FEATURED INSIGHT</p><article className="grid items-stretch lg:grid-cols-[1.3fr_1fr]">
        <Link href={`/insights/${featured.slug}`} aria-label={`Read: ${featured.title}`} className="group relative min-h-72 overflow-hidden sm:min-h-96"><InsightImage src={featured.image} alt={featured.alt} sizes="(min-width: 1024px) 55vw, 100vw" className="transition-transform duration-500 motion-safe:group-hover:scale-105" /></Link>
        <div className="flex flex-col justify-center bg-[#EDE9DE] p-7 sm:p-10 lg:p-12"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#85652F]">LOCATION & CONNECTIVITY</p><h2 className="mt-5 font-display text-3xl leading-tight text-ssp-green sm:text-4xl">{featured.title}</h2><p className="mt-5 text-sm leading-7 text-gray-600">{featured.description}</p><p className="mt-5 text-xs text-gray-500">{featured.readingTime} min read · <time dateTime={featured.published}>{formatInsightDate(featured.published)}</time></p><div className="mt-5"><EditorialLink href={`/insights/${featured.slug}`}>Read article</EditorialLink></div></div>
      </article></div></section>
      <section className="border-b border-ssp-green/10 py-16 md:py-20"><div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12"><EditorialHeading eyebrow="FOLLOW YOUR CURIOSITY" title="Explore the questions that matter." /><div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{insightCategories.map((category) => <Link href={`/insights/${insights.find((article) => article.category === category.id).slug}`} key={category.id} className="group"><div className="relative aspect-[4/3] overflow-hidden"><InsightImage src={category.image} alt={category.alt} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="transition-transform duration-500 motion-safe:group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /><ArrowUpRight aria-hidden="true" size={22} className="absolute bottom-5 right-5 text-white" /></div><h3 className="mt-5 font-display text-2xl text-ssp-green group-hover:underline">{category.name}</h3><p className="mt-3 text-sm leading-6 text-gray-600">{category.description}</p></Link>)}</div></div></section>
    </InsightLibrary>

    <section className="overflow-hidden bg-[#102A23] py-16 text-white md:py-24"><div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12"><div className="grid gap-12 lg:grid-cols-[1fr_1fr]"><div><EditorialHeading light eyebrow="REGIONAL GROWTH SPOTLIGHT" title="One region. Several stories to understand." description="Read Hyderabad–Zaheerabad through its connections, industrial context and the questions that matter for residential living." /><div className="mt-7"><EditorialLink href="/insights/nimz-zaheerabad" light>Understand the NIMZ context</EditorialLink></div></div><div className="relative min-h-72 overflow-hidden border border-white/15"><InsightImage src="/images/nimz-1.jpeg" alt="Illustrative image of the Zaheerabad industrial development context" sizes="(min-width: 1024px) 50vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#102A23]/90 to-transparent" /><p className="absolute bottom-6 left-6 right-6 font-display text-2xl">Regional development needs a local perspective.</p></div></div>
      <div className="mt-12 grid border-y border-white/20 md:grid-cols-3">{spotlight.map(({ Icon, status, title, text, href }) => <div key={title} className="border-b border-white/15 px-0 py-8 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"><Icon className="mb-5 text-[#E5C78E]" size={27} strokeWidth={1.3} aria-hidden="true" /><p className="text-[9px] font-bold tracking-widest text-[#E5C78E]">{status}</p><h3 className="mt-3 font-display text-2xl">{title}</h3><p className="mt-4 text-sm leading-7 text-white/70">{text}</p><div className="mt-4"><EditorialLink href={href} light>Explore the context</EditorialLink></div></div>)}</div>
      <p className="mt-6 max-w-4xl text-xs leading-6 text-white/60">Proposed infrastructure: NICDC references the proposed Regional Ring Road; this is not presented here as an operational connection. Status descriptions reflect the <a href="https://nicdc.in/projects/12-new-projects/zaheerabad-telangana" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">official NICDC overview</a> checked on 14 November 2026. Recheck the latest authority updates before relying on future delivery.</p>
    </div></section>
    <CentralParkDiscovery />
    <section className="bg-white py-16 md:py-24"><div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12"><EditorialHeading eyebrow="INVESTMENT KNOWLEDGE" title="A little preparation. Better questions." description="Practical reading to help you organise a site visit and a conversation with independent advisers." /><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{resources.map(({ Icon, title, text, slug }) => <Link key={title} href={`/insights/${slug}`} className="group border-t-2 border-ssp-gold bg-ssp-cream p-6"><Icon size={24} strokeWidth={1.4} className="text-ssp-green" aria-hidden="true" /><h3 className="mt-6 font-display text-2xl text-ssp-green group-hover:underline">{title}</h3><p className="mt-3 text-sm leading-6 text-gray-600">{text}</p><ArrowUpRight size={19} className="mt-5 text-ssp-green" aria-hidden="true" /></Link>)}</div><div className="mt-14 grid gap-8 border-t border-ssp-green/15 pt-10 lg:grid-cols-[0.7fr_1.3fr]"><h3 className="font-display text-3xl text-ssp-green">Questions before<br />the next step.</h3><div>{faqs.map(([question, answer]) => <details key={question} className="border-b border-ssp-green/15 py-5"><summary className="cursor-pointer text-sm font-semibold leading-6 text-ssp-green">{question}</summary><p className="mt-3 text-sm leading-7 text-gray-600">{answer}</p>{question.includes('Central Park') && <EditorialLink href="/projects/central-park#master-plan">View the master plan</EditorialLink>}</details>)}</div></div></div></section>
    <InsightsFinalCTA />
  </div>;
}
