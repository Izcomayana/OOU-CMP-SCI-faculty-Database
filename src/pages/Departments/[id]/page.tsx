import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "@/components/Hero";
import { slugify } from "@/utils/slugify";
import About from "@/components/About";
import { departmentsData } from "@/components/Departments";

interface Department {
  id: string;
  name: string;
  img: string;
  description: string;
}

const departmentData: Department[] = departmentsData;

const Department: React.FC = () => {
  const { departmentId } = useParams<{ departmentId: string }>();
  const department = departmentData.find((d) => d.id === departmentId);

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
          (staff: any) => staff.departmentId === departmentId
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
      <Hero title={formattedTitle} details="(Department)" img={department?.img || ""} />

      <div className="container mx-auto p-4">
        <About
          title={"About the Department"}
          details={
            "The Faculty of Science is among the pioneering Faculties in the University, established in January 1983, with the central objective being the production of scientific and technological manpower for thecountry in general and Ogun State in particular. The faculty was established to disseminate, promote, and advance the growth of scientific knowledge in the University and to explore the use of this knowledge for the study and exploitation of the country’s natural resources for the advancement of the citizenry. The first set of students admitted to the faculty – 71, commenced their courses at the temporary site, now commonly referred to as Mini Campus. Presently, the Faculty is located at the permanent site (PS)."
          }
          title2={"Vision"}
          details2={
            "To be the foremost college known for development of world-class human and materials in the fields of sciences."
          }
        />

        <div className="my-40 saira">
          <h1 className="text-3xl font-semibold text-center">Staff</h1>
          <div className="mt-12 flex flex-col gap-8 justify-between lg:gap-0 lg:mt-20 lg:flex-row">
            {/* Column 1: HOD */}
            <div>
              {staffs.length > 0 && (
                <Link
                  to={`/staffs/${slugify(staffs[0].name)}`}
                  className="hover:underline"
                >
                  <div className="rounded-md w-full lg:w-[19rem]">
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
              <div className="flex flex-col gap-5 w-full lg:w-1/3" key={col}>
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

        <div className="mb-20 saira lg:mb-40">
          <h1 className="text-3xl font-semibold text-center">Facilities</h1>
          <div className="mt-12 flex flex-col justify-between gap-8 lg:gap-0 lg:mt-20 lg:flex-row">
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
