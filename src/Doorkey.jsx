/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 doorkey.gltf
Author: SusanKing (https://sketchfab.com/krolzuzannapl)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/door-key-834f4e75590d432f96bc97be5065f6f6
Title: Door key
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Doorkey(props) {
  const { nodes, materials } = useGLTF("/doorkey.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        scale={0.55}
        geometry={nodes.Object_2.geometry}
        material={materials.material}
        rotation={[-Math.PI / 2.5, -Math.PI / 3, -Math.PI / 1]}
      />
    </group>
  );
}

useGLTF.preload("/doorkey.gltf");
