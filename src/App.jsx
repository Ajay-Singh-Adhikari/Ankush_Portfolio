import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import ThreeBackground from "./components/ThreeBackground";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? "dark" : ""}>
      {isDark && <ThreeBackground />}
      <Header />
      <Hero />
      <Education />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
