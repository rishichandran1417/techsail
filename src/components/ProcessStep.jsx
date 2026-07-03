import React from "react";
import { ArrowRight } from "lucide-react";
import { GREEN_LIGHT, NAVY } from "../constants";

export default function ProcessStep({ icon: Icon, step, title, desc, isLast }) {
  return (
    <div className="flex items-start lg:items-center gap-4 flex-1">
      <div className="flex flex-col items-center gap-3 lg:items-start lg:flex-1">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ backgroundColor: GREEN_LIGHT }}
        >
          <Icon className="w-6 h-6" style={{ color: NAVY }} strokeWidth={1.75} />
        </div>
        <div>
          <p className="font-bold text-gray-900 text-sm mb-1">
            {step}. {title}
          </p>
          <p className="text-xs text-gray-500 leading-relaxed max-w-[180px]">{desc}</p>
        </div>
      </div>
      {!isLast && (
        <ArrowRight className="hidden lg:block w-5 h-5 text-gray-300 shrink-0 mt-6" />
      )}
    </div>
  );
}
