import styles from "./styles.module.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label-wrapper">
            <div className="section-line"></div>
            <span className="section-label">Biography</span>
          </div>
          <h2 className="section-title">
            What <span>I Do</span>
          </h2>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutMeta}>
            <div>
              <p className="label" style={{ marginBottom: "4px" }}>
                Based in
              </p>
              <p className={styles.metaValue}>Mumbai, India</p>
            </div>
            <div>
              <p className="label" style={{ marginBottom: "4px" }}>
                Status
              </p>
              <p className={styles.metaValue}>Open to opportunities</p>
            </div>
            <div>
              <p className="label" style={{ marginBottom: "4px" }}>
                Experience
              </p>
              <p className={styles.metaValue}>5+ Years</p>
            </div>
          </div>

          <div className={styles.aboutBio}>
            <p className={styles.bioText}>
              I&apos;m a Software Developer with a focus on building performant,
              accessible, and visually precise web experiences. At BookMyShow, I
              improved page load performance by 50% and led payment integration
              for Stripe, Razorpay, and 3DS authentication flows.
            </p>
            <p className={styles.bioText}>
              I care deeply about the details - from Core Web Vitals to Content
              Security Policies - and I believe great engineering is invisible
              to the user but felt in every interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
