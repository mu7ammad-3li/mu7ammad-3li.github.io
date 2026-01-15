"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RESUME_DATA } from "@/data/resume-data";

export function AboutSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const stats = [
        { value: "3+", label: "Years Experience" },
        { value: "10+", label: "Projects Completed" },
        { value: "40-80%", label: "LLM Cost Reduction" },
        { value: "99.9%", label: "Uptime Maintained" },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900" />

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
                            About Me
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl font-bold text-white mt-2"
                        >
                            Building the{" "}
                            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                Future
                            </span>{" "}
                            with AI
                        </motion.h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4 }}
                            className="space-y-6"
                        >
                            <div className="prose prose-invert prose-lg">
                                <p className="text-gray-300 leading-relaxed">
                                    I&apos;m a <span className="text-indigo-400 font-semibold">Software Engineer</span> specializing in{" "}
                                    <span className="text-purple-400 font-semibold">backend development</span>,{" "}
                                    <span className="text-pink-400 font-semibold">AI-powered systems</span>, and{" "}
                                    <span className="text-emerald-400 font-semibold">multi-agent architectures</span>.
                                </p>
                                <p className="text-gray-400 leading-relaxed">
                                    I build production LLM applications with RAG, semantic caching, and scalable infrastructure.
                                    With a proven track record of reducing LLM costs by 40-80% through intelligent caching,
                                    I help businesses leverage AI efficiently and effectively.
                                </p>
                                <p className="text-gray-400 leading-relaxed">
                                    Currently exploring <span className="text-emerald-400">Go + Python AI stacks</span> and{" "}
                                    <span className="text-indigo-400">Google Agent Development Kit (ADK)</span>.
                                </p>
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-2 pt-4">
                                {["Python", "Go", "TypeScript", "RAG", "LLM", "pgvector", "Redis"].map((tech, index) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.5 + index * 0.05 }}
                                        className="px-4 py-2 bg-gray-800/80 text-gray-300 rounded-full text-sm font-medium border border-gray-700/50 hover:border-indigo-500/50 hover:bg-gray-800 transition-all cursor-default"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                                    <div className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-indigo-500/30 transition-all">
                                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                            {stat.value}
                                        </div>
                                        <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
