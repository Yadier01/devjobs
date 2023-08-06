import { JobsCard } from "./components/JobsCard";

export default function Home() {
  return (
    <main className="flex mt-60 w-full min-h-screen  items-center justify-center ">
      <div className="max-w-7xl">
        <JobsCard />
      </div>
    </main>
  );
}
