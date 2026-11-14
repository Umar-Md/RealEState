import Link from 'next/link';
import { insights, insightSources, getInsightCategory, formatInsightDate } from '@/data/insights';
import { CentralParkDiscovery, EditorialHeading, EditorialLink, InsightCard, InsightImage } from './InsightPrimitives';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
const absolute = (path) => `${siteUrl}${basePath}${path}`;

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="mt-1 h-5 w-5 shrink-0">
    <circle cx="10" cy="10" r="9" className="fill-ssp-gold/15 stroke-ssp-gold" strokeWidth="1.2" />
    <path d="M6 10.5l2.7 2.7L14 7.8" stroke="#85652F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MetaItem = ({ label, children }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">{label}</span>
    <span className="text-sm text-white/90">{children}</span>
  </div>
);

export default function InsightArticle({ article }) {
  const category = getInsightCategory(article.category);
  const related = insights.filter((item) => item.slug !== article.slug).sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category)).slice(0, 3);
  const url = absolute(`/insights/${article.slug}/`);
  const organization = { '@type': 'Organization', '@id': `${siteUrl}${basePath}/#organization`, name: 'Swayam Sampada Properties Pvt. Ltd.', url: absolute('/'), logo: { '@type': 'ImageObject', url: absolute('/images/ssp-logo.webp') } };
  const schema = {
    '@context': 'https://schema.org', '@graph': [organization, {
      '@type': 'Article', '@id': `${url}#article`, mainEntityOfPage: url, headline: article.title, description: article.description,
      image: [absolute(article.image)], datePublished: `${article.published}T09:00:00+05:30`, dateModified: `${article.updated}T09:00:00+05:30`,
      author: { '@type': 'Organization', name: article.author, url: absolute('/about') }, publisher: { '@id': organization['@id'] }, articleSection: category.name, inLanguage: 'en-IN',
      citation: article.sources.map((key) => insightSources[key].url),
    }, {
      '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: absolute('/') },
        { '@type': 'ListItem', position: 2, name: 'Insights', item: absolute('/insights/') },
        { '@type': 'ListItem', position: 3, name: article.title, item: url },
      ],
    }],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <article className="bg-ssp-cream">
      {/* HERO */}
      <header className="relative overflow-hidden bg-[#0B1F1A] pb-32 pt-36 text-white sm:pt-44 lg:pb-40">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-[#1E5546]/60 blur-[120px]" />
          <div className="absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-[#E5C78E]/15 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E5C78E]/50 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-xs leading-6 text-white/60">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span aria-hidden="true" className="text-white/30">/</span>
            <Link href="/insights" className="transition hover:text-white">Insights</Link>
            <span aria-hidden="true" className="text-white/30">/</span>
            <span aria-current="page" className="text-[#E5C78E]">{category.name}</span>
          </nav>

          <div className="inline-flex items-center gap-3 rounded-full border border-[#E5C78E]/30 bg-[#E5C78E]/10 px-4 py-1.5 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E5C78E]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E5C78E]">{category.name}</p>
          </div>

          <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">{article.title}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">{article.description}</p>

          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-4">
            <MetaItem label="Written by"><Link href="/about" className="text-[#E5C78E] underline-offset-4 hover:underline">{article.author}</Link></MetaItem>
            <MetaItem label="Published"><time dateTime={article.published}>{formatInsightDate(article.published)}</time></MetaItem>
            <MetaItem label="Updated"><time dateTime={article.updated}>{formatInsightDate(article.updated)}</time></MetaItem>
            <MetaItem label="Reading time">{article.readingTime} min read</MetaItem>
          </div>
        </div>
      </header>

      {/* FEATURE IMAGE (overlaps hero) */}
      <div className="relative mx-auto -mt-20 max-w-[1280px] px-5 sm:-mt-24 sm:px-8 lg:-mt-28 lg:px-12">
        <div className="relative aspect-[16/8] min-h-56 overflow-hidden rounded-sm bg-ssp-green/10 shadow-[0_40px_80px_-30px_rgba(11,31,26,0.55)] ring-1 ring-black/5">
          <InsightImage src={article.image} alt={article.alt} priority sizes="(min-width: 1280px) 1184px, 100vw" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1F1A]/25 via-transparent to-transparent" />
        </div>
      </div>

      {/* BODY */}
      <div className="mx-auto grid max-w-[1280px] items-start gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[260px_1fr] lg:gap-20 lg:px-12 lg:pb-28">
        <aside className="lg:sticky lg:top-28">
          <nav aria-label="Article table of contents" className="rounded-sm border border-ssp-green/10 bg-white p-6 shadow-[0_20px_40px_-28px_rgba(16,42,35,0.35)]">
            <h2 className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#85652F]"><span className="h-px w-6 bg-ssp-gold" />In this guide</h2>
            <ol className="mt-5 space-y-0.5 border-l border-ssp-green/15">
              {article.sections.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="group -ml-px flex gap-3 border-l-2 border-transparent py-2 pl-4 text-sm leading-6 text-ssp-green/80 transition hover:border-ssp-gold hover:text-ssp-green">
                    <span className="mt-0.5 font-display text-xs tabular-nums text-[#85652F]/70 group-hover:text-[#85652F]">{String(index + 1).padStart(2, '0')}</span>
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#sources" className="-ml-px flex gap-3 border-l-2 border-transparent py-2 pl-4 text-xs font-bold uppercase tracking-wider text-ssp-green transition hover:border-ssp-gold">Sources & notes</a>
              </li>
            </ol>
          </nav>
          <p className="mt-5 px-1 text-xs leading-6 text-gray-500">Published by Swayam Sampada Properties. General educational content; individual property checks need qualified independent advice.</p>
        </aside>

        <div className="max-w-3xl">
          <p className="font-display text-2xl leading-relaxed text-ssp-green first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-[#B8893C] sm:text-[1.65rem]">{article.intro}</p>

          <div className="relative my-12 overflow-hidden rounded-sm bg-gradient-to-br from-[#102A23] to-[#1B4A3C] p-8 text-white shadow-[0_30px_60px_-30px_rgba(16,42,35,0.6)]">
            <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#E5C78E]/15 blur-2xl" />
            <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#E5C78E] to-[#B8893C]" />
            <p className="relative flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#E5C78E]"><span className="h-px w-6 bg-[#E5C78E]" />The key takeaway</p>
            <p className="relative mt-4 font-display text-xl leading-8 text-white/95">{article.takeaway}</p>
          </div>

          {article.sections.map((section, index) => <div key={section.id}>
            <section id={section.id} className="scroll-mt-28 border-b border-ssp-green/10 py-12">
              <div className="flex items-baseline gap-5">
                <span aria-hidden="true" className="font-display text-5xl leading-none text-ssp-gold/70">{String(index + 1).padStart(2, '0')}</span>
                <h2 className="font-display text-3xl leading-tight text-ssp-green sm:text-4xl">{section.title}</h2>
              </div>
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-6 text-[17px] leading-[1.9] text-gray-700">{paragraph}</p>)}
              {section.checklist && (
                <div className="mt-8 rounded-sm border border-ssp-green/10 border-t-2 border-t-ssp-gold bg-white p-7 shadow-[0_20px_40px_-28px_rgba(16,42,35,0.3)]">
                  <h3 className="font-display text-xl text-ssp-green">Questions to take with you</h3>
                  <ul className="mt-5 space-y-4">
                    {section.checklist.map((item) => <li key={item} className="flex gap-3 text-[15px] leading-7 text-gray-700"><CheckIcon /><span>{item}</span></li>)}
                  </ul>
                </div>
              )}
              {section.source && (
                <p className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-full bg-ssp-green/5 px-4 py-1.5 text-xs leading-6 text-gray-600">
                  <span className="font-bold uppercase tracking-wider text-[#85652F]">Reference</span>
                  <a href={insightSources[section.source].url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-ssp-green">{insightSources[section.source].title}</a>
                </p>
              )}
            </section>

            {index === 1 && article.projectContext && (
              <aside aria-label="Related project" className="group relative my-12 overflow-hidden rounded-sm border border-ssp-gold/40 bg-gradient-to-br from-white via-white to-[#F6EBD5] p-8 shadow-[0_30px_60px_-34px_rgba(133,101,47,0.5)]">
                <div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-ssp-gold/20 blur-3xl transition duration-500 group-hover:scale-125" />
                <p className="relative flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#85652F]"><span className="h-px w-6 bg-ssp-gold" />Put the guide into context</p>
                <h3 className="relative mt-4 font-display text-3xl text-ssp-green">{article.projectContext}</h3>
                <p className="relative mt-4 max-w-xl text-sm leading-7 text-gray-600">Explore Central Park at Kohir X Roads, NH-65. Inspect its supplied layout and use these questions when discussing the site and documents with the team.</p>
                <div className="relative mt-5"><EditorialLink href={article.masterPlan ? '/projects/central-park#master-plan' : '/projects/central-park#connectivity'}>{article.masterPlan ? 'Understand the project layout' : 'Discover the location'}</EditorialLink></div>
              </aside>
            )}
          </div>)}

          {article.extraLink && <div className="mt-10"><EditorialLink href={article.extraLink.href}>{article.extraLink.label}</EditorialLink></div>}

          <section id="sources" className="scroll-mt-28 mt-14 rounded-sm bg-white p-8 ring-1 ring-ssp-green/10">
            <h2 className="font-display text-2xl text-ssp-green">Sources & editorial notes</h2>
            <ul className="mt-6 space-y-3">
              {article.sources.map((key, i) => (
                <li key={key} className="flex gap-4">
                  <span className="font-display text-sm tabular-nums text-[#85652F]">{String(i + 1).padStart(2, '0')}</span>
                  <a href={insightSources[key].url} target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-ssp-green underline decoration-ssp-gold/60 underline-offset-4 transition hover:decoration-ssp-gold">{insightSources[key].title}</a>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-ssp-green/10 pt-5 text-xs leading-6 text-gray-500">Official references checked on {formatInsightDate(article.updated)}. Recommendations and evaluation questions are SSP editorial commentary. Images from the SSP collection illustrate the topic; they do not establish infrastructure completion or approval status. Project-specific location and layout references use supplied SSP materials. Verify current documents and authority updates before acting.</p>
          </section>
        </div>
      </div>
    </article>

    {article.projectContext && <CentralParkDiscovery title={article.projectContext} masterPlan={article.masterPlan} />}

    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <EditorialHeading eyebrow="CONTINUE YOUR RESEARCH" title="Related reading" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">{related.map((item) => <InsightCard key={item.slug} article={item} />)}</div>
        <div className="mt-10"><EditorialLink href="/insights">Back to all insights</EditorialLink></div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-ssp-green py-20 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-[#E5C78E]/15 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E5C78E]/60 to-transparent" />
      </div>
      <div className="relative mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-8 px-5 sm:px-8 lg:px-12">
        <div>
          <p className="font-display text-3xl leading-tight sm:text-4xl">Have a question about your next step?</p>
          <p className="mt-3 text-base text-white/70">Bring your location and property questions to our team.</p>
        </div>
        <EditorialLink href="/contact" light>Speak with our team</EditorialLink>
      </div>
    </section>
  </>;
}