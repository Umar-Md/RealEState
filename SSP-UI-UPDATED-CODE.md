# SSP UI update ? complete updated source

All paths are relative to `E:/My-Projects/RealEState`.

## Preview

Run `npm run dev` for development. To assess page loading without development compilation, run `npm run build`, then `npm start`, and open http://localhost:3000.

## Header and loading fixes

The shared fixed header is transparent over every hero and turns white after scrolling. Hero sections alone reserve the header height: 80px below lg and 120px from lg upward. Component styling uses Tailwind utilities in JSX. globals.css contains only Tailwind directives.

The previous CSS backgrounds fetched full-width remote photos on every device without lazy loading. The existing nine photos now have local 640px, 1280px and 1920px WebP variants under `public/images/architecture/`. ArchitecturalImage selects responsive sources, prioritises heroes and lazy-loads other images. The existing logo was compressed from 395,477 bytes to 13,388 bytes at `public/images/ssp-logo.webp`; originals remain intact. No dependency was added.

## Validation

Production build passed. Browser checks covered all 13 routes at 320, 768, 1024 and 1440px: hero images loaded, no remote image requests, no horizontal overflow, transparent headers and headings below navigation. Mobile menu, Escape dismissal, scroll lock and white header on scroll passed. Local homepage document responses were 19?181ms and load events 132?654ms; these local measurements are not deployed network benchmarks.

## Complete updated source

### `tailwind.config.js`

```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ssp: { green: "#163D32", dark: "#163D32", gold: "#C6A15B", cream: "#F8F6EF", charcoal: "#2B2B2D" }
      },
      fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"], display: ["Georgia", "serif"] }
    }
  },
  plugins: []
};
```

### `src/app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### `src/app/layout.js`

```jsx
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Swayam Sampada Properties | Your Real Estate Growth Partner",
    template: "%s | Swayam Sampada Properties",
  },
  description:
    "Connecting properties, creating assets and building wealth. Explore real estate sales, residential and commercial properties, advisory and infrastructure solutions from SSP.",
  openGraph: {
    title: "Swayam Sampada Properties",
    description: "Your Real Estate Growth Partner",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth motion-reduce:scroll-auto">
      <body className="bg-white font-sans text-ssp-charcoal antialiased selection:bg-ssp-gold selection:text-ssp-dark [&_a]:focus-visible:outline-ssp-gold [&_button]:focus-visible:outline-ssp-gold">
        <a href="#main-content" className="sr-only fixed left-4 top-4 z-[100] bg-white px-5 py-3 text-ssp-dark focus:not-sr-only">Skip to content</a>
        <SiteHeader />
        <main id="main-content" className="min-w-0">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
```

### `src/app/page.js`

```jsx
import Link from "next/link";
import ArchitecturalImage from "@/components/common/ArchitecturalImage";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import TrustBar from "@/components/common/TrustBar";
import DivisionCards from "@/components/common/DivisionCards";
import SectionHeading from "@/components/common/SectionHeading";
import EnquiryForm from "@/components/forms/EnquiryForm";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[680px] md:min-h-[760px] lg:min-h-[800px] pt-20 lg:pt-[120px] flex items-center bg-ssp-dark text-white">
        <ArchitecturalImage image="photo-1600607687939-ce8a6c25118c" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-ssp-dark/95 via-ssp-dark/75 to-ssp-dark/25" />
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 relative py-20 md:py-24">
          <p className="text-ssp-gold tracking-[.25em] text-[11px] font-bold mb-6">
            YOUR REAL ESTATE GROWTH PARTNER
          </p>
          <h1 className="font-display tracking-[-0.035em] leading-[1.08] text-[2.65rem] sm:text-6xl lg:text-7xl max-w-3xl">
            Connecting Properties.
            <br />
            Creating Assets.
            <br />
            <span className="text-ssp-gold">Building Wealth.</span>
          </h1>
          <p className="text-white/75 max-w-xl leading-7 mt-7">
            From property sales to investment advisory and large-scale
            development, Swayam Sampada Properties brings real estate solutions
            together under one trusted roof.
          </p>
          <div className="flex flex-wrap gap-3 mt-9 rounded-sm">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 bg-ssp-gold px-6 py-3.5 text-sm font-semibold text-ssp-dark transition-colors hover:bg-ssp-dark hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ssp-gold">
              Book a Free Consultation <ArrowUpRight size={16} />
            </Link>
            <Link href="/solutions" className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/50 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ssp-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ssp-gold">
              Explore Services
            </Link>
          </div>
          <p className="text-white/55 text-xs mt-10 tracking-wide">
            స్వయంగా సంపదను సృష్టించండి
          </p>
        </div>
        <div className="hidden xl:block absolute right-[6%] bottom-12 border border-white/30 bg-black/15 backdrop-blur-sm p-5 max-w-[230px]">
          <p className="text-ssp-gold text-xs tracking-widest">ONE PARTNER</p>
          <p className="font-serif text-xl mt-2">
            Four focused divisions. A connected approach.
          </p>
        </div>
      </section>
      <TrustBar />
      <DivisionCards />
      <section className="bg-ssp-cream py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="relative h-[420px] overflow-hidden bg-ssp-cream">
              <ArchitecturalImage
                image="photo-1600607687920-4e2a09cf159d"
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
              />
            </div>
            <div className="absolute -bottom-5 -right-2 md:right-[-22px] bg-ssp-green text-white p-7 max-w-[230px]">
              <p className="font-serif text-3xl">One trusted partner</p>
              <p className="text-xs text-white/65 mt-2">
                Across the real estate journey.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="ABOUT SWAYAM SAMPADA"
              title="Building Wealth Through Real Estate"
              description="Swayam Sampada Properties Pvt Ltd is a growth-focused real estate company. Our name speaks to self-built prosperity, and our integrated approach is designed to help customers make informed property decisions."
            />
            <ul className="space-y-4 mt-8">
              {[
                "Transparent dealings and verified property information",
                "Support from site visit to registration coordination",
                "Investment guidance aligned with customer goals",
                "Residential, commercial and infrastructure expertise",
              ].map((x) => (
                <li key={x} className="flex gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="text-ssp-green shrink-0" size={18} />
                  {x}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-ssp-green font-bold text-sm mt-8"
            >
              Discover SSP <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="OUR APPROACH"
            title="A clearer way to assess property opportunities"
            description="Every property decision is local. We combine on-ground market understanding with verified information to help customers compare options with confidence."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
            {[
              ["01", "Location", "Micro-market, access and surroundings"],
              [
                "02",
                "Product type",
                "Home, plot, office, retail or industrial",
              ],
              ["03", "Buyer segment", "Who the property is really for"],
              [
                "04",
                "Competing supply",
                "What is available or launching nearby",
              ],
              [
                "05",
                "Transaction evidence",
                "Verified transactions, not only asking prices",
              ],
            ].map(([n, t, d]) => (
              <div key={n} className="border-t-2 border-ssp-gold pt-5">
                <span className="text-ssp-green text-xs font-bold">{n}</span>
                <h3 className="font-serif text-xl mt-3">{t}</h3>
                <p className="text-sm text-gray-500 leading-6 mt-2">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ssp-dark text-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ssp-gold mb-4">LET'S MOVE FORWARD</p>
            <h2 className="font-display tracking-[-0.035em] leading-[1.08] text-4xl md:text-5xl">
              Ready to find the right opportunity?
            </h2>
            <p className="text-white/65 mt-4">
              Talk to an SSP advisor about your property requirement.
            </p>
          </div>
          <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 bg-ssp-gold px-6 py-3.5 text-sm font-semibold text-ssp-dark transition-colors hover:bg-ssp-dark hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ssp-gold">
            Talk to our team <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="py-16 md:py-20 lg:py-24 bg-ssp-cream">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[.8fr_1.2fr] gap-12">
          <div>
            <SectionHeading
              eyebrow="CONTACT"
              title="Let's Talk Property"
              description="Share your requirement and the SSP team can follow up once the enquiry channel is configured."
            />
            <p className="text-xs text-gray-500 mt-6">
              Company contact details are awaiting client confirmation.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
```

