import Link from "next/link";

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
  return (
    <div>
      <Link href={`jobs/${id}`}>
        <div
          key={id}
          className="bg-white m-4 rounded-lg text-black flex flex-col gap-4 p-8"
        >
          <img
            src={logo}
            alt=""
            className="w-20  yellow-500
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
      </Link>
    </div>
  );
};
