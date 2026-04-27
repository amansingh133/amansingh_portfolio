import { motion } from "framer-motion";
import { HiEnvelope } from "react-icons/hi2";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { CONFIG } from "../data/config.js";

export default function ContactSection() {
  return (
    <section id="contact" style={{ position: "relative", overflow: "hidden" }}>
      <div
        className="orb orb-cyan"
        style={{
          width: 600,
          height: 600,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          opacity: 0.06,
        }}
      />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            padding: "80px 60px",
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: 28,
            backdropFilter: "blur(16px)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="grid-bg" style={{ opacity: 0.2 }} />
          <p className="section-label" style={{ display: "block" }}>
            Get In Touch
          </p>
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem,5vw,3.5rem)",
              marginBottom: 20,
              lineHeight: 1.1,
            }}
          >
            {CONFIG.contact.heading}
            <span className="gradient-text"> Together</span>
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1.05rem",
              maxWidth: 500,
              margin: "0 auto 40px",
              lineHeight: 1.8,
            }}
          >
            {CONFIG.contact.subheading}
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <motion.a
              href={`mailto:${CONFIG.personal.email}`}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary"
              style={{ fontSize: "1rem", padding: "14px 32px" }}
            >
              {CONFIG.contact.ctaLabel} <HiEnvelope size={16} />
            </motion.a>

            {CONFIG.social.linkedin && (
              <motion.a
                href={CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn btn-outline"
                style={{ fontSize: "1rem", padding: "14px 32px" }}
              >
                LinkedIn <HiArrowTopRightOnSquare size={14} />
              </motion.a>
            )}
            {CONFIG.social.whatsapp && (
              <motion.a
                href={CONFIG.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: "1rem",
                  padding: "14px 32px",
                  borderRadius: "var(--radius-md)",
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 600,
                  border: "1px solid rgba(37,211,102,0.4)",
                  color: "#25d366",
                  background: "rgba(37,211,102,0.08)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(37,211,102,0.15)";
                  e.currentTarget.style.boxShadow =
                    "0 0 24px rgba(37,211,102,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(37,211,102,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FaWhatsapp size={18} /> WhatsApp
              </motion.a>
            )}
          </div>

          <p
            style={{
              marginTop: 32,
              fontFamily: "'Fira Code',monospace",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
            }}
          >
            {CONFIG.personal.email}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
