import PageHero from "@/components/common/PageHero";
const faqs = [
  [
    "What does SSP do?",
    "SSP offers property sales and marketing, residential and commercial properties, investment advisory and infrastructure development under one brand.",
  ],
  [
    "How does SSP check a plot before recommending it?",
    "We review the title chain, layout approvals, access, utilities and competing layouts, and coordinate due diligence.",
  ],
  [
    "Should I rely on citywide average prices?",
    "Averages are useful context, but they should not replace micro-market analysis of the specific location and product.",
  ],
  [
    "Can SSP help me lease office or retail space?",
    "Yes. SSP's stated services include tenant and landlord representation, leasing support and retail site selection.",
  ],
  [
    "I am a landowner. How can SSP help?",
    "SSP offers landowner mandates, plot and project marketing, and partnership coordination with developers.",
  ],
  [
    "Do you help industrial and logistics businesses?",
    "Yes. SSP advises on industrial land and warehouses, considering zoning, power, road access, truck movement and clearances.",
  ],
  [
    "How do I book a site visit?",
    "Use the enquiry form or contact the company through its confirmed phone or WhatsApp channel. An advisor can confirm a convenient time.",
  ],
];
export const metadata = {
  title: "FAQs | Swayam Sampada Properties",
  description: "Answers to common questions about SSP real estate services.",
};
export default function FAQs() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        description="Helpful information about SSP's real estate services and approach."
        image="photo-1497366811353-6870744d04b2"
      />
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8 lg:px-12">
          {faqs.map(([q, a], i) => (
            <details
              key={q}
              className="group border-b border-gray-200 py-6"
              open={i === 0}
            >
              <summary className="cursor-pointer list-none flex justify-between gap-5 font-serif text-xl text-ssp-dark">
                {q}
                <span className="text-ssp-green text-2xl group-open:rotate-45 transition">
                  +
                </span>
              </summary>
              <p className="text-sm leading-7 text-gray-600 mt-4 max-w-3xl">
                {a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
