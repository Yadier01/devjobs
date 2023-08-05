import Image from "next/image";
import { JobsCard } from "./components/JobsCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
      <JobsCard />
    </main>
  );
}
