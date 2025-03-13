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

        <div className="my-20 saira">
          <h1 className="text-3xl font-semibold text-center">Staff</h1>
          <div className="mt-10 flex justify-between">
            <div className="">
              <div className="rounded-md w-[19rem]">
                <img src="/leader.png" alt="Leader" className="w-full" />
              </div>
              <div className="mt-5">
                <p className="font-medium text-2xl">Iremide O.</p>
                <p>Dean</p>
              </div>
            </div>
            <div className="flex flex-col gap-5"></div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Departments;
