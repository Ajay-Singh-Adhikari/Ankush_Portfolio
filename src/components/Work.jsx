import { useSelector } from "react-redux";
import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";

export default function Work() {
  const { thumbnails, shorts, longVideos } = useSelector((state) => state.work);
  const { isDark } = useTheme();

  const ytVideos = [
    { id: 1, link: "https://youtu.be/PzVY1wNANck?si=Zup81WGmsbT5zJUG" },
    { id: 2, link: "https://youtu.be/meCyjRMClqM?si=5tlMUCqN5xb1GXG6" },
    { id: 3, link: "https://youtu.be/xNATtdTBbL0?si=Hr_hYEwGanUOSNwS" },
  ];

  const getEmbedLink = (url) => {
    const videoIdMatch = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^?&]+)/
    );
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : "";
  };

  const SectionTitle = ({ children, isDark, className = "" }) => (
    <motion.h2
      className={`text-4xl md:text-5xl font-bold text-center mb-16 relative py-4 ${isDark
          ? "bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]"
          : "text-blue-600"
        } ${className}`}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-24 rounded-full ${isDark ? "bg-blue-500/50" : "bg-blue-600/20"}`}>
        <div className={`h-full w-12 rounded-full mx-auto ${isDark ? "bg-blue-400" : "bg-blue-600"}`} />
      </div>
    </motion.h2>
  );

  const SubHeader = ({ children, isDark, className = "" }) => (
    <motion.div
      className={`flex items-center justify-center gap-6 mb-12 mt-20 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`h-[1px] flex-1 max-w-[150px] ${isDark
        ? "bg-gradient-to-r from-transparent via-blue-500/50 to-blue-500"
        : "bg-gradient-to-r from-transparent via-blue-600/20 to-blue-600/40"}`}
      />

      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${isDark ? "bg-blue-400 animate-pulse" : "bg-blue-600"}`} />
        <h3 className={`text-sm md:text-base font-bold tracking-[0.3em] uppercase ${isDark ? "text-blue-300" : "text-blue-900"}`}>
          {children}
        </h3>
        <div className={`w-2 h-2 rounded-full ${isDark ? "bg-blue-400 animate-pulse" : "bg-blue-600"}`} />
      </div>

      <div className={`h-[1px] flex-1 max-w-[150px] ${isDark
        ? "bg-gradient-to-l from-transparent via-blue-500/50 to-blue-500"
        : "bg-gradient-to-l from-transparent via-blue-600/20 to-blue-600/40"}`}
      />
    </motion.div>
  );

  if (!isDark) {
    return (
      <section id="work" className="px-4 py-20 bg-transparent text-black">
        <div className="max-w-7xl mx-auto">
          <SectionTitle isDark={false}>My Works</SectionTitle>

          {/* Thumbnails */}
          <SubHeader isDark={false}>Thumbnails</SubHeader>

          <motion.div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-10 mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {thumbnails.map((thumb) => (
              <motion.div
                key={thumb.id}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-xl mx-auto bg-white"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
                whileHover={{ y: -10, scale: 1.02, rotate: 1, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
              >
                <img src={thumb.url} alt={`Thumbnail ${thumb.id}`} width="640" height="360" loading="lazy" className="w-full object-cover" />
              </motion.div>
            ))}
          </motion.div>


          {/* Long Form Videos */}
          <div className="px-5">
            <SubHeader isDark={false} className="mb-8 !mt-0 text-blue-600/70 text-xl">Long Form Content</SubHeader>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            >
              {longVideos.map((video) => (
                <motion.div
                  key={video.id}
                  className="rounded-2xl overflow-hidden border border-gray-100 shadow-xl mx-auto w-full bg-white"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                  whileHover={{ y: -10, scale: 1.01, boxShadow: "0 20px 40px -15px rgba(0,0,255,0.1)" }}
                >
                  <video
                    src={video.url}
                    controls
                    loop
                    muted
                    preload="metadata"
                    className="w-full h-[450px] object-cover"
                  />
                </motion.div>
              ))}

              {ytVideos.map((vid) => (
                <motion.div
                  key={vid.id}
                  className="relative w-full pb-[56.25%] h-0 rounded-2xl overflow-hidden border border-gray-100 shadow-xl bg-white"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
                  whileHover={{ y: -10, scale: 1.01, rotate: -1 }}
                >
                  <iframe
                    src={getEmbedLink(vid.link)}
                    title={`YouTube video ${vid.id}`}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Short Form Videos */}
          <SubHeader isDark={false} className="mb-10 mt-32">Short Form Content</SubHeader>

          <motion.div className="flex flex-wrap justify-center gap-10 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {shorts.map((short) => (
              <motion.div
                key={short.id}
                className="w-full max-w-[340px] rounded-2xl overflow-hidden border border-gray-100 shadow-xl bg-white p-4"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }}
                whileHover={{ y: -15, scale: 1.03, rotate: 1 }}
              >
                <video
                  controls
                  loop
                  muted
                  preload="metadata"
                  src={short.url}
                  className="w-full h-[550px] object-contain bg-black rounded-xl"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="px-4 py-20 bg-transparent text-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle isDark={true}>My Works</SectionTitle>

        {/* Thumbnails */}
        <SubHeader isDark={true}>Thumbnails</SubHeader>

        <motion.div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-10 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {thumbnails.map((thumb) => (
            <motion.div
              key={thumb.id}
              className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl mx-auto glass-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
              whileHover={{ y: -10, scale: 1.02, rotate: 1, boxShadow: "0 20px 40px -15px rgba(59,130,246,0.3)" }}
            >
              <img src={thumb.url} alt={`Thumbnail ${thumb.id}`} width="640" height="360" loading="lazy" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>


        {/* Long Form Videos */}
        <div className="px-5">
          <SubHeader isDark={true} className="mb-8 !mt-0 text-blue-400/60 text-xl">Long Form Content</SubHeader>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {longVideos.map((video) => (
              <motion.div
                key={video.id}
                className="rounded-2xl overflow-hidden border border-white/5 mx-auto w-full glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                whileHover={{ y: -10, scale: 1.01, boxShadow: "0 20px 40px -15px rgba(59,130,246,0.2)" }}
              >
                <video
                  src={video.url}
                  controls
                  loop
                  muted
                  preload="metadata"
                  className="w-full h-[450px] object-cover"
                />
              </motion.div>
            ))}

            {ytVideos.map((vid) => (
              <motion.div
                key={vid.id}
                className="relative w-full pb-[56.25%] h-0 rounded-2xl overflow-hidden border border-white/5 shadow-2xl glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
                whileHover={{ y: -10, scale: 1.01, rotate: -1 }}
              >
                <iframe
                  src={getEmbedLink(vid.link)}
                  title={`YouTube video ${vid.id}`}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Short Form Videos */}
        <SubHeader isDark={true} className="mb-10 mt-32">Short Form Content</SubHeader>

        <motion.div className="flex flex-wrap justify-center gap-10 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {shorts.map((short) => (
            <motion.div
              key={short.id}
              className="w-full max-w-[340px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl glass-card p-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }}
              whileHover={{ y: -15, scale: 1.03, rotate: 1 }}
            >
              <video
                controls
                loop
                muted
                preload="none"
                src={short.url}
                className="w-full h-[550px] object-contain bg-black/40 rounded-xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
