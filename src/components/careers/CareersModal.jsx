import { useState } from "react";
import { X } from "lucide-react";
import CurrentOpenings from "./CurrentOpenings";
import ApplicationForm from "./ApplicationForm";

export default function CareersModal({ open, onClose }) {
  const [selectedJob, setSelectedJob] = useState(null);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-y-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6"
        >
          <X size={24} />
        </button>

        <div className="p-10">

          <CurrentOpenings
            onApply={setSelectedJob}
          />

          <ApplicationForm
            selectedJob={selectedJob}
          />

        </div>
      </div>
    </div>
  );
}