### `src/app/about/page.js`

```jsx

import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About SSP",
  description:
    "Learn about Swayam Sampada Properties and its integrated real estate approach.",
};

export default function About() {
  const highlights = [
    "Transparent dealings and verified information",
    "A location- and segment-led approach",
    "Support across buying, selling, leasing and advisory",
    "Residential, commercial and infrastructure capabilities",
  ];

  return (
    <>
      <PageHero
        title="Building Wealth Through Real Estate"
        description="An integrated real estate partner connecting sales, property solutions, investment advisory and infrastructure development."
        image="photo-1486406146926-c627a92ad1ab"
      />

      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
          <SectionHeading
            eyebrow="WHO WE ARE"
            title="One partner across the property journey"
            description="Swayam Sampada Properties Pvt Ltd brings multiple real estate capabilities together under one brand. The name 'Swayam Sampada' reflects self-built prosperity and the company's focus on helping customers make informed property decisions."
          />

          <div className="space-y-5">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 border-b border-gray-100 pb-4 text-sm"
              >
                <CheckCircle2 className="text-ssp-green shrink-0" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ssp-cream py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="OUR POSITIONING"
            title="Connecting expertise. Creating a considered path forward."
            description="SSP combines on-ground market knowledge with verified information. Specific leadership profiles, company milestones, vision and mission statements should be added after client confirmation."
          />
        </div>
      </section>
    </>
  );
}
```

### `src/app/contact/page.js`

```jsx
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
```

### `src/app/faqs/page.js`

```jsx
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
```

### `src/app/insights/page.js`

```jsx
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
const stats = [
  ["19,249", "Residential sales · H1 2026"],
  ["20,466", "Residential launches · H1 2026"],
  ["₹8,258*", "Average residential price / sq. ft. · H1 2026"],
  ["7.5M sq. ft.", "Office leasing · H1 2026"],
  ["4.21M sq. ft.", "Office leasing · Q3 2026"],
  ["10,312", "Residential launches · Q3 2026"],
];
export const metadata = {
  title: "Real Estate Market Insights 2026 | Swayam Sampada",
  description: "Market indicators for buyers, investors and businesses.",
};
export default function Insights() {
  return (
    <>
      <PageHero
        eyebrow="MARKET INSIGHTS"
        title="What the Numbers Say"
        description="Demand is active. Supply is competitive. Strategy decides who wins."
        image="photo-1486406146926-c627a92ad1ab"
        cta="Talk to an Advisor"
      />
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="REPORTED INDICATORS"
            title="Market context for better questions"
            description="The content document provides the following H1 and Q3 2026 figures. The city / region and original data source are still awaiting confirmation, so these figures must not be treated as independently verified."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {stats.map(([n, l]) => (
              <div key={l} className="bg-ssp-cream p-7">
                <p className="font-serif text-4xl text-ssp-green">{n}</p>
                <p className="text-sm text-gray-600 mt-3">{l}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 border border-gray-200 p-5 text-xs leading-6 text-gray-500">
            * The ₹ symbol and geographic coverage must be confirmed. The source
            document also reports warehousing leasing of 1.49 million sq. ft.
            for H1 2026. Market figures are for reference only, not a property
            valuation or investment advice. Confirm source and region before
            publication.
          </div>
        </div>
      </section>
    </>
  );
}
```

