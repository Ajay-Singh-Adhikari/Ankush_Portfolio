import { useSelector } from "react-redux";
import { motion } from "motion/react";

export default function Experience() {
  const experience = useSelector((state) => state.experience.data);

  return (
    <section id="experience" className="py-10 px-4 flex flex-col items-center">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-blue-600 mb-12 text-center whitespace-nowrap"
      >
        Experience Details
      </motion.h2>

      <div className="flex gap-5 flex-wrap justify-center">
        {experience.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-md border-2 border-blue-500 rounded-lg shadow hover:shadow-lg transition p-4 bg-white"
          >
            <div>
              <h4 className="text-lg font-semibold mb-1">
                Role: <span className="text-blue-700">{item.heading}</span>
              </h4>
              <h4 className="text-lg font-semibold mb-1">
                Current Status:{" "}
                <span className="text-green-700">{item.currentStatus}</span>
              </h4>
              <h4 className="text-lg font-semibold mb-1">
                Duration: <span className="text-blue-700">{item.time}</span>
              </h4>
              <h4 className="text-lg mb-1">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-red-700 transition"
                >
                  {item.company}
                </a>
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
