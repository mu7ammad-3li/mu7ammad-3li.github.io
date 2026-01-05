export const RESUME_DATA = {
  name: "Muhammad Ali",
  initials: "MA",
  location: "Cairo, Egypt, GMT+2",
  locationLink: "https://www.google.com/maps/place/Cairo",
  about:
    "Full Stack Engineer focused on building scalable cloud infrastructure and AI-powered applications",
  summary: (
    <>
      I&apos;m a <strong>Full Stack Engineer</strong> with 2+ years of
      experience building production systems that scale. I specialize in{" "}
      <strong>cloud infrastructure automation</strong> (AWS),{" "}
      <strong>enterprise application development</strong> (React, Node.js, Go),
      and <strong>AI integration</strong> (RAG, LLMs). I&apos;ve reduced
      infrastructure costs by 38%, built ERP systems from scratch, and
      engineered secure digital publishing platforms. Currently seeking
      opportunities to build impactful systems at scale.
    </>
  ),
  avatarUrl: "/avatar.png",
  personalWebsiteUrl: "https://mu7ammad-3li.github.io",
  contact: {
    email: "mu7ammad.3lii2@gmail.com",
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
      degree: "Bachelor's Degree in Computers and Control Engineering",
      start: "2013",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Remote Contract",
      link: undefined,
      badges: ["Remote"],
      title: "Contract Software Engineer",
      start: "2024-09",
      end: null,
      description: (
        <>
          Building secure digital publishing infrastructure with automated AWS
          deployment pipeline. Architected 3-tier build system reducing build
          times by 75% (2hrs → 30min) and costs by 38% through spot instance
          optimization.
        </>
      ),
      highlights: [
        "Optimized build pipeline from 2 hours to 30 minutes using Node.js & AWS EC2",
        "Engineered spot instance fallback strategy reducing infrastructure costs by 38%",
        "Architected 3-tier build pipeline with CloudFormation & Launch Templates",
        "Implemented DRM protection, AES256 encryption, and IAM security policies",
        "Built cross-platform Electron desktop reader with React and TypeScript",
      ],
      technologies: [
        "AWS EC2",
        "S3",
        "CloudFormation",
        "IAM",
        "Node.js",
        "Electron",
        "React",
        "TypeScript",
        "Docker",
      ],
    },
    {
      company: "MERIDIEN Engine",
      link: "https://github.com/mu7ammad-3li/MERIDIEN",
      badges: ["Side Project"],
      title: "Founder & Maintainer",
      start: "2025-09",
      end: null,
      description: (
        <>
          Designed and built MERIDIEN, a multi-tenant enterprise retail &amp;
          inventory management system. Architected RESTful API in Go with
          PostgreSQL and developed cross-platform mobile applications using
          Flutter for Android and iOS.
        </>
      ),
      highlights: [
        "Architected multi-tenant SaaS system serving multiple retail businesses",
        "Built RESTful API from scratch using Go with PostgreSQL for data persistence",
        "Developed cross-platform mobile apps with Flutter for real-time inventory tracking",
        "Implemented JWT-based authentication and role-based access control (RBAC)",
        "Designed scalable database schema supporting multi-tenant isolation",
      ],
      technologies: [
        "Go",
        "PostgreSQL",
        "Flutter",
        "Dart",
        "RESTful APIs",
        "JWT",
        "RBAC",
        "Multi-tenant Architecture",
      ],
    },
    {
      company: "Bella Egypt",
      link: undefined,
      badges: ["On-site"],
      title: "Software Engineer",
      start: "2023-01",
      end: "2025-02",
      description: (
        <>
          Led complete digital transformation from manual workflows to automated
          enterprise systems. Built production ERP/CRM from scratch using MERN
          stack, engineered RAG-powered AI customer support, and maintained
          99.9% uptime for critical business APIs.
        </>
      ),
      highlights: [
        "Built enterprise ERP/CRM system from scratch with MERN stack, replacing manual spreadsheets",
        "Engineered RAG-powered customer support agent using Google Genkit & Gemini",
        "Created real-time business analytics dashboard with Firebase for financial tracking",
        "Maintained 99.9% uptime for critical APIs serving production data",
        "End-to-end ownership as sole engineer managing full SDLC from design to deployment",
      ],
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Next.js",
        "Firebase",
        "Genkit",
        "TypeScript",
      ],
    },
  ],
  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Go",
    "Python",
    "AWS (EC2, S3, CloudFormation, IAM)",
    "Docker",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "GraphQL",
    "REST APIs",
    "Genkit",
    "RAG",
    "Electron",
    "Tailwind CSS",
    "shadcn/ui",
    "CI/CD",
    "Linux",
    "Security (JWT, RBAC, AES256, DRM)",
  ],
  projects: [
    {
      title: "CV-lize",
      techStack: [
        "Side Project",
        "React",
        "FastAPI",
        "MongoDB",
        "Google Gemini",
        "spaCy",
        "TypeScript",
      ],
      description:
        "AI-powered resume optimization platform with ATS compatibility scoring and professional PDF generation",
      link: {
        label: "cv-lize.vercel.app",
        href: "https://cv-lize.vercel.app",
      },
      logo: undefined,
    },
    {
      title: "SwiftCart",
      techStack: [
        "Side Project",
        "React",
        "TypeScript",
        "Firebase",
        "Vite",
        "shadcn/ui",
      ],
      description:
        "Modern e-commerce platform with real-time inventory management, secure authentication, and shopping cart functionality",
      link: {
        label: "github.com",
        href: "https://github.com/mu7ammad-3li/swiftcart",
      },
      logo: undefined,
    },
    {
      title: "MERIDIEN",
      techStack: ["Side Project", "Go", "Flutter", "PostgreSQL", "JWT"],
      description:
        "Multi-tenant enterprise retail & inventory management system with cross-platform mobile apps and RESTful API",
      link: {
        label: "github.com",
        href: "https://github.com/mu7ammad-3li/MERIDIEN",
      },
      logo: undefined,
    },
    {
      title: "OmniAssistant",
      techStack: [
        "Side Project",
        "Next.js",
        "Genkit",
        "Google Gemini",
        "TypeScript",
      ],
      description:
        "AI-powered conversational chatbot with RAG-based knowledge retrieval, lead qualification automation, and admin dashboard",
      link: {
        label: "github.com",
        href: "https://github.com/mu7ammad-3li/OmniAssistant",
      },
      logo: undefined,
    },
    {
      title: "log-sentinel",
      techStack: ["Side Project", "TypeScript", "Node.js", "Zod"],
      description:
        "Memory-efficient CLI tool for analyzing large log files with stream-based processing and comprehensive statistics",
      link: {
        label: "github.com",
        href: "https://github.com/mu7ammad-3li/log-sentinel",
      },
      logo: undefined,
    },
    {
      title: "SwiftDashboard",
      techStack: ["Side Project", "React", "TypeScript", "Vite", "Recharts"],
      description:
        "Comprehensive admin dashboard for e-commerce management with real-time analytics and data visualizations",
      link: {
        label: "github.com",
        href: "https://github.com/mu7ammad-3li/SwiftDashboard",
      },
      logo: undefined,
    },
  ],
} as const;
