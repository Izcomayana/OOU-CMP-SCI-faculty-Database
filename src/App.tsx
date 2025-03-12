import About from "./components/About";
import Departments from "./components/Departments";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Leadership from "./components/Leadership";

function App() {
  return (
    <>
      <div className="hidden scrollbar lg:block">
        <Header />
        <Hero />
        <div className="container mx-auto">
          <About />
          <Leadership />
          <Departments />
        </div>
        <Footer />
      </div>

      <div className="block lg:hidden">
        mobile and tab design still dey cook
      </div>
    </>
  );
}

export default App;
