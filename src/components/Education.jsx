import { useSelector } from "react-redux";
import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";

export default function Education() {
  const education = useSelector((state) => state.education.data);
  const { isDark } = useTheme();

  return (
    <section id="education" className={`py-20 px-4 transition-colors duration-300 ${isDark ? "" : "bg-gray-50"}`}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-4xl font-bold mb-16 text-center transition-colors duration-300 ${
            isDark 
              ? "bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]" 
              : "text-blue-800"
          }`}
        >
          Education Details
        </motion.h2>

        <div className={`relative border-l-2 ml-4 md:ml-8 pl-8 space-y-12 transition-colors duration-300 ${
          isDark ? "border-blue-600/30" : "border-blue-600/20"
        }`}>
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 transition-all duration-300 ${
                isDark 
                  ? "bg-blue-600 border-[#020205] shadow-[0_0_10px_rgba(37,99,235,0.5)]" 
                  : "bg-blue-800 border-white shadow-lg"
              }`} />
              
              <div className={`p-6 hover:translate-x-2 transition-all duration-300 rounded-2xl ${
                isDark 
                  ? "glass-card" 
                  : "bg-white border border-black/5 shadow-md hover:shadow-xl"
              }`}>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className={`text-xl font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    {item.heading}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                    isDark 
                      ? "bg-blue-500/10 border border-blue-500/20 text-blue-400" 
                      : "bg-blue-50 text-blue-800 border border-blue-100"
                  }`}>
                    {item.year}
                  </span>
                </div>

                <div className={`flex items-center gap-3 mb-4 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors underline underline-offset-4 ${
                      isDark ? "hover:text-blue-400 decoration-blue-600/30" : "hover:text-blue-800 decoration-blue-800/20"
                    }`}
                  >
                    {item.school_name}
                  </a>
                </div>

                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-700"}`}>
                  Pursued {item.heading} specialization at {item.school_name}, focusing on design principles and creative execution.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
