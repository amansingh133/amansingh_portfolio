import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub } from "react-icons/fa6";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ height: "100%" }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareEnable={true}
        glareMaxOpacity={0.06}
        glareColor="var(--accent)"
        glarePosition="all"
        glareBorderRadius="20px"
        transitionSpeed={600}
        style={{ height: "100%" }}
      >
        <div
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: 20,
            padding: 28,
            backdropFilter: "blur(12px)",
            transition: "border-color 0.25s",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = "var(--border-accent)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = "var(--card-border)")
          }
        >
          {/* Accent corner glow */}
          <div
            style={{
              position: "absolute",
              top: -40,
              right: -40,
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: project.color || "var(--accent)",
              opacity: 0.07,
              filter: "blur(30px)",
              pointerEvents: "none",
            }}
          />

          {/* Category + color dot */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontFamily: "'Fira Code',monospace",
                fontSize: "0.68rem",
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {project.category}
            </span>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: project.color || "var(--accent)",
                boxShadow: `0 0 10px ${project.color || "var(--accent)"}`,
              }}
            />
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "1.15rem",
              fontWeight: 700,
              marginBottom: 4,
              color: "var(--text)",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: "0.78rem",
              color: project.color || "var(--accent)",
              fontFamily: "'Fira Code',monospace",
              marginBottom: 10,
            }}
          >
            {project.subtitle}
          </p>

          <p
            style={{
              fontSize: "0.88rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            {project.description}
          </p>

          {/* Bullets */}
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginBottom: 20,
              flex: 1,
            }}
          >
            {project.bullets.map((b, i) => (
              <li
                key={i}
                style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
              >
                <span
                  style={{
                    color: project.color || "var(--accent)",
                    marginTop: 6,
                    flexShrink: 0,
                    fontSize: "0.45rem",
                  }}
                >
                  ◆
                </span>
                <span
                  style={{
                    fontSize: "0.83rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {b}
                </span>
              </li>
            ))}
          </ul>

          {/* Tech badges */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              marginBottom: project.liveUrl || project.githubUrl ? 16 : 0,
            }}
          >
            {project.tech.map((t) => (
              <span
                key={t}
                className="tech-badge"
                style={{ fontSize: "0.65rem", padding: "3px 9px" }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          {(project.liveUrl || project.githubUrl) && (
            <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "7px 14px",
                    borderRadius: 8,
                    border: "1px solid var(--border)",
                    fontFamily: "'Fira Code',monospace",
                    fontSize: "0.72rem",
                    color: "var(--text-muted)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-accent)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  <FaGithub size={13} /> GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "7px 14px",
                    borderRadius: 8,
                    background: project.color || "var(--accent)",
                    color: "var(--bg)",
                    fontFamily: "'Fira Code',monospace",
                    fontSize: "0.72rem",
                    transition: "opacity 0.2s",
                    boxShadow: `0 0 16px ${project.color || "var(--accent)"}40`,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <HiArrowTopRightOnSquare size={13} /> Live
                </a>
              )}
            </div>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
}
