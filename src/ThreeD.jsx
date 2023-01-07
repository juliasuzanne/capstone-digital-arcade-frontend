import { Canvas } from "@react-three/fiber";
import { Box } from "./Box";
import "./3D.css";
import { OrbitControls } from "@react-three/drei";
import { Vessel } from "./Vessel";
import { AnimatedSphere } from "./AnimatedSphere";
import { Suspense } from "react";

export function ThreeD() {
  return (
    <div>
      <Canvas id="canvas3D" style={{ width: "600px", height: "600px" }}>
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <pointLight position={[10, 10, 10]} />
        <Box height="100" />
      </Canvas>
      <Canvas id="canvas3D" style={{ width: "600px", height: "600px" }}>
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
      </Canvas>
      <Canvas id="canvas3D" style={{ width: "600px", height: "600px" }}>
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Vessel />
        </Suspense>
      </Canvas>
    </div>
  );
}