### `src/app/partner/page.js`

```jsx
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import EnquiryForm from "@/components/forms/EnquiryForm";
export const metadata = {
  title: "Partner with SSP | Build a Real Estate Career",
  description:
    "Explore a realtor partner opportunity with Swayam Sampada Properties.",
};
export default function Partner() {
  return (
    <>
      <PageHero
        eyebrow="CAREERS & PARTNERSHIPS"
        title="Build Your Real Estate Career with SSP"
        description="Grow with a four-pillar service brand and learn sales, leasing and advisory."
        image="photo-1521737711867-e3b97375f902"
        cta="Partner with SSP" ctaHref="#enquiry"
      />
      <section id="enquiry" className="scroll-mt-36 py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-14">
          <div>
            <SectionHeading
              eyebrow="PARTNER WITH SSP"
              title="Build knowledge. Earn trust. Grow your network."
              description="Aspiring realtors can explore residential, plots, commercial and industrial segments, supported by a brand that connects properties, creates assets and builds wealth."
            />
            <h3 className="font-serif text-2xl mt-10">
              What you can learn and do
            </h3>
            <ul className="list-disc pl-5 mt-4 space-y-3 text-sm text-gray-600">
              <li>Residential and plot sales and marketing</li>
              <li>Commercial leasing and tenant or landlord representation</li>
              <li>Market reading using demand and supply indicators</li>
              <li>Client advisory and due-diligence coordination</li>
            </ul>
            <p className="text-xs text-gray-500 mt-8">
              Training duration, eligibility, commission structure and
              application steps require client confirmation. No earning figures
              are advertised.
            </p>
          </div>
          <EnquiryForm partner />
        </div>
      </section>
    </>
  );
}
```

### `src/app/privacy-policy/page.js`

```jsx
import PageHero from "@/components/common/PageHero";
export const metadata = { title: "Privacy Policy" };
export default function Privacy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="Information about how enquiry data is handled."
      />
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8 lg:px-12">
          <p className="text-sm leading-7 text-gray-600">
            This is a launch placeholder. SSP must provide and approve its
            privacy policy, including data collected, purpose, retention,
            processors, contact details and applicable rights, before collecting
            personal information through this website.
          </p>
        </div>
      </section>
    </>
  );
}
```

### `src/app/terms/page.js`

```jsx
import PageHero from "@/components/common/PageHero";
export const metadata={title:"Terms & Conditions"};
export default function Terms(){return <><PageHero title="Terms & Conditions" description="Website information and property enquiry terms."/><section className="py-16 md:py-20 lg:py-24"><div className="mx-auto w-full max-w-3xl px-5 sm:px-8 lg:px-12"><p className="text-sm leading-7 text-gray-600">This is a launch placeholder. SSP must provide and approve website terms, property information disclaimers and applicable legal details before publication.</p></div></section></>}
```

### `src/app/solutions/page.js`

```jsx
import PageHero from "@/components/common/PageHero";
import DivisionCards from "@/components/common/DivisionCards";
import SectionHeading from "@/components/common/SectionHeading";
import Link from "next/link";
const segments = [
  [
    "Residential homes",
    "End-users, families, professionals and NRIs",
    "Buyer representation and verified resale / new-project marketing",
  ],
  [
    "Open plots & land",
    "Plot buyers, landowners, developers and long-term investors",
    "Landowner mandates, plot marketing and due-diligence coordination",
  ],
  [
    "Commercial offices",
    "GCCs, IT/BFSI firms and professional services",
    "Tenant / landlord representation and leasing support",
  ],
  [
    "Retail & high street",
    "Retailers, F&B, service businesses and franchise operators",
    "Site selection and leasing mandates",
  ],
  [
    "Industrial & logistics",
    "Manufacturers, 3PL providers, e-commerce and distributors",
    "Industrial land and warehouse advisory",
  ],
  [
    "Project partnerships",
    "Developers, landowners and institutional partners",
    "Project marketing, channel networks and strategic coordination",
  ],
];
export const metadata = {
  title: "Real Estate Solutions",
  description:
    "Residential, plots, commercial, industrial and investment advisory solutions from SSP.",
};
export default function Solutions() {
  return (
    <>
      <PageHero
        title="Real Estate Solutions Built Around Your Goals"
        description="Buying a home, investing in land, leasing space or building a project — SSP brings sales, advisory and development together."
        image="photo-1486406146926-c627a92ad1ab"
      />
      <DivisionCards />
      <section className="bg-ssp-cream py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="SOLUTIONS BY SEGMENT"
            title="Find the support that fits your requirement"
            description="Explore the audiences SSP serves and the services available across each segment."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {segments.map(([title, audience, service], i) => (
              <article
                key={title}
                className="bg-white p-7 border border-ssp-green/15 border-t-2 border-t-ssp-gold"
              >
                <span className="text-xs text-ssp-green font-bold">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl mt-3">{title}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-5">
                  Who is looking
                </p>
                <p className="text-sm text-gray-600 mt-2 leading-6">
                  {audience}
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-5">
                  SSP opportunity
                </p>
                <p className="text-sm text-gray-700 mt-2 leading-6">
                  {service}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title="A considered process from brief to closing"
          />
          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              [
                "01",
                "Understand your goal",
                "We listen to your needs, budget and timeline.",
              ],
              [
                "02",
                "Assess the micro-market",
                "We apply the five-point opportunity check.",
              ],
              [
                "03",
                "Shortlist and verify",
                "We present options and coordinate due diligence.",
              ],
              [
                "04",
                "Close and support",
                "We assist with negotiation, documentation and handover.",
              ],
            ].map(([n, t, d]) => (
              <div key={n} className="border-t border-ssp-gold pt-5">
                <b className="text-ssp-green text-sm">{n}</b>
                <h3 className="font-serif text-xl mt-3">{t}</h3>
                <p className="text-sm text-gray-500 leading-6 mt-2">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-8">
            The process description is subject to final client confirmation.
          </p>
        </div>
      </section>
    </>
  );
}
```

