import { useEffect, useState } from "react";
import face from "./assets/images/face.png";
import pupils from "./assets//images/pupils.png";
import axios from "axios";

// import { autoType, forceCenter } from "d3";

export function Face() {
  const [mousePos, setMousePos] = useState({});
  const [errors, setErrors] = useState([]);
  const [isBoxFixed, setIsBoxFixed] = useState("");
  const [points, setPoints] = useState(0);
  const [blueWire, setBlueWire] = useState("./assets/images/blueopen.png");
  const [redWire, setRedWire] = useState("./assets/images/redopen.png");
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
      setIsBoxFixed("./assets/images/closedbox.png");
      setBlueWire("");
      setRedWire("");
    } else {
      setIsBoxFixed("./assets/images/blankbox.png");
      // setBlueWire("./assets/images/blueopen.png");
      // setRedWire("./assets/images/redopen.png");
    }
  };

  const handleFixRed = () => {
    if (blueWire === "./assets/images/blueclosed.png") {
      setIsBoxFixed("./assets/images/closedbox.png");
      setBlueWire("");
      setRedWire("");
      setPoints(50);
      handleFixBox();
    } else {
      setRedWire("./assets/images/redclosed.png");
    }
  };

  const handleFixBlue = () => {
    if (redWire === "./assets/images/redclosed.png") {
      setIsBoxFixed("./assets/images/closedbox.png");
      setBlueWire("");
      setRedWire("");
      setPoints(50);
      handleFixBox();
    } else {
      console.log("fixed blue");
      setBlueWire("./assets/images/blueclosed.png");
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
          <img className="electricalbox" src="./assets/images/openwire.png" />
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
