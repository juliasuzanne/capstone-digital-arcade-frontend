import { useEffect, useState } from "react";
import { Curtain } from "./Images/Curtain";
import { Light } from "./Images/Light";
import face from "./assets/images/facepainting.png";
import pupils from "./assets//images/pupilspainting.png";
import { autoType } from "d3";

export function ButtonRoom() {
  const [mousePos, setMousePos] = useState({});
  const [showLight, setShowLight] = useState(false);
  const [openCurtain, setOpenCurtain] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  let root = document.documentElement;

  root.addEventListener("mousemove", (event) => {
    root.style.setProperty("--left", String((event.clientX - 8000) * 0.013) + "px");
    root.style.setProperty("--top", String((event.clientY + 6200) * 0.014) + "px");
  });

  const handleShowLight = () => {
    if (showLight === false) {
      setShowLight(true);
    } else {
      setShowLight(false);
    }
  };

  const handleOpenCurtain = () => {
    if (openCurtain === false) {
      setOpenCurtain(true);
    } else {
      setOpenCurtain(false);
    }
  };

  return (
    <div>
      <button onClick={handleShowLight}>
        <img id="lightswitch" src="./src/assets/images/lightswitch.png" />
      </button>
      <button id="opencurtain" onClick={handleOpenCurtain}>
        {" "}
        toggle curtain{" "}
      </button>
      <Curtain show={openCurtain} />

      <img className="counter" src="./src/assets/images/counter.png" />
      <img className="roombackground" src="./src/assets/images/home_background.png" />
      <img className="opencurtain" src="./src/assets/images/opencurtain.png" />

      <Light show={showLight} />

      <p> Family </p>
    </div>
  );
}
