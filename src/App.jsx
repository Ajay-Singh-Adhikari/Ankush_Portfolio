import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import ThreeBackground from "./components/ThreeBackground";

function App() {
  return (
    <>
      <ThreeBackground />
      <Header />
      <Hero />
      <Education />
      <Experience />
      <Work />
      <Contact />
    </>
  );
}

export default App;
