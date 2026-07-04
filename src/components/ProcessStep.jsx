import React from "react";
import { ArrowRight } from "lucide-react";
import { GREEN_LIGHT, NAVY } from "../constants";

export default function ProcessStep({
  icon: Icon,
  step,
  title,
  desc,
  isLast,
}) {
  return (
    <div className="relative flex-1">

      <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:shadow-xl transition duration-300">

        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
          style={{ backgroundColor: GREEN_LIGHT }}
        >
          <Icon
            className="w-6 h-6"
            style={{ color: NAVY }}
            strokeWidth={1.8}
          />
        </div>

        <span className="text-xs font-bold text-gray-400">
          STEP {step}
        </span>

        <h3 className="mt-2 text-xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-3 text-gray-600 leading-7">
          {desc}
        </p>
      </div>

      {!isLast && (
        <ArrowRight
          className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 text-gray-300"
          size={26}
        />
      )}
    </div>
  );
}