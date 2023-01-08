import { Sphere } from "@react-three/drei";
import { MeshDistortMaterial } from "@react-three/drei";

export function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={0.6}>
      <MeshDistortMaterial color="#FFFFFF" attach="material" distory={Math.PI} speed={3} roughness={0} />
    </Sphere>
  );
}
