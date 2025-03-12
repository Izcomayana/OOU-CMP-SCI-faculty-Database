import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="hidden lg:block">
        <Header />
      </div>

      <div className="block lg:hidden">
        mobile and tab design still dey cook
      </div>
    </>
  );
}

export default App;
