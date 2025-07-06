import { useSelector } from "react-redux";

export default function Work() {
  const { thumbnails, shorts, longVideos } = useSelector((state) => state.work);

  return (
    <section id="work" className="px-4 py-8 bg-white text-black">
      <h2 className="text-4xl font-bold text-blue-600 mb-12 text-center whitespace-nowrap">
        My Works
      </h2>

      <h2 className="text-2xl font-semibold mb-4 text-black hover:scale-y-110">
        Thumbnails
      </h2>
      <div className="grid justify-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {thumbnails.map((thumb) => (
          <div
            key={thumb.id}
            className="rounded overflow-hidden border shadow transition duration-300 hover:shadow-lg hover:shadow-blue-500/50 mx-auto "
          >
            <img
              src={thumb.url}
              alt={thumb.id}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4 mt-30 text-black hover:scale-y-110">
        Video Editing
      </h2>
      <div className="p-5">
        {/* Long Videos */}
        <h3 className="font-semibold mb-2 text-blue-700 text-2xl">
          Long Form Videos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {longVideos.map((video) => (
            <div
              key={video.id}
              className="rounded overflow-hidden border mx-auto w-full"
            >
              <video
                src={video.url}
                controls
                autoPlay
                loop
                muted
                className="w-full h-[400px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <h3 className="mb-2 pb-10 text-blue-700 font-semibold text-2xl">
        Short Form Videos
      </h3>
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {shorts.map((short) => (
          <div key={short.id} className="w-full max-w-sm rounded">
            <div className="p-4 flex justify-center ">
              <video
                controls
                autoPlay
                loop
                muted
                src={short.url}
                className="w-full object-contain bg-black rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
