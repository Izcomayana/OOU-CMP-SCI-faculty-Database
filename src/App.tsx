import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="hidden lg:block">
        <Header />
        <Hero />
        <div className="container mx-auto">
          <About />
        </div>
      </div>

      <div className="block lg:hidden">
        mobile and tab design still dey cook
      </div>
    </>
  );
}

export default App;
