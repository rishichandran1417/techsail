import React from "react";
import { Users, ShieldCheck, Headphones, MapPin } from "lucide-react";
import { NAVY_DARK, GREEN } from "../constants";

/* Honest, startup-appropriate stats — no inflated client/site counts. */
const STATS = [
  { icon: Users, value: "2–10", label: "Growing Team of Engineers" },
  { icon: ShieldCheck, value: "100%", label: "Quality-Driven Approach" },
  { icon: Headphones, value: "24/7", label: "Helpdesk Support" },
  { icon: MapPin, value: "Trivandrum", label: "Local, On-Ground Team" },
];

export default function StatsBar() {
  return (
    <section style={{ backgroundColor: NAVY_DARK }} className="py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="w-6 h-6 text-white/70 shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-xl sm:text-2xl font-extrabold" style={{ color: GREEN }}>
                {value}
              </p>
              <p className="text-xs text-gray-300">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
