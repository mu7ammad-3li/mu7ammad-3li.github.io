"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps {
    count?: number;
    color?: string;
}

export function ParticleField({ count = 5000, color = "#6366f1" }: ParticleFieldProps) {
    const points = useRef<THREE.Points>(null);
    const sphere = useRef<THREE.Mesh>(null);

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const radius = 8;

        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = radius * Math.cbrt(Math.random());

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);
        }

        return positions;
    }, [count]);

    const particleSizes = useMemo(() => {
        const sizes = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            sizes[i] = Math.random() * 2 + 0.5;
        }
        return sizes;
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (points.current) {
            points.current.rotation.y = time * 0.05;
            points.current.rotation.x = Math.sin(time * 0.02) * 0.1;
        }

        if (sphere.current) {
            sphere.current.rotation.y = time * 0.1;
            sphere.current.rotation.z = time * 0.05;
        }
    });

    return (
        <group>
            {/* Main particle field */}
            <points ref={points}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={count}
                        array={particlesPosition}
                        itemSize={3}
                    />
                    <bufferAttribute
                        attach="attributes-size"
                        count={count}
                        array={particleSizes}
                        itemSize={1}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.02}
                    color={color}
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                />
            </points>

            {/* Glowing central sphere */}
            <mesh ref={sphere}>
                <icosahedronGeometry args={[1.5, 1]} />
                <meshBasicMaterial
                    color={color}
                    wireframe
                    transparent
                    opacity={0.15}
                />
            </mesh>

            {/* Inner glow */}
            <mesh>
                <sphereGeometry args={[1.2, 32, 32]} />
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.05}
                />
            </mesh>
        </group>
    );
}
