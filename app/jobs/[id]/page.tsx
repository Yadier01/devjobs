const getUser = async (id: any) => {
  const res = await fetch(`https://devjobs-sepia.vercel.app/api/jobs?id=${id}`);
  const data = await res.json();
  return data;
};
const page = async ({ params }: { params: { id: number } }) => {
  const data = await getUser(params.id);
  return (
    <main className=" min-h-screen flex flex-col justify-center items-center ">
      {data.map((j: any) => (
        <section className="mt-48  sm:max-w-2xl flex mx-5 justify-center items-center flex-col gap-4">
          <div className="flex flex-col   w-full gap-8">
            <div className="bg-white rounded-md p-4">
              <img src={j.logo} alt="" />
              <div className="flex flex-col items-center  sm:flex-row sm:justify-between">
                <div>
                  <h1>{j.company}</h1>
                  <p className="lowercase">{j.company}.com</p>
                </div>
                <a
                  href={j.website}
                  className="capitalize text-[#5964e0] font-bold block   text-center p-3 sm:px-7  rounded-md my-4 bg-[#eeeffc] "
                >
                  company site
                </a>
              </div>
            </div>
            <div className="bg-white flex flex-col gap-3 w-full rounded-lg p-8">
              <div className="flex gap-4 text-gray-400">
                <p>{j.postedAt}</p>
                <p>{j.contract}</p>
              </div>
              <div className="sm:flex items-center  mb-4 justify-between">
                <div>
                  <p className="font-bold text-2xl">{j.position}</p>
                  <p className="font-bold text-xs text-blue-800">
                    {j.location}
                  </p>
                </div>
                <a
                  href={j.apply}
                  className="  font-bold block w-full sm:w-auto text-white text-center p-3 sm:px-7  rounded-md my-4 bg-[#5964e0]"
                >
                  Apply Now
                </a>
              </div>
              <p className="text-gray-400">{j.description}</p>
              <h3 className="font-bold text-lg my-4 ">Requirements</h3>
              <p className="text-gray-400">{j.requirements.content}</p>
              <ul className="flex text-gray-500 flex-col gap-3 list-disc ">
                {j.requirements.items.map((item: any) => (
                  <li className="pl-4">{item}</li>
                ))}
              </ul>
              <h3 className="capitalize font-bold text-lg">What You will do</h3>
              <p className="text-gray-400 ">{j.role.content}</p>
              <ul className="list-decimal flex flex-col gap-4">
                {j.role.items.map((item: any) => (
                  <li className="pl-4 text-gray-500">{item}</li>
                ))}
              </ul>
            </div>
            <div className="w-full p-4 rounded-lg bg-white">
              <a
                href={j.apply}
                className="w-full block text-white text-center p-4 rounded-md  bg-[#5964e0]"
              >
                Apply Now
              </a>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default page;
