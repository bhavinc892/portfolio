"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";

const BG_SYMBOLS = [
  "{ }", "=>", "async", "const", "[]", "()", "git", "npm", "docker", "api",
  "react", "node", "sql", "aws", "json", "ssh", "bash", "deploy", "build", "ci/cd",
  "master", "origin", "fetch", "push", "pull", "merge", "commit", "stash",
  "import", "export", "default", "await", "promise", "resolve", "reject",
  "try", "catch", "finally", "throw", "error", "debug", "log", "warn", "info"
];

interface Word {
  text: string;
  x: number;
  y: number;
  speed: number;
  opacity: number;
  vx: number;
  vy: number;
}

export default function Hero() {
  const [typedName, setTypedName] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [isInsideEditor, setIsInsideEditor] = useState(false);
  const fullName = "BHAVIN CHAUHAN";
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const iBeamRef = useRef<HTMLDivElement>(null);
  const words = useRef<Word[]>([]);
  const mouse = useRef({ x: -1000, y: -1000 });
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, i));
      i++;
      if (i > fullName.length) {
        clearInterval(interval);
        setIsFinished(true);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Initialize words only once on mount
  useEffect(() => {
    const initWords = () => {
      const count = 60;
      words.current = Array.from({ length: count }).map(() => ({
        text: BG_SYMBOLS[Math.floor(Math.random() * BG_SYMBOLS.length)],
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speed: Math.random() * 0.8 + 0.4,
        opacity: Math.random() * 0.15 + 0.05,
        vx: 0,
        vy: 0
      }));
    };
    initWords();
  }, []);

  // Initialize Falling Words Canvas & Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "14px monospace";
      ctx.textAlign = "center";

      words.current.forEach(w => {
        // Falling logic
        w.y += w.speed + w.vy;
        w.x += w.vx;

        // Friction for repulsion
        w.vx *= 0.95;
        w.vy *= 0.95;

        // Repel from mouse
        const dx = w.x - mouse.current.x;
        const dy = w.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const radius = 150;

        if (dist < radius && !isInsideEditor) {
          const force = (radius - dist) / radius;
          w.vx += (dx / dist) * force * 15;
          w.vy += (dy / dist) * force * 15;
        }

        // Constant subtle visibility
        w.opacity = 0.15; 

        // Reset if out of bounds
        if (w.y > canvas.height + 20) {
          w.y = -20;
          w.x = Math.random() * canvas.width;
        }
        if (w.x < -50) w.x = canvas.width + 50;
        if (w.x > canvas.width + 50) w.x = -50;

        ctx.fillStyle = `rgba(148, 163, 184, ${w.opacity})`;
        ctx.fillText(w.text, w.x, w.y);
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInsideEditor]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      
      if (iBeamRef.current) {
        iBeamRef.current.style.left = `${e.clientX}px`;
        iBeamRef.current.style.top = `${e.clientY}px`;
      }

      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        heroRef.current.style.setProperty("--mouse-x", `${x}%`);
        heroRef.current.style.setProperty("--mouse-y", `${y}%`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* Background Interactive Layer (Canvas Rain) */}
      <canvas ref={canvasRef} className={styles.rainCanvas} />

      {/* Custom I-Beam Cursor */}
      <div 
        className={`${styles.customIBeam} ${isInsideEditor ? styles.visible : ""}`} 
        ref={iBeamRef}
      ></div>

      <div className="container">
        <div 
          className={styles.editorWindow}
          onMouseEnter={() => setIsInsideEditor(true)}
          onMouseLeave={() => setIsInsideEditor(false)}
        >
          <div className={styles.titleBar}>
            <div className={styles.trafficLights}>
              <span className={styles.dotRed}></span>
              <span className={styles.dotYellow}></span>
              <span className={styles.dotGreen}></span>
            </div>
            <div className={styles.titleText}>BHAVIN CHAUHAN — portfolio.tsx</div>
          </div>

          <div className={styles.editorBody}>
            <div className={styles.sidebar}>
              <div className={styles.sidebarIcon}><div className={styles.activeBorder}></div>📁</div>
              <div className={styles.sidebarIcon}>🔍</div>
              <div className={styles.sidebarIcon}>🌿</div>
              <div className={styles.sidebarIcon}>🪲</div>
              <div className={styles.sidebarIcon}>🧩</div>
            </div>

            <div className={styles.editorMain}>
              <div className={styles.tabs}>
                <div className={styles.tabActive}><span className={styles.tabIcon}>TSX</span>portfolio.tsx</div>
              </div>

              <div className={styles.codeContent}>
                <div className={styles.lineNumbers}>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <div className={styles.codeLines}>
                  <div className={styles.codeLine}>
                    <span className={styles.keyword}>import</span>{" "}<span className={styles.variable}>Developer</span>{" "}<span className={styles.keyword}>from</span>{" "}<span className={styles.string}>&quot;@bhavin/core&quot;</span><span className={styles.plain}>;</span>
                  </div>
                  <div className={styles.codeLine}>&nbsp;</div>
                  <div className={styles.codeLine}>
                    <span className={styles.keyword}>const</span>{" "}<span className={styles.variable}>portfolio</span>{" "}<span className={styles.plain}>= </span><span className={styles.keyword}>new</span>{" "}<span className={styles.variable}>Developer</span><span className={styles.plain}>( &#123;</span>
                  </div>
                  <div className={`${styles.codeLine} ${styles.indent1}`}>
                    <span className={styles.property}>name</span><span className={styles.plain}>:</span>{" "}<span className={styles.string}>&quot;<span className={isFinished ? styles.nameHighlight : ""}>{typedName}{!isFinished && <span className={styles.cursor}></span>}</span>&quot;</span><span className={styles.plain}>,</span>
                  </div>
                  <div className={`${styles.codeLine} ${styles.indent1}`}>
                    <span className={styles.property}>role</span><span className={styles.plain}>:</span>{" "}<span className={styles.string}>&quot;Software Developer&quot;</span><span className={styles.plain}>,</span>
                  </div>
                  <div className={`${styles.codeLine} ${styles.indent1}`}>
                    <span className={styles.property}>focus</span><span className={styles.plain}>:</span>{" "}<span className={styles.plain}>[</span><span className={styles.string}>&quot;Performance&quot;</span><span className={styles.plain}>,</span>{" "}<span className={styles.string}>&quot;Payments&quot;</span><span className={styles.plain}>]</span><span className={styles.plain}>,</span>
                  </div>
                  <div className={styles.codeLine}><span className={styles.plain}>&#125;);</span></div>
                  <div className={styles.codeLine}>&nbsp;</div>
                  <div className={styles.codeLine}>
                    <span className={styles.variable}>portfolio</span><span className={styles.plain}>.</span><span className={styles.function}>render</span><span className={styles.plain}>();</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.statusBar}>
            <div className={styles.statusSection}><span>master*</span><span>0 ⚠ 0 ⓧ</span></div>
            <div className={styles.statusSection}><span>UTF-8</span><span>TypeScript JSX</span></div>
          </div>
        </div>

        <div className={styles.heroFooter}>
          <div className={styles.heroBio}>
            I build high-performance web applications that handle real-world scale. Obsessed with Core Web Vitals, seamless payment flows, and systems that don&apos;t break when traffic spikes.
          </div>
          <div className={styles.heroActions}>
            <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>View Projects</a>
            <a href="#contact" className={`${styles.btn} ${styles.btnOutline}`}>Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}
