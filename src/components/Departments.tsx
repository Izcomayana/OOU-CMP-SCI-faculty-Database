import { Link } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const departmentsData = [
  { description: "Learn about chemical science.", id: "chemical-science", name: "Chemical Science", img: "/departments.png" },
  { description: "Learn about algorithms, AI, and software development.", id: "computer-science", name: "Computer Science", img: "/dept1.jpeg" },
  { description: "Study and learn about geology.", id: "geology", name: "Geology", img: "/dept2.jpeg" },
  { description: "Explore calculus, algebra, and number theory.", id: "mathematics", name: "Mathematics", img: "/dept3.jpeg" },
  { description: "Study and know more about microbiology.", id: "microbiology", name: "Microlobiology", img: "/dept4.jpeg" },
  { description: "Study and know all there's to know about Plant science.", id: "plant-science", name: "Plant Science", img: "/dept5.jpeg" },
  { description: "Study the laws of nature and quantum mechanics.", id: "physics", name: "Physics", img: "/dept6.jpeg" },
  { description: "Study the laws of Statistics.", id: "statistics", name: "Statistics", img: "/departments.png" },
  { description: "Study zoology.", id: "zoology", name: "Zoology", img: "/dept1.jpeg" },
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
          {departmentsData.map((dept) => (
            <li key={dept.id} className="w-full lg:w-fit">
              <Link
                to={`/departments/${dept.id}`}
                className="font-medium text-2xl w-full md:w-fit"
              >
                <div className="mb-10 relative rounded-md overflow-hidden w-full md:w-fit">
                  <div className="relative w-full h-[27.5rem] md:w-[19rem]">
                    <img
                      src={dept.img}
                      alt="Leader"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-20 transition-all hover:opacity-50"></div>
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
