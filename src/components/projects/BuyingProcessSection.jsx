import { CircleDot } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';
import SectionTitle from './SectionTitle';
import SectionShell from './SectionShell';

export default function BuyingProcessSection() {
  const section = {
  "id": "buying-process",
  "title": "Buying process and FAQs",
  "type": "buying-process",
  "steps": [
    {
      "title": "Make an enquiry",
      "description": "Share your questions and preferred way to follow up."
    },
    {
      "title": "Confirm project information",
      "description": "Ask the project team to confirm current availability, terms and supporting documents."
    },
    {
      "title": "Arrange a site visit",
      "description": "Confirm visit arrangements with the project team before travelling."
    },
    {
      "title": "Complete independent checks",
      "description": "Review relevant documents with your own legal and financial advisers before proceeding."
    }
  ],
  "faqs": [
    {
      "question": "Is Central Park DTCP-approved?",
      "answer": "The supplied project information states that the layout is DTCP-approved under T.L.P. No. 332/2022/H. Verify the approval documents independently before making a decision."
    },
    {
      "question": "What are the current prices and available plots?",
      "answer": "Pricing and availability have not been provided for publication. Please confirm current information with the project team."
    },
    {
      "question": "Who is the promoter, and is the project registered with TG-RERA?",
      "answer": "Promoter identity and TG-RERA applicability and registration details are pending verification. No promoter or registration details are published here."
    }
  ]
};
  return (
    <SectionShell id={section.id}>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <SectionTitle
          label="YOUR NEXT STEPS"
          title={section.title}
          description={section.paragraphs?.[0]}
        />

        <ol className="relative mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {section.steps?.map((step, index) => (
            <li
              key={step.title}
              className="group relative min-h-[250px] overflow-hidden border border-ssp-green/10 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-ssp-gold hover:shadow-[0_25px_55px_-25px_rgba(16,37,31,0.25)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-ssp-gold transition-transform duration-500 group-hover:scale-x-100" />

              <div className="flex items-center justify-between">
                <span className="font-display text-5xl text-ssp-green/15 transition-colors group-hover:text-ssp-gold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <CircleDot size={20} className="text-ssp-gold/60" />
              </div>

              <h3 className="mt-8 font-display text-2xl text-ssp-dark">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-gray-500">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        {section.faqs?.length > 0 && (
          <div className="mt-24">
            <SectionEyebrow>Need clarity?</SectionEyebrow>
            <h3 className="font-display text-3xl text-ssp-dark sm:text-4xl">
              Frequently asked questions
            </h3>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {section.faqs.map((faq, index) => (
                <article
                  key={faq.question}
                  className="border-b border-ssp-green/15 py-6"
                >
                  <div className="flex gap-5">
                    <span className="font-display text-xl text-ssp-gold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="font-display text-xl text-ssp-dark">
                        {faq.question}
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionShell>
  );
}
