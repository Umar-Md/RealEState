
"use client";

import { useState } from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const interestOptions = [
  "SSP Realty – Buy / Sell",
  "SSP Properties – Residential",
  "Open Plots & Land",
  "Central Park — Residential Plotted Township",
  "NIMZ Zaheerabad — Industrial Development",
  "Commercial Offices",
  "Retail",
  "SSP Wealth – Investment Advisory",
  "SSP Infrastructure – Industrial / Projects",
  "Partner with SSP",
];

export default function EnquiryForm({ partner = false, projectName = "", projectInterest = "" }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: projectInterest,
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
        e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value,
    });

  const submit = (e) => {
    e.preventDefault();

    setStatus(
      "Your details passed the form checks. Enquiry delivery is not configured yet; please connect the company email or CRM endpoint before accepting live enquiries.",
    );
  };

  const field =
    "mt-2.5 w-full min-w-0 rounded-none border border-[#DCDDD7] bg-[#FCFCFA] px-4 py-3.5 text-sm text-[#2B2B2D] placeholder:text-gray-400 outline-none transition-all duration-200 hover:border-[#A7B2A8] focus:border-[#163D32] focus:bg-white focus:ring-2 focus:ring-[#163D32]/10";

  const label =
    "block min-w-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#454A45]";

  const options = partner
    ? [
        "Partner with SSP",
        ...interestOptions.filter((opt) => opt !== "Partner with SSP"),
      ]
    : interestOptions;

  return (
    <form
      onSubmit={submit}
      className="relative overflow-hidden border border-[#163D32]/15 border-t-[3px] border-t-[#C6A15B] bg-white shadow-[0_18px_55px_rgba(22,61,50,0.07)]"
    >
      {/* Form heading */}
      <div className="border-b border-[#163D32]/10 bg-[#F8F6EF] px-6 py-7 sm:px-9 sm:py-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-[#C6A15B]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#163D32]">
            {partner ? "Partnership Enquiry" : projectName ? `${projectName} Enquiry` : "Let's Get Started"}
          </span>
        </div>

        <h3 className="font-serif text-2xl leading-tight text-[#163D32] sm:text-3xl">
          {partner
            ? "Build opportunities with us."
            : projectName
              ? `Tell us about your interest in ${projectName}.`
            : "Tell us what you're looking for."}
        </h3>

        <p className="mt-2 max-w-xl text-sm leading-6 text-[#666B65]">
          Share a few details about your requirement. Our team can use this
          information to understand your needs.
        </p>
      </div>

      <div className="space-y-7 p-6 sm:p-9">
        {/* Personal details */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="font-serif text-lg text-[#C6A15B]">01</span>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#163D32]">
              Your Details
            </h4>
            <span className="h-px flex-1 bg-[#E9E9E3]" />
          </div>

          <div className="grid min-w-0 gap-x-5 gap-y-5 sm:grid-cols-2">
            <label className={label}>
              Full Name <span className="text-[#B47735]">*</span>
              <input
                className={field}
                autoComplete="name"
                name="name"
                value={form.name}
                onChange={update}
                required
                placeholder="Enter your full name"
              />
            </label>

            <label className={label}>
              Phone Number <span className="text-[#B47735]">*</span>
              <input
                className={field}
                type="tel"
                autoComplete="tel"
                name="phone"
                value={form.phone}
                onChange={update}
                required
                pattern="[0-9+() -]{8,18}"
                placeholder="+91  XXXXX XXXXX"
              />
            </label>

            <label className={label}>
              Email Address
              <input
                className={field}
                type="email"
                autoComplete="email"
                name="email"
                value={form.email}
                onChange={update}
                placeholder="you@example.com"
              />
            </label>

            <label className={label}>
              Preferred City / Location
              <input
                className={field}
                name="location"
                value={form.location}
                onChange={update}
                placeholder="Enter preferred location"
              />
            </label>
          </div>
        </div>

        {/* Requirement details */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="font-serif text-lg text-[#C6A15B]">02</span>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#163D32]">
              Your Requirement
            </h4>
            <span className="h-px flex-1 bg-[#E9E9E3]" />
          </div>

          <div className="grid min-w-0 gap-x-5 gap-y-5 sm:grid-cols-2">
            <label className={label}>
              I Am Interested In <span className="text-[#B47735]">*</span>
              <select
                className={`${field} cursor-pointer`}
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

            <label className={label}>
              Approximate Budget
              <input
                className={field}
                name="budget"
                value={form.budget}
                onChange={update}
                placeholder="e.g. ₹50 Lakhs – ₹1 Crore"
              />
            </label>
          </div>

          <label className={`${label} mt-5`}>
            Tell Us More About Your Requirement
            <textarea
              className={`${field} min-h-32 resize-y leading-6`}
              name="message"
              value={form.message}
              onChange={update}
              placeholder="Share any specific requirements, preferences or questions..."
            />
          </label>
        </div>

        {/* Consent */}
        <div className="border-t border-[#E9E9E3] pt-5">
          <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-[#666B65]">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={update}
              required
              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#163D32]"
            />
            <span>
              I agree to be contacted by Swayam Sampada Properties regarding
              this enquiry.
            </span>
          </label>
        </div>

        {/* Submit */}
        <div className="flex flex-col gap-4 border-t border-[#E9E9E3] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-[11px] text-[#777D76]">
            <ShieldCheck size={16} className="shrink-0 text-[#163D32]" />
            <span>Your information is intended for enquiry purposes.</span>
          </div>

          <button
            type="submit"
            className="group inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#C6A15B] px-7 py-3.5 text-sm font-semibold text-[#163D32] transition-all duration-300 hover:bg-[#163D32] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A15B] sm:w-auto"
          >
            Send Enquiry
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>

        {/* Status */}
        {status && (
          <p
            role="status"
            aria-live="polite"
            className="border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
          >
            {status}
          </p>
        )}
      </div>
    </form>
  );
}
