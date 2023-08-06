import { JobCard } from "./JobCard";
const getJobs = async () => {
  const res = await fetch("https://devjobs-sepia.vercel.app/api/jobs");
  const data = await res.json();
  return data;
};
export const JobsCard = async () => {
  const data = await getJobs();
  return (
    <div className="flex gap-8 justify-center flex-wrap ">
      {data.map((jobs: any) => (
        <div className="  my-4 flex justify-center  mx-4  sm:mx-4 md:mx-0  w-full  md:w-1/3 lg:w-1/4">
          <JobCard
            id={jobs.id}
            logo={jobs.logo}
            company={jobs.company}
            postedAt={jobs.postedAt}
            contract={jobs.contract}
            position={jobs.position}
            location={jobs.location}
          />
        </div>
      ))}
    </div>
  );
};
