// ============================================================
//  PORTFOLIO CONFIG — Edit everything here. Touch nothing else.
//  All sections: personal info, skills, experience, projects,
//  education, certifications, and social links.
// ============================================================

export const CONFIG = {

  // ── PERSONAL ────────────────────────────────────────────────
  personal: {
    name: "Aman Singh",
    title: "Full Stack Web & Mobile Developer",
    tagline: "Building scalable apps from REST APIs to real-time systems.",
    email: "amansingh13394@gmail.com",
    phone: "+91-7982484338",
    location: "Rohini, Delhi, India",
    summary:
      "Full Stack Developer with 3+ years developing web and mobile applications using the MERN stack, React Native, and TypeScript — from REST API design to production deployment. Skilled in real-time systems (Socket.IO), Apache Kafka, Redis caching, and secure APIs (JWT, RBAC). A collaborative team player who communicates directly with clients and uses AI tools to ship faster.",
    availableForWork: true,           // shows/hides "Open to work" badge
    resumeLink: "/resume.pdf",        // path to resume PDF in /public folder (or external URL)
  },

  // ── SOCIAL / LINKS ──────────────────────────────────────────
  social: {
    github: "https://github.com/",           // your GitHub profile URL
    linkedin: "https://linkedin.com/in/aman-singh-xiii",
    twitter: "",                             // leave empty to hide
    website: "",                             // personal website, leave empty to hide
  },

  // ── NAVIGATION ──────────────────────────────────────────────
  // Sections shown in the navbar. 'path' uses hash (#) for same-page sections
  // or '/projects' for the projects page
  nav: [
    { label: "About",      path: "#about"      },
    { label: "Skills",     path: "#skills"     },
    { label: "Experience", path: "#experience" },
    { label: "Projects",   path: "/projects"   },
    { label: "Contact",    path: "#contact"    },
  ],

  // ── SKILLS ──────────────────────────────────────────────────
  skills: [
    {
      category: "Frontend",
      icon: "🖥️",
      items: ["React.js", "Next.js", "TypeScript", "Redux", "HTML5", "CSS3", "Material UI", "Bootstrap"],
    },
    {
      category: "Mobile",
      icon: "📱",
      items: ["React Native", "Offline-First Architecture", "Local Storage", "Navigation"],
    },
    {
      category: "Backend",
      icon: "⚙️",
      items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "WebSockets (Socket.IO)", "RBAC"],
    },
    {
      category: "Databases",
      icon: "🗄️",
      items: ["MongoDB", "Mongoose", "MySQL", "Redis"],
    },
    {
      category: "Messaging & Streaming",
      icon: "📨",
      items: ["Apache Kafka", "Producers & Consumers", "Topic Partitioning", "Offset Management"],
    },
    {
      category: "AI Tools",
      icon: "🤖",
      items: ["Gemini API", "Claude API", "OpenAI API", "Prompt Engineering", "Context-Aware Query Building"],
    },
    {
      category: "Security",
      icon: "🔐",
      items: ["OWASP Top 10", "Input Validation", "Rate Limiting", "TLS Encryption", "CSP / HSTS Headers"],
    },
    {
      category: "Concepts",
      icon: "💡",
      items: ["Agile", "Microservices", "Event-Driven Architecture", "Real-Time Systems", "Offline-First"],
    },
  ],

  // ── EXPERIENCE ──────────────────────────────────────────────
  experience: [
    {
      role: "Software Developer",
      company: "Laxmi Enterprises",
      period: "Sep 2025 – Present",
      location: "Delhi, India",
      current: true,
      bullets: [
        "Design and build scalable distributed backend systems using Node.js, Express.js, Apache Kafka, and Redis to process high-throughput data pipelines.",
        "Implement real-time bidirectional communication using WebSockets across 3+ services, enabling live dashboards and eliminating manual page-refresh cycles.",
        "Build responsive, component-based frontends with React.js integrated with secure REST APIs.",
        "Collaborate with cross-functional teams in an Agile workflow to translate business requirements into production-ready solutions.",
      ],
      tech: ["Node.js", "Kafka", "Redis", "React.js", "WebSockets"],
    },
    {
      role: "Freelance Full Stack Developer",
      company: "Independent",
      period: "Jun 2025 – Aug 2025",
      location: "Remote",
      current: false,
      bullets: [
        "Delivered end-to-end web and mobile applications for multiple clients using React.js, React Native, Next.js, Node.js, and Express.js.",
        "Created custom dashboards, automated reporting systems, and multi-step form workflows.",
        "Maintained direct client communication throughout the project lifecycle.",
      ],
      tech: ["React.js", "React Native", "Next.js", "Node.js", "Express.js"],
    },
    {
      role: "Software Developer",
      company: "Progressix",
      period: "Apr 2022 – Jun 2025",
      location: "Delhi, India",
      current: false,
      bullets: [
        "Architected and shipped multiple full-stack MERN applications with secure REST APIs protected by JWT authentication and RBAC.",
        "Built admin dashboards with advanced filtering, pagination, and Excel export; improved performance by integrating Redis caching, cutting API response times.",
        "Mentored junior developers through code reviews, promoting Agile best practices and consistent coding standards across the team.",
      ],
      tech: ["MERN Stack", "JWT", "RBAC", "Redis", "Excel Export"],
    },
    {
      role: "Software Developer Intern",
      company: "Progressix",
      period: "Apr 2021 – Mar 2022",
      location: "Delhi, India",
      current: false,
      bullets: [
        "Contributed to frontend development using React.js and integrated backend REST APIs across 5+ MERN stack projects.",
        "Accelerated delivery timelines through reusable component architecture.",
        "Debugged, tested, and documented features across the full stack.",
      ],
      tech: ["React.js", "REST APIs", "MERN Stack"],
    },
    {
      role: "Sr. Representative Operations",
      company: "Concentrix",
      period: "Sep 2017 – Mar 2021",
      location: "Delhi, India",
      current: false,
      bullets: [
        "Managed 80–90+ customer emails daily, consistently resolving issues within SLA deadlines.",
        "Maintained high CSAT scores through clear written communication, proactive follow-ups, and effective stakeholder management.",
      ],
      tech: ["Customer Ops", "SLA Management", "Stakeholder Communication"],
    },
  ],

  // ── PROJECTS ────────────────────────────────────────────────
  // featured: true  → appears on homepage featured section
  // category        → used for filter tabs on /projects page
  // liveUrl / githubUrl → leave "" to hide the button
  projects: [
    {
      id: "kafka-eats",
      title: "Kafka Eats",
      subtitle: "Real-Time Order Tracking System",
      description:
        "An event-driven order processing platform demonstrating Apache Kafka at scale with real-time updates.",
      bullets: [
        "Architected an event-driven order processing platform using Apache Kafka — producers, multiple consumer groups, and topic partitioning for horizontal scalability.",
        "Built a React.js real-time dashboard with Socket.IO live updates and Node.js / Express.js / MongoDB backend.",
        "Demonstrated message replay via Kafka offset management.",
      ],
      tech: ["Apache Kafka", "Node.js", "React.js", "MongoDB", "Socket.IO"],
      category: "Backend",
      featured: true,
      liveUrl: "",
      githubUrl: "",
      color: "#00e5ff",
    },
    {
      id: "ai-product-search",
      title: "AI-Powered Product Search",
      subtitle: "Intelligent Mobile Search",
      description:
        "React Native app replacing traditional keyword filtering with a Gemini AI-driven query layer.",
      bullets: [
        "Integrated the Gemini API into a React Native app to power intelligent product search, replacing traditional keyword filtering with an AI-driven query layer.",
        "Built dynamic prompt construction at runtime using user input and product data to generate accurate, inventory-aware search results.",
      ],
      tech: ["React Native", "Gemini API", "Prompt Engineering"],
      category: "Mobile",
      featured: true,
      liveUrl: "",
      githubUrl: "",
      color: "#a855f7",
    },
    {
      id: "owasp-app",
      title: "OWASP Secure Application",
      subtitle: "Hardened MERN with Full Compliance",
      description:
        "A hardened MERN application aligned with OWASP Top 10, built with multiple security layers.",
      bullets: [
        "Engineered a hardened MERN application aligned with OWASP Top 10 using JWT, RBAC, rate limiting, input validation, TLS encryption, and security headers (CSP, HSTS).",
        "Added centralized logging and monitoring for real-time threat detection across all API endpoints.",
      ],
      tech: ["MERN Stack", "JWT", "RBAC", "TLS", "OWASP"],
      category: "Backend",
      featured: true,
      liveUrl: "",
      githubUrl: "",
      color: "#f59e0b",
    },
    {
      id: "media-vault",
      title: "Media Vault",
      subtitle: "Offline-First React Native App",
      description:
        "A cross-platform React Native app with full media lifecycle management, fully functional offline.",
      bullets: [
        "Built a cross-platform React Native app with a full media lifecycle (upload, preview, edit, delete, metadata tagging) for images, audio, video, and text — fully functional offline-first with local device storage.",
        "Delivered a custom in-app audio player and seamless media playback without any third-party dependency.",
      ],
      tech: ["React Native", "Offline-First", "Local Storage"],
      category: "Mobile",
      featured: false,
      liveUrl: "",
      githubUrl: "",
      color: "#10b981",
    },
    {
      id: "user-admin-system",
      title: "User & Admin Submission System",
      subtitle: "3-Tier RBAC Form Platform",
      description:
        "Full-stack MERN form submission platform with location-based access control and approval workflows.",
      bullets: [
        "Built a full-stack MERN form submission platform with 3-tier RBAC (User, Admin, Super Admin) and location-based access control, restricting data visibility and actions by both role and geographic scope.",
        "Developed a Node.js / Express.js backend with secure APIs for form creation, editing, and approval workflows; admin dashboard includes real-time tracking, filtering, pagination, and Excel export.",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "RBAC"],
      category: "Full Stack",
      featured: false,
      liveUrl: "",
      githubUrl: "",
      color: "#ec4899",
    },
    {
      id: "flixxit",
      title: "Flixxit",
      subtitle: "OTT Streaming Platform",
      description:
        "A scalable OTT platform with secure authentication, subscription management, and custom video player.",
      bullets: [
        "Engineered a scalable OTT platform with secure authentication, subscription management, a custom video player, and optimized content delivery APIs.",
      ],
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      category: "Full Stack",
      featured: false,
      liveUrl: "",
      githubUrl: "",
      color: "#ef4444",
    },
    {
      id: "admin-panel",
      title: "Admin Panel System",
      subtitle: "Material UI Dashboard",
      description:
        "Responsive admin interface supporting CRUD, pagination, and role-based authentication.",
      bullets: [
        "Created a responsive admin interface with Material UI supporting CRUD operations, pagination, and role-based authentication.",
      ],
      tech: ["React.js", "Material UI", "RBAC"],
      category: "Frontend",
      featured: false,
      liveUrl: "",
      githubUrl: "",
      color: "#3b82f6",
    },
    {
      id: "education-apps",
      title: "Education & Testing Apps",
      subtitle: "CrackJEE, NEET, OMR & E-Learning",
      description:
        "Suite of exam prep and e-learning apps with OTP login, QR-based content delivery, and offline storage.",
      bullets: [
        "Built CrackJEE and NEET exam prep, OMR Test App, and E-Learning App with OTP login, QR-based content delivery, and offline storage.",
      ],
      tech: ["React Native", "REST APIs", "Offline Storage", "OTP Auth"],
      category: "Mobile",
      featured: false,
      liveUrl: "",
      githubUrl: "",
      color: "#06b6d4",
    },
    {
      id: "multiplayer-games",
      title: "Real-Time Multiplayer Games",
      subtitle: "Ludo & Rummy",
      description:
        "Multiplayer games with Socket.IO, bot logic, and auto-reconnection for uninterrupted gameplay.",
      bullets: [
        "Built multiplayer games using Socket.IO with game state management, bot logic, and auto-reconnection handling for uninterrupted real-time gameplay.",
      ],
      tech: ["React Native", "Express.js", "Socket.IO"],
      category: "Full Stack",
      featured: false,
      liveUrl: "",
      githubUrl: "",
      color: "#f97316",
    },
    {
      id: "college-network",
      title: "College Network Platform",
      subtitle: "Community Platform in Next.js",
      description:
        "A Next.js community platform with server-side rendering, secure authentication, and dynamic routing.",
      bullets: [
        "Built a Next.js community platform with server-side rendering, secure authentication, and dynamic routing.",
      ],
      tech: ["Next.js", "Authentication", "SSR"],
      category: "Frontend",
      featured: false,
      liveUrl: "",
      githubUrl: "",
      color: "#8b5cf6",
    },
  ],

  // ── EDUCATION ───────────────────────────────────────────────
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Vivekananda Institute of Professional Studies",
      university: "IP University",
      period: "",
      location: "Delhi, India",
    },
  ],

  // ── CERTIFICATIONS ──────────────────────────────────────────
  certifications: [
    {
      title: "Full Stack Development Bootcamp",
      issuer: "UpGrad",
      year: "",
      url: "",
    },
  ],

  // ── CONTACT SECTION ─────────────────────────────────────────
  contact: {
    heading: "Let's Build Something",
    subheading:
      "Open to full-time roles, freelance projects, and interesting collaborations.",
    ctaLabel: "Say Hello",
  },
};
