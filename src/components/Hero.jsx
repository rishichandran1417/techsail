import React from "react";
import { Users, Wrench, Clock, ArrowRight, Play } from "lucide-react";
import { NAVY, GREEN, scrollToId } from "../constants";
import heroImage from "../assets/hero.jpg"; // adjust path

export default function Hero({ onWatchVideo }) {
  const badges = [
    { icon: Users, label: "Engineer-Led\nTeam" },
    { icon: Wrench, label: "Hands-On\nExecution" },
    { icon: Clock, label: "Fast, Local\nResponse" },
  ];

  return (
    <section
      id="home"
      className="relative h-[65vh] sm:h-[75vh] lg:h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Techsail Engineering team on-site"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-10">
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-white"
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.35)" }}
        >
          Reliable Facilities.
          <br />
          <span style={{ color: GREEN }}>Engineered Right.</span>
        </h1>

        <p
          className="mt-6 text-lg text-gray-200 leading-8"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
        >
          We deliver affordable, quality-driven facility management and
          engineering solutions built by engineers who get the details
          right every single day.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 rounded-md text-white font-semibold text-sm transition hover:opacity-90 active:scale-[0.98]"
            style={{ backgroundColor: GREEN }}
            onClick={() => scrollToId("services")}
          >
            Explore Services
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 rounded-md border-2 border-white text-white font-semibold text-sm transition hover:bg-white/10 active:scale-[0.98]"
            onClick={() => scrollToId("contact")}
          >
            Contact Us
          </button>
        </div>

        <div className="mt-12 flex flex-wrap gap-8 text-white">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="w-5 h-5" strokeWidth={1.75} />
              <p className="text-sm font-medium whitespace-pre-line leading-snug">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
