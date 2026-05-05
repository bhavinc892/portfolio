import styles from "./styles.module.css";

const EXPERIENCE = [
  {
    company: "BookMyShow",
    duration: "2022 - Present",
    role: "Software Developer",
    bullets: [
      "Improved page load performance by 50% through lazy loading, code splitting, and optimizing Core Web Vitals.",
      "Integrated Stripe, Razorpay and 3DS authentication payment flows handling millions in transactions.",
      "Implemented Content Security Policy (CSP) and security hardening across the web platform.",
      "Built scalable component architecture using React and Redux for ticket booking at peak scale.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">Experience</h2>
        </div>
        <div>
          {EXPERIENCE.map((job) => (
            <div key={job.company} className={styles.experienceItem}>
              <div className={styles.experienceMeta}>
                <span className={styles.experienceCompany}>{job.company}</span>
                <span className={styles.experienceDuration}>{job.duration}</span>
              </div>
              <div>
                <p className={styles.experienceRole}>{job.role}</p>
                <ul className={styles.experienceBullets}>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
