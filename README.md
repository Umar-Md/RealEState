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

## GitHub Pages

The site exports static files to `out/`. The workflow in `.github/workflows/deploy-pages.yml` builds and deploys on pushes to `main` or a manual workflow run.

1. Open https://github.com/Umar-Md/RealEState/settings/pages and select **GitHub Actions** under **Build and deployment > Source**.
2. Commit and push these changes to `main`.
3. Wait for **Deploy to GitHub Pages** in the repository's Actions tab to finish.

The site will be available at https://umar-md.github.io/RealEState/.

The workflow uses the Pages URL and base path for assets and metadata. Local development continues to use `/`. GitHub Pages serves static files; the enquiry form still needs an external delivery service.

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

## Meeting booking

The static `/booking/` page uses SSP branding, the existing SSP logo, and Satish Reddy as the contact. The connected event is `https://cal.com/umar-mohammad/mohammad-umar`, supplied by the account owner. It is the default when no deployment override is set. Invalid settings show a scheduling-unavailable state with a Contact link.

### Connect your Cal.com account

1. Create your Cal.com account. Set the profile display name to **Satish Reddy** and upload the **Swayam Sampada** logo as the profile image. Update the company/profile details to SSP.
2. Connect your calendar and create an SSP meeting event. Set its title, description, availability, required fields, duration and meeting location in Cal.com. Those settings also control the booking email and invitation details.
3. Copy `.env.example` to `.env.local`. Set `NEXT_PUBLIC_CAL_EVENT` to your actual `username/event-slug` (not a made-up path). For a hosted Cal.com account, leave `NEXT_PUBLIC_CAL_ORIGIN=https://app.cal.com`. For your own self-hosted instance, use its HTTPS origin.
4. Restart local development or rebuild the static website. These settings are public build-time values and contain no API key.

For **GitHub Pages**, set repository Actions variables `NEXT_PUBLIC_CAL_EVENT` and, optionally, `NEXT_PUBLIC_CAL_ORIGIN`; the deployment workflow passes them to the build. For **Vercel/Netlify**, set the same build environment variables and redeploy. The supplied event works without extra environment variables. These variables let you override it when changing accounts or event types.

Configuration is validated in `src/lib/cal-config.mjs` and read by `src/lib/cal-embed.js`. The only default is the explicitly supplied account event; invalid overrides disable the embed. The official SDK uses the configured origin's `/embed/embed.js`. The sidebar provides SSP's details; the official UI instruction hides the duplicate event-details pane while retaining Cal.com's timezone selector. Set your SSP profile correctly even though that pane is hidden.

Cal.com retains availability, required/custom booking fields, reservations, calendar integrations, email notifications, payment, rescheduling, and cancellation. No API key, database, server route, or additional production dependency is required.

The custom result listens to namespaced `bookingSuccessfulV2` and `rescheduleBookingSuccessfulV2` events. A real booking UID is required. Only an accepted booking with no outstanding payment is labelled confirmed. Pending/payment states keep the provider's screen available. Dry-run events are ignored. Confirmation stays in memory and resets on reload; guest information is not stored in URLs or browser storage.

Returned timestamps supply the displayed date, time and duration in the visitor's labelled browser timezone. Confirmed, non-recurring bookings can be downloaded as an `.ics` event using those timestamps. Guest emails, meeting URLs and direct rescheduling links appear only when returned. The standard V2 event does not guarantee guest emails or a rescheduling URL; **View booking details** reveals Cal.com's original confirmation. Booking-email links remain available for managing the reservation.

Validation:

```bash
node --test tests/booking-details.test.mjs tests/cal-config.test.mjs
npm run build
```

Availability, booking creation, email delivery and Teams integration must be checked against your actual SSP event once connected. Changing website text does not rename a Cal.com organizer or change calendar ownership.
