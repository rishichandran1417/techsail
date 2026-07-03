import React, { useState, useRef } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { NAVY, GREEN, FORM_ENDPOINT, scrollToId } from "../constants";

export default function QuoteCTA() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const nameInputRef = useRef(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Sends the form to Formspree, which forwards it to your email — no
  // backend of your own required. Set FORM_ENDPOINT in constants.js first.
  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone || !form.company || !form.service) {
      setError("Please fill in all fields before submitting.");
      setSubmitted(false);
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (FORM_ENDPOINT.includes("REPLACE_WITH_YOUR_FORM_ID")) {
      setError("Email delivery isn't set up yet — add your Formspree endpoint in constants.js.");
      setTimeout(() => setError(""), 5000);
      return;
    }

    setError("");
    setSubmitting(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          service: form.service,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", company: "", service: "" });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError("Something went wrong sending your request. Please try again.");
        setTimeout(() => setError(""), 4000);
      }
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
      setTimeout(() => setError(""), 4000);
    } finally {
      setSubmitting(false);
    }
  };

  const focusForm = () => {
    nameInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    nameInputRef.current?.focus();
  };

  return (
    <section id="quote" className="px-6 lg:px-10 py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden relative" style={{ backgroundColor: NAVY }}>
        <img
          src="https://picsum.photos/seed/techsail-cta/1200/700"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="relative grid lg:grid-cols-2 gap-10 p-8 sm:p-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Let's Get Your Facility Running Smoothly
            </h2>
            <p className="text-gray-300 text-sm mb-7 max-w-sm">
              Partner with our engineers for affordable, quality-driven
              facility management — from daily upkeep to on-site project work.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-semibold text-sm text-white hover:opacity-90 active:scale-[0.98] transition"
                style={{ backgroundColor: GREEN }}
                onClick={focusForm}
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="px-5 py-3 rounded-md font-semibold text-sm text-white border border-white/40 hover:bg-white/10 active:scale-[0.98] transition"
                onClick={() => scrollToId("contact")}
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 sm:p-6 grid grid-cols-2 gap-3">
            <input
              ref={nameInputRef}
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="col-span-1 border border-gray-200 rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4C9A3F]"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Work Email"
              className="col-span-1 border border-gray-200 rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4C9A3F]"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="col-span-1 border border-gray-200 rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4C9A3F]"
            />
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="col-span-1 border border-gray-200 rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4C9A3F]"
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="col-span-2 border border-gray-200 rounded-md px-3.5 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4C9A3F]"
            >
              <option value="">Service Interested In</option>
              <option>Hard Facility Services</option>
              <option>Soft Facility Services</option>
              <option>Technical & Support Services</option>
              <option>Project & Setup Support</option>
            </select>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="col-span-2 rounded-md font-semibold text-sm text-white py-2.5 hover:opacity-90 active:scale-[0.98] transition disabled:opacity-60"
              style={{ backgroundColor: GREEN }}
            >
              {submitting ? "Sending..." : "Submit Request"}
            </button>

            {submitted && (
              <div className="col-span-2 flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                Thanks! Your request has been received — we'll be in touch shortly.
              </div>
            )}
            {error && (
              <div className="col-span-2 flex items-center gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
