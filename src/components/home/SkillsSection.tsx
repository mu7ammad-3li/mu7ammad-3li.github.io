"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RESUME_DATA } from "@/data/resume-data";

const skillCategories = [
    {
        title: "AI & Machine Learning",
        icon: "🤖",
        skills: ["RAG Systems", "Semantic Caching", "LLM Integration", "OpenRouter", "Google Gemini", "Prompt Engineering", "spaCy NLP", "Google ADK"],
        gradient: "from-indigo-500 to-purple-500",
    },
    {
        title: "Backend Development",
        icon: "⚙️",
        skills: ["Python", "Go", "TypeScript", "Node.js", "Bun", "FastAPI", "Hono", "REST APIs"],
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        title: "Databases & Infrastructure",
        icon: "🗄️",
        skills: ["PostgreSQL", "pgvector", "MongoDB", "Redis", "BullMQ", "Docker", "AWS (EC2, S3, IAM)"],
        gradient: "from-pink-500 to-rose-500",
    },
];

export function SkillsSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900" />

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

            <div ref={ref} className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.2 }}
                            className="text-indigo-400 font-medium text-sm uppercase tracking-wider"
                        >
                            Expertise
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl font-bold text-white mt-2"
                        >
                            Technical{" "}
                            <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                                Skills
                            </span>
                        </motion.h2>
                    </div>

                    {/* Skills Categories */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + categoryIndex * 0.15 }}
                                className="relative group"
                            >
                                {/* Card */}
                                <div className="relative h-full p-6 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                                    {/* Category Header */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-3xl">{category.icon}</span>
                                        <h3 className={`text-lg font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                                            {category.title}
                                        </h3>
                                    </div>

                                    {/* Skills Grid */}
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.span
                                                key={skill}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                                transition={{ delay: 0.4 + categoryIndex * 0.15 + skillIndex * 0.03 }}
                                                className="px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 hover:text-white transition-all cursor-default"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* All Skills Marquee */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8 }}
                        className="mt-16 overflow-hidden"
                    >
                        <div className="relative">
                            {/* Gradient overlays */}
                            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10" />
                            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10" />

                            {/* Scrolling content */}
                            <div className="flex gap-4 animate-scroll">
                                {[...RESUME_DATA.skills, ...RESUME_DATA.skills].map((skill, index) => (
                                    <span
                                        key={`${skill}-${index}`}
                                        className="shrink-0 px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-800/30 text-gray-400 rounded-full text-sm font-medium border border-gray-700/30 whitespace-nowrap"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
