import React from "react";
import {
  Building2,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Factory,
  Home as HomeIcon,
} from "lucide-react";
import { GREEN } from "../constants";

const INDUSTRIES = [
  { icon: Building2, label: "Corporate Offices" },
  { icon: Building2, label: "IT Parks & SEZs" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: ShoppingBag, label: "Retail & Malls" },
  { icon: GraduationCap, label: "Education" },
  { icon: Factory, label: "Manufacturing" },
  { icon: HomeIcon, label: "Residential Complexes" },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-[#F7F9FA] py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: GREEN }}>
          Industries We Serve
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-14">
          Supporting Diverse Industries
        </h2>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-10">
          {INDUSTRIES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3 w-28">
              <Icon className="w-7 h-7 text-gray-700" strokeWidth={1.5} />
              <p className="text-xs font-medium text-gray-600 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
