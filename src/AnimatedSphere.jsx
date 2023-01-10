import { Sphere } from "@react-three/drei";
import { MeshDistortMaterial } from "@react-three/drei";

export function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={1.4}>
      <MeshDistortMaterial color="#FFFFFF" attach="material" distory={0} speed={2} roughness={1} />
    </Sphere>
  );
}
