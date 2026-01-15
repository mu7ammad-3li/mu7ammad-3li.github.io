export const RESUME_DATA = {
  name: "Muhammad Ali",
  initials: "MA",
  location: "Cairo, Egypt, GMT+2",
  locationLink: "https://www.google.com/maps/place/Cairo",
  about:
    "Software Engineer specializing in Backend Development, AI Systems, and LLM-powered applications",
  summary: (
    <>
      I&apos;m a <strong>Software Engineer</strong> specializing in{" "}
      <strong>backend development</strong>, <strong>AI-powered systems</strong>, and{" "}
      <strong>multi-agent architectures</strong>. I build production LLM
      applications with <strong>RAG</strong>, <strong>semantic caching</strong>,
      and scalable infrastructure. Proven ability to reduce LLM costs by 40-80%
      through intelligent caching, build autonomous workflow systems, and
      integrate AI across multiple platforms. Currently exploring{" "}
      <strong>Go + Python AI stacks</strong> and{" "}
      <strong>Google Agent Development Kit (ADK)</strong>.
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
      link: "https://github.com/mu7ammad-3li/assist-plus",
      badges: ["Remote", "AI Systems"],
      title: "Backend Engineer | AI Systems",
      start: "2024-09",
      end: null,
      description: (
        <>
          Architecting <strong>Assist+</strong>, a multi-agent AI customer
          service platform with autonomous chatbots across Facebook, Instagram,
          and WhatsApp. Built RAG-powered response engine with pgvector
          embeddings and semantic caching system reducing LLM costs by 40-80%.
        </>
      ),
      highlights: [
        "Built RAG-powered response engine with pgvector embeddings for 10K+ knowledge base articles",
        "Implemented semantic caching reducing LLM API costs by 40-80% (0.92 similarity threshold)",
        "Designed multi-agent bot engine with independent configs per platform, lead extraction, human handoff",
        "Developed BullMQ workers for async message processing, conversation cleanup, auto-summarization",
        "Integrated Meta Graph API for multi-platform messaging with OAuth 2.0 and webhook handling",
      ],
      technologies: [
        "Bun",
        "Hono",
        "TypeScript",
        "PostgreSQL",
        "pgvector",
        "Redis",
        "BullMQ",
        "OpenRouter",
        "RAG",
      ],
    },
    {
      company: "Digital Publishing Company",
      link: undefined,
      badges: ["Remote", "Cloud Automation"],
      title: "Backend Engineer | Cloud Automation",
      start: "2024-09",
      end: "2024-12",
      description: (
        <>
          Built autonomous cloud orchestration system using AWS EC2 with
          self-terminating instances. Reduced infrastructure costs by 99.7%
          through spot instance optimization and automated lifecycle management.
        </>
      ),
      highlights: [
        "Built autonomous EC2 pipeline with self-terminating instances for zero-touch builds",
        "Reduced infrastructure costs by 99.7% ($5+ → $0.015 per build) via spot optimization",
        "Designed Infrastructure as Code with dynamic EC2 provisioning and PowerShell UserData",
        "Implemented IAM policies with least privilege and CloudWatch logging integration",
      ],
      technologies: [
        "AWS EC2",
        "S3",
        "CloudFormation",
        "IAM",
        "Node.js",
        "PowerShell",
        "Docker",
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
          Built <strong>RAG-powered AI chatbot</strong> using Google Genkit and
          Gemini for automated lead qualification. Developed enterprise ERP/CRM
          from scratch and maintained 99.9% uptime as sole engineer.
        </>
      ),
      highlights: [
        "Engineered RAG-powered customer support agent using Google Genkit & Gemini",
        "Built enterprise ERP/CRM system from scratch with MERN stack",
        "Created real-time analytics dashboard with Firebase for business intelligence",
        "Maintained 99.9% uptime for critical APIs as sole engineer managing full SDLC",
      ],
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Genkit",
        "Gemini",
        "Firebase",
        "RAG",
      ],
    },
  ],
  skills: [
    "RAG Systems",
    "Semantic Caching",
    "pgvector",
    "Multi-Agent Systems",
    "LLM Integration",
    "OpenRouter",
    "Google Gemini",
    "Google ADK",
    "Prompt Engineering",
    "spaCy NLP",
    "Python",
    "Go",
    "TypeScript",
    "Node.js",
    "Bun",
    "FastAPI",
    "Hono",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "BullMQ",
    "AWS (EC2, S3, IAM)",
    "Docker",
    "REST APIs",
    "Meta Graph API",
  ],
  projects: [
    {
      title: "Assist+",
      techStack: [
        "Multi-Agent AI",
        "Bun",
        "Hono",
        "PostgreSQL",
        "pgvector",
        "Redis",
        "BullMQ",
        "OpenRouter",
      ],
      description:
        "Multi-agent AI customer service platform with RAG, semantic caching (40-80% cost reduction), and autonomous chatbots across Facebook, Instagram & WhatsApp",
      link: {
        label: "github.com",
        href: "https://github.com/mu7ammad-3li/assist-plus",
      },
      logo: undefined,
    },
    {
      title: "MERIDIEN",
      techStack: ["Backend", "Go", "Gin", "PostgreSQL", "GORM", "Flutter"],
      description:
        "Multi-tenant SaaS backend with 26 RESTful endpoints, complete data isolation, JWT auth with refresh tokens, and RBAC",
      link: {
        label: "meridien-engine.github.io",
        href: "https://meridien-engine.github.io/",
      },
      logo: undefined,
    },
    {
      title: "CV-lize",
      techStack: [
        "AI/NLP",
        "Python",
        "FastAPI",
        "spaCy",
        "OpenRouter",
        "MongoDB",
      ],
      description:
        "AI-powered resume optimization with multi-model architecture (OpenRouter + Gemini fallback), NLP pipelines, and 95%+ ATS compatibility scoring",
      link: {
        label: "cv-lize.vercel.app",
        href: "https://cv-lize.vercel.app",
      },
      logo: undefined,
    },
    {
      title: "OmniAssistant",
      techStack: [
        "RAG Agent",
        "Next.js",
        "Google Genkit",
        "Gemini",
        "TypeScript",
      ],
      description:
        "RAG-based conversational agent with semantic knowledge retrieval, lead qualification automation, and admin dashboard",
      link: {
        label: "github.com",
        href: "https://github.com/mu7ammad-3li/omniassistant",
      },
      logo: undefined,
    },
    {
      title: "log-sentinel",
      techStack: ["CLI Tool", "TypeScript", "Node.js Streams", "Zod"],
      description:
        "Memory-efficient CLI for analyzing large log files with O(1) space complexity stream-based processing",
      link: {
        label: "github.com",
        href: "https://github.com/mu7ammad-3li/log-sentinel",
      },
      logo: undefined,
    },
  ],
} as const;
