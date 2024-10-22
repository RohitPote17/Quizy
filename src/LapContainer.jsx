
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

function LapContainer() {
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

  return  <primitive object={scene} scale={[10, 10, 14]} position={[0, -15, 0]}/>;
  
  
}

export default LapContainer;
