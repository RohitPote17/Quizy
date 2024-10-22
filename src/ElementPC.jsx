// import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei"; // Import Environment for better visuals
import LapContainer from "./LapContainer";
import "./style.css";
import { div } from "three/webgpu";

function ElementPC() {
  return (
    <div classname="w-full  bg-purple-500 relative">
      <h1 className="text-white font-extrabold text-[13rem] text-center absolute z-10 top-[170%] bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 neon-text ">
        Quizy World
      </h1>
      <Canvas
        camera={{ fov: 20, position: [0, -8, 120] }}
        style={{ backgroundColor: "black", position: "relative" }}
      >
        <ambientLight intensity={0.4} /> {/* Global soft light */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls />
        <LapContainer />
        <Environment preset="city" /> {/* Optional for realistic lighting */}
      </Canvas>
    </div>
  );
}

export default ElementPC;
