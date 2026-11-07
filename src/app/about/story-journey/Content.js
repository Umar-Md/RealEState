import SectionHeading from "@/components/common/SectionHeading";

const journeyMilestones = [
  {
    period: "2021",
    subtitle: "Journey Begins",
    title: "Industry Experience & Market Understanding",
    desc: "Building market knowledge, understanding property transactions, customer requirements, industry networks, and emerging real estate opportunities.",
  },
  {
    period: "2022–23",
    subtitle: "Founding Year",
    title: "Business Foundation",
    desc: "Establishment of the SSP business vision, organizational foundation, business identity, and initial strategic relationships.",
  },
  {
    period: "2023–24",
    subtitle: "Network Growth",
    title: "Market Development",
    desc: "Developing customer relationships, property sourcing networks, market intelligence, and business development activities.",
  },
  {
    period: "2024–25",
    subtitle: "Location Scaling",
    title: "Strategic Expansion",
    desc: "Expanding business relationships, identifying new locations, strengthening project associations, and exploring residential and commercial opportunities.",
  },
  {
    period: "2025–26",
    subtitle: "Next Growth Phase",
    title: "Growth & Future Readiness",
    desc: "Strengthening the real estate services platform through strategic advisory, digital presence, stakeholder collaboration, and emerging industrial growth corridors.",
  },
];

const futureRoadmap = [
  "Market Expansion",
  "Digital Transformation",
  "Strategic Partnerships",
  "Customer Trust",
  "Sustainable Growth",
];

export default function StoryJourney() {
  return (
    <div className="overflow-hidden">
      {/* JOURNEY SECTION */}
      <section className="relative bg-[#F8F6EF] py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[#C6A15B]/10" />
        <div className="pointer-events-none absolute -right-20 top-40 h-[350px] w-[350px] rounded-full border border-[#C6A15B]/10" />

        <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="WHERE THE JOURNEY STARTED & EVOLVED"
            title="Our Journey | 2021 — 2026"
            description="Trace our operational evolution from deep micro-market research to a structured multi-division real estate ecosystem."
          />

          {/* TIMELINE */}
          <div className="relative mt-12 md:mt-16">
            {/* Timeline line */}
            <div className="absolute bottom-10 left-[27px] top-8 w-px bg-gradient-to-b from-[#C6A15B] via-[#C6A15B]/40 to-transparent md:left-[179px]" />

            <div className="space-y-8 md:space-y-10">
              {journeyMilestones.map((m, idx) => (
                <article
                  key={m.period}
                  className="group relative grid gap-5 md:grid-cols-[180px_1fr] md:gap-10"
                >
                  {/* YEAR */}
                  <div className="relative flex items-start gap-5 md:justify-end md:pr-10">
                    <div className="absolute left-[21px] top-2 z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full border-[3px] border-[#F8F6EF] bg-[#C6A15B] shadow-[0_0_0_5px_rgba(198,161,91,0.15)] transition-transform duration-300 group-hover:scale-125 md:left-auto md:right-[-6px]">
                      <span className="sr-only">{m.period}</span>
                    </div>

                    <div className="pl-12 md:pl-0 md:text-right">
                      <span className="block font-display text-3xl font-bold tracking-tight text-[#163D32] transition-colors duration-300 group-hover:text-[#A7803E] md:text-4xl">
                        {m.period}
                      </span>
                      <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#A7803E]">
                        {m.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* MILESTONE CARD */}
                  <div className="relative ml-12 min-w-0 overflow-hidden border border-[#163D32]/10 bg-white p-5 sm:p-7 md:ml-0 shadow-[0_12px_40px_rgba(22,61,50,0.035)] transition-all duration-500 hover:-translate-y-1 hover:border-[#C6A15B]/50 hover:shadow-[0_20px_50px_rgba(22,61,50,0.09)] sm:p-9">
                    <div className="absolute right-0 top-0 h-full w-1 bg-[#C6A15B] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="flex items-start justify-between gap-4">
                      <div className="max-w-2xl">
                        <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#A7803E]">
                          MILESTONE 0{idx + 1}
                        </span>

                        <h3 className="font-display text-xl font-semibold leading-snug text-[#163D32] sm:text-2xl lg:text-[26px]">
                          {m.title}
                        </h3>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#66736A] sm:text-[15px]">
                          {m.desc}
                        </p>
                      </div>

                      <span className="hidden font-display text-5xl font-bold text-[#163D32]/[0.045] sm:block">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="mt-7 h-px w-full bg-gradient-to-r from-[#C6A15B]/50 via-[#163D32]/10 to-transparent" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE ROADMAP */}
      <section className="relative overflow-hidden bg-[#102A23] py-20 text-white md:py-28">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-[#C6A15B]/10" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-[#C6A15B]/10" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-1/2 bg-[radial-gradient(ellipse_at_bottom_left,rgba(198,161,91,0.09),transparent_70%)]" />

        <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            {/* HEADING */}
            <div>
              <span className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#D5B16D]">
                <span className="h-px w-8 bg-[#D5B16D]" />
                Where SSP is Heading in the Future
              </span>

              <h2 className="mt-7 max-w-xl font-display text-4xl font-medium leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[64px]">
                Our Next
                <span className="block text-[#D5B16D]">Chapter:</span>
                2027–2030
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
                Building a sustainable, diversified green real estate solutions
                organization across Telangana.
              </p>
            </div>

            {/* ROADMAP DECORATIVE YEAR */}
            <div className="relative flex items-center justify-center border-y border-white/10 py-10 lg:justify-end lg:border-y-0 lg:py-0">
              <span className="select-none font-display text-[100px] font-bold leading-none tracking-tighter text-white/[0.045] sm:text-[150px] lg:text-[175px]">
                2030
              </span>
              <div className="absolute bottom-5 right-0 h-px w-2/3 bg-gradient-to-l from-[#C6A15B]/70 to-transparent lg:bottom-0" />
            </div>
          </div>

          {/* ROADMAP ITEMS */}
          <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {futureRoadmap.map((item, idx) => (
              <div
                key={item}
                className="group relative min-h-[190px] overflow-hidden bg-[#102A23] p-7 transition-colors duration-500 hover:bg-[#163D32] sm:p-8"
              >
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full border-b border-l border-[#C6A15B]/10 transition-all duration-500 group-hover:h-28 group-hover:w-28 group-hover:border-[#C6A15B]/30" />

                <span className="font-display text-4xl font-light text-[#D5B16D]/70 transition-colors duration-300 group-hover:text-[#D5B16D]">
                  0{idx + 1}
                </span>

                <div className="mt-9">
                  <div className="mb-4 h-px w-8 bg-[#C6A15B] transition-all duration-300 group-hover:w-14" />
                  <h3 className="max-w-[180px] font-display text-lg font-semibold leading-snug text-white">
                    {item}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
