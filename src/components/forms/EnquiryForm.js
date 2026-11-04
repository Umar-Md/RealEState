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
    "w-full border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-ssp-green";
  return (
    <form
      onSubmit={submit}
      className="bg-white p-6 md:p-9 border border-gray-200 space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <label className="text-xs font-bold text-gray-700">
          Full name *
          <input
            className={`${field} mt-2`}
            name="name"
            value={form.name}
            onChange={update}
            required
            placeholder="Your name"
          />
        </label>
        <label className="text-xs font-bold text-gray-700">
          Phone number *
          <input
            className={`${field} mt-2`}
            name="phone"
            value={form.phone}
            onChange={update}
            required
            pattern="[0-9+() -]{8,18}"
            placeholder="+91"
          />
        </label>
        <label className="text-xs font-bold text-gray-700">
          Email address
          <input
            className={`${field} mt-2`}
            type="email"
            name="email"
            value={form.email}
            onChange={update}
            placeholder="you@example.com"
          />
        </label>
        <label className="text-xs font-bold text-gray-700">
          I am interested in *
          <select
            className={`${field} mt-2`}
            name="interest"
            value={form.interest}
            onChange={update}
            required
          >
            <option value="">Select a requirement</option>
            {(partner
              ? ["Partner with SSP", ...interestOptions]
              : interestOptions
            ).map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <label className="text-xs font-bold text-gray-700">
          Preferred city / location
          <input
            className={`${field} mt-2`}
            name="location"
            value={form.location}
            onChange={update}
            placeholder="Enter preferred location"
          />
        </label>
        <label className="text-xs font-bold text-gray-700">
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
      <label className="block text-xs font-bold text-gray-700">
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
      <button className="btn-primary w-full md:w-auto" type="submit">
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
