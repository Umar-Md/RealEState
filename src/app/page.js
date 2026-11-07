"use client";

import React, { useState } from "react";
import Link from "next/link";
import ArchitecturalImage from "@/components/common/ArchitecturalImage";

import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Building2,
  Users,
  ChartNoAxesCombined,
  FileCheck2,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Award,
} from "lucide-react";

import TrustBar from "@/components/common/TrustBar";
import DivisionCards from "@/components/common/DivisionCards";
import SectionHeading from "@/components/common/SectionHeading";
import EnquiryForm from "@/components/forms/EnquiryForm";

const strengths = [
  "Transparent dealings and verified property information",
  "Support from site visit to registration coordination",
  "Investment guidance aligned with customer goals",
  "Residential, commercial and infrastructure expertise",
];

const approachSteps = [
  {
    number: "01",
    watermark: "1",
    title: "Location",
    description: "Micro-market, accessibility, connectivity and surrounding developments.",
    Icon: MapPin,
  },
  {
    number: "02",
    watermark: "2",
    title: "Property Type",
    description: "Homes, plots, offices, retail and industrial opportunities.",
    Icon: Building2,
  },
  {
    number: "03",
    watermark: "3",
    title: "Buyer Segment",
    description: "Understanding the people and businesses a property serves.",
    Icon: Users,
  },
  {
    number: "04",
    watermark: "4",
    title: "Market Supply",
    description: "Evaluating available properties and upcoming developments.",
    Icon: ChartNoAxesCombined,
  },
  {
    number: "05",
    watermark: "5",
    title: "Transaction Evidence",
    description: "Considering verified transactions, not just asking prices.",
    Icon: FileCheck2,
  },
];

const highlights = [
  { label: "Verified Data", sub: "100% Transparency", icon: ShieldCheck },
  { label: "Growth Focus", sub: "Strategic Locations", icon: TrendingUp },
  { label: "End-to-End", sub: "Advisory to Deeds", icon: Award },
];

