import { lazy, Suspense } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useTheme } from "./context/ThemeContext";

const ThreeBackground = lazy(() => import("./components/ThreeBackground"));
const Work = lazy(() => import("./components/Work"));

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
        <Suspense fallback={<div id="work" style={{ minHeight: "100vh" }} />}>
          <Work />
        </Suspense>
        <Contact />
      </main>
    </div>
  );
}

export default App;
