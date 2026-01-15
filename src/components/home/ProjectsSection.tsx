"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RESUME_DATA } from "@/data/resume-data";

export function ProjectsSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const getProjectGradient = (index: number) => {
        const gradients = [
            "from-indigo-500/20 via-purple-500/10 to-transparent",
            "from-emerald-500/20 via-teal-500/10 to-transparent",
            "from-pink-500/20 via-rose-500/10 to-transparent",
            "from-amber-500/20 via-orange-500/10 to-transparent",
            "from-cyan-500/20 via-blue-500/10 to-transparent",
        ];
        return gradients[index % gradients.length];
    };

    const getAccentColor = (index: number) => {
        const colors = [
            "group-hover:border-indigo-500/50",
            "group-hover:border-emerald-500/50",
            "group-hover:border-pink-500/50",
            "group-hover:border-amber-500/50",
            "group-hover:border-cyan-500/50",
        ];
        return colors[index % colors.length];
    };

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/98 to-gray-900" />

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
                            Portfolio
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl font-bold text-white mt-2"
                        >
                            Featured{" "}
                            <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.4 }}
                            className="text-gray-400 mt-4 max-w-2xl mx-auto"
                        >
                            A selection of projects showcasing my expertise in AI systems, backend development, and scalable architectures.
                        </motion.p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {RESUME_DATA.projects.map((project, index) => (
                            <motion.a
                                key={project.title}
                                href={project.link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className={`group relative overflow-hidden rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 ${getAccentColor(index)} transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
                            >
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${getProjectGradient(index)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                <div className="relative p-6">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 bg-gray-700/50 rounded-xl group-hover:bg-gray-700/80 transition-colors">
                                            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                            </svg>
                                        </div>
                                        <svg className="w-5 h-5 text-gray-500 group-hover:text-gray-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 bg-gray-700/50 text-gray-400 rounded-md text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 4 && (
                                            <span className="px-2.5 py-1 text-gray-500 text-xs font-medium">
                                                +{project.techStack.length - 4}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