export default function HomePage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-[#F8F6EF] text-[#163D32] selection:bg-[#C6A15B]/30 selection:text-[#163D32]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative isolate flex min-h-[780px] items-center overflow-hidden bg-[#102A23] pt-24 text-white lg:min-h-[880px] lg:pt-32">
        {/* Background Image Layer */}
        <ArchitecturalImage image="photo-1600607687939-ce8a6c25118c" priority />

        {/* Ambient Overlay Gradients & Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E19]/95 via-[#102A23]/85 to-[#102A23]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E19] via-transparent to-black/20" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 0.8px, transparent 0.8px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient Lighting Spheres */}
        <div className="pointer-events-none absolute -left-20 top-1/4 h-[450px] w-[450px] rounded-full bg-[#367966]/20 blur-[140px]" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-[380px] w-[380px] rounded-full bg-[#C6A15B]/15 blur-[120px]" />

        <div className="relative mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content Area */}
            <div className="lg:col-span-8">
              {/* Eyebrow Badge */}
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#C6A15B]/30 bg-[#C6A15B]/10 px-4 py-1.5 backdrop-blur-md">
                <Sparkles size={14} className="text-[#D5B16D]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D5B16D]">
                  Your Real Estate Growth Partner
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-[2.9rem] font-medium leading-[1.06] tracking-[-0.045em] sm:text-6xl lg:text-[5.5rem]">
                Connecting Properties.
                <br />
                Creating Assets.
                <br />
                <span className="bg-gradient-to-r from-[#EED49B] via-[#D5B16D] to-[#C6A15B] bg-clip-text text-transparent">
                  Building Wealth.
                </span>
              </h1>

              {/* Paragraph */}
              <p className="mt-8 max-w-[620px] text-base leading-relaxed text-white/75 sm:text-lg sm:leading-8">
                Swayam Sampada Properties connects buyers, sellers, developers,
                investors, and businesses with residential, commercial, land, and
                infrastructure-linked opportunities across Hyderabad and Telangana.
              </p>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="group relative inline-flex min-h-[58px] items-center justify-center gap-4 overflow-hidden rounded-full bg-[#C6A15B] px-8 text-sm font-semibold tracking-wide text-[#163D32] shadow-[0_10px_30px_rgba(198,161,91,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_15px_35px_rgba(255,255,255,0.3)]"
                >
                  <span>Book a Free Consultation</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#163D32] text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </Link>

                <Link
                  href="/solutions"
                  className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full border border-white/30 bg-white/5 px-8 text-sm font-semibold tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#163D32]"
                >
                  Explore Our Services
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>

              {/* Telugu Tagline */}
              <div className="mt-10 flex items-center gap-3 text-xs tracking-wider text-white/50">
                <span className="h-px w-8 bg-[#C6A15B]/50" />
                <span>స్వయంగా సంపదను సృష్టించండి</span>
              </div>
            </div>

            {/* Right Desktop Feature Card Stack */}
            <div className="hidden lg:col-span-4 lg:block">
              <div className="relative rounded-3xl border border-white/15 bg-white/[0.04] p-7 backdrop-blur-xl shadow-2xl">
                <div className="mb-6 border-b border-white/10 pb-5">
                  <span className="text-[10px] font-bold tracking-[0.25em] text-[#D5B16D] uppercase">
                    Integrated Excellence
                  </span>
                  <p className="mt-2 font-serif text-2xl leading-snug text-white">
                    Four focused divisions. One connected approach.
                  </p>
                </div>

                <div className="space-y-4">
                  {highlights.map((h, i) => {
                    const HIcon = h.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-3.5 transition-all duration-300 hover:border-[#C6A15B]/30 hover:bg-white/[0.07]"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#C6A15B]/30 bg-[#163D32] text-[#D5B16D]">
                          <HIcon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{h.label}</p>
                          <p className="text-xs text-white/55">{h.sub}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accent Bottom Bar */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#C6A15B] via-[#D5B16D] to-transparent" />
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="relative z-20 -mt-6">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
          <div className="rounded-3xl border border-white/80 bg-white/90 p-4 shadow-[0_20px_50px_rgba(22,61,50,0.08)] backdrop-blur-xl sm:p-6">
            <TrustBar />
          </div>
        </div>
      </section>

      {/* ================= DIVISIONS ================= */}
      <section className="py-24 md:py-32">
        <DivisionCards />
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="relative overflow-hidden bg-[#F2EFE6] py-24 md:py-32">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-14 px-6 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-16">
          {/* Image Column */}
          <div className="relative lg:col-span-6">
            <div className="relative mx-auto aspect-[4/5] max-w-[520px] overflow-hidden rounded-3xl border border-white/60 bg-[#E9E5DA] shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
              <ArchitecturalImage
                image="photo-1600607687920-4e2a09cf159d"
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
              />
            </div>

            {/* Floating Luxury Overlay Badge */}
            <div className="absolute -bottom-6 -right-2 max-w-[240px] rounded-2xl border border-white/50 bg-[#163D32] p-5 text-white shadow-2xl sm:-bottom-8 sm:right-6 sm:max-w-[270px]">
              <span className="mb-3 block h-0.5 w-8 bg-[#C6A15B]" />
              <p className="font-serif text-xl leading-tight sm:text-2xl text-white">
                One trusted partner
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                Across every step of your real estate investment journey.
              </p>
            </div>

            {/* Corner Decorative Frame */}
            <div className="pointer-events-none absolute -left-4 -top-4 -z-0 h-28 w-28 rounded-tl-3xl border-l-2 border-t-2 border-[#C6A15B] sm:-left-6 sm:-top-6" />
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 lg:py-6">
            <SectionHeading
              eyebrow="About Swayam Sampada"
              title="Building Wealth Through Real Estate"
              description="Swayam Sampada Properties Pvt Ltd is a growth-focused real estate advisory. Our name speaks to self-built prosperity, and our integrated model helps clients navigate local property decisions with absolute clarity."
            />

            <div className="my-8 h-px w-full bg-[#163D32]/15" />

            <ul className="space-y-4">
              {strengths.map((item) => (
                <li key={item} className="flex items-start gap-4 text-sm font-medium leading-relaxed text-[#3D4841] sm:text-base">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#163D32]/10 text-[#A7803E]">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 border-b-2 border-[#163D32] pb-1.5 text-sm font-bold tracking-wide text-[#163D32] transition-colors duration-300 hover:border-[#A7803E] hover:text-[#A7803E]"
              >
                <span>Discover Swayam Sampada</span>
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR APPROACH (SINE WAVE FLOW) ================= */}
      <section className="relative isolate overflow-hidden bg-[#102A23] py-24 text-white md:py-32 lg:py-36">
        {/* Ambient Radial Lighting */}
        <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#367966]/20 blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#C6A15B]/15 blur-[130px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 0.7px, transparent 0.7px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-16">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-[760px] text-center md:mb-20">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[28px] rounded-full border border-[#C6A15B]/40 bg-[#C6A15B]/10 px-4 py-1 text-[11px] font-semibold tracking-wider text-[#D5B16D]">
                OUR FRAMEWORK
              </span>
            </div>

            <h2 className="font-display text-4xl leading-[1.12] tracking-[-0.04em] text-white sm:text-5xl lg:text-[4rem]">
              A clearer way to assess
              <span className="block text-[#D5B16D]">property opportunities.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[600px] text-sm leading-7 text-white/60 sm:text-base">
              Every property decision is local. We combine on-ground market understanding
              with verified information to help customers compare options with confidence.
            </p>
          </div>

          {/* Desktop Sine-Wave Flow Canvas */}
          <div className="relative min-h-[520px] w-full max-w-[1240px] mx-auto hidden md:block">
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none"
              viewBox="0 0 1200 480"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C6A15B" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#D5B16D" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#C6A15B" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Glow backdrop track */}
              <path
                d="M 50 320 C 170 320, 210 100, 320 100 C 430 100, 480 340, 600 340 C 720 340, 770 100, 880 100 C 990 100, 1030 320, 1150 320"
                stroke="#C6A15B"
                strokeWidth="5"
                strokeOpacity="0.15"
                fill="none"
              />
              {/* Primary dashed line path */}
              <path
                d="M 50 320 C 170 320, 210 100, 320 100 C 430 100, 480 340, 600 340 C 720 340, 770 100, 880 100 C 990 100, 1030 320, 1150 320"
                stroke="url(#goldGradient)"
                strokeWidth="2.5"
                strokeDasharray="6 8"
                fill="none"
              />
            </svg>

            {/* Interactive Cards & Icons */}
            <div className="relative z-10 grid grid-cols-5 h-full w-full pt-4">
              {approachSteps.map((step, idx) => {
                const { Icon } = step;
                const isEven = idx % 2 === 0;
                const isActive = activeStep === idx;

                return (
                  <div
                    key={step.number}
                    onMouseEnter={() => setActiveStep(idx)}
                    className="group relative flex flex-col items-center justify-between cursor-pointer transition-all duration-300 px-2"
                  >
                    {/* Watermark Step Number */}
                    <span
                      className={`absolute text-[120px] font-bold leading-none select-none transition-all duration-500 pointer-events-none ${
                        isEven ? "top-6" : "bottom-6"
                      } ${
                        isActive
                          ? "text-[#C6A15B]/20 scale-110"
                          : "text-white/[0.04] group-hover:text-white/[0.08]"
                      }`}
                    >
                      {step.watermark}
                    </span>

                    {isEven ? (
                      <>
                        <div className="mb-10 text-center max-w-[210px] transition-all duration-300 transform group-hover:-translate-y-1">
                          <span className="text-[10px] font-bold tracking-[0.2em] text-[#D5B16D]">
                            STEP {step.number}
                          </span>
                          <h3 className="mt-1 font-display text-lg font-semibold text-white">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-white/60">
                            {step.description}
                          </p>
                        </div>

                        <div className="relative mb-8">
                          <div
                            className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500 shadow-xl ${
                              isActive
                                ? "border-[#D5B16D] bg-[#163D32] text-[#D5B16D] scale-125 shadow-[0_0_25px_rgba(213,177,109,0.3)]"
                                : "border-white/20 bg-white/10 text-white backdrop-blur-md group-hover:border-[#D5B16D]/50 group-hover:scale-110"
                            }`}
                          >
                            <Icon size={22} strokeWidth={1.8} />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative mt-12">
                          <div
                            className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500 shadow-xl ${
                              isActive
                                ? "border-[#D5B16D] bg-[#163D32] text-[#D5B16D] scale-125 shadow-[0_0_25px_rgba(213,177,109,0.3)]"
                                : "border-white/20 bg-white/10 text-white backdrop-blur-md group-hover:border-[#D5B16D]/50 group-hover:scale-110"
                            }`}
                          >
                            <Icon size={22} strokeWidth={1.8} />
                          </div>
                        </div>

                        <div className="mt-10 text-center max-w-[210px] transition-all duration-300 transform group-hover:translate-y-1">
                          <span className="text-[10px] font-bold tracking-[0.2em] text-[#D5B16D]">
                            STEP {step.number}
                          </span>
                          <h3 className="mt-1 font-display text-lg font-semibold text-white">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-white/60">
                            {step.description}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Fallback Step List (< md) */}
          <div className="relative space-y-6 md:hidden">
            <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#C6A15B]/20 via-[#D5B16D] to-[#C6A15B]/20" />
            {approachSteps.map((step) => {
              const { Icon } = step;
              return (
                <div
                  key={step.number}
                  className="relative flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
                >
                  <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D5B16D]/40 bg-[#163D32] text-[#D5B16D] shadow-lg">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#D5B16D]">
                      STEP {step.number}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/65">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Framework Footer */}
          <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 rounded-full bg-[#D5B16D] shadow-[0_0_8px_#D5B16D]" />
              <p className="text-xs tracking-wide text-white/60">
                Five factors. One informed decision.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-[#D5B16D]/40 bg-[#D5B16D]/10 px-6 py-2.5 text-xs font-semibold tracking-wider text-[#D5B16D] uppercase transition-all duration-300 hover:border-[#D5B16D] hover:bg-[#D5B16D] hover:text-[#163D32]"
            >
              <span>Book Assessment</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION (CTA) ================= */}
      <section className="relative isolate overflow-hidden bg-[#163D32] py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-20 -top-36 h-[380px] w-[380px] rounded-full border border-white/[0.08]" />
        <div className="pointer-events-none absolute -right-8 -top-24 h-[280px] w-[280px] rounded-full border border-white/[0.08]" />

        <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-16">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#C6A15B]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D5B16D] sm:text-xs">
                Let's Move Forward
              </p>
            </div>

            <h2 className="max-w-3xl font-display text-4xl leading-[1.12] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Ready to find the right opportunity?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
              Talk to an SSP advisor about your property requirement and explore
              opportunities that align directly with your wealth goals.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex min-h-[56px] items-center justify-center gap-4 rounded-full bg-[#C6A15B] px-8 text-sm font-semibold text-[#163D32] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white"
          >
            <span>Talk to Our Team</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#163D32] text-white transition-all duration-300 group-hover:rotate-45">
              <ArrowUpRight size={17} />
            </span>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 h-[3px] w-1/4 bg-[#C6A15B]" />
      </section>

      {/* ================= CONTACT & ENQUIRY ================= */}
      <section className="bg-[#F8F6EF] py-24 md:py-32">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-6 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-16">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="Contact"
              title="Let's Talk Property"
              description="Tell us what you are looking for. Share your requirement with our team and take the next step towards the right property opportunity."
            />

            <div className="mt-10 rounded-2xl border border-[#163D32]/10 bg-white/70 p-6 backdrop-blur-sm shadow-sm">
              <p className="font-serif text-xl text-[#163D32]">
                Your property journey starts here.
              </p>
              <p className="mt-2 text-sm leading-6 text-[#616B64]">
                Share your property requirements through the enquiry form to get started.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-3xl border border-[#163D32]/10 bg-white p-6 shadow-[0_20px_60px_rgba(22,61,50,0.06)] sm:p-10">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}