import Img from "./Img";
import styles from "./Css/ProjectCard.module.css";
import BtnInfo from "./BtnInfo";

export default function ProjectCard({ t, prjctLnk, imgLink, heading, title }) {
  return (
    <div
      className={styles.container}
      onClick={() => (window.location.href = prjctLnk)}
    >
      <div className={styles.img}>
        <Img link={imgLink} />
      </div>
      <div className={styles.info}>
        <div>
          <p className={styles.heading}>
            {heading} <span className={styles.arrow}>&#8599;</span>
          </p>
        </div>
        <span className={styles.span}>{title}</span>
        <div>
          {t.map((el, index) => {
            return (
              <span key={index}>
                &nbsp; <BtnInfo text={el} />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
