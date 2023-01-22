import { useEffect, useState } from "react";
import pupils from "/images/pupils.png";
import axios from "axios";

// import { autoType, forceCenter } from "d3";

export function Face() {
  const [mousePos, setMousePos] = useState({});
  const [errors, setErrors] = useState([]);
  const [isBoxFixed, setIsBoxFixed] = useState("");
  const [points, setPoints] = useState(0);
  const [blueWire, setBlueWire] = useState("https://i.ibb.co/bKn1fVL/blueopen.png");
  const [redWire, setRedWire] = useState("https://i.ibb.co/LtVjfHx/redopen.png");
  let [currentUser, setCurrentUser] = useState([]);

  const handleCurrentUser = () => {
    axios.get("https://moon--egg.fly.dev/users.json").then((response) => {
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
      .patch("https://moon--egg.fly.dev/users", { fixed: true, points: newPoints })
      .then((window.location.href = "/"))
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  const checkBoxFixed = () => {
    if (currentUser.fixed === true) {
      setIsBoxFixed("https://i.ibb.co/YX1t4rS/closedbox.png");
      setBlueWire("");
      setRedWire("");
    } else {
      setIsBoxFixed("/images/blankbox.png");
      // setBlueWire("https://i.ibb.co/bKn1fVL/blueopen.png");
      // setRedWire("https://i.ibb.co/LtVjfHx/redopen.png");
    }
  };

  const handleFixRed = () => {
    if (blueWire === "https://i.ibb.co/CvpXmPf/blueclosed.png") {
      setIsBoxFixed("https://i.ibb.co/YX1t4rS/closedbox.png");
      setBlueWire("");
      setRedWire("");
      setPoints(50);
      handleFixBox();
    } else {
      setRedWire("https://i.ibb.co/R03ZZ07/redclosed.png");
    }
  };

  const handleFixBlue = () => {
    if (redWire === "https://i.ibb.co/R03ZZ07/redclosed.png") {
      setIsBoxFixed("https://i.ibb.co/YX1t4rS/closedbox.png");
      setBlueWire("");
      setRedWire("");
      setPoints(50);
      handleFixBox();
    } else {
      console.log("fixed blue");
      setBlueWire("https://i.ibb.co/CvpXmPf/blueclosed.png");
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
          <img className="electricalbox" src="https://i.ibb.co/bskm30G/openwire.png" />
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
          src="https://i.ibb.co/nzVZx9m/face.png"
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
