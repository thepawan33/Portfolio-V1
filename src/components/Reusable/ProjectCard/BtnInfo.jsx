import styles from "./Css/BtnInfo.module.css";
export default function BtnInfo({ text }) {
  return <span className={styles.span}>{text}</span>;
}
