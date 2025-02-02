import styles from "./Css/About.module.css";
export default function About() {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>About</h3>
      <p className={styles.p}>
        Hi, I’m Pavan Singh, a highly motivated{" "}
        <b className={styles.b}>Full-Stack Web Developer</b> with expertise in
        modern web technologies, including the{" "}
        <b className={styles.b}> MERN stack</b> (MongoDB, Express.js, React,
        Node.js). My passion lies in building scalable, user-centric web
        applications that solve real-world problems.
      </p>
      <p className={styles.p}>
        I have a strong background in designing and developing robust
        applications, integrating modern tools and frameworks, and ensuring a
        seamless user experience. My portfolio showcases projects ranging from
        dynamic platforms to responsive interfaces, reflecting my commitment to
        clean code and innovation.
      </p>
      <p className={styles.p}>
        With a focus on continuous learning, I stay up-to-date with emerging
        trends and technologies in web development. I thrive in collaborative
        environments, leveraging my problem-solving abilities to deliver
        impactful solutions.
      </p>
      <p className={styles.p}>
        In my free time, I enjoy exploring new technologies, brainstorming
        creative ideas, and enhancing my skills to stay ahead in the
        fast-evolving tech landscape.
      </p>
    </div>
  );
}
