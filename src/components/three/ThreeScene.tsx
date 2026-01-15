"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ParticleField } from "./ParticleField";
import { FloatingOrbs } from "./FloatingOrbs";

interface ThreeSceneProps {
    className?: string;
}

export function ThreeScene({ className }: ThreeSceneProps) {
    return (
        <div className={className}>
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <ParticleField count={3000} color="#6366f1" />
                    <FloatingOrbs />
                </Suspense>
            </Canvas>
        </div>
    );
}
