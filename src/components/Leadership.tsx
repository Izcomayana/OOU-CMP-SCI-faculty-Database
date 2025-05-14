import { Link } from "react-router-dom";

const staffs = [
  { id: 0, img: "/leader.png", name: "Odule TJ.", position: "Dean" },
  { id: 1, img: "/leader.png", name: "Dr. Mubarak K..", position: "HOD" },
  { id: 2, img: "/leader.png", name: "Dr. Iremide O.", position: "Lecturer" },
  { id: 3, img: "/leader.png", name: "Dr. Adepeju A", position: "Lecturer" },
  { id: 4, img: "/leader.png", name: "Dr. Newton N.", position: "Lecturer" },
  { id: 5, img: "/leader.png", name: "Dr. Mubarak K..", position: "HOD" },
  { id: 6, img: "/leader.png", name: "Dr. Iremide O.", position: "Lecturer" },
  { id: 7, img: "/leader.png", name: "Dr. Adepeju A", position: "Lecturer" },
];

const Leadership = () => {
  return (
    <section>
      <div className="my-40 text-[#21234F] saira">
        <h1 className="text-3xl font-bold text-center">Faculty Leadership</h1>

        <div className="mt-20">
          <ul className="flex flex-row flex-wrap justify-between gap-5">
            {staffs.map((staff) => (
              <Link to={`/staffs/${staff.name}`}>
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

export default Leadership;
