"use client";

import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { ICard } from "./interface";
import Card from "./Card";
import Image from "next/image";
import { rotate } from "three/webgpu";

function Laptop({ children }: { children: React.ReactNode }) {
  const { scene } = useGLTF("/laptop.glb");

  return (
    <primitive object={scene} scale={2} position={[0, -1, 0]}>
      {children}
    </primitive>
  );
}

export default function LaptopCanvas({ cards }: { cards: ICard[] }) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <Canvas camera={{ position: [0, 0, 3] }} className="bg-line-gradient-bg">
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} />
      <Suspense fallback={null}>
        <Laptop>
          <Html
            transform
            occlude
            position={[-0.04, 1.3, -0.92]} // Adjust as needed
            scale={[0.165, 0.14, 0.2]} // Adjust scale to fit the laptop screen
            rotation={[-0.07, 0, 0]}
            style={{ width: "800px", height: "500px" }} // Adjust to match the laptop screen size
          >
            <div className="w-full h-full flex flex-col justify-start items-start  bg-transparent rounded-lg shadow-lg overflow-auto">
              <div className="grid grid-cols-3 gap-4 p-4">
                {cards.map((card, index) => (
                  <Card
                    key={index}
                    card={card}
                    // handleClick={() => setSelectedProject(card.title)}
                  />
                ))}
              </div>
            </div>
          </Html>
        </Laptop>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
