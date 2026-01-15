"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function FloatingOrbs() {
    const orbsRef = useRef<THREE.Group>(null);

    const orbs = useMemo(() => {
        return [
            { position: [-3, 2, -2], color: "#f472b6", size: 0.3, speed: 0.8 },
            { position: [4, -1, -3], color: "#818cf8", size: 0.4, speed: 1.2 },
            { position: [-2, -2, 1], color: "#34d399", size: 0.25, speed: 0.6 },
            { position: [3, 3, -1], color: "#fbbf24", size: 0.35, speed: 1.0 },
            { position: [-4, 0, -2], color: "#f87171", size: 0.2, speed: 0.9 },
            { position: [2, -3, 2], color: "#60a5fa", size: 0.3, speed: 0.7 },
        ];
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (orbsRef.current) {
            orbsRef.current.children.forEach((orb, index) => {
                const orbData = orbs[index];
                orb.position.y = orbData.position[1] + Math.sin(time * orbData.speed) * 0.5;
                orb.position.x = orbData.position[0] + Math.cos(time * orbData.speed * 0.5) * 0.3;
            });
        }
    });

    return (
        <group ref={orbsRef}>
            {orbs.map((orb, index) => (
                <mesh key={index} position={orb.position as [number, number, number]}>
                    <sphereGeometry args={[orb.size, 32, 32]} />
                    <meshBasicMaterial
                        color={orb.color}
                        transparent
                        opacity={0.6}
                    />
                </mesh>
            ))}
        </group>
    );
}
