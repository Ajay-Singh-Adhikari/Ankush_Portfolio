import { useSelector } from "react-redux";
import { motion } from "motion/react";

export default function Experience() {
  const experience = useSelector((state) => state.experience.data);

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]"
        >
          Experience Details
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 flex flex-col justify-between group h-full"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {item.heading}
                </h3>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">Status</p>
                    <p className="text-sm font-semibold text-blue-400">{item.currentStatus}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">Duration</p>
                    <p className="text-sm font-semibold text-blue-300">{item.time}</p>
                  </div>
                </div>
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-gray-400 hover:text-white"
              >
                <span className="text-sm font-medium truncate">{item.company}</span>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
