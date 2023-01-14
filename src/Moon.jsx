import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MoonVision } from "./MoonVision";
import { AnimatedSphere } from "./AnimatedSphere";
import { useState } from "react";
import { MoonModal } from "./MoonModal";
import { MoonTalking } from "./MoonTalking";
import { Home } from "./Home";

export function Moon() {
  const [talking, setTalking] = useState(false);
  const handleTalkToMoon = () => {
    setTalking(true);
  };
  const handleCloseTalk = () => {
    setTalking(false);
  };

  return (
    <div id="moon">
      <div className="sky">
        <button className="moontalk" onClick={handleTalkToMoon}></button>

        <MoonModal show={talking} onClose={handleCloseTalk}>
          <MoonTalking onClose={handleCloseTalk} />
        </MoonModal>

        <img className="moonperson" src="/images/moon.png" />

        <Canvas
          className="canvas3D"
          style={{ width: "400px", height: "500px", position: "absolute", top: "-130px", left: "-50px", zIndex: "2" }}
        >
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.2}></ambientLight>
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
        </Canvas>
      </div>
    </div>
  );
}
