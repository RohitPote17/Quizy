
import React from 'react';
import { useGLTF, useScroll, useTexture } from '@react-three/drei';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { useFrame } from '@react-three/fiber';

function LapContainer() {
let model = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
  // let texture = useTexture("._red.jpg")

  // let meshes ={};
  // model.scene.traverse((e)=>{
  //   meshes[e.name] = e;
  // });

  // meshes.screen.rotation.x = Three.MathUtils.degToRad(180);
  // let data = useScroll();

  // useFrame((state , delta)=>{
  //   meshes.screen.rotation.x = Three.MathUtils.degToRad(180 - data.offset * 90);
  // })

  return  <primitive object={model.scene} scale={[10, 10, 14]} position={[0, -15, 0]}/>;
  
  
}

export default LapContainer;
