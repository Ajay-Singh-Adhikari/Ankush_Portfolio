import { useState } from "react";
import {
  FaHome,
  FaGraduationCap,
  FaBriefcase,
  FaPhone,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import "../index.css";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

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

  const ThemeToggle = () => (
    <motion.button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all duration-300 ${
        isDark ? "bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20" : "bg-blue-100 text-blue-900 hover:bg-blue-200"
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
    </motion.button>
  );

  if (!isDark) {
    // EXACT MAIN BRANCH CODE
    return (
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center text-gray-800 bg-white/80 backdrop-blur-lg font-semibold px-6 py-4 justify-between fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50 shadow-sm"
      >
        <motion.div
          onClick={handleScrollTop}
          className="hover:cursor-pointer hover:text-blue-600 transition-all duration-300 ease-in-out text-xl font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ankush Singh Adhikari
        </motion.div>

        <div className="flex items-center gap-x-6">
          <ThemeToggle />
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <FaBars className="w-6 h-6 text-gray-800" />
          </motion.button>

          <ul className="hidden md:flex gap-x-6 items-center">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.name}
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <a
                    href={`#${item.to}`}
                    className="flex items-center gap-x-2 hover:text-blue-600 transition-colors"
                  >
                    <Icon className="text-xl md:inline-block lg:hidden group-hover:text-blue-600 transition-colors" />
                    <span className="hidden lg:inline-block">
                      {item.name}
                    </span>
                  </a>
                </motion.li>
              );
            })}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(37, 99, 235, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 font-bold shadow-md shadow-blue-200"
            >
              Hire Me
            </motion.a>
          </ul>
        </div>

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
  }

  // EXACT THEME/DARK BRANCH CODE
  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center text-white bg-black/20 backdrop-blur-md font-semibold px-6 py-4 justify-between fixed top-0 left-0 right-0 z-50 border-b border-white/10"
    >
      <motion.div
        onClick={handleScrollTop}
        className="hover:cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out text-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Ankush Singh Adhikari
      </motion.div>

      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        <motion.button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <FaBars className="w-6 h-6 text-white" />
        </motion.button>

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
                  <span className="hidden lg:inline-block hover:text-blue-400 transition-colors">
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
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg font-bold"
          >
            Hire Me
          </motion.a>
        </ul>
      </div>

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
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all duration-300 text-center font-bold"
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
