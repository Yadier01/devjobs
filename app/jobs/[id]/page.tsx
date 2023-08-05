const getUser = async (id: any) => {
  const res = await fetch(`https://devjobs-sepia.vercel.app/api/jobs?id=${id}`);
  const data = await res.json();
  return data;
};
const page = async ({ params }: { params: { id: number } }) => {
  const data = await getUser(params.id);
  return (
    <div>
      {data.map((j: any) => (
        <div>
          <p>{j.company}</p>
          <p>{j.id}</p>
          <p>{j.postedAt}</p>
          <p>{j.position}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
