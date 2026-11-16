// src/app/about/leadership-management.js
import Image from "next/image";
import { Quote } from "lucide-react";

const directorProfiles = [
  {
    id: "rajeswari",
    name: "Smt. Sheelam Rajeswari",
    role: "Co-Founder & Director – Management | Administration",
    photo: "/images/Sheelam-Rajeshwari.png",
    paragraphs: [
      "As Co-Founder and Director of Administration, she plays a key role in strengthening the company's organizational foundation and corporate governance. She oversees administrative operations, internal management, team coordination, policy implementation, and organizational development.",
      "With a focus on operational excellence, professional leadership, and systematic management, she contributes to the company's long-term vision, sustainable growth, and success in the real estate sector.",
    ],
  },
  {
    id: "dinesh",
    name: "Sheelam Dinesh Raj",
    role: "Independent Director | IT Lead – Real Estate (USA)",
    photo: "/images/Dinesh.jpeg",
    paragraphs: [
      "As an Independent Director and IT Lead for the USA real estate division, she contributes strategic leadership by integrating technology, digital innovation, and real estate business operations.",
      "She provides guidance on IT strategy, digital transformation, technology infrastructure, process automation, and technology-driven business development. Her focus is on strengthening operational efficiency, supporting global business opportunities, and driving sustainable growth through innovative technology solutions.",
    ],
    responsibilities: [
      "IT Strategy & Digital Transformation",
      "Real Estate Technology Solutions",
      "Technology Infrastructure & Systems",
      "Digital Operations & Process Automation",
      "Strategic Governance & Business Innovation",
      "USA Market Technology Coordination",
    ],
  },
];

export default function LeadershipManagement() {
  return (
    <div className="mx-auto w-full max-w-[1280px] space-y-10 px-5 sm:px-8 lg:px-12">
      <div className="relative overflow-hidden rounded-[36px] bg-[#102A23] shadow-2xl border border-[#C6A15B]/30">
        <div className="hidden lg:block absolute right-[38%] top-0 bottom-0 w-[40px] bg-[#C6A15B]/40 z-0 transform -skew-x-12 origin-top" />

        <div className="grid lg:grid-cols-12 min-h-[540px] relative z-10">
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-12 lg:p-16">
            <div>
              <Quote className="h-12 w-12 text-[#D5B16D] mb-6 opacity-90 fill-[#D5B16D]/20" />
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.25] text-white">
                "Real estate isn't just about square footage—it's about creating long-term security and self-built prosperity."
              </h3>
              <p className="mt-6 text-sm sm:text-base leading-relaxed text-white/70 max-w-xl">
                At Swayam Sampada, we founded our company on the principle that property decisions must be backed by verified information and transparent evidence. Every buyer, seller, and investor deserves advice that prioritizes their long-term growth above all else.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-white/15">
              <h4 className="font-display text-xl sm:text-2xl font-bold tracking-wider text-[#D5B16D] uppercase">SHEELAM VEERESH RAJ</h4>
              <p className="mt-1 text-xs font-semibold tracking-widest text-white/80 uppercase">Founder / Chairman - CMD</p>
              <p className="mt-0.5 text-[11px] tracking-wider text-[#C6A15B]/80 uppercase">SWAYAM SAMPADA PROPERTIES PVT. LTD.</p>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[440px] lg:min-h-full flex flex-col items-center justify-end bg-gradient-to-t from-[#102A23] via-[#163D32]/50 to-transparent lg:bg-none">
            <div className="hidden lg:block absolute inset-0 bg-[#163D32] -z-10 transform -skew-x-12 translate-x-16 origin-bottom border-l-2 border-[#C6A15B]/30" />
            <div className="relative z-10 w-full px-8 pb-5 pt-8 text-center sm:px-12 lg:pt-10">
              <div className="mb-3 flex items-center justify-center gap-3" aria-hidden="true">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D5B16D]/70" />
                <Quote className="h-5 w-5 text-[#D5B16D]" />
                <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#D5B16D]/70" />
              </div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Director’s <span className="text-[#D5B16D]">Message</span>
              </h2>
            </div>
            <div className="relative w-full flex-1 min-h-[440px] pt-6 px-4">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/veeresh.jpeg`}
                alt="Sheelam Veeresh Raj - Founder / Chairman - CMD"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain object-bottom transition-all duration-500"
                style={{
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)",
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {directorProfiles.map((director) => (
        <article key={director.id} id={director.id} className="relative isolate overflow-hidden rounded-[36px] border border-[#C6A15B]/20 bg-gradient-to-br from-[#183B30] via-[#102A23] to-[#102A23] shadow-[0_16px_48px_rgba(16,42,35,0.12)]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className={`absolute -top-32 h-96 w-96 rounded-full bg-[#C6A15B]/10 blur-[90px] ${director.id === "rajeswari" ? "-left-32" : "-right-32"}`} />
            <div className="absolute -bottom-48 left-1/3 h-96 w-96 rounded-full bg-[#4E896B]/10 blur-[80px]" />
            <div className={`absolute top-16 h-[480px] w-[480px] rounded-full border border-[#D5B16D]/10 ${director.id === "rajeswari" ? "-left-56" : "-right-56"}`} />
            <div className={`absolute top-28 h-[380px] w-[380px] rounded-full border border-[#D5B16D]/[0.07] ${director.id === "rajeswari" ? "-left-44" : "-right-44"}`} />
            <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "radial-gradient(#E4C98F 1px, transparent 1px)", backgroundSize: "24px 24px", maskImage: "linear-gradient(135deg, black, transparent 65%)", WebkitMaskImage: "linear-gradient(135deg, black, transparent 65%)" }} />
            <div className="absolute bottom-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[#D5B16D]/40 to-transparent" />
          </div>
          <div className="relative z-10 grid items-center gap-2 p-6 sm:p-10 lg:grid-cols-12 lg:gap-10 lg:p-12">
            <div className={`flex flex-col justify-center py-4 lg:col-span-7 ${director.id === "rajeswari" ? "lg:order-2" : "lg:order-1"}`}>
              <span className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#D5B16D]">Board of Director</span>
              <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">{director.name}</h3>
              <p className="mt-3 max-w-lg text-sm font-medium leading-6 text-[#D5B16D]">{director.role}</p>
              <span className="mt-6 h-px w-16 bg-[#C6A15B]/60" aria-hidden="true" />
              <div className="mt-6 space-y-5 text-sm leading-7 text-white/75 sm:text-base">
                {director.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {director.responsibilities && (
                <div className="mt-8">
                  <h4 className="font-display text-lg font-semibold text-[#D5B16D]">Core Responsibilities</h4>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {director.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-3 py-1 text-xs leading-5 text-white/75">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D5B16D]" aria-hidden="true" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className={`order-first w-full max-w-md justify-self-center lg:col-span-5 ${director.id === "rajeswari" ? "lg:order-1" : "lg:order-2"}`}>
              <div className="relative isolate aspect-[4/5] overflow-hidden rounded-[28px] bg-[#214639] shadow-[0_12px_36px_rgba(0,0,0,0.18)] ring-1 ring-inset ring-[#D5B16D]/15">
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${director.photo}`} alt={director.name} fill sizes="(min-width: 1024px) 35vw, (min-width: 640px) 448px, 90vw" className="object-contain object-bottom" style={{ maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)", filter: "saturate(0.88) contrast(0.95)" }} />
                <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-t from-[#102A23]/35 via-transparent to-[#D5B16D]/5" />
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
