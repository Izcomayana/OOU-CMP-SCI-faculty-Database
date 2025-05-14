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
      <div className="my-40 container mx-auto text-[#21234F] saira">
        <h1 className="text-3xl font-bold text-center">Staffs</h1>

        <div className="mt-20">
          <ul className="flex flex-row flex-wrap justify-between gap-5">
            {staffs.map((staff) => (
              <Link to={`/staffs/${slugify(staff.name)}`} key={staff.id}>
                <li className="mb-10 hover:underline">
                  <div className="rounded-md w-[19rem]">
                    <div className="relative">
                      <img
                        src={staff.img}
                        alt={staff.name}
                        className="w-full"
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