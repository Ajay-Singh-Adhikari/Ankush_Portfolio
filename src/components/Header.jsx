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
import { motion, AnimatePresence } from "motion/react";

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
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center text-white bg-gradient-to-b from-blue-700 via-blue-900 to-blue-800 font-semibold px-4 py-2 justify-between sticky top-0 z-50 shadow-md"
    >
      {/* Logo with animation */}
      <motion.div
        onClick={handleScrollTop}
        className="hover:cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out text-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Ankush Singh Adhikari
      </motion.div>

      <div className="flex items-center gap-x-4">
        {/* Hamburger Icon */}
        <motion.button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <FaBars className="w-6 h-6 text-white" />
        </motion.button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-x-4 items-center">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.name}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
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
              </motion.li>
            );
          })}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-2 py-1 bg-white text-black rounded hover:bg-black hover:text-white transition duration-300"
          >
            Hire Me
          </motion.a>
        </ul>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-1/2 backdrop-blur bg-black/80 z-40 flex flex-col gap-y-4 pt-16 px-4"
          >
            <motion.button
              className="md:hidden fixed top-3 right-5"
              onClick={() => setMenuOpen(false)}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes className="w-6 h-6 text-white" />
            </motion.button>

            <ul className="flex flex-col gap-y-4 mt-8">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-x-2 p-2 rounded cursor-pointer hover:bg-blue-800 hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    <a
                      href={`#${item.to}`}
                      className="flex items-center gap-x-2 w-full"
                    >
                      <Icon />
                      <span>{item.name}</span>
                    </a>
                  </motion.li>
                );
              })}

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMenuOpen(false)}
                className="px-2 py-1 bg-white text-black rounded hover:bg-blue-800 hover:text-white transition"
              >
                Hire Me
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
