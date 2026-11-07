// src/app/about/leadership-management.js
import Image from "next/image";
import { Quote } from "lucide-react";

export default function LeadershipManagement() {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
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
              <h4 className="font-display text-xl sm:text-2xl font-bold tracking-wider text-[#D5B16D] uppercase">SHEELAM VEERESH</h4>
              <p className="mt-1 text-xs font-semibold tracking-widest text-white/80 uppercase">CHAIRMAN & MANAGING DIRECTOR</p>
              <p className="mt-0.5 text-[11px] tracking-wider text-[#C6A15B]/80 uppercase">SWAYAM SAMPADA PROPERTIES PVT. LTD.</p>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[440px] lg:min-h-full flex items-end justify-center bg-gradient-to-t from-[#102A23] via-[#163D32]/50 to-transparent lg:bg-none">
            <div className="hidden lg:block absolute inset-0 bg-[#163D32] -z-10 transform -skew-x-12 translate-x-16 origin-bottom border-l-2 border-[#C6A15B]/30" />
            <div className="relative w-full h-full min-h-[440px] pt-6 px-4">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/veeresh.jpeg`}
                alt="Sheelam Veeresh - Chairman & Managing Director"
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
    </div>
  );
}
