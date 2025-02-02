import styles from "../ExperienceCard/ExperienceCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faAnglesUp } from "@fortawesome/free-solid-svg-icons";

export default function ExperienceCard({
  jobTitle,
  company,
  date,
  description,
}) {
  return (
    <div className={styles.container}>
      <input type="checkbox" id="checkbox" className={styles.checkbox} />
      <div className={styles.header}>
        <h4>{jobTitle}</h4>
        <p>{company}</p>
        <span className={styles.date}>{date}</span>
      </div>
      <p className={styles.description}>{description}</p>

      <p className={styles.feature}>
        As a Supply Chain Associate at LOTS Wholesale Solutions, I was
        responsible for managing inventory movements, processing Goods Receipt
        Notes (GRNs), and ensuring product quality by conducting checks on
        received goods, verifying expiration dates, and ensuring compliance with
        company standards. I categorized products into perishable and
        non-perishable items for efficient stock management, managed internal
        stock transfers (IST) between stores and warehouses, and collaborated
        with vendors and distribution centers to streamline receiving processes.
        Additionally, I maintained accurate records, identified opportunities
        for process improvements, and helped optimize the overall supply chain
        efficiency.
      </p>

      <label className={styles.view} htmlFor="checkbox">
        More &nbsp;
        <FontAwesomeIcon icon={faAnglesDown} />
      </label>
      <label className={styles.less} htmlFor="checkbox">
        Less &nbsp;
        <FontAwesomeIcon icon={faAnglesUp} />
      </label>
    </div>
  );
}
