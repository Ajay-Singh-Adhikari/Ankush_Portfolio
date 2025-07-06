import { useState } from "react";
import {
  FaHome,
  FaGraduationCap,
  FaBriefcase,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import "../index.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: FaHome, to: "home" },
    { name: "Education", icon: FaGraduationCap, to: "education" },
    { name: "Experience", icon: FaBriefcase, to: "experience" },
    { name: "My Works", icon: FaComputer, to: "work" },
    { name: "Contact", icon: FaPhone, to: "contact" },
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex items-center text-white bg-gradient-to-b from-blue-700 via-blue-900 to-blue-800 font-semibold px-4 py-2 justify-between sticky top-0 z-50">
      <div
        onClick={handleScrollTop}
        className="hover:cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out text-lg"
      >
        Ankush Singh Adhikari
      </div>

      <div className="flex items-center gap-x-4">
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars className="w-6 h-6 text-white" />
        </button>

        <ul className="hidden md:flex gap-x-4 items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name} className="relative group cursor-pointer">
                <a
                  href={`#${item.to}`}
                  className="flex items-center gap-x-2 hover:scale-110 transition"
                >
                  <Icon className="text-xl md:inline-block lg:hidden group-hover:scale-150 transition-transform duration-300" />
                  <span className="hidden lg:inline-block hover:text-black">
                    {item.name}
                  </span>
                  <span className="absolute left-1/2 transform -translate-x-1/2 top-8 opacity-0 group-hover:opacity-100 text-xs bg-black text-white px-2 py-1 rounded transition-all duration-300 md:block lg:hidden">
                    {item.name}
                  </span>
                </a>
              </li>
            );
          })}
          <a
            href="#contact"
            className="px-2 py-1 bg-white text-black rounded hover:bg-black hover:text-white transition duration-300 hover:scale-110"
          >
            Hire Me
          </a>
        </ul>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-1/2 backdrop-blur bg-black/80 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 flex flex-col gap-y-4 pt-16 px-4`}
      >
        <button
          className="md:hidden fixed top-3 right-5"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes className="w-6 h-6 text-white" />
        </button>
        <ul className="flex flex-col gap-y-4 mt-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.name}
                className="flex items-center gap-x-2 p-2 rounded transition-colors duration-300 cursor-pointer hover:bg-blue-800 hover:text-white"
              >
                <a
                  href={`#${item.to}`}
                  className="flex items-center gap-x-2 w-full"
                >
                  <Icon />
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
          <a
            href="#contact"
            className="px-2 py-1 bg-white text-black rounded hover:bg-blue-800 hover:text-white transition"
          >
            Hire Me
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
