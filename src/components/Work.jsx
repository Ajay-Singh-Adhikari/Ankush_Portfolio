import { useSelector } from "react-redux";
import { motion } from "motion/react";

export default function Work() {
  const { thumbnails, shorts, longVideos } = useSelector((state) => state.work);

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

  return (
    <section id="work" className="px-4 py-8 bg-white text-black">
      <motion.h2
        className="text-4xl font-bold text-blue-600 mb-12 text-center whitespace-nowrap"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Works
      </motion.h2>

      {/* Thumbnails */}
      <motion.h2
        className="text-2xl font-semibold mb-4 text-black hover:scale-y-110"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Thumbnails
      </motion.h2>

      <motion.div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {thumbnails.map((thumb) => (
          <motion.div
            key={thumb.id}
            className="rounded overflow-hidden border shadow mx-auto"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.6, type: "spring" } }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <img src={thumb.url} alt={thumb.id} className="w-full object-cover" />
          </motion.div>
        ))}
      </motion.div>

      {/* Video Editing */}
      <motion.h2
        className="text-2xl font-semibold mb-4 mt-30 text-black hover:scale-y-110"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Video Editing
      </motion.h2>

      {/* Long Form Videos */}
      <div className="p-5">
        <motion.h3
          className="font-semibold mb-2 text-blue-700 text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Long Form Videos
        </motion.h3>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {longVideos.map((video) => (
            <motion.div
              key={video.id}
              className="rounded overflow-hidden border mx-auto w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              whileHover={{ scale: 1.04, boxShadow: "0px 10px 20px rgba(0,0,255,0.4)" }}
            >
              <video
                src={video.url}
                controls
                autoPlay
                loop
                muted
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          ))}

          {ytVideos.map((vid) => (
            <motion.div
              key={vid.id}
              className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden border shadow-md"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.7, type: "spring" } }}
              whileHover={{ scale: 1.06, rotate: -1 }}
            >
              <iframe
                src={getEmbedLink(vid.link)}
                title={`YouTube video ${vid.id}`}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Short Form Videos */}
      <motion.h3
        className="mb-2 pb-10 text-blue-700 font-semibold text-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Short Form Videos
      </motion.h3>

      <motion.div className="flex flex-wrap justify-center gap-6 mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {shorts.map((short) => (
          <motion.div
            key={short.id}
            className="w-full max-w-sm rounded"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }}
            whileHover={{ scale: 1.05, y: -5, rotate: 1 }}
          >
            <div className="p-4 flex justify-center">
              <video
                controls
                autoPlay
                loop
                muted
                src={short.url}
                className="w-full object-contain bg-black rounded"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
