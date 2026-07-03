import React from "react";
import { Users, Wrench, Clock, ArrowRight, Play } from "lucide-react";
import { NAVY, GREEN, scrollToId } from "../constants";

export default function Hero({ onWatchVideo }) {
  const badges = [
    { icon: Users, label: "Engineer-Led\nTeam" },
    { icon: Wrench, label: "Hands-On\nExecution" },
    { icon: Clock, label: "Fast, Local\nResponse" },
  ];

  return (
    <section id="home" className="bg-white scroll-mt-20">
      <div
        id="about"
        className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center scroll-mt-20"
      >
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            <span style={{ color: NAVY }}>Reliable Facilities.</span>
            <br />
            <span style={{ color: GREEN }}>Engineered Right.</span>
          </h1>
          <p className="mt-5 text-gray-500 text-base leading-relaxed max-w-md">
            We deliver affordable, quality-driven facility management and
            engineering solutions — built by engineers who get the details
            right, day in and day out.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-white font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition"
              style={{ backgroundColor: NAVY }}
              onClick={() => scrollToId("services")}
            >
              Explore Services <ArrowRight className="w-4 h-4" />
            </button>
            
          </div>

          <div className="mt-10 flex flex-wrap gap-8">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon className="w-5 h-5 text-gray-700" strokeWidth={1.75} />
                <p className="text-xs font-medium text-gray-600 whitespace-pre-line leading-snug">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="https://picsum.photos/seed/techsail-hero/900/650"
            alt="Techsail Engineering team on-site"
            className="rounded-2xl w-full h-[420px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
