import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONFIG } from "../data/config.js";

export default function Experience() {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" style={{ position: "relative" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 64 }}
        >
          <div className="accent-line" />
          <p className="section-label">Career</p>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            From intern to distributed systems engineer — the journey so far.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 48,
            alignItems: "start",
          }}
          className="exp-grid"
        >
          {/* Tab list */}
          <div style={{ position: "sticky", top: 100 }} className="exp-list">
            {CONFIG.experience.map((exp, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setExpanded(i)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  width: "100%",
                  textAlign: "left",
                  padding: "16px 20px",
                  border: `1px solid ${expanded === i ? "var(--border-accent)" : "transparent"}`,
                  background:
                    expanded === i ? "var(--accent-glow)" : "transparent",
                  marginBottom: 8,
                  transition: "all 0.2s",
                  cursor: "pointer",
                  borderLeft: `3px solid ${expanded === i ? "var(--accent)" : "var(--border)"}`,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: expanded === i ? "var(--accent)" : "var(--text)",
                    transition: "color 0.2s",
                  }}
                >
                  {exp.company}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontFamily: "'Fira Code',monospace",
                  }}
                >
                  {exp.period}
                </span>
                {exp.current && (
                  <span
                    style={{
                      marginTop: 4,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      fontSize: "0.65rem",
                      color: "var(--accent)",
                      fontFamily: "'Fira Code',monospace",
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        display: "inline-block",
                        animation: "pulse 2s infinite",
                      }}
                    />
                    current
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            {CONFIG.experience.map(
              (exp, i) =>
                expanded === i && (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div
                      style={{
                        padding: "32px",
                        background: "var(--card-bg)",
                        border: "1px solid var(--card-border)",
                        borderRadius: 20,
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          flexWrap: "wrap",
                          gap: 12,
                          marginBottom: 24,
                        }}
                      >
                        <div>
                          <h3
                            style={{
                              fontFamily: "'Syne',sans-serif",
                              fontSize: "1.3rem",
                              fontWeight: 800,
                              color: "var(--text)",
                              marginBottom: 4,
                            }}
                          >
                            {exp.role}
                          </h3>
                          <div
                            style={{
                              fontFamily: "'Fira Code',monospace",
                              fontSize: "0.82rem",
                              color: "var(--accent)",
                            }}
                          >
                            {exp.company} · {exp.location}
                          </div>
                        </div>
                        <span
                          style={{
                            padding: "6px 14px",
                            borderRadius: 999,
                            border: "1px solid var(--border-accent)",
                            background: "var(--accent-glow)",
                            fontFamily: "'Fira Code',monospace",
                            fontSize: "0.72rem",
                            color: "var(--accent)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>

                      <ul
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 12,
                          marginBottom: 24,
                        }}
                      >
                        {exp.bullets.map((b, bi) => (
                          <motion.li
                            key={bi}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: bi * 0.07 }}
                            style={{
                              display: "flex",
                              gap: 12,
                              alignItems: "flex-start",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--accent)",
                                marginTop: 6,
                                flexShrink: 0,
                                fontSize: "0.5rem",
                              }}
                            >
                              ◆
                            </span>
                            <span
                              style={{
                                color: "var(--text-muted)",
                                lineHeight: 1.75,
                                fontSize: "0.92rem",
                              }}
                            >
                              {b}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      <div
                        style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
                      >
                        {exp.tech.map((t) => (
                          <span key={t} className="tech-badge">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.5)} }
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .exp-list  { position: static !important; }
        }
      `}</style>
    </section>
  );
}
