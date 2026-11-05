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