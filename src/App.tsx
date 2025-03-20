import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Departments from "./pages/Departments";
import Staffs from "./pages/Staffs";
import Department from "./pages/Departments/[id]/page";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="hidden scrollbar lg:block">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/departments" element={<Departments />} /> */}
            <Route path="/departments/:departmentId" element={<Department />} />
            <Route path="/staffs" element={<Staffs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Footer />
      </div>

      <div className="block lg:hidden">mobile and tab not ready yet</div>
    </>
  );
}

export default App;
