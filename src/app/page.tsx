"use client";

import dynamic from "next/dynamic";
import { Navigation, HeroSection, AboutSection, ProjectsSection, SkillsSection, ContactSection, Footer } from "@/components/home";

// Dynamic import for Three.js to avoid SSR issues
const ThreeScene = dynamic(() => import("@/components/three/ThreeScene").then(mod => ({ default: mod.ThreeScene })), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-gray-900">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  ),
});

export default function HomePage() {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen">
      {/* Three.js Background - Fixed behind content */}
      <div className="fixed inset-0 z-0">
        <ThreeScene className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
