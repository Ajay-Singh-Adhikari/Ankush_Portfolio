import { useSelector } from "react-redux";

export default function Education() {
  const education = useSelector((state) => state.education.data);

  return (
    <section id="education" className="py-10 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-blue-600 mb-12 text-center whitespace-nowrap overflow-none">
        Education Details
      </h2>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* vertical line visible only on md+ */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-blue-500 z-0" />

        <div className="space-y-12 pl-0 md:pl-16 relative z-10 flex flex-col items-center md:items-start">
          {education.map((item) => (
            <div key={item.id} className="relative w-full">

              <div className="rounded-lg border-2 border-blue-500 shadow p-4 hover:scale-105 transition duration-300 ml-0 md:ml-8 w-full text-center md:text-left">
                <h3 className="text-xl font-semibold mb-1">{item.heading}</h3>
                <span className="text-gray-600 font-medium">{item.year}</span>
                <p className="mt-2 text-black text-sm">
                  I {item.school} {item.heading} from{" "}
                  <a
                    href={item.link}
                    className="underline hover:text-blue-500"
                  >
                    {item.school_name}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
