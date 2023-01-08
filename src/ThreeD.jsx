import { Canvas } from "@react-three/fiber";
import { Box } from "./Box";
import "./3D.css";
import { OrbitControls } from "@react-three/drei";
import { Vessel } from "./Vessel";
import { AnimatedSphere } from "./AnimatedSphere";
import { Suspense } from "react";
import { Cardboard } from "./Cardboard";
import { Safetypin } from "./Safetypin";
import { Woodenbox } from "./Woodenbox";
import { Doorkey } from "./Doorkey";
import { Keyring } from "./Keyring";
import { Button } from "bootstrap";

export function ThreeD() {
  const handleClick = () => {
    window.location.href = "/hotel";
  };
  return (
    <div>
      {/* <button className="boxy" onClick={handleClick}>
        Clothes
      </button>
      <button className="boxy2" onClick={handleClick}>
        Paintings
      </button> */}
      <Canvas
        className="canvas3D"
        style={{ width: "1250px", height: "500px", position: "absolute", zIndex: 1, top: 200, left: 20 }}
      >
        <ambientLight />
        <OrbitControls
          maxAzimuthAngle={0}
          enableZoom={false}
          screenSpacePanning={false}
          maxPolarAngle={Math.PI}
          enableRotate={true}
          _domElement={document}
        />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Safetypin />
        </Suspense>
      </Canvas>
      {/* <Canvas
        className="canvas3D2"
        style={{ width: "550px", height: "500px", position: "absolute", zIndex: 2, top: 200, left: 200 }}
      >
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Doorkey />
        </Suspense>
      </Canvas>
      <Canvas
        className="canvas3D2"
        style={{ width: "550px", height: "500px", position: "absolute", zIndex: 2, top: 200, left: 400 }}
      >
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Keyring />
        </Suspense>
      </Canvas> */}
      {/* <Canvas className="canvas3D" style={{ width: "600px", height: "600px" }}>
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <pointLight position={[10, 10, 10]} />
        <Box height="100" />
      </Canvas>
      <div>

      </div>
      <Canvas className="canvas3D" style={{ width: "600px", height: "600px" }}>
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
      </Canvas> */}
    </div>
  );
}