### `src/app/solutions/infrastructure/page.js`

```jsx
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
export const metadata = {
  title: "Industrial, Logistics & Project Partnerships | SSP Infrastructure",
  description:
    "Industrial land, warehouse advisory and project partnerships from SSP Infrastructure.",
};
export default function Infrastructure() {
  return (
    <>
      <PageHero
        eyebrow="SSP INFRASTRUCTURE"
        title="Development & Projects"
        description="Quality-driven development and project partnerships across industrial and logistics real estate."
        image="photo-1487958449943-2429e8be8625"
        cta="Talk to an Advisor"
      />
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="WHAT WE SUPPORT"
            title="The larger side of real estate"
            description="SSP Infrastructure supports industrial and logistics space, and projects that bring developers, landowners and institutional partners together."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <article className="bg-ssp-cream p-6 sm:p-8 border-t-2 border-ssp-gold">
              <h3 className="font-serif text-2xl">Industrial & Logistics</h3>
              <p className="text-sm leading-7 text-gray-600 mt-4">
                For manufacturers, 3PL providers, e-commerce players and
                distributors. We evaluate zoning, power, road access, truck
                movement and clearances, with industrial land and warehouse
                advisory.
              </p>
            </article>
            <article className="bg-ssp-cream p-6 sm:p-8 border-t-2 border-ssp-gold">
              <h3 className="font-serif text-2xl">Project Partnerships</h3>
              <p className="text-sm leading-7 text-gray-600 mt-4">
                For developers, landowners and institutional partners. We review
                project approvals, sales velocity, partner capability and
                capital needs, supporting project marketing and channel
                coordination.
              </p>
            </article>
          </div>
          <div className="mt-10 border border-gray-200 p-6 text-sm text-gray-600">
            Completed and ongoing project showcases will be published only after
            client approval and receipt of project names, locations, status and
            approved images.
          </div>
        </div>
      </section>
    </>
  );
}
```

### `src/app/solutions/properties/page.js`

```jsx
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
const types = [
  [
    "Residential homes",
    "For families, professionals, end-users and NRIs. We review unsold stock, new launches, ticket size and construction stage.",
  ],
  [
    "Open plots & land",
    "We consider title chain, layout approvals, access, utilities and competing layouts. Due-diligence coordination is available.",
  ],
  [
    "Commercial offices",
    "We review grade, floorplate, vacancy, fit-out, rent and lease term for occupiers and owners.",
  ],
  [
    "Retail & high street",
    "We study footfall, frontage, catchment, parking and competing centres for retail site selection.",
  ],
];
export const metadata = {
  title: "Residential & Commercial Properties",
  description:
    "Homes, open plots, offices and retail spaces assessed for location, supply and demand.",
};
export default function Properties() {
  return (
    <>
      <PageHero
        eyebrow="SSP PROPERTIES"
        title="Residential & Commercial Properties"
        description="Homes, plots, offices and retail spaces in carefully assessed locations."
        image="photo-1600566753086-00f18fb6b3ea"
        cta="Schedule a Site Visit"
      />
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="PROPERTY SEGMENTS"
            title="Property decisions start with the right context"
          />
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {types.map(([t, d], i) => (
              <div className="p-6 sm:p-8 border border-ssp-green/15 border-t-2 border-t-ssp-gold" key={t}>
                <span className="text-xs font-bold text-ssp-green">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl mt-3">{t}</h3>
                <p className="text-sm text-gray-600 leading-7 mt-4">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-ssp-cream p-6 text-sm text-gray-600">
            Featured property listings will be added only after the client
            supplies verified listings, approved images, prices, availability
            and applicable approval details. No sample listing is represented as
            an SSP property.
          </div>
        </div>
      </section>
    </>
  );
}
```

### `src/app/solutions/realty/page.js`

```jsx
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
const items = [
  "Buyer representation — shortlist, compare and negotiate on your behalf",
  "Verified resale and new-project marketing — listings checked before they are shown",
  "Landowner mandates and plot marketing — structured marketing for land and layouts",
  "Developer and project marketing — channel networks and coordinated sales support",
];
export const metadata = {
  title: "SSP Realty – Property Sales & Marketing",
  description:
    "Verified property listings, buyer representation and smart marketing with SSP Realty.",
};
export default function Realty() {
  return (
    <>
      <PageHero
        eyebrow="SSP REALTY"
        title="Property Sales & Marketing"
        description="Verified listings, smart marketing and end-to-end buying support."
        image="photo-1600607687939-ce8a6c25118c"
        cta="Talk to an Advisor"
      />
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-14">
          <SectionHeading
            eyebrow="OVERVIEW"
            title="Connecting the right property with the right person"
            description="SSP Realty is the sales and marketing arm of Swayam Sampada Properties. We represent buyers, sellers, landowners and developers with a focus on verified information."
          />
          <div className="space-y-5">
            {items.map((x) => (
              <div
                key={x}
                className="border-b pb-5 text-sm leading-7 text-gray-700"
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ssp-cream py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="WHY SSP REALTY"
            title="Local knowledge. Verification before recommendation."
            description="Our approach is segment- and locality-led rather than relying only on city averages. A single point of contact from enquiry to closing is subject to operational confirmation."
          />
        </div>
      </section>
    </>
  );
}
```

