import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./Css/Link.module.css";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function Link() {
  return (
    <div className={styles.container}>
      <a
        href="https://www.linkedin.com/in/pavan-singh-44172b243"
        className={styles.a}
      >
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
      </a>
      <a href="https://github.com/thepawan33" className={styles.a}>
        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
      </a>
      <a href="https://www.instagram.com/pavansingh36" className={styles.a}>
        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
      </a>

      <a className={styles.a} href="mailto:thepawan33@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
      </a>
    </div>
  );
}
