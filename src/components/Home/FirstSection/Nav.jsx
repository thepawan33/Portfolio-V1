import styles from "./Css/Nav.module.css";
export default function Nav({ text, link, state }) {
  return (
    <div className={styles.container}>
      <a href={link} className={styles.main}>
        <span className={state ? styles.clickArrow : styles.arrow}>
          &#8594;
        </span>
        &nbsp; &nbsp;
        <span className={state ? styles.clickSpan : styles.span}>{text}</span>
      </a>
    </div>
  );
}
