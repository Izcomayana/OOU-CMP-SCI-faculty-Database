import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header>
      <div className="bg-[#000117] text-white container px-4 lg:px-0">
        <div className="container mx-auto py-3">
          <div className="flex justify-between items-center">
            <Link to="/">
              <div className="flex justify-between items-center">
                <div className="w-16">
                  <img src="/sch-logo.png" alt="OOU logo" className="w-full" />
                </div>
                <div className="hidden lg:block">
                  <p className="ml-2 text-sm saira">
                    Olabisi <br /> Onabanjo University
                  </p>
                </div>
              </div>
            </Link>

            <button
              className="lg:hidden z-20"
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Toggle navigation"
            >
              {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <nav className="hidden lg:block w-[40%]">
              <ul className="saira flex justify-between">
                <li className="transition hover:text-[#bfc2f2]">
                  <Link to="/">Home</Link>
                </li>
                <li className="transition hover:text-[#bfc2f2]">
                  <Link to="/departments">Departments</Link>
                </li>
                <li className="transition hover:text-[#bfc2f2]">
                  <Link to="/staffs">Staffs</Link>
                </li>
                <li className="transition hover:text-[#bfc2f2]">
                  <Link to="/contacts">Contacts</Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Nav */}
            <div
              className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-[#000117] bg-opacity-95 z-10 flex items-center pl-16 transition-opacity duration-300 ease-in-out ${navOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
              <ul className="saira flex flex-col gap-10 text-xl text-white">
                <li className="hover:underline transition-all">
                  <Link to="/" onClick={() => setNavOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className="hover:underline transition-all">
                  <Link to="/departments" onClick={() => setNavOpen(false)}>
                    Departments
                  </Link>
                </li>
                <li className="hover:underline transition-all">
                  <Link to="/staffs" onClick={() => setNavOpen(false)}>
                    Staffs
                  </Link>
                </li>
                <li className="hover:underline transition-all">
                  <Link to="/contacts" onClick={() => setNavOpen(false)}>
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;