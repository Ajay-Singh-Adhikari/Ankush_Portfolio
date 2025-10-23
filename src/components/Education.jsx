import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Education() {
  const education = useSelector((state) => state.education.data);

  return (
    <section id="education" className="py-10 px-4 flex flex-col items-center">
      {/* Animated heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-blue-600 mb-12 text-center whitespace-nowrap overflow-none"
      >
        Education Details
      </motion.h2>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* vertical line visible only on md+ */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-blue-500 z-0" />

        <div className="space-y-12 pl-0 md:pl-16 relative z-10 flex flex-col items-center md:items-start">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative w-full"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="rounded-lg border-2 border-blue-500 shadow p-4 ml-0 md:ml-8 w-full text-center md:text-left bg-white"
              >
                <h3 className="text-xl font-semibold mb-1">{item.heading}</h3>
                <span className="text-gray-600 font-medium">{item.year}</span>
                <p className="mt-2 text-black text-sm">
                  I {item.school} {item.heading} from{" "}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-500"
                  >
                    {item.school_name}
                  </a>
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
