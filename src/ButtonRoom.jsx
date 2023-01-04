import { useEffect, useState } from "react";
import { Curtain } from "./Images/Curtain";
import { Light } from "./Images/Light";
import face from "./assets/images/facepainting.png";
import pupils from "./assets//images/pupilspainting.png";
import { autoType } from "d3";

export function ButtonRoom() {
  const [mousePos, setMousePos] = useState({});
  const [showLight, setShowLight] = useState(false);
  const [left, setLeft] = useState({});
  const [top, setTop] = useState({});
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
      <div>
        <img className="face" src={face} />
        <img
          id="pupilspainting"
          src={pupils}
          style={{
            position: "relative",
            height: "100vh",
          }}
        />
      </div>
      <button id="lightswitch" onClick={handleShowLight}>
        toggle light
      </button>
      <button id="opencurtain" onClick={handleOpenCurtain}>
        {" "}
        toggle curtain{" "}
      </button>
      <Curtain show={openCurtain} />
      <img className="roombackground" src="./src/assets/images/hotel.png" />
      <img className="opencurtain" src="./src/assets/images/opencurtain.png" />

      <Light show={showLight} />

      <p> Family </p>
    </div>
  );
}
