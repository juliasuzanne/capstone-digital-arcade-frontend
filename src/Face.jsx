import { useEffect, useState } from "react";
import face from "./assets/images/face.png";
import pupils from "./assets//images/pupils.png";
import threadButton from "./assets/images/thread.png";
import { Link } from "react-router-dom";
import background2 from "./assets/images/background2.png";
import egg from "./assets/images/egg.png";

// import { autoType, forceCenter } from "d3";

export function Face() {
  const [mousePos, setMousePos] = useState({});
  const [left, setLeft] = useState({});
  const [top, setTop] = useState({});

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
    root.style.setProperty("--left", String((event.clientX - 400) * 0.035) + "px");
    root.style.setProperty("--top", String((event.clientY - 300) * 0.04) + "px");
  });

  function handleArtifactClick() {
    console.log("test");
    window.location.href = "/artifacts/all";
  }
  function handleMyArtifactClick() {
    console.log("test");
    window.location.href = "/artifacts";
  }
  return (
    <div id="face">
      {/* The mouse is at position{" "} */}
      <b hidden>
        ({mousePos.x}, {mousePos.y})
      </b>
      {/* {console.log(left)}
      {console.log(top)} */}
      <div>
        {/* <img
          src={background2}
          style={{
            position: "absolute",
            width: "60vw",
            justifyContent: "center",
            zIndex: 0,
          }}
        /> */}
        <img
          src={face}
          style={{
            position: "absolute",
            width: "60vw",
            justifyContent: "center",
            zIndex: 2,
          }}
        />

        <img
          id="pupils"
          src={pupils}
          style={{
            position: "relative",
            width: "60vw",
          }}
        />

        <button id="thread" onClick={handleMyArtifactClick}>
          <img
            src={threadButton}
            style={{
              height: "14vh",
            }}
          />
        </button>

        <button id="egg" onClick={handleArtifactClick}>
          <img
            src={egg}
            style={{
              height: "20vh",
            }}
          />
        </button>

        {/* {(document.getElementById("pupils").style.width = left)} */}
        {console.log()}
      </div>
    </div>
  );
}
