import { companyContact } from "@/data/contactData";
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import EnquiryForm from "@/components/forms/EnquiryForm";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
export const metadata = {
  title: "Contact SSP | Swayam Sampada Properties",
  description:
    "Book a consultation or site visit with Swayam Sampada Properties.",
};
export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Let's Talk Property"
        description="Share your requirement and the SSP team can follow up once contact and enquiry channels are configured."
        image="photo-1497366754035-f200968a6e72"
        cta="Send an Enquiry" ctaHref="#enquiry"
      />
      <section id="enquiry" className="scroll-mt-36 py-16 md:py-20 lg:py-24 bg-ssp-cream">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[.75fr_1.25fr] gap-12">
          <div>
            <SectionHeading
              eyebrow="GET IN TOUCH"
              title="Start a conversation"
              description="Use the enquiry form to describe the property support you are looking for."
            />
            <div className="mt-8 rounded-2xl border border-ssp-green/15 bg-white p-6">
              <h3 className="font-display text-2xl text-ssp-dark">Meet with Swayam Sampada</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">Meeting enquiries: Satish Reddy. Explore available dates and times on our booking page.</p>
              <Link href="/booking" className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-ssp-green px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-ssp-green/90">Book a meeting</Link>
            </div>
            <div className="space-y-6 mt-10 text-sm">
              <div className="flex gap-4">
                <Phone className="text-ssp-green" />
                <div>
                  <b>Phone / WhatsApp</b>
                  <p className="text-gray-500 mt-1">
                    <a href={`tel:${companyContact.telephone}`} className="text-ssp-green underline underline-offset-4 hover:text-ssp-gold">{companyContact.phone}</a>
                  </p>
                  <a href={companyContact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex min-h-11 items-center text-ssp-green underline underline-offset-4 hover:text-ssp-gold">Chat on WhatsApp</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-ssp-green" />
                <div>
                  <b>Email</b>
                  <p className="text-gray-500 mt-1">
                    Company email to be confirmed
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="text-ssp-green" />
                <div>
                  <b>Office address</b>
                  <p className="text-gray-500 mt-1">
                    Address and map link to be confirmed
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-ssp-green" />
                <div>
                  <b>Working hours</b>
                  <p className="text-gray-500 mt-1">To be confirmed</p>
                </div>
              </div>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