### `src/app/solutions/wealth/page.js`

```jsx
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
const bullets=["Market reading — demand and supply indicators used as city-level reference, not as a property valuation","Micro-market analysis — location, product, segment, competing supply and transaction evidence","Portfolio view — residential, plots, commercial and industrial options compared side by side","Due-diligence coordination — title, approvals, access and utilities checked before you commit"];
export const metadata={title:"Real Estate Investment Advisory | SSP Wealth",description:"Data-led real estate asset and investment advisory from SSP Wealth."};
export default function Wealth(){return <><PageHero eyebrow="SSP WEALTH" title="Asset & Investment Advisory" description="Data-led guidance to understand demand, supply and the property options that fit your goals and time horizon." image="photo-1460925895917-afdab827c52f"/><section className="py-16 md:py-20 lg:py-24"><div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-14"><SectionHeading eyebrow="HOW WE ADVISE" title="Good real estate investing starts with good information" description="SSP Wealth helps investors read the market: where demand is active, where supply is building up and which asset types may fit their objectives."/><div className="space-y-5">{bullets.map(x=><p key={x} className="border-b pb-5 text-sm leading-7 text-gray-700">{x}</p>)}</div></div></section><section className="bg-ssp-cream py-16 md:py-20 lg:py-24"><div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12"><SectionHeading eyebrow="WHO IT IS FOR" title="Guidance for different property goals" description="First-time and long-term investors · Landowners considering how to use or monetise land · Business owners weighing owned versus leased space · NRIs seeking an on-ground partner."/><p className="text-xs text-gray-500 mt-8">Regulatory status and final advisory disclaimer must be confirmed by the client before launch. No guaranteed returns are promised.</p></div></section></>}
```

### `src/components/common/DivisionCards.js`

