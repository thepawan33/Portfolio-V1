import ProjectCard from "../../Reusable/ProjectCard/ProjectCard";
import styles from "./Css/Project.module.css";
export default function Project() {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Project</h3>
      <ProjectCard
        t={["React", "Redux", "Node.js", " MongoDB", " Material-UI", " JWT"]}
        imgLink={"./assets/s-img.png"}
        prjctLnk={"https://ps-servicequery.onrender.com"}
        heading={"Service Query"}
        title={`A full-stack platform tailored for electricians, enabling customers to submit service requests while administrators manage and respond efficiently. Designed with a robust admin panel and secure authentication.`}
      />
      <br />
      <ProjectCard
        t={[
          "Node.js",
          " Express.js",
          " MongoDB",
          "JavaScript",
          "Bootstrap",
          "Cloudinary",
        ]}
        imgLink={"./assets/inv.png"}
        heading={"Invoice Generator"}
        prjctLnk={"https://invoice-genrator-project.onrender.com"}
        title={
          "A comprehensive web application for creating and managing invoices with multi-user functionality. Designed for businesses to efficiently handle customer data and billing operations."
        }
      />
      <br />
      <ProjectCard
        t={[
          "Node.js",
          " Express.js",
          " MongoDB",
          "JavaScript",
          "Bootstrap",
          "Cloudinary",
        ]}
        imgLink={"./assets/wonder.png"}
        heading={"Wanderlust"}
        prjctLnk={"https://wanderlust-project-0jm9.onrender.com/"}
        title={
          "A dynamic, Airbnb-inspired web application that allows users to explore, list, and manage accommodations. It combines intuitive design with robust backend support for seamless functionality."
        }
      />
      <br />
      <ProjectCard
        t={["HTML", "CSS"]}
        imgLink={"./assets/spotify.png"}
        heading={"Spotify Clone"}
        prjctLnk={"https://ps-spotifyclone.netlify.app"}
        title={
          "A visually appealing and responsive web interface mimicking Spotify's original design. Focused on replicating the user interface to demonstrate advanced front-end development skills."
        }
      />
      <br />
      <ProjectCard
        t={["HTML", "CSS", "JS"]}
        imgLink={"./assets/siman.png"}
        heading={"Spotify Clone"}
        prjctLnk={"https://ps-simongame.netlify.app"}
        title={
          "Developed a classic Simon game using HTML, CSS, and JavaScript to enhance memory and reflex skills."
        }
      />
    </div>
  );
}
