import styles from "./styles.module.css";

const EXPERIENCE = [
  {
    company: "BookMyShow",
    duration: "Jan 2023 — Present",
    role: "Software Development Engineer",
    location: "Mumbai, India",
    bullets: [
      "Boosted image performance by 50% by building custom lazy-loading components with blurred placeholders and WebP conversion.",
      "Automated unit testing pipelines using Jenkins, cutting PR feedback time by 60% and integrating Slack & coverage badge reporting.",
      "Created an internal CLI to merge & visualize test reports across repos, enabling consistent reporting across monorepo/polyrepo setups.",
      "Integrated 5+ payment methods (CyberSource, Mandiri, QRIS, Razorpay, Stripe), owning the full stack including SDKs and refund flows.",
      "Implemented CSP across payment flows, ensuring PCI DSS compliance and reducing potential XSS attack vectors by 90%+.",
    ],
    tools: ["Next.js", "Jenkins", "Node.js", "Stripe", "Razorpay", "CSP"],
  },
  {
    company: "Quantiphi",
    duration: "Sept 2020 — Dec 2022",
    role: "Software Developer",
    location: "Mumbai, India",
    bullets: [
      "Created 8+ webhook services (Node.js RESTful APIs) for chatbots based on intents detected by Dialogflow (ES and CX).",
      "Developed a chatbot with business use cases for broadband and billing flows, integrating with 10 client APIs.",
      "Built a Terraform script generator tool, leading to a 75% reduction in manual effort for infrastructure provisioning.",
      "Implemented parsing logic and a chatbot widget for a Test Automation Framework with a 96% accuracy rate.",
    ],
    tools: ["Node.js", "Dialogflow", "Terraform", "REST APIs"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label-wrapper">
            <div className="section-line"></div>
            <span className="section-label">Experience</span>
          </div>
          <h2 className="section-title">Work & <span>Impact</span></h2>
        </div>
        <div className={styles.experienceGrid}>
          {EXPERIENCE.map((job) => (
            <div key={job.company} className={styles.experienceCard}>
              <div className={styles.cardHeader}>
                <span className={styles.jobDuration}>{job.duration}</span>
                <span className={styles.jobLocation}>{job.location}</span>
              </div>
              
              <div className={styles.cardBody}>
                <h3 className={styles.jobCompany}>{job.company}</h3>
                <p className={styles.jobRole}>{job.role}</p>
                
                <ul className={styles.jobBullets}>
                  {job.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.jobTools}>
                <span className={styles.toolsLabel}>TOOLS :</span>
                {job.tools.map((tool) => (
                  <span key={tool} className={styles.toolBadge}>
                    {tool}
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
