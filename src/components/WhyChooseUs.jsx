import React from "react";
import { Wrench, IndianRupee, MapPin } from "lucide-react";
import { GREEN, GREEN_LIGHT, NAVY } from "../constants";

const REASONS = [
  {
    icon: Wrench,
    title: "Engineer-Led Execution",
    desc: "Every job is scoped and reviewed by qualified engineers, not just field staff — so the details get handled right the first time.",
  },
  {
    icon: IndianRupee,
    title: "Transparent & Affordable",
    desc: "No hidden costs or inflated retainers. We scope work honestly and price it fairly, especially for growing businesses.",
  },
  {
    icon: MapPin,
    title: "Responsive, Local Team",
    desc: "Based in Trivandrum, we're on-site fast when something needs attention — not routed through a distant call center.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F7F9FA] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: GREEN }}>
          Why Techsail
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Why Businesses Choose Us
        </h2>
        <p className="text-gray-500 text-sm max-w-lg mx-auto mb-14">
          We're a young company — so instead of recycled client quotes, here's
          what actually sets our approach apart.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: GREEN_LIGHT }}
              >
                <Icon className="w-5 h-5" style={{ color: NAVY }} strokeWidth={1.75} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1.5">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
