import { Sphere } from "@react-three/drei";
import { MeshDistortMaterial } from "@react-three/drei";

export function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial color="#8352FD" attach="material" distory={0.3} speed={1.5} roughness={0} />
    </Sphere>
  );
}
