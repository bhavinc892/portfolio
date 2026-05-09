import Link from "next/link";
import styles from "./styles.module.css";

type Project = {
  category: string;
  title: string;
  desc: string;
  stack: string[];
  link?: string;
};

const PROJECTS: Project[] = [
  {
    category: "Payments",
    title: "Payment Gateway SDK",
    desc: "Unified payment SDK abstracting Stripe and Razorpay with built-in 3DS flow, webhook handling, and retry logic.",
    stack: ["React", "Node.js", "Stripe", "Razorpay"],
    link: "https://sg.bookmyshow.com",
  },
  {
    category: "Frontend",
    title: "Ticket Booking Engine",
    desc: "High-throughput seat selection UI for live events. Handles concurrent sessions, real-time seat locking, and dynamic pricing.",
    stack: ["React", "Redux", "WebSockets"],
    link: "https://sg.bookmyshow.com",
  },
  {
    category: "Components",
    title: "Autocomplete Search",
    desc: "Autocomplete search component with debounce, memoization, and keyboard navigation.",
    stack: ["React", "TypeScript"],
    link: "https://typeahead-search-component.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label-wrapper">
            <div className="section-line"></div>
            <span className="section-label">Portfolio</span>
          </div>
          <h2 className="section-title">
            Featured <span>Works</span>
          </h2>
        </div>
        <div className={styles.projectsGrid}>
          {PROJECTS.map((project) => {
            const cardContent = (
              <>
                <p className={styles.projectCategory}>{project.category}</p>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.desc}</p>
                <div className={styles.projectStack}>
                  {project.stack.map((tech) => (
                    <span key={tech} className={styles.projectTech}>
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <span
                    className={`${styles.projectArrow} ${styles.projectLiveLabel}`}
                  >
                    Live Demo ↗
                  </span>
                ) : (
                  <span className={styles.projectArrow}>↗</span>
                )}
              </>
            );

            return project.link ? (
              <Link
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.projectCard} ${styles.projectCardLinked}`}
              >
                {cardContent}
              </Link>
            ) : (
              <div key={project.title} className={styles.projectCard}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
