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

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex items-center font-semibold px-6 py-4 justify-between sticky top-0 z-50 border-b transition-colors duration-300 ${
        isDark 
          ? "text-white bg-black/20 backdrop-blur-md border-white/10" 
          : "text-black bg-white/70 backdrop-blur-md border-black/10"
      }`}
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
        {/* Theme Toggle Button (Mobile & Desktop) */}
        <motion.button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors ${
            isDark ? "hover:bg-white/10 text-yellow-400" : "hover:bg-black/10 text-blue-600"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
        </motion.button>

        {/* Hamburger Icon */}
        <motion.button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <FaBars className={`w-6 h-6 ${isDark ? "text-white" : "text-black"}`} />
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
                  className="flex items-center gap-x-2 transition"
                >
                  <Icon className="text-xl md:inline-block lg:hidden group-hover:scale-150 transition-transform duration-300" />
                  <span className="hidden lg:inline-block hover:text-blue-400 transition-colors">
                    {item.name}
                  </span>
                  <span className={`absolute left-1/2 transform -translate-x-1/2 top-8 opacity-0 group-hover:opacity-100 text-xs px-2 py-1 rounded transition-all duration-300 md:block lg:hidden ${
                    isDark ? "bg-black text-white" : "bg-white text-black border border-black/10"
                  }`}>
                    {item.name}
                  </span>
                </a>
              </motion.li>
            );
          })}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: isDark ? "0px 0px 15px rgba(59, 130, 246, 0.6)" : "0px 0px 15px rgba(37, 99, 235, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full transition-all duration-300 shadow-lg font-bold ${
              isDark ? "bg-blue-600 text-white hover:bg-blue-500" : "bg-blue-800 text-white hover:bg-blue-700"
            }`}
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
            className={`fixed top-0 right-0 h-full w-2/3 backdrop-blur z-40 flex flex-col gap-y-4 pt-16 px-6 shadow-2xl ${
              isDark ? "bg-black/90 text-white" : "bg-white/90 text-black"
            }`}
          >
            <motion.button
              className="absolute top-4 right-5"
              onClick={() => setMenuOpen(false)}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes className={`w-6 h-6 ${isDark ? "text-white" : "text-black"}`} />
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
                    className={`flex items-center gap-x-4 p-4 rounded-xl cursor-pointer transition-colors ${
                      isDark ? "hover:bg-blue-900/50" : "hover:bg-blue-50"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <a
                      href={`#${item.to}`}
                      className="flex items-center gap-x-4 w-full"
                    >
                      <Icon className="text-xl" />
                      <span className="text-lg font-medium">{item.name}</span>
                    </a>
                  </motion.li>
                );
              })}

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMenuOpen(false)}
                className={`mt-4 px-6 py-4 rounded-xl transition-all duration-300 text-center font-bold text-lg shadow-lg ${
                  isDark ? "bg-blue-600 text-white" : "bg-blue-800 text-white"
                }`}
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
