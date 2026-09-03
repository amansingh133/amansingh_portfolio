// ============================================================
//  PORTFOLIO CONFIG — Edit everything here. Touch nothing else.
//  All sections: personal info, skills, experience, projects,
//  education, certifications, and social links.
// ============================================================

export const CONFIG = {
  // ── PERSONAL ────────────────────────────────────────────────
  personal: {
    name: "Aman Singh",
    title: "Full Stack Developer | MERN | React Native | AI/RAG Systems",
    tagline: "Building scalable apps from REST APIs to real-time systems.",
    email: "amansingh13394@gmail.com",
    phone: "+91-8130914228",
    location: "Rohini, Delhi, India",
    summary:
      "Full Stack Developer with 3+ years building web and mobile products end to end, mostly in Node.js, React, and React Native. Builds RAGpipelines with LangChain.js and vector search, runs Kafka-backed services, and handles deployment on a self-hosted Linux VPS with Dockerand CI/CD. Comfortable owning a feature from database schema to shipped UI.",
    availableForWork: true, // shows/hides "Open to work" badge
    resumeLink: "./resume.pdf", // path to resume PDF in /public folder (or external URL)
  },

  // ── SOCIAL / LINKS ──────────────────────────────────────────
  social: {
    github: "https://github.com/amansingh133", // your GitHub profile URL
    linkedin: "https://linkedin.com/in/aman-singh-xiii",
    twitter: "", // leave empty to hide
    website: "", // personal website, leave empty to hide
    whatsapp:
      "https://wa.me/918130914228?text=Hi%20Aman%2C%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect!",
  },

  // ── NAVIGATION ──────────────────────────────────────────────
  // Sections shown in the navbar. 'path' uses hash (#) for same-page sections
  // or '/projects' for the projects page
  nav: [
    { label: "About", path: "#about" },
    { label: "Skills", path: "#skills" },
    { label: "Experience", path: "#experience" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "#contact" },
  ],

  // ── SKILLS ──────────────────────────────────────────────────
  skills: [
    {
      category: "Frontend & Mobile",
      icon: "🖥️",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Redux",
        "React Native",
        "Tailwind CSS",
        "Material UI",
        "HTML5",
        "CSS3",
      ],
    },

    {
      category: "Backend & Messaging",
      icon: "⚙️",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "WebSockets (Socket.IO)",
        "Apache Kafka",
        "Microservices",
      ],
    },
    {
      category: "Databases & Caching",
      icon: "🗄️",
      items: ["MongoDB", "Mongoose ODM", "MySQL", "Redis"],
    },

    {
      category: "AI & RAG",
      icon: "🧠",
      items: [
        "LangChain.js",
        "MongoDB Atlas Vector",
        "ChromaDB",
        "Semantic Search",
        "Prompt Engineering",
        "LLM APIs (Gemini, Claude)",
      ],
    },
    {
      category: "DevOps & Security",
      icon: "🔐",
      items: [
        "Docker",
        "Linux VPS",
        "CI/CD",
        "Coolify",
        "Nginx",
        "Git",
        "GitHub",
        "Postman",
        "OWASP Top 10",
        "JWT",
        "RBAC",
        "Rate Limiting",
        "TLS",
      ],
    },
    {
      category: "APIs & Methods",
      icon: "🔌",
      items: [
        "Meta Graph API",
        "Firebase Admin SDK (FCM)",
        "Google OAuth",
        "Geocoding API",
        "Agile/Scrum",
        "Offline-⁠First Design",
      ],
    },
  ],

  // ── EXPERIENCE ──────────────────────────────────────────────
  experience: [
    {
      role: "Software Developer",
      company: "Laxmi Enterprises",
      period: "Sep 2025 – Present",
      location: "Hybrid",
      current: true,
      bullets: [
        "Built distributed Node.js services on Kafka and Redis across 3+ microservices.",
        "Implemented real-⁠time Socket.IO channels for live dashboard updates, replacing client polling with push delivery.",
        "Self-⁠host production services on a Linux VPS with Docker, Coolify, git-⁠push CI/CD, and automated redeploys.",
        "Built React.js and Redux frontends with memoized selectors and virtualized rendering for large data grids.",
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
      period: "July 2023 – Jun 2025",
      location: "Remote",
      current: false,
      bullets: [
        "Delivered 4+ enterprise MERN applications with JWT and RBAC security serving 15,000+ users.",
        "Cut API response times by 35% via Redis caching and server-⁠side pagination on high-⁠traffic dashboards.",
        "Built a reusable React.js and Express.js component library adopted across 4+ internal systems.",
      ],
      tech: ["MERN Stack", "JWT", "RBAC", "Redis", "Excel Export"],
    },

    {
      role: "Customer Operations Executive",
      company: "Concentrix",
      period: "Apr 2021 – June 2023",
      // location: "Delhi, India",
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
      id: "rag-powered-document-intelligence-ai-search",
      title: "RAG-Powered Document Intelligence & AI Search",
      subtitle: "RAG System with AI powered search",
      description:
        "Retrieval-Augmented Generation (RAG) system over user documents (PDF, DOCX, CSV) with source cited, hallucination-resistant responses.",
      bullets: [
        "Developed an AI-driven text processing workflow using LangChain.js, chunking documents and creating embeddings that improved data searchability by 40% for end-users.",
        "Integrated the Gemini API for AI-driven semantic product search, replacing static filters with adaptive, context-aware query generation.",
      ],
      tech: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "React.js",
        "LangChain.js",
        "Google Gemini API",
        "MongoDB Atlas Vector Search",
        "MySQL",
      ],
      category: "Full Stack",
      featured: true,
      liveUrl: "http://rag-app.169.58.104.255.sslip.io/",
      githubUrl: "https://github.com/amansingh133/rag-system",
      color: "#a855f7",
    },
    {
      id: "lead-management-crm",
      title: "Lead Management CRM",
      subtitle: "CRM to fetch and manage Leads",
      description:
        "Backend for a CRM to fetch leads automatically and manage leads with their status.",
      bullets: [
        "Unified manual entry and Facebook/Instagram Lead Ads into one role-⁠scoped CRM with cron-⁠driven FCM reminders.",
        "Ingested Instant Form leads via Facebook OAuth and HMAC-⁠verified webhooks, with deduplication and ad-⁠level attribution.",
        "Secured the API to OWASP Top 10 with JWT/OTP auth, RBAC, rate limiting, and AES-⁠256 encryption of Meta tokens.",
      ],
      tech: ["MERN", "Redux", "Meta Graph API", "Firebase FCM", "JWT", "RBAC"],
      category: "Full Stack",
      featured: true,
      liveUrl: "http://crm.169.58.104.255.sslip.io/",
      githubUrl: "https://github.com/aman-projects-133/lead-aggregator",
      color: "#a855f7",
    },

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
      featured: false,
      liveUrl: "",
      githubUrl: "https://github.com/amansingh133/kafka-order",
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
      featured: false,
      liveUrl: "",
      githubUrl: "https://github.com/amansingh133/ai-product-advisor",
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
      featured: false,
      liveUrl: "https://owasp-compliance-demo.onrender.com/",
      githubUrl: "https://github.com/amansingh133/owasp-demo",
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
      githubUrl: "https://github.com/amansingh133/media-app",
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
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "RBAC", "LBAC"],
      category: "Full Stack",
      featured: false,
      liveUrl: "",
      githubUrl: "https://github.com/amansingh133/form-submission-rbac-lbac-fs",
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
      liveUrl: "https://flixxit-40rb.onrender.com",
      githubUrl: "https://github.com/amansingh133/flixxit",
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
      liveUrl: "https://admin.collegenetwork.in/",
      githubUrl: "https://gitlab.com/collage1692341/collage",
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
      githubUrl: "https://github.com/amansingh133/ludo_online_multiplayer",
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
      liveUrl: "https://collegenetwork.in/",
      githubUrl: "https://gitlab.com/collage1692341/collegenetwork-frontend",
      color: "#8b5cf6",
    },
    {
      id: "boost-my-resume",
      title: "Boost My Resume",
      subtitle: "Resume Upload & Management Platform",
      description:
        "A Next.js platform for uploading, managing, and browsing resumes with Google Authentication and analytics tracking.",
      bullets: [
        "Built resume upload flow supporting PDF and Word formats with client-side file type and size validation.",
        "Integrated Google OAuth for secure authentication and Google Analytics for tracking user interactions.",
        "Implemented paginated, searchable resume listing with real-time search filtering.",
      ],
      tech: [
        "Next.js",
        "Google OAuth",
        "Google Analytics",
        "File Upload & Validation",
        "Pagination",
      ],
      category: "Frontend",
      featured: false,
      liveUrl: "https://boostmyresume.in/",
      githubUrl: "https://github.com/amansingh133/boostMyResume",
      color: "#4285f4",
    },
    {
      id: "jaivic-wellness",
      title: "Jaivic Wellness",
      subtitle: "Media Upload & Wellness Platform",
      description:
        "A Next.js wellness platform with login, full media lifecycle management, and a separate Express.js backend.",
      bullets: [
        "Built media upload system supporting images, videos, and audio via drag & drop or live browser camera and microphone capture.",
        "Implemented in-browser image snapshot, video and audio recording with preview before upload and 50MB size enforcement.",
        "Developed a separate Express.js backend with REST APIs for upload, retrieval, and deletion integrated via a service layer.",
      ],
      tech: [
        "Next.js",
        "Express.js",
        "Material UI",
        "Drag & Drop",
        "REST APIs",
      ],
      category: "Full Stack",
      featured: false,
      liveUrl: "https://jaivicwellness.com/",
      githubUrl: "https://github.com/amansingh133/jaivicwellness",
      color: "#10b981",
    },
  ],

  // ── EDUCATION ───────────────────────────────────────────────
  education: [
    // {
    //   degree: "Bachelor of Computer Applications (BCA)",
    //   institution: "Vivekananda Institute of Professional Studies",
    //   university: "IP University",
    //   period: "",
    //   location: "Delhi, India",
    // },
  ],

  // ── CERTIFICATIONS ──────────────────────────────────────────
  certifications: [
    {
      title: "Full Stack Development Bootcamp",
      issuer: "UpGrad",
      year: "July 2023",
      url: "https://certificates.knowledgehut.com/4e4ad750-fefd-492b-870e-ca2ca8d5159e-Course%20completion-KH12-8009000-202395.jpeg",
    },
  ],

  // ── CONTACT SECTION ─────────────────────────────────────────
  contact: {
    heading: "Let's Build Something",
    subheading:
      "Open to full-time and part-time roles, freelance projects, and interesting collaborations.",
    ctaLabel: "Say Hello",
  },
};
