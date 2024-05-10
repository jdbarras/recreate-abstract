import AbstractLogo from "../Icons/AbstractLogo";
import styles from "./NavigationBar.module.scss";

const NavigationBar = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.heading}>
        <AbstractLogo />
        <span className={styles.title}>Help Center</span>
      </div>
      <div>
        <button className={styles['outline-button']}>Submit a request</button>
        <button className={styles['filled-button']}>Sign in</button>
      </div>
    </nav>
  );
};

export default NavigationBar;
