import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { getProjectImageSrc } from '@/lib/project-image';
import { centralParkProject } from '@/data/projects/centralPark';
import { getInsightCategory, formatInsightDate } from '@/data/insights';

export function InsightImage({ src, alt, sizes = '100vw', priority = false, className = '' }) {
  return <Image src={getProjectImageSrc(src)} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} />;
}

export function EditorialHeading({ eyebrow, title, description, light = false }) {
  return <div className="max-w-2xl"><p className={`mb-4 text-[10px] font-bold uppercase tracking-[0.22em] ${light ? 'text-[#E5C78E]' : 'text-[#85652F]'}`}>{eyebrow}</p><h2 className={`font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-ssp-green'}`}>{title}</h2>{description && <p className={`mt-5 text-sm leading-7 sm:text-base ${light ? 'text-white/70' : 'text-gray-600'}`}>{description}</p>}</div>;
}

export function EditorialLink({ href, children, light = false }) {
  return <Link href={href} className={`inline-flex min-h-11 items-center gap-3 border-b py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${light ? 'border-ssp-gold text-[#E5C78E] hover:text-white' : 'border-ssp-gold text-ssp-green hover:text-[#85652F]'}`}>{children}<ArrowUpRight size={17} aria-hidden="true" /></Link>;
}

export function InsightCard({ article, large = false }) {
  return <article className={`group border-b border-ssp-green/15 pb-7 ${large ? 'md:row-span-2' : ''}`}>
    <Link href={`/insights/${article.slug}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
      <div className={`relative overflow-hidden bg-ssp-green/10 ${large ? 'aspect-[4/3] lg:aspect-[5/4]' : 'aspect-[16/9]'}`}><InsightImage src={article.image} alt={article.alt} sizes={large ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 33vw, 100vw'} className="transition-transform duration-500 motion-safe:group-hover:scale-105" /><span className="absolute bottom-4 left-4 bg-ssp-cream px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-ssp-green">{getInsightCategory(article.category).name}</span></div>
      <div className="mt-5 flex items-center gap-3 text-xs text-gray-500"><span>{article.readingTime} min read</span><span aria-hidden="true">·</span><time dateTime={article.published}>{formatInsightDate(article.published)}</time></div>
      <h3 className={`mt-3 font-display leading-tight text-ssp-green group-hover:underline decoration-ssp-gold underline-offset-4 ${large ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>{article.title}</h3>
      <p className="mt-4 text-sm leading-7 text-gray-600">{article.description}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-ssp-green">Read article <ArrowUpRight size={15} aria-hidden="true" /></span>
    </Link>
  </article>;
}

export function CentralParkDiscovery({ title = 'Exploring Residential Opportunities Around Kohir X Roads?', masterPlan = true }) {
  return <section aria-label="Discover Central Park" className="bg-[#EDE9DE] py-16 md:py-24"><div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
    <EditorialHeading eyebrow="FROM RESEARCH TO A SITE VISIT" title={title} description="Put your location research into context. Explore Central Park, a residential plotted development at Kohir X Roads, NH-65, Telangana." />
    <div className="mt-10 grid gap-0 overflow-hidden bg-white lg:grid-cols-[1.15fr_1fr]">
      <div className="relative min-h-72 lg:min-h-[430px]"><InsightImage src={centralParkProject.cover.src} alt={centralParkProject.cover.alt} sizes="(min-width: 1024px) 55vw, 100vw" /></div>
      <div className="p-7 sm:p-10"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#85652F]">RESIDENTIAL PLOTTED DEVELOPMENT</p><h3 className="mt-3 font-display text-4xl text-ssp-green">Central Park</h3><p className="mt-4 flex items-start gap-2 text-sm leading-6 text-gray-600"><MapPin size={17} className="mt-1 shrink-0" aria-hidden="true" />{centralParkProject.location}</p><p className="mt-5 text-sm leading-7 text-gray-600">Explore the supplied layout showing internal roads, numbered plots and reserved park spaces. Compare the plan with the site and ask the team about infrastructure, maintenance and current documentation.</p><p className="mt-4 border-l-2 border-ssp-gold pl-4 text-xs leading-6 text-gray-500">Location and layout information come from SSP’s supplied project materials. Request the sanctioned plan, approval proceedings and current status for independent verification. Central Park is separate from NIMZ and has no represented government affiliation.</p><div className="mt-5 flex flex-wrap gap-x-6 gap-y-2"><EditorialLink href="/projects/central-park">Explore Central Park</EditorialLink><EditorialLink href="/booking">Plan a site visit</EditorialLink></div></div>
    </div>
    {masterPlan && <Link href="/projects/central-park#master-plan" className="group mt-6 grid items-center gap-6 border border-ssp-green/15 bg-ssp-cream p-5 sm:grid-cols-[240px_1fr] sm:p-7"><div className="relative aspect-[16/9] bg-white"><Image src={getProjectImageSrc(centralParkProject.masterPlan.src)} alt={centralParkProject.masterPlan.alt} fill sizes="(min-width: 640px) 240px, 100vw" className="object-contain" /></div><div><p className="text-[10px] font-bold uppercase tracking-widest text-[#85652F]">THE SUPPLIED BLUEPRINT</p><h3 className="mt-2 font-display text-2xl text-ssp-green">Start with the master plan.</h3><p className="mt-2 text-sm leading-6 text-gray-600">Open the project’s interactive viewer to inspect the layout. Confirm the drawing and approval status with the project team.</p><span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-ssp-green group-hover:underline">View project master plan <ArrowUpRight size={16} aria-hidden="true" /></span></div></Link>}
  </div></section>;
}

export function InsightsFinalCTA() {
  return <section className="bg-ssp-green py-16 text-white md:py-24"><div className="mx-auto grid max-w-[1280px] items-end gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-12"><EditorialHeading light eyebrow="YOUR NEXT STEP" title="Make Your Next Property Decision an Informed One." description="Explore our projects, understand the locations and speak with our team." /><div className="flex flex-wrap gap-4"><Link href="/projects/central-park" className="inline-flex min-h-12 items-center gap-3 bg-ssp-gold px-6 py-3 text-sm font-bold text-ssp-green hover:bg-white">Explore Central Park<ArrowUpRight size={16} aria-hidden="true" /></Link><EditorialLink href="/contact" light>Contact our team</EditorialLink></div></div></section>;
}
