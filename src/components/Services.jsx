import React from "react";
import { Settings, Sparkles, Activity, Wrench } from "lucide-react";
import { GREEN } from "../constants";
import ServiceCard from "./ServiceCard";

const SERVICES = [
  {
    icon: Settings,
    title: "Hard Facility Services",
    desc: "Preventive and breakdown maintenance of electrical systems, plumbing, HVAC, fire safety, pumps, and generators.",
    more: "Our engineers run scheduled preventive checks alongside rapid breakdown response, so critical systems keep running with minimal disruption.",
  },
  {
    icon: Sparkles,
    title: "Soft Facility Services",
    desc: "Housekeeping, security, sanitization, landscaping, and pest control with trained staff and standard protocols.",
    more: "Every soft-service team follows documented protocols and regular audits, so cleanliness and safety standards stay consistent across your site.",
  },
  {
    icon: Activity,
    title: "Technical & Support Services",
    desc: "Energy tracking, asset logs, AMC coordination, and helpdesk support for smooth daily operations.",
    more: "We track energy usage and asset health, coordinate AMC renewals with vendors, and staff a helpdesk so day-to-day issues get resolved quickly.",
  },
  {
    icon: Wrench,
    title: "Project & Setup Support",
    desc: "Assistance in setting up utilities, minor renovations, equipment installation, and on-site engineering works.",
    more: "From utility setup to minor renovations and equipment installs, our engineering team handles on-site project work end-to-end.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F7F9FA] py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: GREEN }}>
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 max-w-lg">
              Our Core Facility & Engineering Services
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-sm lg:text-right">
            End-to-end solutions tailored to your needs. We manage your
            facilities so you can focus on what you do best.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
