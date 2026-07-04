import { useState, useEffect } from "react";
import { Paperclip, CheckCircle2, AlertCircle } from "lucide-react";
import { NAVY, GREEN, CAREERS_FORM_ENDPOINT } from "../../constants";

const INTERESTS = [
  "Electrical Engineering",
  "Mechanical Engineering",
  "HVAC",
  "Facility Management",
  "Housekeeping",
  "Security",
  "Project Management",
  "Administration",
  "Other",
];

const EXPERIENCE = [
  "Fresher",
  "0-2 Years",
  "2-5 Years",
  "5-10 Years",
  "10+ Years",
];

export default function ApplicationForm({ selectedJob }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    experience: "",
    message: "",
  });

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedJob) {
      setForm((prev) => ({
        ...prev,
        interest: selectedJob.title,
      }));
    }
  }, [selectedJob]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleResume(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 8 * 1024 * 1024) {
      setError("Resume must be under 8 MB.");
      return;
    }

    setResume(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.interest) {
      setError("Please fill all required fields.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = new FormData();

      Object.entries(form).forEach(([k, v]) => data.append(k, v));
      data.append("position", selectedJob?.title || "General Application");

      if (resume) data.append("resume", resume);

      data.append("_subject", `Career Application - ${selectedJob?.title || form.interest}`);

      const res = await fetch(CAREERS_FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!res.ok) throw new Error();

      setSuccess(true);
      setResume(null);

      setForm({
        name: "",
        email: "",
        phone: "",
        interest: selectedJob?.title || "",
        experience: "",
        message: "",
      });
    } catch {
      setError("Unable to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mt-16">
      <div className="border-t pt-12">
        <p className="uppercase font-bold tracking-[0.2em] text-sm" style={{ color: GREEN }}>
          Spontaneous Application
        </p>

        <h2 className="text-4xl font-bold mt-3">
          {selectedJob ? "Apply for this Position" : "Didn't find a suitable role?"}
        </h2>

        <p className="text-gray-500 mt-4 mb-8">
          {selectedJob
            ? "Complete the application below."
            : "Submit your profile and we'll contact you when a suitable position becomes available."}
        </p>

        {selectedJob && (
          <div className="mb-8 rounded-2xl border border-green-200 bg-green-50 p-5">
            <p className="text-sm text-gray-500">Applying for</p>
            <h3 className="text-2xl font-bold">{selectedJob.title}</h3>
            <p className="text-gray-600 mt-1">
              📍 {selectedJob.location} • 💼 {selectedJob.type}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" className="border rounded-xl p-3" />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *" className="border rounded-xl p-3" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number *" className="border rounded-xl p-3" />

          <select name="interest" value={form.interest} onChange={handleChange} className="border rounded-xl p-3">
            <option value="">Area of Interest *</option>
            {selectedJob && <option value={selectedJob.title}>{selectedJob.title}</option>}
            {INTERESTS.map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>

          <select name="experience" value={form.experience} onChange={handleChange} className="border rounded-xl p-3 md:col-span-2">
            <option value="">Years of Experience</option>
            {EXPERIENCE.map((e) => (
              <option key={e} value={e}>{e}</option>
            ))}
          </select>

          <textarea rows={5} name="message" value={form.message} onChange={handleChange} placeholder="Tell us about yourself..." className="border rounded-xl p-3 md:col-span-2" />

          <label className="md:col-span-2 border-2 border-dashed rounded-xl p-5 flex items-center gap-3 cursor-pointer">
            <Paperclip size={20} />
            <span>{resume ? resume.name : "Upload Resume (PDF, DOC, DOCX)"}</span>
            <input hidden type="file" accept=".pdf,.doc,.docx" onChange={handleResume} />
          </label>

          <button disabled={loading} className="md:col-span-2 py-4 rounded-xl text-white font-semibold" style={{ backgroundColor: NAVY }}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>

          {success && (
            <div className="md:col-span-2 rounded-xl border border-green-200 bg-green-50 p-4 flex items-center gap-2 text-green-700">
              <CheckCircle2 size={18} />
              Application submitted successfully.
            </div>
          )}

          {error && (
            <div className="md:col-span-2 rounded-xl border border-red-200 bg-red-50 p-4 flex items-center gap-2 text-red-700">
              <AlertCircle size={18} />
              {error}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
