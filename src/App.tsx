import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Staffs from "./pages/Staffs";
import Staff from "./pages/Staffs/[name]/page";
import DepartmentsPage from "./pages/Departments";
import Department from "./pages/Departments/[id]/page";
import NotFound from "./pages/NotFound";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <>
      <div className="scrollbar">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/departments/:departmentId" element={<Department />} />
          <Route path="/staffs" element={<Staffs />} />
          <Route path="/staffs/:staffName" element={<Staff />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
        <Toaster />
      </div>
    </>
  );
}

export default App;
