import { motion } from "framer-motion";
import { HiEnvelope, HiMapPin, HiArrowDownTray } from "react-icons/hi2";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { CONFIG } from "../data/config.js";

export default function About() {
  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "10+", label: "Projects Shipped" },
    { value: "5+", label: "Tech Stacks" },
    { value: "2", label: "Languages" },
  ];

  return (
    <section id="about" style={{ position: "relative", overflow: "hidden" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="accent-line" />
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Turning ideas into
              <br />
              <span className="gradient-text">production reality</span>
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.85,
                marginBottom: 24,
                fontSize: "1.02rem",
              }}
            >
              {CONFIG.personal.summary}
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginBottom: 32,
              }}
            >
              <InfoRow
                icon={<HiEnvelope size={16} />}
                label="Email"
                value={CONFIG.personal.email}
                href={`mailto:${CONFIG.personal.email}`}
              />
              <InfoRow
                icon={<HiMapPin size={16} />}
                label="Location"
                value={CONFIG.personal.location}
              />
              <InfoRow
                icon={<FaLinkedinIn size={14} />}
                label="LinkedIn"
                value="aman-singh-xiii"
                href={CONFIG.social.linkedin}
              />
              {CONFIG.social.whatsapp && (
                <InfoRow
                  icon={<FaWhatsapp size={15} />}
                  label="WhatsApp"
                  value={CONFIG.personal.phone}
                  href={CONFIG.social.whatsapp}
                  accent="#25d366"
                />
              )}
            </div>

            {CONFIG.personal.resumeLink && (
              <motion.a
                href={CONFIG.personal.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Download Resume <HiArrowDownTray size={15} />
              </motion.a>
            )}
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: 24 }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  style={{
                    padding: "24px 20px",
                    background: "var(--surface)",
                    border: "1px solid var(--card-border)",
                    borderRadius: 16,
                    textAlign: "center",
                    transition: "border-color 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border-accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "var(--card-border)")
                  }
                >
                  <div
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "var(--accent)",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      marginTop: 6,
                    }}
                  >
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {CONFIG.education.map((edu) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                style={{
                  padding: "20px 24px",
                  background: "var(--surface)",
                  border: "1px solid var(--card-border)",
                  borderRadius: 16,
                }}
              >
                <div
                  style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
                >
                  <span style={{ fontSize: "1.4rem" }}>🎓</span>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontFamily: "'Syne',sans-serif",
                        marginBottom: 2,
                      }}
                    >
                      {edu.degree}
                    </div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {edu.institution}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        marginTop: 2,
                      }}
                    >
                      {edu.university} · {edu.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {CONFIG.certifications.map((cert) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                style={{
                  padding: "20px 24px",
                  background: "var(--surface)",
                  border: "1px solid var(--card-border)",
                  borderRadius: 16,
                }}
              >
                <div
                  style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
                >
                  <span style={{ fontSize: "1.4rem" }}>🏅</span>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontFamily: "'Syne',sans-serif",
                        marginBottom: 2,
                      }}
                    >
                      {cert.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {cert.issuer}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}

function InfoRow({ icon, label, value, href, accent }) {
  const color = accent || "var(--accent)";
  const content = (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <span
        style={{ color, width: 24, display: "flex", justifyContent: "center" }}
      >
        {icon}
      </span>
      <span
        style={{
          fontSize: "0.78rem",
          color: "var(--text-muted)",
          width: 56,
          fontFamily: "'Fira Code',monospace",
        }}
      >
        {label}
      </span>
      <span
        style={{ fontSize: "0.88rem", color: href ? color : "var(--text)" }}
      >
        {value}
      </span>
    </div>
  );
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      {content}
    </a>
  ) : (
    content
  );
}
