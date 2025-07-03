import { Link } from "react-router-dom";

const departments = [
  { id: "chemical-science", name: "Chemical Science" },
  { id: "computer-science", name: "Computer Science" },
  { id: "geology", name: "Geology" },
  { id: "mathematics", name: "Mathematics" },
  { id: "microbiology", name: "Microlobiology" },
  { id: "plant-science", name: "Plant Science" },
  { id: "physics", name: "Physics" },
  { id: "statistics", name: "Statistics" },
  { id: "zoology", name: "Zoology" },
];

const Departments: React.FC = () => {
  return (
    <section>
      <div className="my-20 saira">
        <div className="text-center text-[#21234F]">
          <h1 className="text-3xl font-bold text-center mb-5">Departments</h1>
          <p className="text-xl w-5/6 mx-auto">
            Sed ullamcorper porttitor justo non suscipit. Nam ac diam tincidunt,
            hendrerit purus in, lacinia urna. Fusce a arcu non ipsum semper
            ultricies.Sed ullamcorper porttitor justo non suscipit. Nam ac diam
            tincidunt, hendrerit purus in
          </p>
        </div>

        <div className="flex flex-row flex-wrap justify-between gap-5 mt-12 text-white container mx-auto px-4 lg:px-0 lg:mt-20">
          {departments.map((dept) => (
            <li key={dept.id} className="w-full lg:w-fit">
              <Link
                to={`/departments/${dept.id}`}
                className="font-medium text-2xl"
              >
                <div className="mb-10 relative w-full lg:w-[19rem] rounded-md overflow-hidden">
                  <div className="relative">
                    <img
                      src="/departments.png"
                      alt="Leader"
                      className="w-full"
                    />
                    <div className="absolute inset-0 bg-black opacity-10 transition-all hover:opacity-40"></div>
                  </div>

                  <div className="absolute bottom-3 left-3 text-white">
                    {dept.name}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
