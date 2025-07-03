import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { slugify } from "@/utils/slugify";

interface Staff {
  id: number;
  img: string;
  name: string;
  position: string;
  departmentId: string;
}

const Staffs = () => {
  const [staffs, setStaffs] = useState<Staff[]>([]);

  useEffect(() => {
    fetch("/data/staffs.json")
      .then((res) => res.json())
      .then((data: Staff[]) => setStaffs(data))
      .catch((err) => console.error("Failed to fetch staff data:", err));
  }, []);

  return (
    <section>
      <div className="my-20 container mx-auto text-[#21234F] saira px-4 lg:px-0 lg:my-40">
        <h1 className="text-3xl font-bold text-center">Staffs</h1>

        <div className="mt-12 lg:mt-20">
          <ul className="flex flex-row flex-wrap justify-between gap-5">
            {staffs.map((staff) => (
              <Link to={`/staffs/${slugify(staff.name)}`} key={staff.id} className="w-full md:w-fit">
                <li className="mb-10 hover:underline w-full md:w-fit">
                  <div className="rounded-md w-full md:w-fit">
                    <div className="relative w-full h-[22.5rem] md:w-[19rem]">
                      <img
                        src={staff.img}
                        alt={staff.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black opacity-10 transition-all hover:opacity-40"></div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="font-medium text-2xl">{staff.name}</p>
                    <p>{staff.position}</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Staffs;
