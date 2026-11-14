'use client';

import { useState } from 'react';
import { Search, X, ArrowDown } from 'lucide-react';
import { insightCategories, insights } from '@/data/insights';
import { InsightCard, InsightImage, EditorialLink } from './InsightPrimitives';

export default function InsightLibrary({ children }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const featured = insights[0];
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const filtered = insights.filter((article) => (category === 'all' || category === article.category) && terms.every((term) => `${article.title} ${article.description} ${article.intro} ${article.takeaway} ${article.sections.map((s) => `${s.title} ${s.paragraphs.join(' ')}`).join(' ')} ${insightCategories.find((c) => c.id === article.category).name}`.toLowerCase().includes(term)));

  return <>
    <section className="relative isolate overflow-hidden bg-ssp-green pb-14 pt-36 text-white sm:pt-44 lg:pt-48">
      <div className="absolute inset-y-0 right-0 -z-20 w-full opacity-30 lg:w-3/5"><InsightImage src="/images/Home Page.jpeg" alt="Regional landscape from SSP’s location image collection" priority /></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102A23] via-[#102A23]/80 to-[#102A23]/20" />
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12"><div className="grid items-end gap-12 lg:grid-cols-[1.6fr_0.8fr]">
        <div><p className="mb-7 text-[11px] font-bold uppercase tracking-[0.26em] text-[#E5C78E]">SSP JOURNAL / INSIGHTS & PERSPECTIVES</p><h1 className="max-w-3xl font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">Understand the Locations.<br /><span className="text-[#E5C78E]">Discover the Opportunities.</span></h1><p className="mt-7 max-w-xl text-base leading-8 text-white/75">Explore insights on real estate, regional connectivity, industrial development and the factors shaping property decisions.</p><a href="#latest-insights" className="mt-7 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[#E5C78E]">Find your next read <ArrowDown size={17} aria-hidden="true" /></a></div>
        <div className="border-t border-ssp-gold/60 pt-5 lg:pb-3"><p className="text-[10px] uppercase tracking-[0.2em] text-[#E5C78E]">THE EDITOR’S PICK</p><p className="mt-4 font-display text-2xl leading-snug">{featured.title}</p><p className="mt-4 text-xs text-white/65">{featured.readingTime} min read / Location & Connectivity</p><EditorialLink href={`/insights/${featured.slug}`} light>Read the guide</EditorialLink></div>
      </div>
      <form role="search" action="#latest-insights" onSubmit={(event) => { event.preventDefault(); document.getElementById('latest-insights')?.scrollIntoView({ behavior: 'auto' }); }} className="mt-12 border-t border-white/20 pt-7"><label htmlFor="insight-search" className="mb-3 block text-xs text-white/75">What would you like to understand?</label><div className="flex max-w-2xl items-center gap-3 border-b border-white/50 pb-3"><Search size={20} className="shrink-0 text-[#E5C78E]" aria-hidden="true" /><input id="insight-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search locations, NIMZ, layouts, documents…" className="min-w-0 flex-1 bg-transparent py-2 text-sm text-white placeholder:text-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ssp-gold" /><button type="submit" className="min-h-11 px-3 text-xs font-bold text-[#E5C78E]">Search</button></div></form>
      <nav aria-label="Filter insights by topic" className="mt-6 flex flex-wrap gap-2">{[{ id: 'all', name: 'All insights' }, ...insightCategories].map((item) => <button key={item.id} type="button" aria-pressed={category === item.id} onClick={() => setCategory(item.id)} className={`min-h-11 border px-4 py-2 text-xs transition-colors ${category === item.id ? 'border-ssp-gold bg-ssp-gold text-ssp-green' : 'border-white/25 text-white/80 hover:border-ssp-gold'}`}>{item.name}</button>)}</nav></div>
    </section>
    {children}
    <section id="latest-insights" className="scroll-mt-28 bg-ssp-cream py-16 md:py-24"><div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12"><div className="mb-9 flex flex-wrap items-end justify-between gap-5 border-b border-ssp-green/20 pb-6"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#85652F]">THE READING ROOM</p><h2 className="font-display text-4xl text-ssp-green">Latest insights</h2></div><p role="status" aria-live="polite" className="text-xs text-gray-600">{filtered.length} {filtered.length === 1 ? 'article' : 'articles'}{category !== 'all' ? ` in ${insightCategories.find((c) => c.id === category).name}` : ''}{query.trim() ? ` matching “${query.trim()}”` : ''}</p></div>
      {filtered.length ? <div className="grid items-start gap-9 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">{filtered.map((article, index) => <InsightCard key={article.slug} article={article} large={index === 0} />)}</div> : <div className="border border-ssp-green/15 bg-white p-10"><h3 className="font-display text-2xl text-ssp-green">No articles match this search.</h3><p className="mt-3 text-sm text-gray-600">Try a broader topic, or reset both the search and category.</p><button type="button" onClick={() => { setQuery(''); setCategory('all'); }} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-ssp-green"><X size={16} aria-hidden="true" />Reset filters</button></div>}
    </div></section>
  </>;
}
