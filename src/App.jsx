import { lazy, Suspense } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import { useTheme } from "./context/ThemeContext";

const ThreeBackground = lazy(() => import("./components/ThreeBackground"));

function App() {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? "dark" : ""}>
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>
      <Header />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
