import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { HiArrowRight, HiArrowDown } from "react-icons/hi2";
import { CONFIG } from "../data/config.js";

const FLOAT_SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Redux",
  "HTML5",
  "CSS3",
  "Material UI",
  "Bootstrap",
  "Tailwind CSS",
  "Google Analytics",
  "React Native",
  "Offline-First Architecture",
  "Local Storage",
  "Navigation",
  "Node.js",
  "Express.js",
  "REST APIs",
  "JWT Authentication",
  "WebSockets (Socket.IO)",
  "RBAC",
  "MongoDB",
  "Mongoose",
  "MySQL",
  "Redis",
  "Apache Kafka",
  "Producers & Consumers",
  "Topic Partitioning",
  "Offset Management",
  "Gemini API",
  "Claude API",
  "OpenAI API",
  "AI-Powered Feature Integration",
  "Prompt Engineering",
  "Context-Aware Query Building",
  "AI-Assisted Development",
  "OWASP Top 10",
  "Input Validation",
  "Rate Limiting",
  "TLS Encryption",
  "CSP / HSTS Headers",
  "Google OAuth",
  "Agile",
  "Microservices",
  "Event-Driven Architecture",
  "Real-Time Systems",
  "Offline-First",
  "CRUD",
  "Pagination",
];

export default function Hero() {
  const navigate = useNavigate();

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 100,
      }}
    >
      <div className="grid-bg" />
      <div
        className="orb orb-cyan"
        style={{
          width: 500,
          height: 500,
          top: "-10%",
          right: "-5%",
          opacity: 0.12,
        }}
      />
      <div
        className="orb orb-purple"
        style={{
          width: 400,
          height: 400,
          bottom: "10%",
          left: "-8%",
          opacity: 0.12,
        }}
      />

      {FLOAT_SKILLS.map((sk, i) => (
        <motion.div
          key={sk}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
            transition: {
              delay: 3 + i * 0.15,
              duration: 1.5 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            position: "absolute",
            top: `${15 + ((i * 11) % 65)}%`,
            left: i % 2 === 0 ? `${75 + ((i * 4) % 15)}%` : undefined,
            right: i % 2 !== 0 ? `${2 + ((i * 3) % 10)}%` : undefined,
            pointerEvents: "none",
          }}
        >
          <span className="tech-badge" style={{ fontSize: "0.7rem" }}>
            {sk}
          </span>
        </motion.div>
      ))}

      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ maxWidth: 720 }}
        >
          {CONFIG.personal.availableForWork && (
            <motion.div variants={item} style={{ marginBottom: 28 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 16px",
                  borderRadius: 999,
                  border: "1px solid var(--border-accent)",
                  background: "var(--accent-glow)",
                  fontFamily: "'Fira Code',monospace",
                  fontSize: "0.75rem",
                  color: "var(--accent)",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    boxShadow: "0 0 8px var(--accent)",
                    animation: "pulse 2s infinite",
                    display: "inline-block",
                  }}
                />
                Open to work
              </span>
            </motion.div>
          )}

          <motion.h1
            variants={item}
            style={{
              fontSize: "clamp(2.4rem,6vw,4.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Hi, I'm{" "}
            <span className="gradient-text">{CONFIG.personal.name}</span>
          </motion.h1>

          <motion.div
            variants={item}
            style={{ marginBottom: 24, minHeight: "2rem" }}
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1800,
                "MERN Stack Engineer",
                1800,
                "React Native Builder",
                1800,
                "Real-Time Systems Dev",
                1800,
              ]}
              wrapper="span"
              speed={60}
              deletionSpeed={80}
              repeat={Infinity}
              style={{
                fontFamily: "'Fira Code',monospace",
                fontSize: "clamp(1rem,2.5vw,1.3rem)",
                color: "var(--accent)",
              }}
            />
          </motion.div>

          <motion.p
            variants={item}
            style={{
              fontSize: "1.05rem",
              color: "var(--text-muted)",
              lineHeight: 1.8,
              marginBottom: 40,
              maxWidth: 580,
            }}
          >
            {CONFIG.personal.tagline}
          </motion.p>

          <motion.div
            variants={item}
            style={{ display: "flex", flexWrap: "wrap", gap: 14 }}
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary"
              onClick={() => {
                navigate("/projects");
                window.scrollTo({ top: 0 });
              }}
            >
              View Projects <HiArrowRight size={16} />
            </motion.button>

            <motion.a
              href={`mailto:${CONFIG.personal.email}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-outline"
            >
              Get in Touch
            </motion.a>

            {CONFIG.personal.resumeLink && (
              <motion.a
                href={CONFIG.personal.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn btn-ghost"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                }}
              >
                Resume ↗
              </motion.a>
            )}
          </motion.div>

          <motion.div
            variants={item}
            style={{ display: "flex", gap: 12, marginTop: 36 }}
          >
            {CONFIG.social.github && (
              <a
                href={CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="GitHub"
              >
                <FaGithub size={20} />
              </a>
            )}
            {CONFIG.social.linkedin && (
              <a
                href={CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
            )}
            {CONFIG.social.twitter && (
              <a
                href={CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="Twitter / X"
              >
                <FaXTwitter size={20} />
              </a>
            )}
            {CONFIG.social.whatsapp && (
              <a
                href={CONFIG.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="WhatsApp"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#25d366";
                  e.currentTarget.style.background = "rgba(37,211,102,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <FaWhatsapp size={20} />
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          color: "var(--text-faint)",
        }}
      >
        <span
          style={{
            fontFamily: "'Fira Code',monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
          }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <HiArrowDown size={18} />
        </motion.div>
      </motion.button>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.5)} }
      `}</style>
    </section>
  );
}
