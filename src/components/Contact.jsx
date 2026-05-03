import {
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { isDark } = useTheme();

  return (
    <section
      id="contact"
      className={`py-24 px-4 relative transition-colors duration-500 ${
        isDark ? "bg-transparent text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            className={`text-5xl md:text-6xl font-bold mb-6 ${
              isDark 
                ? "bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" 
                : "text-blue-900"
            }`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Create Together
          </motion.h2>
          <motion.p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to elevate your visual content? I'm just a message away.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {/* Email Card */}
          <motion.a
            href="mailto:ankushadhikari9282@gmail.com"
            className={`group p-10 rounded-[2.5rem] border flex flex-col items-center text-center transition-all duration-500 ${
              isDark 
                ? "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-blue-500/50 backdrop-blur-xl" 
                : "bg-gray-50 border-gray-100 hover:bg-white hover:border-blue-200 hover:shadow-2xl"
            }`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
          >
            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${
              isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-600 text-white shadow-lg shadow-blue-200"
            }`}>
              <FaEnvelope size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Email Me</h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"} font-medium`}>ankushadhikari9282@gmail.com</p>
          </motion.a>

          {/* Phone Card */}
          <motion.a
            href="tel:+919259239112"
            className={`group p-10 rounded-[2.5rem] border flex flex-col items-center text-center transition-all duration-500 ${
              isDark 
                ? "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-blue-500/50 backdrop-blur-xl" 
                : "bg-gray-50 border-gray-100 hover:bg-white hover:border-blue-200 hover:shadow-2xl"
            }`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
          >
            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${
              isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-600 text-white shadow-lg shadow-blue-200"
            }`}>
              <FaPhone size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Call Me</h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"} font-medium`}>+91 9259239112</p>
          </motion.a>
        </div>

        {/* Social Bar */}
        <div className="flex flex-col items-center">
          <p className={`text-sm font-bold tracking-[0.3em] uppercase mb-10 ${isDark ? "text-blue-400" : "text-blue-900/60"}`}>
            Connect Globally
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { href: "https://www.linkedin.com/in/ankushadhikari", icon: <FaLinkedin />, label: "LinkedIn" },
              { href: "https://twitter.com", icon: <FaXTwitter />, label: "Twitter" },
              { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
              { href: "https://t.me/Ankush_Adhikari", icon: <FaTelegram />, label: "Telegram" },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 border ${
                  isDark
                    ? "text-gray-400 hover:text-white border-white/10 glass-card hover:border-blue-400/50 hover:bg-blue-500/10"
                    : "text-blue-900 hover:text-blue-600 border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-blue-100"
                }`}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
