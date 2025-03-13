import Hero from "@/components/Hero";
import About from "@/components/About";

const Departments = () => {
  return (
    <>
      <Hero
        title={
          <>
            Computer <br /> Sciences
          </>
        }
        details={"(Department)"}
      />
      <div className="container mx-auto">
        <About
          title="About the Department"
          details="The Faculty of Science is among the pioneering Faculties in the University, established in January 1983, with the central objective being the production of scientific and technological manpower for the country in general and Ogun State in particular. The faculty was established to disseminate, promote, and advance the growth of scientific knowledge in the University and to explore the use of this knowledge for the study and exploitation of the country’s natural resources for the advancement of the citizenry. The first set of students admitted to the faculty – 71, commenced their courses at the temporary site, now commonly referred to as Mini Campus. Presently, the Faculty is located at the permanent site (PS)."
          title2="Vision"
          details2="To be the foremost college known for development of world-class human and materials in the fields of sciences."
        />

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
                <p className="text-xl font-medium">Dr. Mubarak K.</p>
                <p className="mt-2">Lecturer</p>
              </div>
              <div className="bg-white border p-4 shadow-2xl rounded-md w-full">
                <p className="text-xl font-medium">Dr. Mubarak K.</p>
                <p className="mt-2">Lecturer</p>
              </div>
              <div className="bg-white border p-4 shadow-2xl rounded-md w-full">
                <p className="text-xl font-medium">Dr. Mubarak K.</p>
                <p className="mt-2">Lecturer</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-1/3">
              <div className="bg-white border p-4 shadow-2xl rounded-md w-full">
                <p className="text-xl font-medium">Dr. Mubarak K.</p>
                <p className="mt-2">Lecturer</p>
              </div>
              <div className="bg-white border p-4 shadow-2xl rounded-md w-full">
                <p className="text-xl font-medium">Dr. Mubarak K.</p>
                <p className="mt-2">Lecturer</p>
              </div>
              <div className="bg-white border p-4 shadow-2xl rounded-md w-full">
                <p className="text-xl font-medium">Dr. Mubarak K.</p>
                <p className="mt-2">Lecturer</p>
              </div>
              <div className="bg-white border p-4 shadow-2xl rounded-md w-full">
                <p className="text-xl font-medium">Dr. Mubarak K.</p>
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

export default Departments;
