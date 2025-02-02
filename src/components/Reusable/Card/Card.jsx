import styles from "../Card/Card.module.css";
export default function Card({ head, title, year, description }) {
  return (
    <div>
      <h5 className={styles.h5}>{head}</h5>
      <p className={styles.title}>{title}</p>
      <p className={styles.year}>{year}</p>
      <p className={styles.desc}>{description}</p>
    </div>
  );
}
