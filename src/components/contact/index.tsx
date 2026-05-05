import styles from "./styles.module.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">05</span>
          <h2 className="section-title">Contact</h2>
        </div>
        <div className={styles.contactInner}>
          <div>
            <h3 className={styles.contactHeading}>Let&apos;s build<br />something great.</h3>
          </div>
          <div>
            <p className={styles.contactDetail}>Currently open to new opportunities.</p>
            <a href="mailto:bhavinc892@gmail.com" className={styles.contactEmail}>
              bhavinc892@gmail.com
            </a>
            <div className={styles.socialLinks}>
              <a href="https://github.com/bhavinc892" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
