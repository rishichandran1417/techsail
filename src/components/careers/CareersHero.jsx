import { NAVY, GREEN } from "../../constants";

export default function CareersHero({ onOpen }) {
  return (
    <section id="careers" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p
          className="uppercase tracking-[0.25em] text-sm font-bold mb-3"
          style={{ color: GREEN }}
        >
          Careers
        </p>

        <h2
          className="text-5xl font-extrabold mb-6"
          style={{ color: NAVY }}
        >
          Join Our Team
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto leading-8">
          At Techsail, we believe great engineering starts with great
          people. Explore current opportunities or submit a spontaneous
          application for future roles.
        </p>

        <button
          onClick={onOpen}
          className="mt-10 px-8 py-4 rounded-xl text-white font-semibold transition hover:scale-105"
          style={{ background: NAVY }}
        >
          View Careers
        </button>

      </div>
    </section>
  );
}