import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "@/components/Hero";
import { slugify } from "@/utils/slugify";

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

  const [staffs, setStaffs] = useState<
    {
      id: number;
      img: string;
      name: string;
      position: string;
      email?: string;
      bio?: string;
      departmentId: string;
    }[]
  >([]);

  useEffect(() => {
    fetch("/data/staffs.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (staff: any) => staff.departmentId === departmentId,
        );
        setStaffs(filtered);
      })
      .catch((err) => console.error("Failed to fetch staff data:", err));
  }, [departmentId]);

  if (!department)
    return (
      <h1 className="text-center text-lg text-red-500 my-40">
        Department not found
      </h1>
    );

  const formattedTitle = (() => {
    const words = department.name.split(" ");
    return (
      <>
        {words[0]} <br /> {words.slice(1).join(" ")}
      </>
    );
  })();

  return (
    <>
      <Hero title={formattedTitle} details={"(Department)"} />
      <div className="container mx-auto p-4">
        <div className="my-40 saira">
          <h1 className="text-3xl font-semibold text-center">Staff</h1>
          <div className="mt-20 flex justify-between">
            {/* Column 1: HOD */}
            <div>
              {staffs.length > 0 && (
                <Link
                  to={`/staffs/${slugify(staffs[0].name)}`}
                  className="hover:underline"
                >
                  <div className="rounded-md w-[19rem]">
                    <div className="relative">
                      <img
                        src={staffs[0].img}
                        alt={staffs[0].name}
                        className="w-full"
                      />
                      <div className="absolute inset-0 bg-black opacity-10 transition-all hover:opacity-30"></div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="font-medium text-2xl">{staffs[0].name}</p>
                    <p>{staffs[0].position}</p>
                  </div>
                </Link>
              )}
            </div>

            {/* Column 2 and 3: Rest */}
            {[0, 1].map((col) => (
              <div className="flex flex-col gap-5 w-1/3" key={col}>
                {staffs
                  .slice(1)
                  .filter((_, i) => i % 2 === col)
                  .map((staff) => (
                    <Link to={`/staffs/${slugify(staff.name)}`} key={staff.id}>
                      <div className="bg-white border p-4 shadow-xl rounded-md w-full hover:shadow-2xl hover:underline transition-all">
                        <p className="text-xl font-medium">{staff.name}</p>
                        <p className="mt-2">{staff.position}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            ))}
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
