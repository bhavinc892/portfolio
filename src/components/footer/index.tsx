import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <span className={styles.footerCopy}>© 2026 Bhavin Chauhan</span>
        <span className={styles.footerCopy}>Software Developer</span>
      </div>
    </footer>
  );
}
