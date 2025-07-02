import { Button } from "./ui/button";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#21234F] saira">
        <div className="container mx-auto py-20 flex justify-between text-white">
          <div className="">
            <div className="flex items-center">
              <div className="w-16">
                <img src="/sch-logo.png" alt="OOU logo" className="w-full" />
              </div>
              <div>
                <p className="text-2xl font-semibold pl-1 saira">OOU</p>
              </div>
            </div>

            <ul className="flex flex-col justify-between gap-2 ml-2 mt-5">
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
          </div>

          <div className="mt-6">
            <h2 className="text-3xl">Connect With Us</h2>
            <ul className="flex flex-col justify-between gap-3 mt-5">
              <li className="flex gap-2 items-center">
                <IoLogoFacebook className="w-6 h-6" /> Facebook
              </li>
              <li className="flex gap-2 items-center">
                <FaInstagram className="w-6 h-6" />
                Instagram
              </li>
              <li className="flex gap-2 items-center">
                <FaXTwitter className="w-6 h-6" />
                Twitter
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-3xl mb-5">Newsletter</h2>
            <Button className="bg-transparent border rounded pl-2 py-5 cursor-pointer transition-all hover:bg-[#4c4f81e2]">
              <a
                href="mailto:#"
                className="text-sm flex justify-between items-center gap-48 sm:text-lg"
              >
                <span>Email</span>

                <span>
                  <IoSend />
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
