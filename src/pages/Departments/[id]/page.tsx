import { useParams } from "react-router-dom";
import Hero from "@/components/Hero";

const departmentData = {
  "chemical-science": {
    name: "Chemical Science",
    description: "Learn about chemical science.",
  },
  "computer-science": {
    name: "Computer Science",
    description: "Learn about algorithms, AI, and software development.",
  },
  geology: {
    name: "Geology",
    description: "tudy geology.",
  },
  mathematics: {
    name: "Mathematics",
    description: "Explore calculus, algebra, and number theory.",
  },
  microbiology: {
    name: "Microbiology",
    description: "Study microbiology.",
  },
  physics: {
    name: "Physics",
    description: "Study the laws of nature and quantum mechanics.",
  },
  "plant-science": {
    name: "Plant Science",
    description: "Study Plant science.",
  },
  statistics: {
    name: "Statistics",
    description: "Study the laws of Statistics.",
  },
  zoology: {
    name: "Zoology",
    description: "Study zoology.",
  },
};

const Department: React.FC = () => {
  const { departmentId } = useParams<{ departmentId: string }>();
  const department =
    departmentData[departmentId as keyof typeof departmentData];

  if (!department)
    return <h1 className="text-center text-red-500">Department not found</h1>;

  // Automatically add a line break after the first word
  const formattedTitle = (() => {
    const words = department.name.split(" ");
    return (
      <>
        {words[0]} <br /> {words.slice(1).join(" ")}
      </>
    );
  })();

  if (!department)
    return <h1 className="text-center text-red-500">Department not found</h1>;

  return (
    <>
      <Hero title={formattedTitle} details={"(Department)"} />
      <div className="container mx-auto p-4">
        {/* <h1 className="text-3xl font-bold">{department.name}</h1>
      <p className="text-lg mt-4">{department.description}</p> */}

        <div className="my-40 saira">
          <h1 className="text-3xl font-semibold text-center">Staff</h1>
          <div className="mt-20 flex justify-between">
            <div className="">
              <div className="rounded-md w-[19rem]">
                <img src="/leader.png" alt="Leader" className="w-full" />
              </div>
              <div className="mt-5">
                <p className="font-medium text-2xl">Iremide O.</p>
                <p>HOD</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-1/3">
              <div className="bg-white border p-4 shadow-2xl rounded-md w-full">
                <p className="text-xl font-medium">Dr. Mubarak K.</p>
                <p className="mt-2">Lecturer</p>
              </div>
              <div className="bg-white border p-4 shadow-2xl rounded-md w-full">
                <p className="text-xl font-medium">Dr. Adepeju A.</p>
                <p className="mt-2">Lecturer</p>
              </div>
              <div className="bg-white border p-4 shadow-2xl rounded-md w-full">
                <p className="text-xl font-medium">Dr. Newton N.</p>
                <p className="mt-2">Lecturer</p>
              </div>
              <div className="bg-white border p-4 shadow-2xl rounded-md w-full">
                <p className="text-xl font-medium">Dr. Iremide O.</p>
                <p className="mt-2">Lecturer</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-1/3">
              <div className="bg-white border p-4 shadow-2xl rounded-md w-full">
                <p className="text-xl font-medium">Dr. Mubarak K.</p>
                <p className="mt-2">Lecturer</p>
              </div>
              <div className="bg-white border p-4 shadow-2xl rounded-md w-full">
                <p className="text-xl font-medium">Dr. Adepeju A.</p>
                <p className="mt-2">Lecturer</p>
              </div>
              <div className="bg-white border p-4 shadow-2xl rounded-md w-full">
                <p className="text-xl font-medium">Dr. Newton N.</p>
                <p className="mt-2">Lecturer</p>
              </div>
              <div className="bg-white border p-4 shadow-2xl rounded-md w-full">
                <p className="text-xl font-medium">Dr. Iremide O.</p>
                <p className="mt-2">Lecturer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-40 saira">
          <h1 className="text-3xl font-semibold text-center">Facilities</h1>
          <div className="mt-20 flex justify-between">
            <div className="bg-white border rounded-md p-24 font-bold text-xl text-[#00000098] shadow-2xl">
              HALLS
            </div>
            <div className="bg-white border rounded-md p-24 font-bold text-xl text-[#00000098] shadow-2xl">
              LABORATORIES
            </div>
            <div className="bg-white border rounded-md p-24 font-bold text-xl text-[#00000098] shadow-2xl">
              LIBRARIES
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Department;
