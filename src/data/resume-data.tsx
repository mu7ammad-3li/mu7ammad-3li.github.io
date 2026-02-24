export const RESUME_DATA = {
  name: "Muhammad Ali",
  initials: "MA",
  location: "Cairo, Egypt, GMT+2",
  locationLink: "https://www.google.com/maps/place/Cairo",
  about:
    "Software Engineer specializing in scalable microservices and cloud architecture",
  summary: (
    <>
      Performance-driven <strong>Backend Engineer</strong> with 3+ years of
      experience specializing in <strong>scalable microservices</strong> and{" "}
      <strong>cloud architecture</strong> (Node.js, Go, Python). Proven track
      record of optimizing infrastructure costs—notably reducing AWS spend by
      99%—and building <strong>high-concurrency systems</strong> using
      PostgreSQL, Redis, and Docker. Adept at integrating{" "}
      <strong>LLMs</strong> (Gemini, OpenRouter) to automate business workflows.
    </>
  ),
  avatarUrl: "/avatar.png",
  personalWebsiteUrl: "https://mu7ammad-3li.github.io",
  contact: {
    email: "muhammadal@proton.me",
    tel: "+201125939530",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mu7ammad-3li",
        icon: "github" as const,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammad-3lii/",
        icon: "linkedin" as const,
      },
      {
        name: "X",
        url: "https://x.com/Mu7ammad_3lii",
        icon: "x" as const,
      },
    ],
  },
  education: [
    {
      school: "Suez Canal University",
      degree:
        "Bachelor of Engineering, Computer and Control Systems Engineering",
      start: "",
      end: "2023",
      description:
        "Thesis: Malware Detection Based on Static and Dynamic Features - Conducted in-depth analysis of executable files to identify malicious patterns.",
    },
    {
      school: "ITI (Information Technology Institute)",
      degree: "60 Hours Cybersecurity Training Program",
      start: "",
      end: "",
      description:
        "Completed intensive training in Linux and Windows server administration, network security, penetration testing, and security assessment methodologies.",
    },
  ],
  work: [
    {
      company: "Freelance",
      link: undefined,
      badges: ["Remote"],
      title: "Fullstack Engineer",
      start: "2024-08",
      end: "2025-08",
      description: (
        <>
          Architected CI/CD deployment pipelines on AWS EC2 and built
          high-performance desktop applications with Electron and TypeScript.
        </>
      ),
      highlights: [
        "Architected an automated CI/CD deployment pipeline on AWS EC2, utilizing Spot Instances to slash build costs by 70%",
        "Engineered a high-performance desktop application using Electron and TypeScript, implementing complex PDF rendering and real-time annotation engines",
        "Optimized media processing workflows by integrating FFmpeg with Amazon S3, ensuring scalable storage and rapid file retrieval",
        "Developed custom Node.js automation scripts to synchronize third-party API data, reducing manual data entry by 40%",
      ],
      technologies: [
        "AWS EC2",
        "S3",
        "Electron",
        "TypeScript",
        "Node.js",
        "FFmpeg",
        "Docker",
      ],
    },
    {
      company: "Bella Egypt",
      link: undefined,
      badges: ["Part Time", "Cairo"],
      title: "Software Engineer",
      start: "2024-02",
      end: "2025-11",
      description: (
        <>
          Integrated Google Gemini AI to build autonomous customer support
          chatbots and maintained legacy backend systems.
        </>
      ),
      highlights: [
        "Integrated Google Gemini AI to build an autonomous customer support chatbot, increasing lead qualification rates by 25%",
        "Maintained and optimized legacy backend APIs and database schemas to ensure system stability during scaling",
      ],
      technologies: [
        "Google Gemini",
        "Node.js",
        "PostgreSQL",
        "REST APIs",
      ],
    },
    {
      company: "Bella Egypt",
      link: undefined,
      badges: ["Founder", "Cairo"],
      title: "Founder Software Engineer",
      start: "2023-02",
      end: "2024-02",
      description: (
        <>
          Architected and developed a full-stack ERP/CRM system (MERN) from the
          ground up, supporting core business operations and customer lifecycle
          management.
        </>
      ),
      highlights: [
        "Architected and developed a full-stack ERP/CRM system (MERN) from the ground up, supporting core business operations and customer lifecycle management",
        "Engineered a real-time analytics dashboard using Recharts providing stakeholders with actionable insights into sales velocity and inventory turnover",
      ],
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Recharts",
        "Firebase",
      ],
    },
  ],
  skills: [
    // Languages
    "JavaScript",
    "TypeScript",
    "Go",
    "Python",
    "SQL",
    // Frontend
    "React",
    "Next.js",
    // Backend
    "Node.js",
    "Bun",
    "Hono",
    "Express",
    "FastAPI",
    "Gin",
    // Databases
    "PostgreSQL",
    "MongoDB",
    "Redis",
    // Cloud/Tools
    "AWS (EC2, S3)",
    "Docker",
    "Git",
    "REST APIs",
    // Cybersecurity
    "Malware Analysis",
    "DRAKVUF",
    "Penetration Testing",
    "Network Security",
  ],
  projects: [
    {
      title: "MERIDIEN",
      techStack: ["Go", "Gin", "PostgreSQL", "JWT", "REST API"],
      description:
        "Retail Management System - High-concurrency REST API in Go (Gin) featuring 26+ endpoints for complex retail logic with JWT-based authentication and optimized PostgreSQL schema",
      link: {
        label: "GitHub",
        href: "https://github.com/mu7ammad-3li/meridien",
      },
      logo: undefined,
    },
    {
      title: "Assist+",
      techStack: ["Bun", "Hono", "Redis", "BullMQ", "pgvector", "LLM"],
      description:
        "Customer Service Platform - Distributed messaging API processing multi-channel webhooks (Facebook/Instagram) with Redis background tasks and semantic caching reducing LLM API overhead by 60%",
      link: {
        label: "GitHub",
        href: "https://github.com/mu7ammad-3li/assist-plus",
      },
      logo: undefined,
    },
    {
      title: "CV-lize",
      techStack: ["Python", "FastAPI", "spaCy", "NER", "LLM"],
      description:
        "Resume Analysis Tool - FastAPI service utilizing spaCy for Named Entity Recognition (NER) to extract key professional data points with LLM-powered scoring algorithm",
      link: {
        label: "GitHub",
        href: "https://github.com/mu7ammad-3li/cv-lize",
      },
      logo: undefined,
    },
    {
      title: "SwiftDashboard",
      techStack: ["React", "TypeScript", "Recharts", "Firebase"],
      description:
        "E-commerce Admin Panel - Feature-rich administrative dashboard enabling staff to manage products, orders, customers, and view financial data visualizations",
      link: {
        label: "GitHub",
        href: "https://github.com/mu7ammad-3li/swift-dashboard",
      },
      logo: undefined,
    },
    {
      title: "SwiftCart",
      techStack: ["React", "TypeScript", "Firebase"],
      description:
        "Modern E-commerce Platform - Complete e-commerce solution with product management, dynamic shopping cart, and secure checkout process",
      link: {
        label: "GitHub",
        href: "https://github.com/mu7ammad-3li/swift-cart",
      },
      logo: undefined,
    },
  ],
} as const;
