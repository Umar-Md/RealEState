
'use client';

import { useState } from 'react';
import {
  ChevronDown,
  CircleDot,
  MessageCircle,
  FileCheck2,
  MapPin,
  ShieldCheck,
} from 'lucide-react';

import SectionEyebrow from './SectionEyebrow';
import SectionTitle from './SectionTitle';
import SectionShell from './SectionShell';

export default function BuyingProcessSection() {
  const [openFaq, setOpenFaq] = useState(0);

  const section = {
    id: 'buying-process',
    title: 'Buying process and FAQs',
    type: 'buying-process',
    steps: [
      {
        title: 'Make an enquiry',
        description: 'Share your questions and preferred way to follow up.',
      },
      {
        title: 'Confirm project information',
        description:
          'Ask the project team to confirm current availability, terms and supporting documents.',
      },
      {
        title: 'Arrange a site visit',
        description:
          'Confirm visit arrangements with the project team before travelling.',
      },
      {
        title: 'Complete independent checks',
        description:
          'Review relevant documents with your own legal and financial advisers before proceeding.',
      },
    ],
    faqs: [
      {
        question: 'Is Central Park DTCP-approved?',
        answer:
          'The supplied project information states that the layout is DTCP-approved under T.L.P. No. 332/2022/H. Verify the approval documents independently before making a decision.',
      },
      {
        question: 'What are the current prices and available plots?',
        answer:
          'Pricing and availability have not been provided for publication. Please confirm current information with the project team.',
      },
      {
        question:
          'Who is the promoter, and is the project registered with TG-RERA?',
        answer:
          'Promoter identity and TG-RERA applicability and registration details are pending verification. No promoter or registration details are published here.',
      },
    ],
  };

  const stepIcons = [
    MessageCircle,
    FileCheck2,
    MapPin,
    ShieldCheck,
  ];

  return (
    <SectionShell id={section.id}>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">

        <SectionTitle
          label="YOUR NEXT STEPS"
          title={section.title}
          description={section.paragraphs?.[0]}
        />

        {/* Buying Process */}
        <div className="relative mt-14 overflow-hidden bg-[#163D32] px-5 py-10 sm:px-8 sm:py-12 lg:px-10">

          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-white/[0.07]" />
          <div className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full border border-[#C6A15B]/20" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#C6A15B]/[0.06] blur-3xl" />

          <div className="relative z-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {section.steps.map((step, index) => {
              const Icon = stepIcons[index];

              return (
                <article
                  key={step.title}
                  className="group relative flex flex-col border border-white/15 bg-white/[0.045] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#C6A15B]/70 hover:bg-white/[0.09]"
                >
                  {/* Number and icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-display text-5xl leading-none text-[#C6A15B]/35 transition-colors duration-300 group-hover:text-[#C6A15B]">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center border border-[#C6A15B]/40 bg-[#C6A15B]/10 text-[#D5B16D] transition-all duration-300 group-hover:bg-[#C6A15B] group-hover:text-[#163D32]">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="min-h-[56px] font-display text-xl leading-snug text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/65">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-7 flex items-center gap-2">
                    <CircleDot
                      size={13}
                      className="text-[#C6A15B]"
                    />
                    <span className="h-px flex-1 bg-white/15 transition-colors group-hover:bg-[#C6A15B]/50" />
                  </div>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#C6A15B] transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>

        {/* FAQ */}
        {section.faqs?.length > 0 && (
          <div className="mt-24">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">

              {/* FAQ heading */}
              <div className="relative">
                <SectionEyebrow>Need clarity?</SectionEyebrow>

                <h3 className="mt-4 font-display text-3xl leading-tight text-ssp-dark sm:text-4xl">
                  Frequently asked
                  <span className="block text-[#A7803E]">
                    questions
                  </span>
                </h3>
              </div>

              {/* FAQ accordion */}
              <div className="space-y-3">
                {section.faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <article
                      key={faq.question}
                      className={`relative overflow-hidden border transition-all duration-300 ${
                        isOpen
                          ? 'border-[#C6A15B]/60 bg-[#F8F6EF] shadow-[0_15px_35px_-25px_rgba(22,61,50,0.35)]'
                          : 'border-ssp-green/10 bg-white hover:border-[#C6A15B]/50'
                      }`}
                    >
                      {isOpen && (
                        <div className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#C6A15B]" />
                      )}

                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(isOpen ? -1 : index)
                        }
                        aria-expanded={isOpen}
                        className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center font-display text-sm transition-colors duration-300 ${
                            isOpen
                              ? 'bg-[#163D32] text-[#D5B16D]'
                              : 'bg-[#F8F6EF] text-[#A7803E]'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <h4 className="flex-1 font-display text-base leading-relaxed text-ssp-dark sm:text-lg">
                          {faq.question}
                        </h4>

                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen
                              ? 'rotate-180 bg-[#163D32] text-[#D5B16D]'
                              : 'bg-[#F8F6EF] text-[#A7803E]'
                          }`}
                        >
                          <ChevronDown size={17} />
                        </div>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ${
                          isOpen
                            ? 'grid-rows-[1fr]'
                            : 'grid-rows-[0fr]'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="ml-[4.5rem] border-t border-[#163D32]/10 pb-6 pr-5 pt-4 sm:ml-[5.5rem] sm:pr-6">
                            <p className="text-sm leading-7 text-gray-600">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </SectionShell>
  );
}
