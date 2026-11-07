
import {
  Target,
  Compass,
  Sparkles,
  ArrowUpRight,
  MoveRight,
} from "lucide-react";

export default function VisionMission() {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">

      {/* PURPOSE SECTION */}
      <section className="relative overflow-hidden bg-[#102A23] text-white shadow-[0_30px_80px_rgba(16,42,35,0.15)]">

        <div className="pointer-events-none absolute -right-24 -top-32 h-[520px] w-[520px] rounded-full border border-[#C6A15B]/15" />
        <div className="pointer-events-none absolute -right-10 -top-16 h-[380px] w-[380px] rounded-full border border-[#C6A15B]/15" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-[#C6A15B]/10 blur-[110px]" />

        <div className="relative z-10 grid gap-14 p-8 sm:p-12 lg:grid-cols-12 lg:gap-12 lg:p-12">

          <div className="lg:col-span-7">
            <div className="mb-10 flex items-center gap-4">
              <span className="h-px w-12 bg-[#D5B16D]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#D5B16D]">
                Our Core Philosophy
              </span>
            </div>

            <h2 className="max-w-4xl font-display text-3xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-6xl">
              Wealth Begins With
              <span className="block font-normal italic text-[#D5B16D]">
                Self-Belief.
              </span>
              Prosperity Follows.
            </h2>

            <p className="mt-9 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
              The name Swayam Sampada represents a philosophy of
              independent thinking, informed decisions and self-built
              prosperity. It reflects our belief that lasting wealth
              begins with knowledge, clarity and the right guidance.
            </p>
          </div>

          <div className="relative flex flex-col justify-end border-t border-white/15 pt-9 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">

            <div className="mb-7 flex h-14 w-14 items-center justify-center border border-[#C6A15B]/40 bg-[#C6A15B]/10">
              <Sparkles size={25} className="text-[#D5B16D]" strokeWidth={1.4} />
            </div>

            <p className="font-display text-3xl font-medium tracking-wide text-white">
              "Swayam Sampada"
            </p>

            <div className="mt-8 space-y-0">
              {[
                ["01", "Self-Thinking"],
                ["02", "Self-Intelligence"],
                ["03", "Self-Wealth"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="group flex items-center gap-5 border-b border-white/10 py-4 transition-colors hover:border-[#C6A15B]/50"
                >
                  <span className="font-display text-sm text-[#D5B16D]">
                    {number}
                  </span>
                  <span className="text-sm font-medium tracking-wide text-white/75 transition-colors group-hover:text-white">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />
      </section>

      {/* VISION & MISSION INTRO */}
      <section className="mb-10 mt-14 md:mb-12 md:mt-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#A7803E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#A7803E]">
                Direction & Purpose
              </span>
            </div>

            <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-[#163D32] sm:text-5xl lg:text-[58px]">
              Where We Aspire.
              <span className="block text-[#A7803E]">
                What We Deliver.
              </span>
            </h2>
          </div>

          <p className="max-w-md border-l border-[#C6A15B]/50 pl-6 text-sm leading-8 text-[#66736A] md:mb-1">
            Guided by a clear vision and driven by a practical mission,
            we are building a more transparent and trusted real estate
            ecosystem.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="grid gap-6 lg:grid-cols-2">

        {/* VISION */}
        <article className="group relative flex min-h-[490px] flex-col justify-between overflow-hidden border border-[#163D32]/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#C6A15B]/60 hover:shadow-[0_30px_70px_rgba(22,61,50,0.10)] sm:p-11 lg:p-12">

          <span className="pointer-events-none absolute -right-3 -top-8 font-display text-[190px] font-bold leading-none text-[#163D32]/[0.035] transition-transform duration-700 group-hover:-translate-y-4">
            01
          </span>

          <div className="relative z-10">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 sm:mb-12">
              <div className="flex h-14 w-14 shrink-0 sm:h-[68px] sm:w-[68px] items-center justify-center bg-[#163D32] text-[#D5B16D] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#C6A15B] group-hover:text-[#102A23]">
                <Target size={30} strokeWidth={1.4} />
              </div>

              <span className="border border-[#C6A15B]/30 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#A7803E]">
                Future Outlook
              </span>
            </div>

            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A7803E]">
              Our Vision
            </p>

            <h3 className="max-w-lg font-display text-3xl font-semibold leading-[1.2] text-[#163D32] sm:text-4xl">
              To Be Telangana's Most Trusted Real Estate Partner.
            </h3>

            <p className="mt-7 max-w-lg text-sm leading-8 text-[#66736A] sm:text-base">
              To be Telangana’s most trusted real estate partner,
              connecting people, properties and partners through
              verified, transparent solutions that create lasting
              assets and build wealth for every family and business.
            </p>
          </div>

          <div className="relative z-10 mt-12 flex items-center justify-between border-t border-[#163D32]/10 pt-6">
            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#163D32]">
              Long-Term Benchmark
            </span>

            <ArrowUpRight
              size={22}
              className="text-[#A7803E] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </article>

        {/* MISSION */}
        <article className="group relative flex min-h-[490px] flex-col justify-between overflow-hidden border border-[#C6A15B]/30 bg-[#163D32] p-8 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(16,42,35,0.23)] sm:p-11 lg:p-12">

          <div className="pointer-events-none absolute -bottom-36 -right-24 h-96 w-96 rounded-full border border-[#C6A15B]/15" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full border border-[#C6A15B]/15" />

          <span className="pointer-events-none absolute -right-3 -top-8 font-display text-[190px] font-bold leading-none text-white/[0.035] transition-transform duration-700 group-hover:-translate-y-4">
            02
          </span>

          <div className="relative z-10">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 sm:mb-12">
              <div className="flex h-14 w-14 shrink-0 sm:h-[68px] sm:w-[68px] items-center justify-center bg-[#C6A15B] text-[#102A23] transition-all duration-500 group-hover:rotate-6 group-hover:bg-white">
                <Compass size={30} strokeWidth={1.4} />
              </div>

              <span className="border border-[#D5B16D]/30 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#D5B16D]">
                Daily Commitment
              </span>
            </div>

            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#D5B16D]">
              Our Mission
            </p>

            <h3 className="max-w-lg font-display text-3xl font-semibold leading-[1.2] text-white sm:text-4xl">
              Evidence-Led Property Advice & Solutions.
            </h3>

            <p className="mt-7 max-w-lg text-sm leading-8 text-white/70 sm:text-base">
              SSP connects buyers, sellers, investors, developers and
              businesses through verified information, evidence-led
              advice and coordinated professional support across
              residential, commercial, land and infrastructure
              opportunities in Hyderabad and Telangana.
            </p>
          </div>

          <div className="relative z-10 mt-12 flex items-center justify-between border-t border-white/15 pt-6">
            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#D5B16D]">
              Action-Driven Framework
            </span>

            <MoveRight
              size={22}
              className="text-[#D5B16D] transition-transform duration-300 group-hover:translate-x-2"
            />
          </div>
        </article>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="relative mt-20 overflow-hidden border-y border-[#C6A15B]/30 py-14 text-center md:mt-28 md:py-20">

        <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[110px] font-bold tracking-tighter text-[#163D32]/[0.035] sm:text-[180px]">
          SSP
        </span>

        <div className="relative z-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#A7803E]">
            Our Guiding Principle
          </p>

          <h3 className="mt-5 font-display text-2xl font-medium leading-tight text-[#163D32] sm:text-4xl lg:text-5xl">
            Connecting Properties.
            <span className="block mt-2 text-[#A7803E]">
              Creating Wealth.
            </span>
          </h3>
        </div>
      </section>
    </div>
  );
}
