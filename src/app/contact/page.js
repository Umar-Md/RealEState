import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import EnquiryForm from "@/components/forms/EnquiryForm";
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
        cta="Send an Enquiry"
      />
      <section className="section-pad bg-ssp-cream">
        <div className="container-wide grid lg:grid-cols-[.75fr_1.25fr] gap-12">
          <div>
            <SectionHeading
              eyebrow="GET IN TOUCH"
              title="Start a conversation"
              description="Use the enquiry form to describe the property support you are looking for."
            />
            <div className="space-y-6 mt-10 text-sm">
              <div className="flex gap-4">
                <Phone className="text-ssp-green" />
                <div>
                  <b>Phone / WhatsApp</b>
                  <p className="text-gray-500 mt-1">
                    Company number to be confirmed
                  </p>
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
