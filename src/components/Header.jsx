import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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

const MobileMenu = ({ isOpen, onClose, navItems }) => {
  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobileMenu"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 right-0 h-full w-1/2 backdrop-blur bg-black/80 z-[9999] flex flex-col gap-y-4 pt-16 px-4 shadow-2xl"
        >
          <motion.button
            className="md:hidden fixed top-3 right-5"
            onClick={onClose}
            whileTap={{ scale: 0.9 }}
            aria-label="Close navigation menu"
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
                  className="flex items-center gap-x-2 p-2 rounded cursor-pointer hover:bg-blue-800 hover:text-white text-white"
                  onClick={onClose}
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
              onClick={onClose}
              className="px-2 py-1 bg-white text-black rounded hover:bg-blue-800 hover:text-white transition text-center"
            >
              Hire Me
            </motion.a>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  // Craftsmanship: Robust Scroll Lock
  useEffect(() => {
    const lockScroll = () => {
      document.body.style.overflow = "hidden";
    };
    const unlockScroll = () => {
      document.body.style.overflow = "";
    };

    if (menuOpen) lockScroll();
    else unlockScroll();

    return unlockScroll;
  }, [menuOpen]);

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

  const FloatingThemeToggle = () => {
    if (typeof document === "undefined") return null;

    return createPortal(
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="fixed bottom-8 right-8 z-[9999]"
      >
        <motion.button
          onClick={toggleTheme}
          className={`p-4 rounded-2xl transition-all duration-500 border shadow-2xl relative overflow-hidden group ${
            isDark
              ? "bg-zinc-900/90 border-zinc-800 hover:border-blue-500/50"
              : "bg-white/90 border-slate-200 hover:border-blue-600/50 shadow-blue-500/10"
          } backdrop-blur-xl`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isDark ? "sun" : "moon"}
              initial={{ y: 20, opacity: 0, rotate: -45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -20, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.3, ease: "backOut" }}
              className={`transition-colors duration-300 ${
                isDark 
                  ? "text-white group-hover:text-blue-400" 
                  : "text-black group-hover:text-blue-600"
              }`}
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </motion.div>,
      document.body
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${isDark
          ? "bg-black/80 backdrop-blur-xl border-white/10 text-white"
          : "bg-white/80 backdrop-blur-xl border-slate-200/60 text-slate-900 shadow-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <motion.div
          onClick={handleScrollTop}
          className="hover:cursor-pointer text-xl font-black tracking-tighter"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Ankush Singh Adhikari
        </motion.div>

        <div className="flex items-center gap-x-6">

          <motion.button
            className={`md:hidden p-2 rounded-xl transition-colors ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-slate-50 hover:bg-slate-100 border border-slate-200"
              }`}
            onClick={() => setMenuOpen(true)}
            whileTap={{ scale: 0.9 }}
            aria-label="Open navigation menu"
          >
            <FaBars className="w-6 h-6" />
          </motion.button>

          <ul className="hidden md:flex gap-x-8 items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name} className="relative group">
                  <a
                    href={`#${item.to}`}
                    className={`flex items-center gap-x-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                      isDark 
                        ? "text-zinc-400 hover:text-white" 
                        : "text-slate-500 hover:text-blue-600"
                    }`}
                  >
                    <span className="hidden lg:inline-block">{item.name}</span>
                    <Icon className="md:inline-block lg:hidden" />
                  </a>
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-full ${
                    isDark ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "bg-blue-600"
                  }`} />
                </li>
              );
            })}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-7 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-xl ${
                isDark
                  ? "bg-white text-black hover:bg-zinc-200"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-blue-500/25"
              }`}
            >
              Hire Me
            </motion.a>
          </ul>
        </div>
      </div>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        navItems={navItems}
        isDark={isDark}
      />
      <FloatingThemeToggle />
    </motion.header>
  );
};

export default Header;
