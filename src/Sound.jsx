import creak from "/src/assets/images/creak.wav";
import useSound from "use-sound";

export function Sound() {
  const handleGoDownStairs = () => {
    window.location.href = "/basement";
  };
  const [playSound] = useSound(creak);
  return (
    <button onClick={handleGoDownStairs} id="stairs2" onMouseEnter={() => playSound()} onMouseLeave={() => {}}></button>
  );
}
