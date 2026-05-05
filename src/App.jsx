import { lazy, Suspense, useState, useEffect, useRef } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useTheme } from "./context/ThemeContext";

const ThreeBackground = lazy(() => import("./components/ThreeBackground"));
const Work = lazy(() => import("./components/Work"));

function DeferredWork() {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="work" style={{ scrollMarginTop: "80px" }} ref={sentinelRef}>
      {visible && (
        <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
          <Work />
        </Suspense>
      )}
    </div>
  );
}

function App() {
  const { isDark } = useTheme();
  const [bgReady, setBgReady] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setBgReady(true), { timeout: 4000 });
    } else {
      setTimeout(() => setBgReady(true), 2000);
    }
  }, []);

  return (
    <div className={isDark ? "dark" : ""}>
      {bgReady && (
        <Suspense fallback={null}>
          <ThreeBackground />
        </Suspense>
      )}
      <Header />
      <main>
        <Hero />
        <Education />
        <Experience />
        <DeferredWork />
        <Contact />
      </main>
    </div>
  );
}

export default App;
