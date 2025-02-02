import styles from "./Css/NameDet.module.css";
import Nav from "./Nav";
import { GlobalStateContext } from "../Home";
import { useContext } from "react";

export default function NameDet() {
  let { isVisible } = useContext(GlobalStateContext);

  return (
    <div className={styles.container}>
      <img className={styles.img} src="./assets/myimg-1.jpeg" alt="img" />

      <h1 className={styles.h1}>Pavan Singh</h1>
      <h2 className={styles.h2}>MERN Stack Developer</h2>
      <br />
      <p className={styles.p1}>
        Passionate about building dynamic and responsive web applications with
        the MERN stack.
      </p>
      <br />
      <Nav text={"ABOUT"} link={"/#about"} state={isVisible.about} />
      <Nav
        text={"EDUCATION"}
        link={"/#education"}
        state={isVisible.education}
      />
      <Nav text={"PROJECT"} link={"/#project"} state={isVisible.project} />
      <Nav
        text={"EXPERIENCE"}
        link={"/#experience"}
        state={isVisible.experience}
      />
    </div>
  );
}
