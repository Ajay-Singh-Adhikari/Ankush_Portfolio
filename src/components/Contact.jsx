import {
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-transparent py-20 px-4 text-white relative"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Heading Animation */}
        <motion.h2
          className="text-5xl font-bold mb-6 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to take your content to the next level? Reach out for a collaboration!
        </motion.p>

        {/* Social Links Animation */}
        <motion.div
          className="flex justify-center gap-6 mt-4 text-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
        >
          {[
            {
              href: "https://www.linkedin.com/in/ankushadhikari",
              icon: <FaLinkedin />,
            },
            { href: "https://twitter.com", icon: <FaXTwitter /> },
            { href: "https://instagram.com", icon: <FaInstagram /> },
            { href: "https://t.me/Ankush_Adhikari", icon: <FaTelegram /> },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white border border-white/10 p-4 rounded-2xl transition-all duration-300 glass hover:scale-110 hover:border-blue-400/50"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto mt-16 flex flex-col md:flex-row justify-center gap-8 px-4 relative z-10">
        {/* Email Card */}
        <motion.div
          className="relative glass-card rounded-2xl p-8 w-full md:w-1/2 flex flex-col items-start border border-white/10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:ankushadhikari9282@gmail.com"
            className="absolute -top-6 left-8 bg-blue-600 border border-white/20 rounded-2xl p-4 hover:bg-blue-500 transition-all duration-300 shadow-lg"
          >
            <FaEnvelope size={24} />
          </a>
          <h3 className="text-2xl font-semibold mt-6 mb-2 text-white">Email Me</h3>
          <p className="text-gray-400">ankushadhikari9282@gmail.com</p>
        </motion.div>

        {/* Phone Card */}
        <motion.div
          className="relative glass-card rounded-2xl p-8 w-full md:w-1/2 flex flex-col items-start border border-white/10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <a
            href="tel:+919259239112"
            className="absolute -top-6 left-8 bg-blue-600 border border-white/20 rounded-2xl p-4 hover:bg-blue-500 transition-all duration-300 shadow-lg"
          >
            <FaPhone size={24} />
          </a>
          <h3 className="text-2xl font-semibold mt-6 mb-2 text-white">Call Me</h3>
          <p className="text-gray-400">+91 9259239112</p>
        </motion.div>
      </div>
    </section>
  );
}
