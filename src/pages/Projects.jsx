import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMagnifyingGlass, HiSquares2X2, HiBars3 } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { CONFIG } from "../data/config.js";
import ProjectCard from "../components/ProjectCard.jsx";
import useIsMobile from "../hooks/useIsMobile.js";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.25 } },
};

const ALL = "All";

export default function Projects() {
  const categories = useMemo(() => {
    return [ALL, ...new Set(CONFIG.projects.map((p) => p.category))];
  }, []);

  const [activeFilter, setActiveFilter] = useState(ALL);
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return CONFIG.projects.filter((p) => {
      const matchCat = activeFilter === ALL || p.category === activeFilter;
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [activeFilter, search]);

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Banner */}
      <section
        style={{
          paddingTop: 130,
          paddingBottom: 80,
          background: "var(--bg-alt)",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="grid-bg" style={{ opacity: 0.3 }} />
        <div
          className="orb orb-cyan"
          style={{
            width: 500,
            height: 500,
            top: "-40%",
            right: "-5%",
            opacity: 0.1,
          }}
        />
        <div
          className="orb orb-purple"
          style={{
            width: 400,
            height: 400,
            bottom: "-40%",
            left: "-5%",
            opacity: 0.1,
          }}
        />
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label">Portfolio</p>
            <h1
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem,6vw,4rem)",
                marginBottom: 16,
                lineHeight: 1.05,
              }}
            >
              All <span className="gradient-text">Projects</span>
            </h1>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "1.05rem",
                maxWidth: 520,
                lineHeight: 1.8,
              }}
            >
              {CONFIG.projects.length} projects spanning full-stack, mobile,
              real-time systems, and AI integrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Controls */}
      <section style={{ paddingTop: 48, paddingBottom: 0 }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 24,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {/* Search */}
            <div style={{ position: "relative", flex: 1, minWidth: 220 }}>
              <HiMagnifyingGlass
                size={16}
                style={{
                  position: "absolute",
                  left: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--text-faint)",
                }}
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or tech…"
                style={{
                  width: "100%",
                  padding: "10px 14px 10px 42px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  color: "var(--text)",
                  fontSize: "0.9rem",
                  fontFamily: "'DM Sans',sans-serif",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "var(--border-accent)")
                }
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>

            {/* View toggle */}
            <div
              style={{
                display: "flex",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: 4,
              }}
            >
              {[
                { id: "grid", icon: <HiSquares2X2 size={16} /> },
                { id: "list", icon: <HiBars3 size={16} /> },
              ].map((v) => (
                <button
                  key={v.id}
                  onClick={() => setView(v.id)}
                  style={{
                    padding: "7px 12px",
                    borderRadius: 7,
                    cursor: "pointer",
                    background:
                      view === v.id ? "var(--accent-glow)" : "transparent",
                    color:
                      view === v.id ? "var(--accent)" : "var(--text-muted)",
                    border:
                      view === v.id
                        ? "1px solid var(--border-accent)"
                        : "1px solid transparent",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {v.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Filter tabs */}
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              marginBottom: 48,
            }}
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "8px 18px",
                  borderRadius: 999,
                  cursor: "pointer",
                  border: `1px solid ${activeFilter === cat ? "var(--border-accent)" : "var(--border)"}`,
                  background:
                    activeFilter === cat
                      ? "var(--accent-glow)"
                      : "var(--surface)",
                  color:
                    activeFilter === cat
                      ? "var(--accent)"
                      : "var(--text-muted)",
                  fontFamily: "'Fira Code',monospace",
                  fontSize: "0.75rem",
                  transition: "all 0.2s",
                  boxShadow:
                    activeFilter === cat ? "var(--shadow-accent)" : "none",
                }}
              >
                {cat}
                <span
                  style={{
                    marginLeft: 6,
                    padding: "1px 6px",
                    borderRadius: 999,
                    background:
                      activeFilter === cat
                        ? "var(--accent)"
                        : "var(--surface-hover)",
                    color:
                      activeFilter === cat ? "var(--bg)" : "var(--text-faint)",
                    fontSize: "0.65rem",
                  }}
                >
                  {cat === ALL
                    ? CONFIG.projects.length
                    : CONFIG.projects.filter((p) => p.category === cat).length}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid / List */}
      <section style={{ paddingTop: 0, paddingBottom: 100 }}>
        <div className="container">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  textAlign: "center",
                  padding: "80px 0",
                  color: "var(--text-muted)",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>🔍</div>
                <p style={{ fontFamily: "'Fira Code',monospace" }}>
                  No projects found for "{search}"
                </p>
              </motion.div>
            ) : view === "grid" ? (
              <motion.div
                key={`grid-${activeFilter}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
                  gap: 24,
                  alignItems: "start",
                }}
              >
                {filtered.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      delay: i * 0.06,
                    }}
                  >
                    <ProjectCard project={project} index={i} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={`list-${activeFilter}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                {filtered.map((project, i) => (
                  <ListRow key={project.id} project={project} index={i} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {filtered.length > 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                textAlign: "center",
                marginTop: 48,
                fontFamily: "'Fira Code',monospace",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
              }}
            >
              Showing {filtered.length} of {CONFIG.projects.length} projects
            </motion.p>
          )}
        </div>
      </section>
    </motion.main>
  );
}

