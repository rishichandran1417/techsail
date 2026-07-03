import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { GREEN, GREEN_LIGHT, NAVY } from "../constants";

export default function ServiceCard({ icon: Icon, title, desc, more }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: GREEN_LIGHT }}
      >
        <Icon className="w-5 h-5" style={{ color: NAVY }} strokeWidth={1.75} />
      </div>
      <h3 className="font-bold text-gray-900 mb-1.5">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-3">{desc}</p>

      {expanded && (
        <p className="text-sm text-gray-500 leading-relaxed mb-3 border-t border-gray-100 pt-3">
          {more}
        </p>
      )}

      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-1 text-sm font-semibold"
        style={{ color: GREEN }}
      >
        {expanded ? "Show Less" : "Learn More"}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  );
}
