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
import { Note } from "./Note";
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
      <Canvas className="canvas3D" style={{ width: "500px", height: "500px", position: "absolute" }}>
        <pointLight position={[10, -10, 1]} />
        <pointLight position={[1, 10, 1]} intensity={0.1} />

        <OrbitControls enableZoom={false} screenSpacePanning={false} enableRotate={true} _domElement={document} />
        {/* <pointLight position={[10, 10, 10]} /> */}
        <Suspense fallback={null}>
          <Note />
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
          <Cardboard />
        </Suspense>
      </Canvas>
      <Canvas
        className="canvas3D2"
        style={{ width: "550px", height: "500px", position: "absolute", zIndex: 2, top: 200, left: 800 }}
      >
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Cardboard />
        </Suspense>
      </Canvas>
      {/* <Canvas className="canvas3D" style={{ width: "600px", height: "600px" }}>
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <pointLight position={[10, 10, 10]} />
        <Box height="100" />
      </Canvas>
      <div>

      </div>
      */}{" "}
      {/* <Canvas className="canvas3D" style={{ width: "600px", height: "600px" }}>
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
      </Canvas> */}
    </div>
  );
}
