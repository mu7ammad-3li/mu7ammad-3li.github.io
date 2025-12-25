export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React.js & Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "Tailwind CSS",
      "Material-UI & shadcn/ui",
      "Vite",
      "Electron",
      "Redux Toolkit"
    ]
  },
  {
    title: "Backend",
    skills: [
      "Node.js & Express.js",
      "FastAPI",
      "RESTful APIs",
      "GraphQL",
      "Go",
      "MongoDB",
      "PostgreSQL",
      "Firebase"
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3, CloudFormation, IAM)",
      "Infrastructure as Code",
      "Docker & Docker Compose",
      "CI/CD Pipelines",
      "GitHub Actions",
      "Linux Administration"
    ]
  },
  {
    title: "AI & Integration",
    skills: [
      "Google Gemini",
      "OpenAI",
      "Google Genkit",
      "RAG (Retrieval-Augmented Generation)",
      "spaCy NLP",
      "Embeddings"
    ]
  },
  {
    title: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Go",
      "Dart"
    ]
  },
  {
    title: "Security & Best Practices",
    skills: [
      "JWT Authentication",
      "RBAC",
      "AES256 Encryption",
      "DRM Protection",
      "IAM Policies",
      "Security Assessment"
    ]
  }
];
