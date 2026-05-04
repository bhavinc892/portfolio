export default function Home() {
  return (
    <>
      {/* ── NAVBAR ─────────────────────────────────────────────── */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <a href="/" className="navbar-logo">Bhavin Chauhan</a>
          <ul className="navbar-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* ── HERO ───────────────────────────────────────────────── */}
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              {/* Left — Name & Role */}
              <div>
                <h1 className="hero-name">Bhavin<br />Chauhan</h1>
                <div className="hero-role">
                  <span className="hero-role-line" />
                  <span className="hero-role-text">
                    Frontend Engineer specializing in<br />
                    Performance, Payments &amp; Scalable Systems
                  </span>
                </div>
              </div>

              {/* Right — Bio & CTAs */}
              <div>
                <p className="hero-bio">
                  I build high-performance web applications that handle real-world scale.
                  Obsessed with Core Web Vitals, seamless payment flows, and systems
                  that don&apos;t break when traffic spikes.
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="btn btn-primary">View Projects</a>
                  <a href="#contact" className="btn btn-outline">Get in Touch</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ──────────────────────────────────────────────── */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-number">01</span>
              <h2 className="section-title">About</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "48px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <p className="label" style={{ marginBottom: "4px" }}>Based in</p>
                  <p style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 500 }}>Mumbai, India</p>
                </div>
                <div>
                  <p className="label" style={{ marginBottom: "4px" }}>Status</p>
                  <p style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 500 }}>Open to opportunities</p>
                </div>
                <div>
                  <p className="label" style={{ marginBottom: "4px" }}>Experience</p>
                  <p style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 500 }}>3+ Years</p>
                </div>
              </div>

              <div style={{ maxWidth: "600px" }}>
                <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "20px" }}>
                  I&apos;m a Frontend Engineer with a focus on building performant, accessible,
                  and visually precise web experiences. At BookMyShow, I improved page load
                  performance by 50% and led payment integration for Stripe, Razorpay, and
                  3DS authentication flows.
                </p>
                <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: "1.8" }}>
                  I care deeply about the details — from Core Web Vitals to Content Security
                  Policies — and I believe great engineering is invisible to the user but
                  felt in every interaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SKILLS ─────────────────────────────────────────────── */}
        <section id="skills" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-number">02</span>
              <h2 className="section-title">Skills</h2>
            </div>

            <div className="skills-grid">
              <div>
                <p className="skill-group-label">Frontend</p>
                <div className="skill-tags">
                  {["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"].map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="skill-group-label">Performance</p>
                <div className="skill-tags">
                  {["Core Web Vitals", "Lazy Loading", "Code Splitting", "Lighthouse"].map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="skill-group-label">Payments</p>
                <div className="skill-tags">
                  {["Stripe", "Razorpay", "3DS Auth", "Webhooks"].map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="skill-group-label">Backend &amp; Cloud</p>
                <div className="skill-tags">
                  {["Node.js", "AWS", "REST APIs", "GraphQL"].map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ─────────────────────────────────────────── */}
        <section id="experience" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-number">03</span>
              <h2 className="section-title">Experience</h2>
            </div>

            <div>
              {/* BookMyShow */}
              <div className="experience-item">
                <div className="experience-meta">
                  <span className="experience-company">BookMyShow</span>
                  <span className="experience-duration">2022 — Present</span>
                </div>
                <div>
                  <p className="experience-role">Frontend Engineer</p>
                  <ul className="experience-bullets">
                    <li>Improved page load performance by 50% through lazy loading, code splitting, and optimizing Core Web Vitals.</li>
                    <li>Integrated Stripe, Razorpay and 3DS authentication payment flows handling millions in transactions.</li>
                    <li>Implemented Content Security Policy (CSP) and security hardening across the web platform.</li>
                    <li>Built scalable component architecture using React and Redux for ticket booking at peak scale.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ───────────────────────────────────────────── */}
        <section id="projects" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-number">04</span>
              <h2 className="section-title">Projects</h2>
            </div>

            <div className="projects-grid">
              {[
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
              ].map((project) => (
                <div key={project.title} className="project-card">
                  <p className="project-category">{project.category}</p>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="project-tech">{tech}</span>
                    ))}
                  </div>
                  <span className="project-arrow">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ────────────────────────────────────────────── */}
        <section id="contact" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-number">05</span>
              <h2 className="section-title">Contact</h2>
            </div>

            <div className="contact-inner">
              <div>
                <h3 className="contact-heading">Let&apos;s build<br />something great.</h3>
              </div>
              <div>
                <p className="contact-detail">Currently open to new opportunities.</p>
                <a href="mailto:bhavinc892@gmail.com" className="contact-email">
                  bhavinc892@gmail.com
                </a>
                <div className="social-links">
                  <a
                    href="https://github.com/bhavinc892"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-copy">© 2025 Bhavin Chauhan</span>
          <span className="footer-copy">Frontend Engineer</span>
        </div>
      </footer>
    </>
  );
}
