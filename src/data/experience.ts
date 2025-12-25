export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Contract Software Engineer",
    company: "Remote",
    period: "September 2024 - Present",
    description:
      "Building secure digital publishing infrastructure with automated AWS deployment.",
    highlights: [
      "⚡ 75% faster builds - Optimized pipeline from 2 hours to 30 minutes using Node.js & EC2",
      "💰 38% cost reduction - Engineered spot instance fallback strategy for build servers",
      "🏗️ Infrastructure as Code - Architected 3-tier build pipeline with CloudFormation & Launch Templates",
      "🔐 Security Engineering - Implemented DRM protection, AES256 encryption, and IAM policies",
      "🖥️ Desktop Development - Built cross-platform Electron reader with React and TypeScript",
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
    id: 2,
    title: "Software Engineer",
    company: "Bella Egypt",
    period: "January 2023 - February 2025",
    description:
      "Led complete digital transformation from manual workflows to automated systems.",
    highlights: [
      "🏢 ERP/CRM from scratch - Built enterprise system with MERN stack replacing spreadsheets",
      "🤖 AI automation - Engineered RAG-powered customer support agent with Google Genkit",
      "📊 Business analytics - Created real-time dashboard with Firebase for financial data",
      "🔄 99.9% uptime - Maintained critical APIs serving production data",
      "👥 End-to-end ownership - Sole engineer managing full SDLC from design to deployment",
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
];
