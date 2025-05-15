import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="bg-[#000117] text-white">
        <div className="container mx-auto py-3">
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center">
              <div className="w-16">
                <img src="/sch-logo.png" alt="OOU logo" className="w-full" />
              </div>
              <div>
                <p className="ml-2 text-sm saira">
                  Olabisi <br /> Onabanjo University
                </p>
              </div>
            </div>

            <nav className="w-[40%]">
              <ul className="saira flex justify-between">
                <li className="transition hover:text-[#bfc2f2]">
                  <Link to="/">Home</Link>
                </li>
                <li className="transition hover:text-[#bfc2f2]">
                  Departments
                  {/* <Link to="/departments">Departments</Link> */}
                </li>
                <li className="transition hover:text-[#bfc2f2]">
                  <Link to="/staffs">Staffs</Link>
                </li>
                <li className="transition hover:text-[#bfc2f2]">
                  <Link to="/contacts">Contacts</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