function ListRow({ project, index }) {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderRadius: 16,
        overflow: "hidden",
        backdropFilter: "blur(12px)",
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "var(--border-accent)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "var(--card-border)")
      }
    >
      {isMobile ? (
        /* ── Mobile header: dot · text block · arrow ── */
        <div
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "flex",
            alignItems: "flex-start" /* all items pin to top */,
            gap: 12,
            padding: "20px 24px",
            cursor: "pointer",
          }}
        >
          {/* Color dot — offset slightly so it sits next to the first text line */}
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              flexShrink: 0,
              marginTop: 6,
              background: project.color || "var(--accent)",
              boxShadow: `0 0 10px ${project.color || "var(--accent)"}`,
            }}
          />

          {/* Title + subtitle + tech badges */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                marginBottom: 2,
                lineHeight: 1.35,
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                fontFamily: "'Fira Code',monospace",
                marginBottom: 10,
                lineHeight: 1.5,
              }}
            >
              {project.subtitle}
            </p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="tech-badge"
                  style={{ fontSize: "0.65rem" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Arrow — own flex item, always top-right, never pushed out */}
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ flexShrink: 0, marginTop: 3 }}
          >
            <HiChevronDown size={18} style={{ color: "var(--text-muted)" }} />
          </motion.div>
        </div>
      ) : (
        /* ── Desktop header: unchanged ── */
        <div
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 24px",
            cursor: "pointer",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                minWidth: 0,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: project.color || "var(--accent)",
                  boxShadow: `0 0 10px ${project.color || "var(--accent)"}`,
                }}
              />
              <div style={{ minWidth: 0 }}>
                <h3
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: 2,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                    fontFamily: "'Fira Code',monospace",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {project.subtitle}
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexWrap: "nowrap",
            }}
          >
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="tech-badge"
                  style={{ fontSize: "0.65rem" }}
                >
                  {t}
                </span>
              ))}
            </div>
            <motion.div
              style={{ marginLeft: "auto" }}
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <HiChevronDown size={16} style={{ color: "var(--text-muted)" }} />
            </motion.div>
          </div>
        </div>
      )}

      {/* Expanded detail — same for both */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "0 24px 24px",
                borderTop: "1px solid var(--border)",
              }}
            >
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  margin: "16px 0",
                  fontSize: "0.9rem",
                }}
              >
                {project.description}
              </p>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginBottom: 20,
                }}
              >
                {project.bullets.map((b, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                    }}
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
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.65,
                      }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
              {(project.liveUrl || project.githubUrl) && (
                <div style={{ display: "flex", gap: 10 }}>
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
                        e.currentTarget.style.borderColor =
                          "var(--border-accent)";
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
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.opacity = "0.85")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.opacity = "1")
                      }
                    >
                      <HiArrowTopRightOnSquare size={13} /> Live
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
