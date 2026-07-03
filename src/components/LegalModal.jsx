import React from "react";
import { X } from "lucide-react";
import { NAVY } from "../constants";
import { LAST_UPDATED } from "../content/policyContent";

export default function LegalModal({ open, onClose, title, sections }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
          <div>
            <p className="font-bold text-lg" style={{ color: NAVY }}>
              {title}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">Last updated: {LAST_UPDATED}</p>
          </div>
          <button onClick={onClose} aria-label={`Close ${title}`}>
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="px-6 py-5 overflow-y-auto space-y-5">
          {sections.map((s) => (
            <div key={s.heading}>
              <p className="text-sm font-bold text-gray-900 mb-1.5">{s.heading}</p>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="px-6 py-4 border-t border-gray-100 shrink-0 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-md text-sm font-semibold text-white"
            style={{ backgroundColor: NAVY }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
