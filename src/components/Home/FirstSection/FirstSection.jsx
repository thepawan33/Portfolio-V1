import NameDet from "./NameDet";
import Link from "./Link";
import styles from "./Css/FirstSection.module.css";
export default function FirstSection({}) {
  return (
    <div className={styles.container}>
      <NameDet />
      <Link />
    </div>
  );
}
