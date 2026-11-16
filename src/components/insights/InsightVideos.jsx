'use client';

import { useState } from 'react';
import { Play, Film, ArrowUpRight } from 'lucide-react';
import { insightVideos, insightReferenceVideo } from '@/data/insight-videos';
import { EditorialHeading } from './InsightPrimitives';

export default function InsightVideos() {
  const [selectedId, setSelectedId] = useState(insightVideos[0]?.id);
  const selected = insightVideos.find((video) => video.id === selectedId) || insightVideos[0];

  if (!selected) return null;

  return (
    <section id="video-insights" aria-labelledby="video-insights-title" className="scroll-mt-28 border-t border-ssp-green/10 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div id="video-insights-title"><EditorialHeading eyebrow="THE WATCHING ROOM" title="A closer look. A new perspective." description="Discover stories beyond the written word, from location tours to project walkthroughs and regional conversations." /></div>
          <span className="inline-flex items-center gap-2 border border-ssp-green/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-ssp-green"><Film size={15} aria-hidden="true" />Video insights</span>
        </div>

        <div className="grid overflow-hidden bg-[#102A23] lg:grid-cols-[1.65fr_1fr]">
          <div className="min-w-0">
            <iframe key={selected.id}
              src={`https://www.youtube-nocookie.com/embed/${selected.youtubeId}?rel=0&start=${selected.start || 0}`}
              title={selected.title} loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
              className="aspect-video w-full border-0 bg-black" />
          </div>
          <div className="flex flex-col justify-center p-7 text-white sm:p-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E5C78E]">Now showing / {selected.category}</p>
            <h3 className="mt-5 font-display text-3xl leading-tight">{selected.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">{selected.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/15 pt-5">
              <span className="bg-white/10 px-3 py-1.5 text-[10px] uppercase tracking-widest text-[#E5C78E]">YouTube presentation</span>
              <a href={`https://www.youtube.com/watch?v=${selected.youtubeId}${selected.start ? `&t=${selected.start}s` : ''}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-white hover:text-[#E5C78E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-ssp-gold">Watch on YouTube <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Choose a video">
          {insightVideos.map((video) => {
            const active = video.id === selected.id;
            return <button key={video.id} type="button" aria-pressed={active} onClick={() => setSelectedId(video.id)} className={`group flex items-center gap-4 border p-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ssp-green ${active ? 'border-ssp-gold bg-ssp-cream' : 'border-ssp-green/15 bg-white hover:border-ssp-gold hover:bg-ssp-cream/50'}`}>
              <span className="relative block h-20 w-24 shrink-0 overflow-hidden sm:w-28 md:w-20 xl:w-28">
                <img src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`} alt="" loading="lazy" className="h-full w-full object-cover" />
                <span className="absolute inset-0 flex items-center justify-center bg-black/30"><span className={`flex h-9 w-9 items-center justify-center rounded-full ${active ? 'bg-ssp-gold text-ssp-green' : 'bg-white/90 text-ssp-green'}`}><Play size={15} fill="currentColor" aria-hidden="true" /></span></span>
              </span>
              <span><span className="block text-[9px] font-bold uppercase tracking-widest text-[#85652F]">{active ? 'Selected' : video.category}</span><span className="mt-2 block font-display text-lg leading-snug text-ssp-green">{video.title}</span></span>
            </button>;
          })}
        </div>
        <div className="mt-6 flex justify-end">
          <a href={insightReferenceVideo.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-ssp-green underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ssp-green">{insightReferenceVideo.title}<ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
