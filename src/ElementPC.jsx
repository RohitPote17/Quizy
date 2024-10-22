// import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei'; // Import Environment for better visuals
import LapContainer from './LapContainer';
import "./style.css"

function ElementPC() {
  return (
    <Canvas camera={{ fov: 20, position: [0, -30, 120] }}>
      <ambientLight intensity={0.4} />  {/* Global soft light */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls />
      <LapContainer />
      <Environment preset="city" /> {/* Optional for realistic lighting */}
    </Canvas>
  );
}

export default ElementPC;
