import styles from "./styles.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div>
            <h1 className={styles.heroName}>BHAVIN<br /><span>CHAUHAN</span></h1>
            <div className={styles.heroRole}>
              <span className={styles.heroRoleText}>
                Software Developer specializing in<br />
                Performance, Payments &amp; Scalable Systems
              </span>
            </div>
          </div>
          <div>
            <p className={styles.heroBio}>
              I build high-performance web applications that handle real-world scale.
              Obsessed with Core Web Vitals, seamless payment flows, and systems
              that don&apos;t break when traffic spikes.
            </p>
            <div className={styles.heroActions}>
              <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>View Projects</a>
              <a href="#contact" className={`${styles.btn} ${styles.btnOutline}`}>Get in Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
