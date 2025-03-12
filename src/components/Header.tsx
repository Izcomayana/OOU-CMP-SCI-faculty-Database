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

            <div className="w-1/2">
              <ul className="saira flex justify-between">
                <li>Home</li>
                <li>Departments</li>
                <li>Staffs</li>
                <li>Contacts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
