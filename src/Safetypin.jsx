/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 safetypin.gltf
Author: ayumi ikeda (https://sketchfab.com/rxf10240)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/safety-pins-515f811d9796446eae2269ee676137f7
Title: safety pins💮📷
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Safetypin(props) {
  const { nodes, materials } = useGLTF("/safetypin.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.SafetyPin_Material001_0.geometry}
        // position={[0, 0, 0]}
        material={materials["Material.001"]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={0.3}
      />
    </group>
  );
}

useGLTF.preload("/safetypin.gltf");
