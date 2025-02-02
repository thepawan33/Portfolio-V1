import { useEffect, useRef, useState, createContext } from "react";

import styles from "../Home/Home.module.css";
import FirstSection from "./FirstSection/FirstSection";
import About from "./SecondSection/About";
import Education from "./SecondSection/Education";
import Experience from "./SecondSection/Experience";
import Project from "./SecondSection/Project";

const GlobalStateContext = createContext();
export { GlobalStateContext };

export default function Home() {
  const about = useRef(null);
  const education = useRef(null);
  const project = useRef(null);
  const experience = useRef(null);

  let [isVisible, setVisible] = useState({
    about: false,
    education: false,
    project: false,
    experience: false,
  });

  useEffect(() => {
    let matchMedia = window.matchMedia("(min-width:960px)");

    let observer = new IntersectionObserver(
      ([entry]) => {
        setVisible((isVisible) => {
          return { ...isVisible, [entry.target.id]: entry.isIntersecting };
        });
      },
      { threshold: 0.5 }
    );
    const observeElements = () => {
      if (about.current) observer.observe(about.current);
      if (education.current) observer.observe(education.current);
      if (project.current) observer.observe(project.current);
      if (experience.current) observer.observe(experience.current);
    };

    if (matchMedia.matches) {
      observeElements();
    }

    function handleResize() {
      if (matchMedia.matches) {
        observeElements();
      } else {
        observer.disconnect();
      }
    }

    matchMedia.addEventListener("change", handleResize);

    return () => {
      observer.disconnect();
      matchMedia.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <GlobalStateContext.Provider value={{ isVisible }}>
          <FirstSection />
        </GlobalStateContext.Provider>
      </div>

      <div className={styles.second}>
        <div id="about" ref={about}>
          <About />
        </div>
        <div id="education" ref={education}>
          <Education />
        </div>

        <div id="project" ref={project}>
          <Project />
        </div>

        <div id="experience" ref={experience}>
          <Experience />
        </div>
      </div>
    </div>
  );
}
