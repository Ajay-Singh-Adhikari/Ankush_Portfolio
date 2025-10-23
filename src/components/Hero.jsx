import { FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";

export default function Hero() {
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
          alt="Ajay"
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
          },
          { href: "https://twitter.com", icon: <FaXTwitter size={20} /> },
          { href: "#", icon: <FaInstagram size={20} /> },
          {
            href: "https://t.me/Ankush_Adhikari",
            icon: <FaTelegram size={20} />,
          },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noreferrer"
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
