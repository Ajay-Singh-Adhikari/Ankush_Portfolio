import { FaLinkedin, FaInstagram , FaTelegram } from "react-icons/fa";  
import { FaXTwitter  } from "react-icons/fa6";  

export default function Hero() {
  return (
    <section
      className="flex flex-col justify-center items-center text-center px-4 py-12 min-h-screen"
      id="home"
    >
      <div className="relative w-40 h-40 sm:w-48 sm:h-48  transition duration-300 mb-6">
        <img
          src="images/Bhai.jpeg"
          alt="Ajay"
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold">
        Hi, It&apos;s <span className="text-blue-800">Ankush</span>
      </h1>
      <h2 className="text-lg sm:text-xl mt-2 text-blue-800">
        <span className="text-black">I&apos;m a </span> (Graphic Designer and
        Video Editor)
      </h2>
      <p className="max-w-xl mt-4 text-black text-sm sm:text-base px-2">
        I’m a <b>Thumbnail Designer and Video Editor</b> with{" "}
        <b>over 3 years of experience</b> specializing in creating visually
        impactful designs for the YouTube and digital content industry. I’m
        passionate about transforming ideas into high-quality thumbnails and
        engaging video edits that capture attention and drive audience
        engagement.
      </p>
      <div className="flex space-x-4 mt-6">
        <a
          href="https://www.linkedin.com/in/ankushadhikari"
          className="hover:text-black text-blue-800 border hover:border-black border-blue-800 rounded-full p-3 transition"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://twitter.com"
          className="hover:text-black text-blue-800 border hover:border-black border-blue-800 rounded-full p-3 transition"
        >
          <FaXTwitter  size={20} />
        </a>
        <a
          href="#"
          className="hover:text-black text-blue-800 border hover:border-black border-blue-800 rounded-full p-3 transition"
        >
          <FaInstagram  size={20} />
        </a>
        <a
          href="https://t.me/Ankush_Adhikari"
          className="hover:text-black text-blue-800 border hover:border-black border-blue-800 rounded-full p-3 transition"
        >
          <FaTelegram size={20} />
        </a>
      </div>
      <a href="#contact" className="mt-6 px-6 text-white py-2 bg-blue-800 hover:bg-black rounded-sm hover:rounded-lg transition font-bold">
        Hire Me
      </a>
    </section>
  );
}
