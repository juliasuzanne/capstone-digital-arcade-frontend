import { useEffect, useState } from "react";
import face from "/src/assets/images/face.png";
import pupils from "./assets/images/pupils.png";
import bluewire from "/src/assets/images/blueopen.png";
import redwire from "/src/assets/images/redopen.png";
import closedbox from "/src/assets/images/closedbox.png";
import axios from "axios";

// import { autoType, forceCenter } from "d3";

export function Face() {
  const [mousePos, setMousePos] = useState({});
  const [errors, setErrors] = useState([]);
  const [isBoxFixed, setIsBoxFixed] = useState("");
  const [points, setPoints] = useState(0);
  const [blueWire, setBlueWire] = useState({ bluewire });
  const [redWire, setRedWire] = useState({ redwire });
  let [currentUser, setCurrentUser] = useState([]);

  const handleCurrentUser = () => {
    axios.get("https://patient-wood-4884.fly.dev/users.json").then((response) => {
      console.log(response);
      setCurrentUser(response.data);
    });
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleFixBox = () => {
    setErrors([]);
    let newPoints = 500 + currentUser.points;
    console.log(newPoints);
    axios
      .patch("https://patient-wood-4884.fly.dev/users", { fixed: true, points: newPoints })
      .then((window.location.href = "/"))
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  const checkBoxFixed = () => {
    if (currentUser.fixed === true) {
      setIsBoxFixed({ closedbox });
      setBlueWire("");
      setRedWire("");
    } else {
      setIsBoxFixed("/src/assets/images/blankbox.png");
      // setBlueWire("/src/assets/images/blueopen.png");
      // setRedWire("/src/assets/images/redopen.png");
    }
  };

  const handleFixRed = () => {
    if (blueWire === "/src/assets/images/blueclosed.png") {
      setIsBoxFixed({ closedbox });
      setBlueWire("");
      setRedWire("");
      setPoints(50);
      handleFixBox();
    } else {
      setRedWire("/src/assets/images/redclosed.png");
    }
  };

  const handleFixBlue = () => {
    if (redWire === "/src/assets/images/redclosed.png") {
      setIsBoxFixed({ closedbox });
      setBlueWire("");
      setRedWire("");
      setPoints(50);
      handleFixBox();
    } else {
      console.log("fixed blue");
      setBlueWire("/src/assets/images/blueclosed.png");
    }
  };

  useEffect(handleCurrentUser, []);
  useEffect(checkBoxFixed);

  let root = document.documentElement;

  root.addEventListener("mousemove", (event) => {
    root.style.setProperty("--left", String((event.clientX + 100) * 0.025) + "px");
    root.style.setProperty("--top", String((event.clientY + 100) * 0.03) + "px");
  });

  function handleArtifactClick() {
    console.log("test");
    window.location.href = "/artifacts/all";
  }

  function handleMyArtifactClick() {
    {
      localStorage.jwt === undefined ? console.log("Please login") : (window.location.href = "/artifacts");
    }
  }

  return (
    <div>
      <div id="face">
        {" "}
        <div id="foeglass"></div>
      </div>
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
        {localStorage.jwt === undefined ? (
          <img className="electricalbox" src="/src/assets/images/openwire.png" />
        ) : (
          <>
            <img className="electricalbox" src={isBoxFixed} />
            <img className="electricalbox" id="wires" src={blueWire} />
            <img className="electricalbox" id="wires" src={redWire} />
          </>
        )}

        <button onClick={handleFixBlue} className="bluewire2"></button>
        <button onClick={handleFixBlue} className="bluewire"></button>
        <button onClick={handleFixRed} className="redwire2"></button>
        <button onClick={handleFixRed} className="redwire"></button>

        <img
          src={face}
          style={{
            position: "absolute",
            width: "60vw",
            top: "40px",
            left: "40px",
            zIndex: 21,
          }}
        />

        <img
          id="pupils"
          src={pupils}
          style={{
            position: "relative",
            width: "60vw",
            zIndex: 20,
          }}
        />

        {/* {(document.getElementById("pupils").style.width = left)} */}
        {console.log()}
      </div>
    </div>
  );
}
