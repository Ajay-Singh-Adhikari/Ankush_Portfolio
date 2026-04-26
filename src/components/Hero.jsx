import { FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <motion.section
      id="home"
      className={`flex flex-col justify-center items-center text-center px-4 py-12 min-h-screen relative overflow-hidden transition-colors duration-300 ${
        isDark ? "" : "bg-white"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Profile Image */}
      <motion.div
        className="relative w-40 h-40 sm:w-48 sm:h-48 mb-8"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.5 }}
      >
        <div className={`absolute inset-0 blur-2xl opacity-20 rounded-full animate-pulse ${
          isDark ? "bg-blue-500" : "bg-blue-400"
        }`}></div>
        <img
          src="images/Bhai.jpeg"
          alt="Ajay"
          className={`object-cover w-full h-full rounded-2xl shadow-2xl relative z-10 border-2 transition-colors duration-300 ${
            isDark ? "border-white/20" : "border-black/5"
          }`}
        />
      </motion.div>

      {/* Texts */}
      <motion.h1
        className={`text-4xl sm:text-6xl font-extrabold mb-4 transition-colors duration-300 ${
          isDark ? "text-white" : "text-black"
        }`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Hi, I'm{" "}
        <span className={isDark 
          ? "bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          : "text-blue-800"
        }>
          Ankush
        </span>
      </motion.h1>

      <motion.h2
        className={`text-xl sm:text-2xl font-medium transition-colors duration-300 ${
          isDark ? "text-blue-200" : "text-blue-800"
        }`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Graphic Designer & Video Editor
      </motion.h2>

      <motion.p
        className={`max-w-2xl mt-6 text-sm sm:text-lg leading-relaxed px-4 transition-colors duration-300 ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        I specialize in creating visually impactful designs for the YouTube and digital content industry. 
        With over <b>3 years of experience</b>, I transform ideas into high-quality thumbnails and 
        engaging video edits that capture attention.
      </motion.p>

      {/* Social Icons */}
      <motion.div
        className="flex space-x-6 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        {[
          { href: "https://www.linkedin.com/in/ankushadhikari", icon: <FaLinkedin size={24} /> },
          { href: "https://twitter.com", icon: <FaXTwitter size={24} /> },
          { href: "#", icon: <FaInstagram size={24} /> },
          { href: "https://t.me/Ankush_Adhikari", icon: <FaTelegram size={24} /> },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={`rounded-xl p-4 transition-all duration-300 border ${
              isDark 
                ? "text-gray-400 hover:text-blue-400 border-white/10 hover:border-blue-400/50 glass" 
                : "text-blue-800 hover:text-blue-600 border-black/10 hover:border-blue-800/30 bg-blue-50/50"
            }`}
            whileHover={{ scale: 1.1, y: -5, backgroundColor: isDark ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.05)" }}
            whileTap={{ scale: 0.9 }}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Hire Me Button */}
      <motion.a
        href="#contact"
        className={`mt-12 px-10 py-4 rounded-full transition-all duration-300 font-bold text-lg shadow-lg ${
          isDark 
            ? "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]" 
            : "bg-blue-800 hover:bg-blue-700 text-white"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        Hire Me
      </motion.a>
    </motion.section>
  );
}
