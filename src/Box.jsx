import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import texture from "./assets/images/plaster.jpg";

export function Box() {
  const colorMap = useLoader(TextureLoader, texture);
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxGeometry attach="geometry" args={[3, 3, 3]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}
