import {
  FaLinkedin,
  FaInstagram ,
  FaTelegram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FaXTwitter  } from "react-icons/fa6";  

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-black via-blue-900 to-black py-12 px-4 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-400">Contact Me</h2>
        <p className="text-gray-300 mb-8">
          I’d love to hear from you. Feel free to reach out for any project or
          just to say hello!
        </p>
        <div className="flex justify-center gap-4 mt-4 text-xl">
          {[
            {
              href: "https://www.linkedin.com/in/ankushadhikari",
              icon: <FaLinkedin />,
            },
            {
              href: "https://twitter.com",
              icon: <FaXTwitter  />,
            },
            {
              href: "https://instagram.com",
              icon: <FaInstagram  />,
            },
            {
              href: "https://t.me/Ankush_Adhikari",
              icon: <FaTelegram />,
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-black border p-2 rounded-full transition hover:border-black hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <h2 className="text-center text-2xl font-bold mt-6 mb-10">
        Connect me via Email or Phone
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        <div className="relative bg-transparent border border-gray-600 rounded-lg p-6 w-full md:w-1/2 flex flex-col items-start hover:border-blue-500 hover:scale-105 transition">
          <a href="mailto:ankushadhikari9282@gmail.com" className="absolute -top-5 left-6 bg-blue-900 border rounded-full p-3 hover:bg-blue-500 hover:text-white transition">
            <FaEnvelope size={20} />
          </a>
          <h3 className="text-xl font-semibold mt-6 mb-2">Email Address</h3>
          <p>ankushadhikari9282@gmail.com</p>
        </div>

        <div className="relative bg-transparent border border-gray-600 rounded-lg p-6 w-full md:w-1/2 flex flex-col items-start hover:border-blue-500 hover:scale-105 transition">
          <a href="tel:+919259239112"  className="absolute -top-5 left-6 bg-blue-900 border rounded-full p-3 hover:bg-blue-500 hover:text-white transition">
            <FaPhone size={20} />
          </a>
          <h3 className="text-xl font-semibold mt-6">Phone Number</h3>
          <p className="mt-2">+91 9259239112</p>
        </div>
      </div>
    </section>
  );
}