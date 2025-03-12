import About from "@/components/About";
import Departments from "@/components/Departments";
import Leadership from "@/components/Leadership";

function Home() {
  return (
    <div className="container mx-auto">
      <About />
      <Leadership />
      <Departments />
    </div>
  );
}

export default Home;
