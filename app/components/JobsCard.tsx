import { JobCard } from "./JobCard";
const getJobs = async () => {
  const res = await fetch("/api/jobs");
  const data = await res.json();
  return data;
};

export const JobsCard = async () => {
  const data = await getJobs();
  console.log(data);
  return (
    <div className="w-full ">
      {data.map((jobs: any) => (
        <JobCard
          id={jobs.id}
          logo={jobs.logo}
          company={jobs.company}
          postedAt={jobs.postedAt}
          contract={jobs.contract}
          position={jobs.position}
          location={jobs.location}
        />
      ))}
    </div>
  );
};
