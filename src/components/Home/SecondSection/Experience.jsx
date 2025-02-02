import ExperienceCard from "../../Reusable/ExperienceCard/ExperienceCard";
import styles from "./Css/Experience.module.css";
export default function Experience() {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Work Experience</h3>
      <ExperienceCard
        jobTitle="Supply Chain Associate"
        company="LOTS Wholesale Solutions"
        date="Jun 2023 – Jun 2024"
        description="Managed inventory movements, tracked goods, and ensured compliance with company standards in supply chain operations."
      />
      <br />
      <br />
      <p className={styles.p}>© 2024 Pavan Singh. All rights reserved.</p>
    </div>
  );
}
