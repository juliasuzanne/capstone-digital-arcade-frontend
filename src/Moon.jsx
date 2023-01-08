import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MoonVision } from "./MoonVision";

export function Moon() {
  return (
    <div id="moon">
      <div className="sky">
        {/* <img className="moonperson" src="./src/assets/images/moon.png" /> */}
        <Canvas className="canvas3D" style={{ width: "500px", height: "500px", position: "absolute" }}>
          {/* <pointLight position={[10, -10, 1]} /> */}
          <ambientLight></ambientLight>
          {/* <pointLight position={[1, 10, 1]} intensity={0.1} /> */}

          <OrbitControls enableZoom={false} screenSpacePanning={false} enableRotate={true} _domElement={document} />
          {/* <pointLight position={[10, 10, 10]} /> */}
          <Suspense fallback={null}>
            <MoonVision />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
