import { Briefcase } from "lucide-react";

export default function EmptyJobs(){

return(

<div className="rounded-xl border border-dashed border-gray-300 p-12 text-center">

<Briefcase className="mx-auto h-12 w-12 text-gray-400"/>

<h3 className="mt-5 text-2xl font-bold">
No Vacancies Available
</h3>

<p className="mt-3 text-gray-500 max-w-lg mx-auto">

We currently don't have any active openings.

Please submit a spontaneous application below and
we'll contact you when a suitable opportunity becomes
available.

</p>

</div>

);

}