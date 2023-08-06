"use client";
import { useRouter } from "next/navigation";
interface Props {
  logo: string;
  company: string;
  postedAt: string;
  contract: string;
  position: string;
  location: string;
  id: number;
}

export const JobCard = ({
  logo,
  company,
  postedAt,
  contract,
  position,
  location,
  id,
}: Props) => {
  const router = useRouter();
  return (
    <div
      className="w-full flex gap-4 hover:cursor-pointer"
      onClick={() => router.push(`jobs/${id}`)}
    >
      <div
        key={id}
        className="bg-white    w-full flex    rounded-lg text-black relative flx flex-col gap-4 p-8"
      >
        <img
          src={logo}
          alt=""
          className="w-10 h-10  yellow-500 absolute -top-4 bg-red-400
          "
        />
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 text-gray-400 ">
            <p>{postedAt}</p>
            <p>{contract}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">{position}</p>
            <p>{company}</p>
          </div>
          <p className="text-blue-800   ">{location}</p>
        </div>
      </div>
    </div>
  );
};
