import { useSelector } from "react-redux";

export default function Experience() {
  const experience = useSelector((state) => state.experience.data);

  return (
    <section id="experience" className="py-10 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-blue-600 mb-12 text-center whitespace-nowrap">
        Experience Details
      </h2>
      <div className="flex gap-5 flex-wrap justify-center">
        {experience.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-md border-2 border-blue-500 rounded-lg shadow hover:shadow-lg transition p-4 hover:scale-105"
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
                  className="underline hover:text-red-700 transition"
                >
                  {item.company}
                </a>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
