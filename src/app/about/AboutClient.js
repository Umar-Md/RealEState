// src/app/about/AboutClient.js
"use client";

import React from "react";
import {
  Building2,
  CheckCircle2,
  Sparkles,
  Award,
  Layers,
} from "lucide-react";

const audienceList = [
  { title: "Property Owners", tag: "Asset Growth" },
  { title: "Homebuyers", tag: "Verified Living" },
  { title: "Investors", tag: "High-Yield Portfolio" },
  { title: "Developers", tag: "Strategic Reach" },
  { title: "Channel Partners", tag: "Ecosystem Synergies" },
  { title: "Business Occupiers", tag: "Prime Commercial" },
];

export default function AboutClient() {
  return (
    <div className="overflow-hidden bg-[#F8F6EF]">

      {/* 1. BRAND POSITIONING & DIRECTORY */}
      <section className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

        {/* Brand Banner */}
        <div className="relative isolate overflow-hidden bg-[#102A23] text-white shadow-2xl shadow-[#102A23]/15">

          <div className="absolute inset-0 bg-gradient-to-br from-[#163D32] via-[#102A23] to-[#091D17]" />

          <div className="absolute -right-20 -top-36 h-[450px] w-[450px] rounded-full border border-[#C6A15B]/20" />
          <div className="absolute -right-8 -top-24 h-[350px] w-[350px] rounded-full border border-[#C6A15B]/15" />
          <div className="absolute -right-20 -top-16 h-[250px] w-[250px] rounded-full border border-[#C6A15B]/10" />

          <div className="absolute bottom-0 right-0 h-64 w-64 bg-[#C6A15B]/10 blur-[100px]" />

          <div className="relative grid min-h-[310px] lg:grid-cols-[1fr_300px]">

            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">

              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D5B16D]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D5B16D]">
                  <Sparkles size={13} className="mr-2 inline" />
                  Corporate Identity
                </span>
              </div>

              <div className="flex items-start gap-5">
                <div className="hidden h-16 w-16 shrink-0 items-center justify-center border border-[#C6A15B]/40 bg-[#C6A15B]/10 text-[#D5B16D] sm:flex">
                  <Building2 size={30} strokeWidth={1.3} />
                </div>

                <div>
                  <h3 className="max-w-3xl font-display text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Integrated Real Estate, Property & Asset Solutions
                  </h3>
                </div>
              </div>
            </div>

            <div className="relative flex items-end border-t border-white/10 p-8 lg:items-center lg:border-l lg:border-t-0 lg:p-10">

              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#C6A15B]/60 to-transparent" />

              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center border border-[#C6A15B]/40 text-[#D5B16D]">
                  <Building2 size={21} />
                </div>

                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D5B16D]">
                  Headquarters
                </p>

                <p className="font-display text-xl font-semibold text-white">
                  Hyderabad, Telangana
                </p>

                <p className="mt-2 text-xs leading-6 text-white/55">
                  Swayam Sampada Properties Pvt. Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 2. WHO WE ARE & STAKEHOLDERS */}
      <section className="relative bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

        <div className="pointer-events-none absolute left-0 top-0 h-full w-[5px] bg-gradient-to-b from-[#C6A15B]/0 via-[#C6A15B]/50 to-[#C6A15B]/0" />

        <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-12 lg:gap-20">

          {/* Company Information */}
          <div className="lg:col-span-7">

            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-9 bg-[#C6A15B]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#987A42]">
                <Layers size={14} className="mr-2 inline" />
                WHO WE ARE
              </span>
            </div>

            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.15] tracking-tight text-[#163D32] sm:text-5xl lg:text-[64px]">
              One Partner Across the Complete Property Journey
            </h2>

            <div className="mt-8 max-w-2xl border-l-2 border-[#C6A15B] pl-6">
              <p className="text-base leading-8 text-[#515852] sm:text-lg">
                Swayam Sampada Properties Pvt Ltd brings multiple real estate
                capabilities together under one unified brand. Backed by{" "}
                <strong className="font-semibold text-[#163D32]">
                  25+ years
                </strong>{" "}
                of cumulative leadership expertise, we combine deep
                micro-market understanding with verified documentation.
              </p>
            </div>

            {/* Statistics */}
            <div className="mt-12 grid grid-cols-2 border-y border-[#163D32]/10 sm:grid-cols-3">

              <div className="border-b border-[#163D32]/10 py-7 pr-4 sm:border-b-0 sm:border-r sm:pr-6">
                <p className="font-display text-3xl font-semibold tracking-tight text-[#163D32] sm:text-4xl">
                  25<span className="text-[#C6A15B]">+</span> Years
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase leading-5 tracking-[0.12em] text-[#66736A]">
                  Industry Leadership
                </p>
              </div>

              <div className="border-b border-[#163D32]/10 py-7 pl-4 sm:border-b-0 sm:border-r sm:px-6">
                <p className="font-display text-3xl font-semibold tracking-tight text-[#163D32] sm:text-4xl">
                  100<span className="text-[#C6A15B]">%</span>
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase leading-5 tracking-[0.12em] text-[#66736A]">
                  Verified Projects
                </p>
              </div>

              <div className="col-span-2 py-7 sm:col-span-1 sm:pl-6">
                <p className="font-display text-3xl font-semibold tracking-tight text-[#163D32] sm:text-2xl lg:text-3xl">
                  Telangana
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase leading-5 tracking-[0.12em] text-[#66736A]">
                  Strategic Focus
                </p>
              </div>

            </div>
          </div>

          {/* Stakeholders */}
          <div className="relative lg:col-span-5">

            <div className="absolute -right-5 -top-5 h-28 w-28 border-r border-t border-[#C6A15B]/50" />
            <div className="absolute -bottom-5 -left-5 h-28 w-28 border-b border-l border-[#C6A15B]/50" />

            <div className="relative border border-[#163D32]/10 bg-[#F8F6EF] p-6 shadow-[0_20px_60px_rgba(22,61,50,0.06)] sm:p-8">

              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#A7803E]">
                    Tailored Stakeholder Support
                  </p>

                  <h3 className="font-display text-3xl font-semibold text-[#163D32]">
                    Who We Serve
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center bg-[#163D32] text-[#D5B16D]">
                  <Award size={23} strokeWidth={1.5} />
                </div>
              </div>

              <div className="divide-y divide-[#163D32]/10 border-y border-[#163D32]/10">
                {audienceList.map((item, index) => (
                  <div
                    key={item.title}
                    className="group flex items-center justify-between gap-3 py-4 transition-all duration-300 hover:px-3"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-display text-xs font-semibold text-[#B18C50]">
                        0{index + 1}
                      </span>

                      <span className="text-sm font-semibold text-[#163D32] transition-colors group-hover:text-[#A7803E]">
                        {item.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden text-right text-[10px] font-semibold uppercase tracking-wider text-[#8A9088] sm:block">
                        {item.tag}
                      </span>

                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-[#B18C50] transition-transform group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}