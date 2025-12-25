"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { TypeAnimation } from "@/components/shared/TypeAnimation";
import { AnimatedStats } from "@/components/shared/AnimatedStats";

export function Hero() {
  const stats = [
    { value: 75, suffix: "%", label: "Faster Builds" },
    { value: 38, suffix: "%", label: "Cost Savings" },
    { value: 99.9, suffix: "%", label: "Uptime" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              👋 Available for remote opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Muhammad Ali
            </span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 h-12 flex items-center justify-center"
          >
            <TypeAnimation />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Full Stack Product Engineer with 3+ years building enterprise
            applications. Specialized in AWS cloud automation, MERN development,
            and AI-powered solutions that deliver measurable business impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button size="lg" asChild>
              <a href="#contact">
                Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <AnimatedStats stats={stats} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
