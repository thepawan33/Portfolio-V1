import Card from "../../Reusable/Card/Card";
import styles from "./Css/Education.module.css";
export default function Education() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Education & Certifications</h3>
      <Card
        head="Bachelor of Science (B.Sc.)"
        title="Vee Bahadur Singh Purvanchal University, UP"
        year="August 2020 - July 2023"
        description="I completed my Bachelor of Science (B.Sc.) at Vee Bahadur Singh Purvanchal University, where I developed a strong foundation in core scientific principles and analytical skills."
      />
      <br />
      <Card
        head="Class XII (Science with Math)"
        title="Shree Krishan Geeta National Inter College, UP"
        year="2020"
        description="I completed my higher secondary education in the Science stream with Mathematics at Shree Krishan Geeta National Inter College under the UP Board."
      />
      <br />
      <Card
        head="Full-Stack Web Development Certification"
        title="Apna College"
        year="2024"
        description="Gained practical experience in building full-stack applications using the MERN stack (MongoDB, Express.js, React, Node.js)."
      />
      <a
        className={styles.certificate}
        href="https://drive.google.com/file/d/1G4oN-IBPrC-cud8tWj_-mnc6XB6u7Xn4/view"
      >
        View Certificate <span className={styles.arrow}>&#8599;</span>
      </a>
      <br />
      <br />
      <br />
      <br />
      <a className={styles.resume}>
        View Full Résumé <span className={styles.arrow}>&#8599;</span>
      </a>
    </div>
  );
}
