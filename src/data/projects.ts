export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CV-lize",
    description: "AI-powered resume optimization platform with ATS compatibility scoring and professional PDF generation.",
    technologies: ["React", "FastAPI", "MongoDB", "Google Gemini", "spaCy", "TypeScript"],
    github: "https://github.com/mu7ammad-3li/cv-lize",
    demo: "https://cv-lize.vercel.app",
    featured: true,
    highlights: [
      "Multi-format upload (PDF/MD/TXT)",
      "AI analysis & optimization",
      "95%+ ATS compatibility scoring",
      "Security validation & malware detection"
    ]
  },
  {
    id: 2,
    title: "SwiftCart",
    description: "Modern e-commerce platform with real-time inventory management and secure authentication.",
    technologies: ["React", "TypeScript", "Firebase", "Vite", "shadcn/ui"],
    github: "https://github.com/mu7ammad-3li/swiftcart",
    featured: true,
    highlights: [
      "Real-time inventory management",
      "Secure authentication & RBAC",
      "Shopping cart & checkout flow",
      "Responsive design"
    ]
  },
  {
    id: 3,
    title: "MERIDIEN",
    description: "Multi-tenant enterprise retail & inventory management system with cross-platform mobile apps.",
    technologies: ["Go", "Flutter", "PostgreSQL", "JWT"],
    github: "https://github.com/mu7ammad-3li/MERIDIEN",
    featured: true,
    highlights: [
      "Multi-tenant architecture",
      "Cross-platform mobile apps",
      "RESTful API design",
      "Role-based access control"
    ]
  },
  {
    id: 4,
    title: "OmniAssistant",
    description: "AI-powered conversational chatbot with RAG-based knowledge retrieval and admin dashboard.",
    technologies: ["Next.js", "Genkit", "Google Gemini", "TypeScript"],
    github: "https://github.com/mu7ammad-3li/OmniAssistant",
    featured: true,
    highlights: [
      "RAG-based knowledge retrieval",
      "Lead qualification automation",
      "Admin dashboard",
      "Real-time AI responses"
    ]
  },
  {
    id: 5,
    title: "log-sentinel",
    description: "Memory-efficient CLI tool for analyzing large log files with stream-based processing.",
    technologies: ["TypeScript", "Node.js", "Zod"],
    github: "https://github.com/mu7ammad-3li/log-sentinel",
    featured: false,
    highlights: [
      "Stream-based processing",
      "Zero memory overhead",
      "Comprehensive statistics",
      "JSON report generation"
    ]
  },
  {
    id: 6,
    title: "SwiftDashboard",
    description: "Comprehensive admin dashboard for e-commerce management with real-time analytics.",
    technologies: ["React", "TypeScript", "Vite", "Recharts"],
    github: "https://github.com/mu7ammad-3li/SwiftDashboard",
    featured: false,
    highlights: [
      "Real-time analytics",
      "Order management",
      "Data visualizations",
      "Responsive design"
    ]
  }
];
