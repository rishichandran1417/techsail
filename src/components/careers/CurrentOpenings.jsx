import { JOBS } from "./jobs";
import JobCard from "./JobCard";
import EmptyJobs from "./EmptyJobs";
import { NAVY, GREEN } from "../../constants";

export default function CurrentOpenings({ onApply }) {
  return (
    <section className="mb-16">
      {/* Heading */}
      <div className="mb-10">
        <p
          className="text-sm font-bold uppercase tracking-[0.2em] mb-2"
          style={{ color: GREEN }}
        >
          Careers
        </p>

        <h2
          className="text-4xl font-extrabold"
          style={{ color: NAVY }}
        >
          Current Openings
        </h2>

        <p className="mt-3 text-gray-500 max-w-2xl">
          Explore opportunities to join Techsail. If there isn't a role that
          matches your profile, you can still submit a spontaneous application
          below.
        </p>
      </div>

      {/* Jobs */}
      {JOBS.length === 0 ? (
        <EmptyJobs />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {JOBS.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onApply={onApply}
            />
          ))}
        </div>
      )}
    </section>
  );
}