import styles from "./styles.module.css";

const SKILL_GROUPS = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    label: "Performance",
    skills: ["Core Web Vitals", "Lazy Loading", "Code Splitting", "Lighthouse"],
  },
  { label: "Payments", skills: ["Stripe", "Razorpay", "3DS Auth", "Webhooks"] },
  { label: "Backend & Cloud", skills: ["Node.js", "AWS", "REST APIs"] },
  { label: "Databases", skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label-wrapper">
            <div className="section-line"></div>
            <span className="section-label">Inventory</span>
          </div>
          <h2 className="section-title">
            Tech <span>Stack</span>
          </h2>
        </div>
        <div className={styles.skillsGrid}>
          {SKILL_GROUPS.map(({ label, skills }) => (
            <div key={label}>
              <p className={styles.skillGroupLabel}>{label}</p>
              <div className={styles.skillTags}>
                {skills.map((s) => (
                  <span key={s} className={styles.skillTag}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
