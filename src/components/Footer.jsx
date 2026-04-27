import { useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";
import { CONFIG } from "../data/config.js";

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  const handleNav = (e, path) => {
    e.preventDefault();
    if (path.startsWith("#")) {
      navigate("/");
      setTimeout(
        () =>
          document.querySelector(path)?.scrollIntoView({ behavior: "smooth" }),
        300,
      );
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "48px 0 32px",
        background: "var(--bg)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 32,
            marginBottom: 40,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  background:
                    "linear-gradient(135deg,var(--accent),var(--accent2))",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Fira Code',monospace",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "#fff",
                }}
              >
                A
              </div>
              <span
                style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700 }}
              >
                {CONFIG.personal.name}
              </span>
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                maxWidth: 280,
                lineHeight: 1.7,
              }}
            >
              {CONFIG.personal.title}
            </p>
          </div>

          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            {/* Pages */}
            <div>
              <p
                style={{
                  fontFamily: "'Fira Code',monospace",
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Pages
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {CONFIG.nav.map((item) => (
                  <a
                    key={item.label}
                    href={item.path}
                    onClick={(e) => handleNav(e, item.path)}
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-muted)",
                      cursor: "pointer",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "var(--text-muted)")
                    }
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <p
                style={{
                  fontFamily: "'Fira Code',monospace",
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Connect
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {CONFIG.social.github && (
                  <SocialLink
                    href={CONFIG.social.github}
                    icon={<FaGithub size={14} />}
                    label="GitHub"
                  />
                )}
                {CONFIG.social.linkedin && (
                  <SocialLink
                    href={CONFIG.social.linkedin}
                    icon={<FaLinkedinIn size={14} />}
                    label="LinkedIn"
                  />
                )}
                {CONFIG.social.twitter && (
                  <SocialLink
                    href={CONFIG.social.twitter}
                    icon={<FaXTwitter size={14} />}
                    label="Twitter"
                  />
                )}
                {CONFIG.social.whatsapp && (
                  <SocialLink
                    href={CONFIG.social.whatsapp}
                    icon={<FaWhatsapp size={14} />}
                    label="WhatsApp"
                    accent="#25d366"
                  />
                )}
                <SocialLink
                  href={`mailto:${CONFIG.personal.email}`}
                  icon={<HiEnvelope size={14} />}
                  label="Email"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              fontFamily: "'Fira Code',monospace",
            }}
          >
            © {year} {CONFIG.personal.name} · Built with React + Vite
          </p>
          <p
            style={{
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              fontFamily: "'Fira Code',monospace",
            }}
          >
            {CONFIG.personal.location}
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label, accent }) {
  const hoverColor = accent || "var(--accent)";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontSize: "0.88rem",
        color: "var(--text-muted)",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
    >
      {icon} {label} ↗
    </a>
  );
}
