import styles from "./styles.module.css";

const PROJECTS = [
  {
    category: "Performance",
    title: "Web Vitals Dashboard",
    desc: "Real-time Core Web Vitals monitoring dashboard built with Next.js and AWS. Tracks LCP, FID, and CLS across pages with alerting.",
    stack: ["Next.js", "AWS", "TypeScript"],
  },
  {
    category: "Payments",
    title: "Payment Gateway SDK",
    desc: "Unified payment SDK abstracting Stripe and Razorpay with built-in 3DS flow, webhook handling, and retry logic.",
    stack: ["React", "Node.js", "Stripe", "Razorpay"],
  },
  {
    category: "Frontend",
    title: "Ticket Booking Engine",
    desc: "High-throughput seat selection UI for live events. Handles concurrent sessions, real-time seat locking, and dynamic pricing.",
    stack: ["React", "Redux", "WebSockets"],
  },
  {
    category: "Tooling",
    title: "CSP Audit Tool",
    desc: "Developer tool that scans SPAs for Content Security Policy violations and generates a strict, compliant CSP header.",
    stack: ["Node.js", "TypeScript", "CLI"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">04</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className={styles.projectsGrid}>
          {PROJECTS.map((project) => (
            <div key={project.title} className={styles.projectCard}>
              <p className={styles.projectCategory}>{project.category}</p>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.desc}</p>
              <div className={styles.projectStack}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.projectTech}>{tech}</span>
                ))}
              </div>
              <span className={styles.projectArrow}>↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
