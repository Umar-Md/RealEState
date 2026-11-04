# Swayam Sampada Properties — Next.js Website

A JavaScript/JSX Next.js App Router project styled with Tailwind CSS.

## Run locally

1. Install Node.js 20 or later.
2. Extract this ZIP and open the `ssp-website` folder in VS Code.
3. In a terminal run:

```bash
npm install
cp .env.example .env.local
npm run dev
```

On Windows PowerShell, use `Copy-Item .env.example .env.local` instead of `cp`.
Open http://localhost:3000.

## Included pages

- `/` Home
- `/about`
- `/solutions`
- `/solutions/realty`
- `/solutions/properties`
- `/solutions/wealth`
- `/solutions/infrastructure`
- `/insights`
- `/partner`
- `/contact`
- `/faqs`
- `/privacy-policy`
- `/terms`

## Before publishing

The supplied SSP documents contain placeholders requiring client confirmation. Do not publish until you replace/confirm:
- Phone and WhatsApp number
- Email, office address, working hours and map link
- Original logo and Telugu tagline artwork
- Market Insights region, source and statistics
- Verified property listings, approvals/RERA details and project portfolio
- Testimonials, leadership details and partner-programme terms
- SSP Wealth regulatory wording, privacy policy and terms

The website deliberately does not invent listings, prices, projects, testimonials or contact details.

## Enquiry form

The form validates required fields in the browser. It currently shows a clear configuration message and does not pretend that an enquiry was sent. Connect a real email/CRM provider or backend endpoint before launch. Do not expose API keys in `NEXT_PUBLIC_` variables.

## Images

Demo architectural photography is loaded from Unsplash. Replace with SSP-approved project/brand images before production. Images are visual placeholders, not SSP property listings.
