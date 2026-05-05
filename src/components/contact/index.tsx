import styles from "./styles.module.css";

/* ─── Icons ──────────────────────────────────────────────────────── */
function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label-wrapper">
            <div className="section-line"></div>
            <span className="section-label">Available for work</span>
          </div>
          <h2 className="section-title">
            Get In <span>Touch</span>
          </h2>
        </div>
        <div className={styles.contactInner}>
          <div>
            <h3 className={styles.contactHeading}>
              Let&apos;s build something great.
            </h3>
            <p className={styles.contactDetail} style={{ marginTop: "24px" }}>
              Currently open to new opportunities.
            </p>
            <a
              href="mailto:bhavinc892@gmail.com"
              className={styles.contactEmailLink}
            >
              <span className={styles.contactEmailText}>bhavinc892@gmail.com</span>
              <div className={styles.emailIconCircle}>
                <ArrowUpRightIcon />
              </div>
            </a>
          </div>

          <div className={styles.socialContainer}>
            <div className={styles.socialRow}>
              <a
                href="https://github.com/bhavinc892"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialItem}
              >
                <div className={styles.iconWrapper}>
                  <GithubIcon />
                </div>
                <span className={styles.socialName}>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/bhavinchauhan98/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialItem}
              >
                <div className={styles.iconWrapper}>
                  <LinkedInIcon />
                </div>
                <span className={styles.socialName}>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
