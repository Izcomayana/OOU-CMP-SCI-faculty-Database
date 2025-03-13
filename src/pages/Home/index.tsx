import About from "@/components/About";
import Departments from "@/components/Departments";
import Leadership from "@/components/Leadership";
import Hero from "@/components/Hero";

function Home() {
  return (
    <>
      <Hero
        title={
          <>
            Faculty <br /> of Science
          </>
        }
        details={"(Ago-Iwoye)"}
      />

      <div className="container mx-auto">
        <About
          title={"About the Faculty"}
          details={
            "The Faculty of Science is among the pioneering Faculties in the University, established in January 1983, with the central objective being the production of scientific and technological manpower for thecountry in general and Ogun State in particular. The faculty was established to disseminate, promote, and advance the growth of scientific knowledge in the University and to explore the use of this knowledge for the study and exploitation of the country’s natural resources for the advancement of the citizenry. The first set of students admitted to the faculty – 71, commenced their courses at the temporary site, now commonly referred to as Mini Campus. Presently, the Faculty is located at the permanent site (PS)."
          }
          title2={"Vision"}
          details2={
            "To be the foremost college known for development of world-class human and materials in the fields of sciences."
          }
        />
        <Leadership />
        <Departments />
      </div>
    </>
  );
}

export default Home;