```jsx

import Link from "next/link";
import ArchitecturalImage from "./ArchitecturalImage";
import { ArrowUpRight } from "lucide-react";

const divisions = [
  {
    number: "01",
    name: "SSP Realty",
    tag: "SALES & MARKETING",
    desc: "Discover verified properties, strategic marketing and seamless buying and selling experiences.",
    href: "/solutions/realty",
    image: "photo-1600607687920-4e2a09cf159d",
  },
  {
    number: "02",
    name: "SSP Properties",
    tag: "RESIDENTIAL & COMMERCIAL",
    desc: "Explore thoughtfully selected homes, plots, offices and commercial spaces.",
    href: "/solutions/properties",
    image: "photo-1600566753086-00f18fb6b3ea",
  },
  {
    number: "03",
    name: "SSP Wealth",
    tag: "ASSET & INVESTMENT ADVISORY",
    desc: "Make informed property investment decisions through market insights and strategic guidance.",
    href: "/solutions/wealth",
    image: "photo-1486406146926-c627a92ad1ab",
  },
  {
    number: "04",
    name: "SSP Infrastructure",
    tag: "DEVELOPMENT & PROJECTS",
    desc: "Build opportunities through industrial, logistics and infrastructure development partnerships.",
    href: "/solutions/infrastructure",
    image: "photo-1487958449943-2429e8be8625",
  },
];

export default function DivisionCards({ compact = false }) {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#F8F6EF]">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-[#C6A15B] text-xs tracking-[0.25em] font-semibold mb-4">
              THE SSP ECOSYSTEM
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#163D32] leading-[1.12]">
              Everything Real Estate.
              <br />
              <span className="italic text-[#C6A15B]">
                One Partner.
              </span>
            </h2>
          </div>

          <p className="text-[#626262] text-sm md:text-base leading-7 max-w-md">
            From finding the right property to creating long-term
            investment opportunities, our four specialised divisions
            bring the entire real estate journey together.
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 gap-5 ${
          compact ? "" : "xl:grid-cols-4"
        }`}>
          {divisions.map((division) => (
            <Link
              href={division.href}
              key={division.number}
              className="group relative block overflow-hidden bg-[#163D32] min-h-[400px] md:min-h-[460px]"
            >
              {/* Background Image */}
              <ArchitecturalImage
                image={division.image}
                sizes={compact ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 1280px) 280px, (min-width: 640px) 50vw, 100vw"}
                className="transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D19] via-[#101D19]/35 to-black/10 transition-opacity duration-500 group-hover:from-[#101D19]/95" />

              {/* Card Content */}
              <div className="relative z-10 h-full min-h-[400px] md:min-h-[460px] flex flex-col justify-between p-6 md:p-7 text-white">

                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.2em] text-white/80">
                    DIVISION {division.number}
                  </span>

                  <span className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C6A15B] group-hover:border-[#C6A15B] group-hover:text-[#163D32]">
                    <ArrowUpRight size={19} />
                  </span>
                </div>

                <div>
                  <div className="w-10 h-[2px] bg-[#C6A15B] mb-5 transition-all duration-300 group-hover:w-16" />

                  <p className="text-[9px] md:text-[10px] tracking-[0.18em] text-[#E5C78E] font-semibold mb-3">
                    {division.tag}
                  </p>

                  <h3 className="font-serif text-3xl leading-tight mb-4">
                    {division.name}
                  </h3>

                  <p className="text-white/75 text-sm leading-6 max-w-xs">
                    {division.desc}
                  </p>

                  <div className="mt-7 pt-5 border-t border-white/25 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.16em] font-semibold">
                      EXPLORE DIVISION
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
```

### `src/components/common/PageHero.js`

```jsx
import Link from "next/link";
import ArchitecturalImage from "./ArchitecturalImage";
import { ArrowUpRight } from "lucide-react";

export default function PageHero({
  eyebrow = "SWAYAM SAMPADA PROPERTIES",
  title,
  description,
  image = "photo-1600607687939-ce8a6c25118c",
  ctaHref = "/contact",
  cta = "Book a Free Consultation",
}) {
  return (
    <section className="relative isolate min-h-[540px] md:min-h-[620px] lg:min-h-[660px] pt-20 lg:pt-[120px] flex items-center overflow-hidden bg-[#163D32] text-white">
      {/* Background Image */}
      <ArchitecturalImage image={image} priority className="-z-20" />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10251F]/95 via-[#10251F]/75 to-[#10251F]/20" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#10251F]/50 via-transparent to-[#10251F]/20" />

      {/* Hero Content */}
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 py-20 md:py-24">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-7">
            <span className="w-10 h-[2px] bg-[#C6A15B]" />

            <p className="text-[#E3C58A] text-[10px] md:text-xs tracking-[0.28em] font-semibold uppercase">
              {eyebrow}
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight max-w-4xl">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="mt-7 text-white/80 max-w-2xl text-sm md:text-base leading-7 md:leading-8">
              {description}
            </p>
          )}

          {/* CTA */}
          {cta && (
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-4 mt-9 px-7 py-4 bg-[#C6A15B] text-[#163D32] text-xs font-bold tracking-wide transition-all duration-300 hover:bg-white motion-safe:hover:-translate-y-1 group"
            >
              {cta}

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1"
              />
            </Link>
          )}
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C6A15B] via-[#C6A15B]/40 to-transparent" />
    </section>
  );
}
```

### `src/components/common/SectionHeading.js`

```jsx
export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  center = false,
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      {eyebrow && (
        <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] mb-4 ${light ? "text-ssp-gold" : "text-ssp-green"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display tracking-[-0.035em] leading-[1.08] text-3xl md:text-5xl ${light ? "text-white" : "text-ssp-dark"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 leading-7 text-sm md:text-base ${light ? "text-white/65" : "text-gray-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
```

### `src/components/common/TrustBar.js`

```jsx

import {
  ShieldCheck,
  Flag,
  TrendingUp,
  Globe2,
} from "lucide-react";

const items = [
  {
    number: "01",
    Icon: ShieldCheck,
    label: "Trusted Partner",
    description: "Built on transparency",
  },
  {
    number: "02",
    Icon: Flag,
    label: "Strategic Solutions",
    description: "Focused on your goals",
  },
  {
    number: "03",
    Icon: TrendingUp,
    label: "Sustainable Growth",
    description: "Creating lasting value",
  },
  {
    number: "04",
    Icon: Globe2,
    label: "Global Outlook",
    description: "Thinking beyond boundaries",
  },
];

export default function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-[#163D32] text-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {items.map(({ number, Icon, label, description }) => (
            <div
              key={number}
              className="group flex items-center gap-4 border-b border-white/15 px-2 sm:px-4 lg:border-b-0 lg:px-5 py-7 md:py-9 transition-colors duration-300 hover:bg-white/[0.04]"
            >
              {/* Icon */}
              <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full border border-[#C6A15B]/50 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C6A15B] group-hover:border-[#C6A15B]">
                <Icon
                  size={21}
                  strokeWidth={1.5}
                  className="text-[#C6A15B] transition-colors duration-300 group-hover:text-[#163D32]"
                />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <span className="block text-[9px] tracking-[0.2em] text-[#C6A15B] mb-1">
                  {number} / SSP
                </span>

                <h3 className="text-xs sm:text-sm font-semibold tracking-wide text-white">
                  {label}
                </h3>

                <p className="text-[10px] sm:text-xs text-white/70 mt-1 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
```

### `src/components/forms/EnquiryForm.js`

```jsx
"use client";

import { useState } from "react";

const interestOptions = [
  "SSP Realty – Buy / Sell",
  "SSP Properties – Residential",
  "Open Plots & Land",
  "Commercial Offices",
  "Retail",
  "SSP Wealth – Investment Advisory",
  "SSP Infrastructure – Industrial / Projects",
  "Partner with SSP",
];

export default function EnquiryForm({ partner = false }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    location: "",
    budget: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState("");

  const update = (e) =>
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });

  const submit = (e) => {
    e.preventDefault();
    setStatus(
      "Your details passed the form checks. Enquiry delivery is not configured yet; please connect the company email or CRM endpoint before accepting live enquiries.",
    );
  };

  const field =
    "w-full border border-gray-200 bg-white px-4 py-3 text-sm rounded-none outline-none transition-colors focus:border-ssp-green focus:ring-2 focus:ring-ssp-green/15";

  // Prevent duplicate "Partner with SSP" entry if partner is true
  const options = partner
    ? ["Partner with SSP", ...interestOptions.filter((opt) => opt !== "Partner with SSP")]
    : interestOptions;

  return (
    <form
      onSubmit={submit}
      className="bg-white p-6 md:p-9 border border-ssp-green/15 border-t-2 border-t-ssp-gold space-y-5 shadow-sm"
    >
      <div className="grid min-w-0 sm:grid-cols-2 gap-5">
        <label className="min-w-0 text-xs font-semibold text-ssp-dark">
          Full name *
          <input
            className={`${field} mt-2`}
            autoComplete="name" name="name"
            value={form.name}
            onChange={update}
            required
            placeholder="Your name"
          />
        </label>
        <label className="min-w-0 text-xs font-semibold text-ssp-dark">
          Phone number *
          <input
            className={`${field} mt-2`}
            type="tel" autoComplete="tel" name="phone"
            value={form.phone}
            onChange={update}
            required
            pattern="[0-9+() -]{8,18}"
            placeholder="+91"
          />
        </label>
        <label className="min-w-0 text-xs font-semibold text-ssp-dark">
          Email address
          <input
            className={`${field} mt-2`}
            type="email"
            autoComplete="email" name="email"
            value={form.email}
            onChange={update}
            placeholder="you@example.com"
          />
        </label>
        <label className="min-w-0 text-xs font-semibold text-ssp-dark">
          I am interested in *
          <select
            className={`${field} mt-2`}
            name="interest"
            value={form.interest}
            onChange={update}
            required
          >
            <option value="">Select a requirement</option>
            {options.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </label>
        <label className="min-w-0 text-xs font-semibold text-ssp-dark">
          Preferred city / location
          <input
            className={`${field} mt-2`}
            name="location"
            value={form.location}
            onChange={update}
            placeholder="Enter preferred location"
          />
        </label>
        <label className="min-w-0 text-xs font-semibold text-ssp-dark">
          Budget range (optional)
          <input
            className={`${field} mt-2`}
            name="budget"
            value={form.budget}
            onChange={update}
            placeholder="Your approximate budget"
          />
        </label>
      </div>
      <label className="block min-w-0 text-xs font-semibold text-ssp-dark">
        Your message
        <textarea
          className={`${field} mt-2 min-h-28 resize-y`}
          name="message"
          value={form.message}
          onChange={update}
          placeholder="Tell us a little about your requirement"
        />
      </label>
      <label className="flex gap-3 text-xs text-gray-600 items-start">
        <input
          type="checkbox"
          name="consent"
          checked={form.consent}
          onChange={update}
          required
          className="mt-0.5 accent-ssp-green"
        />
        I agree to be contacted by Swayam Sampada Properties regarding this
        enquiry.
      </label>
      <button className="inline-flex min-h-12 items-center justify-center gap-3 bg-ssp-gold px-6 py-3.5 text-sm font-semibold text-ssp-dark transition-colors hover:bg-ssp-dark hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ssp-gold w-full md:w-auto" type="submit">
        Send Enquiry <span aria-hidden>↗</span>
      </button>
      {status && (
        <p
          role="status"
          className="text-sm leading-6 bg-amber-50 border border-amber-200 text-amber-900 p-4"
        >
          {status}
        </p>
      )}
    </form>
  );
}
```

### `src/components/layout/SiteHeader.js`

```jsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const divisions = [
  {
    name: "SSP Realty",
    href: "/solutions/realty",
    description: "Real estate solutions",
  },
  {
    name: "SSP Properties",
    href: "/solutions/properties",
    description: "Residential and commercial properties",
  },
  {
    name: "SSP Wealth",
    href: "/solutions/wealth",
    description: "Property investment opportunities",
  },
  {
    name: "SSP Infrastructure",
    href: "/solutions/infrastructure",
    description: "Infrastructure development",
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "What We Do", href: "/solutions" },
  { name: "Careers", href: "/partner" },
  { name: "Insights", href: "/insights" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const transparent = !scrolled && !open;

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 30);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, [pathname]);

  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE;
  const email = process.env.NEXT_PUBLIC_COMPANY_EMAIL;

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    document.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const wasLocked = document.body.classList.contains("overflow-hidden");
    document.body.classList.add("overflow-hidden");

    return () => {
      if (!wasLocked) document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${transparent ? "bg-transparent" : "bg-white shadow-lg"}`}
    >
      {/* Top utility bar */}
      <div
        className={`hidden h-10 border-b lg:block ${transparent ? "border-white/20 bg-black/10" : "border-ssp-green bg-ssp-green"}`}
      >
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-12 text-xs text-white">
          <p>Building Trust. Creating Futures.</p>

          <div className="flex items-center gap-6">
            <a
              href={phone ? `tel:${phone}` : "/contact"}
              className="flex items-center gap-2 hover:text-[#C6A15B]"
            >
              <Phone size={13} />
              {phone || "Contact our team"}
            </a>

            <a
              href={email ? `mailto:${email}` : "/contact"}
              className="flex items-center gap-2 hover:text-[#C6A15B]"
            >
              <Mail size={13} />
              {email || "Make an enquiry"}
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div
        className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="relative z-50 flex h-full items-center"
        >
          <div className="flex items-center justify-center rounded-md px-2 py-1">
            <Image
              src="/images/ssp-logo.webp"
              alt="Swayam Sampada Properties"
              width={128}
              height={136}
              priority
              unoptimized
              className="h-[68px] w-auto max-w-[190px] object-contain"
            />
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden items-center gap-8 xl:flex">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`text-sm font-medium transition-colors hover:text-ssp-gold aria-[current=page]:underline aria-[current=page]:decoration-ssp-gold aria-[current=page]:underline-offset-8 ${transparent ? "text-white" : "text-ssp-charcoal"}`}
            >
              {link.name}
            </Link>
          ))}

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-ssp-gold ${transparent ? "text-white" : "text-ssp-charcoal"}`}
            >
              Services
              <ChevronDown
                size={15}
                className={`transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-5">
                <div className="grid grid-cols-2 gap-3 border border-gray-100 bg-white p-5 shadow-xl">
                  {divisions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setServicesOpen(false)}
                      className="group p-4 transition-colors hover:bg-[#F8F6EF]"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-[#163D32]">
                          {item.name}
                        </h3>
                        <ArrowUpRight
                          size={16}
                          className="text-[#C6A15B] opacity-0 transition-opacity group-hover:opacity-100"
                        />
                      </div>

                      <p className="mt-2 text-xs text-gray-500">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`text-sm font-medium transition-colors hover:text-ssp-gold aria-[current=page]:underline aria-[current=page]:decoration-ssp-gold aria-[current=page]:underline-offset-8 ${transparent ? "text-white" : "text-ssp-charcoal"}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 bg-[#C6A15B] px-6 py-3 text-sm font-semibold text-[#163D32] transition-colors hover:bg-[#163D32] hover:text-white xl:flex"
        >
          Contact Us
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className={`relative z-50 p-2 xl:hidden ${transparent ? "text-white" : "text-ssp-green"}`}
        >
          {open ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        inert={!open}
        aria-hidden={!open}
        className={`fixed inset-0 top-0 z-40 bg-white xl:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-7 pb-10 pt-32 lg:pt-44">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
                onClick={closeMenu}
                className="border-b border-gray-100 py-5 text-lg font-medium text-[#163D32]"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile services */}
            <div className="border-b border-gray-100">
              <button
                aria-expanded={servicesOpen}
              onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between py-5 text-lg font-medium text-[#163D32]"
              >
                Services
                <ChevronDown
                  size={19}
                  className={`transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="flex flex-col pb-4 pl-4">
                  {divisions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="py-3 text-sm text-gray-600 hover:text-[#C6A15B]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
                onClick={closeMenu}
                className="border-b border-gray-100 py-5 text-lg font-medium text-[#163D32]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-8 flex items-center justify-center gap-2 bg-[#C6A15B] px-6 py-4 font-semibold text-ssp-dark"
          >
            Contact Us
            <ArrowUpRight size={18} />
          </Link>

          <div className="mt-auto space-y-4 pt-10 text-sm text-gray-600">
            <a href={phone ? `tel:${phone}` : "/contact"} className="flex items-center gap-3">
              <Phone size={17} />
              {phone || "Contact our team"}
            </a>

            <a
              href={email ? `mailto:${email}` : "/contact"}
              className="flex items-center gap-3"
            >
              <Mail size={17} />
              {email || "Make an enquiry"}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
```

### `src/components/layout/SiteFooter.js`

```jsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const groups = [
  [
    "Company",
    [
      ["About Us", "/about"],
      ["What We Do", "/solutions"],
      ["Careers", "/partner"],
      ["Insights", "/insights"],
    ],
  ],
  [
    "Solutions",
    [
      ["SSP Realty", "/solutions/realty"],
      ["SSP Properties", "/solutions/properties"],
      ["SSP Wealth", "/solutions/wealth"],
      ["SSP Infrastructure", "/solutions/infrastructure"],
    ],
  ],
  [
    "Explore",
    [
      ["Contact", "/contact"],
      ["FAQs", "/faqs"],
      ["Privacy Policy", "/privacy-policy"],
      ["Terms", "/terms"],
    ],
  ],
];
export default function SiteFooter() {
  return (
    <footer className="bg-ssp-dark text-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 py-16 grid lg:grid-cols-[1.5fr_2fr] gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-12 bg-ssp-gold text-ssp-dark flex items-center justify-center font-serif text-xl">
              SSP
            </span>
            <div>
              <b className="tracking-wide">SWAYAM SAMPADA</b>
              <small className="block text-[10px] tracking-[.2em] text-white/70">
                PROPERTIES PVT LTD
              </small>
            </div>
          </div>
          <p className="font-serif text-2xl leading-snug max-w-sm">
            Connecting Properties. Creating Assets. Building Wealth.
          </p>
          <p className="text-sm text-white/70 mt-4">
            Your Real Estate Growth Partner.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-ssp-gold mt-7 text-sm font-semibold"
          >
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {groups.map(([title, items]) => (
            <div key={title}>
              <h3 className="text-xs uppercase tracking-[.18em] text-ssp-gold mb-5">
                {title}
              </h3>
              {items.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-sm text-white/65 hover:text-white py-2"
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 py-6 grid md:grid-cols-2 gap-4 text-xs text-white/65">
          <p>
            © {new Date().getFullYear()} Swayam Sampada Properties Pvt Ltd. All
            rights reserved.
          </p>
          <p className="md:text-right">
            Prices, availability and approvals are subject to change. Verify all
            details before purchase.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

### `src/components/common/ArchitecturalImage.js`

```jsx
/** Responsive local photography; generated sizes avoid external requests and runtime transforms. */
export default function ArchitecturalImage({
  image,
  priority = false,
  sizes = "100vw",
  className = "",
}) {
  const base = `/images/architecture/${image}`;

  return (
    <img
      src={`${base}-1280.webp`}
      srcSet={`${base}-640.webp 640w, ${base}-1280.webp 1280w, ${base}-1920.webp 1920w`}
      sizes={sizes}
      alt=""
      aria-hidden="true"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}
```
