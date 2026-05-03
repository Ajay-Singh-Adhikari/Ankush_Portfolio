import { FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { isDark } = useTheme();

  if (!isDark) {
    // EXACT MAIN BRANCH CODE
    return (
      <motion.section
        id="home"
        className="flex flex-col justify-center items-center text-center px-4 py-12 min-h-screen"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Profile Image */}
        <motion.div
          className="relative w-40 h-40 sm:w-48 sm:h-48 transition duration-300 mb-6"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <img
            src="images/Bhai.jpeg"
            alt="Ankush Singh Adhikari"
            width="192"
            height="192"
            fetchpriority="high"
            className="object-cover w-full h-full rounded-md shadow-lg"
          />
        </motion.div>

        {/* Texts */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hi, It&apos;s <span className="text-blue-800">Ankush</span>
        </motion.h1>

        <motion.h2
          className="text-lg sm:text-xl mt-2 text-blue-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="text-black">I&apos;m a </span> (Graphic Designer and
          Video Editor)
        </motion.h2>

        <motion.p
          className="max-w-xl mt-4 text-black text-sm sm:text-base px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          I’m a <b>Thumbnail Designer and Video Editor</b> with{" "}
          <b>over 3 years of experience</b> specializing in creating visually
          impactful designs for the YouTube and digital content industry. I’m
          passionate about transforming ideas into high-quality thumbnails and
          engaging video edits that capture attention and drive audience
          engagement.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex space-x-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delayChildren: 0.9, staggerChildren: 0.15 }}
        >
          {[
            {
              href: "https://www.linkedin.com/in/ankushadhikari",
              icon: <FaLinkedin size={20} />,
              label: "LinkedIn",
            },
            { href: "https://twitter.com", icon: <FaXTwitter size={20} />, label: "Twitter" },
            { href: "#", icon: <FaInstagram size={20} />, label: "Instagram" },
            {
              href: "https://t.me/Ankush_Adhikari",
              icon: <FaTelegram size={20} />,
              label: "Telegram",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="hover:text-black text-blue-800 border hover:border-black border-blue-800 rounded-full p-3 transition"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Hire Me Button */}
        <motion.a
          href="#contact"
          className="mt-6 px-6 text-white py-2 bg-blue-800 hover:bg-black rounded-sm hover:rounded-lg transition font-bold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Hire Me
        </motion.a>
      </motion.section>
    );
  }

  // EXACT THEME/DARK BRANCH CODE
  return (
    <motion.section
      id="home"
      className="flex flex-col justify-center items-center text-center px-4 py-12 min-h-screen relative overflow-hidden"
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
        <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full animate-pulse"></div>
        <img
          src="images/Bhai.jpeg"
          alt="Ankush Singh Adhikari"
          width="192"
          height="192"
          fetchpriority="high"
          className="object-cover w-full h-full rounded-2xl shadow-2xl border-2 border-white/20 relative z-10"
        />
      </motion.div>

      {/* Texts */}
      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold text-white mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Hi, I'm <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">Ankush</span>
      </motion.h1>

      <motion.h2
        className="text-xl sm:text-2xl font-medium text-blue-200"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Graphic Designer & Video Editor
      </motion.h2>

      <motion.p
        className="max-w-2xl mt-6 text-gray-300 text-sm sm:text-lg leading-relaxed px-4"
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
          { href: "https://www.linkedin.com/in/ankushadhikari", icon: <FaLinkedin size={24} />, label: "LinkedIn" },
          { href: "https://twitter.com", icon: <FaXTwitter size={24} />, label: "Twitter" },
          { href: "#", icon: <FaInstagram size={24} />, label: "Instagram" },
          { href: "https://t.me/Ankush_Adhikari", icon: <FaTelegram size={24} />, label: "Telegram" },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            className="text-gray-400 hover:text-blue-400 border border-white/10 hover:border-blue-400/50 rounded-xl p-4 transition-all duration-300 glass"
            whileHover={{ scale: 1.1, y: -5, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
            whileTap={{ scale: 0.9 }}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Hire Me Button */}
      <motion.a
        href="#contact"
        className="mt-12 px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all duration-300 font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
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
