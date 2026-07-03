import React from "react";
import { Search, ClipboardList, Settings, TrendingUp } from "lucide-react";
import { GREEN } from "../constants";
import ProcessStep from "./ProcessStep";

const STEPS = [
  { icon: Search, step: 1, title: "Understand", desc: "We analyze your needs and assess your facility." },
  { icon: ClipboardList, step: 2, title: "Plan", desc: "We create a customized solution and action plan." },
  { icon: Settings, step: 3, title: "Execute", desc: "Our expert team delivers with precision and care." },
  { icon: TrendingUp, step: 4, title: "Optimize", desc: "We monitor performance and drive continuous improvement." },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: GREEN }}>
          Our Process
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-14">
          A Seamless 4-Step Approach
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 text-left">
          {STEPS.map((s, i) => (
            <ProcessStep key={s.title} {...s} isLast={i === STEPS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
