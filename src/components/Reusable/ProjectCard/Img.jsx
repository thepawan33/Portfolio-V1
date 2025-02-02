import styles from "./Css/Img.module.css";
export default function Img({ link }) {
  return (
    <>
      <img className={styles.img} src={link} alt="project image" />
    </>
  );
}
