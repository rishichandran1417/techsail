import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import { NAVY, GREEN } from "../../constants";

export default function JobCard({ job, onApply }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">

      <div className="flex items-center justify-between">
        <span
          className="px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            backgroundColor: "#E8F3E3",
            color: GREEN,
          }}
        >
          {job.department}
        </span>

        <span className="text-sm text-gray-500">
          {job.type}
        </span>
      </div>

      <h3
        className="text-2xl font-bold mt-5"
        style={{ color: NAVY }}
      >
        {job.title}
      </h3>

      <div className="mt-4 space-y-3">

        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{job.location}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Briefcase className="w-4 h-4" />
          <span>{job.type}</span>
        </div>

      </div>

      <button
        onClick={() => onApply(job)}
        className="mt-8 w-full rounded-xl py-3 text-white font-semibold transition duration-300 hover:scale-[1.02] hover:shadow-lg"
        style={{ backgroundColor: NAVY }}
      >
        <span className="flex items-center justify-center gap-2">
          Apply Now
          <ArrowRight className="w-4 h-4" />
        </span>
      </button>

    </div>
  );
}