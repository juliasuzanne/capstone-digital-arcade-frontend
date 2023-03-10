import { useRef, useEffect, useState } from "react";
import pupils from "/images/pupils.png";
import axios from "axios";

// import { autoType, forceCenter } from "d3";

export function Face() {
  const [id, setId] = useState(0);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const [mousePos, setMousePos] = useState({});
  const [errors, setErrors] = useState([]);
  const [isBoxFixed, setIsBoxFixed] = useState("");
  const [blueWire, setBlueWire] = useState("https://i.ibb.co/bKn1fVL/blueopen.png");
  const [redWire, setRedWire] = useState("https://i.ibb.co/LtVjfHx/redopen.png");
  let [currentUser, setCurrentUser] = useState([]);

  const handleCurrentUser = () => {
    axios.get("https://moon--egg.fly.dev/users.json").then((response) => {
      console.log(response);
      setCurrentUser(response.data);
      setId(currentUser.id);
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
      .patch(`https://moon--egg.fly.dev/users/${id}`, { fixed: true, points: newPoints })
      .then((window.location.href = "/hotel"))
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
    }
  };

  const handleFixRed = () => {
    if (blueWire === "https://i.ibb.co/CvpXmPf/blueclosed.png") {
      setIsBoxFixed("https://i.ibb.co/YX1t4rS/closedbox.png");
      handleFixBox();
    } else {
      setRedWire("https://i.ibb.co/R03ZZ07/redclosed.png");
    }
  };

  const handleFixBlue = () => {
    if (redWire === "https://i.ibb.co/R03ZZ07/redclosed.png") {
      setIsBoxFixed("https://i.ibb.co/YX1t4rS/closedbox.png");
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
    root.style.setProperty("--left", String((event.clientX + 500) * 0.025) + "px");
    root.style.setProperty("--top", String((event.clientY - 1900) * 0.03) + "px");
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

  document.body.style.overflow = "hidden";

  return (
    <div>
      <div className="face"> </div>
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
          <img className="electricalbox" src="images/openwire.png" />
        ) : (
          <>
            <img className="electricalbox" src={isBoxFixed} />
            <img className="electricalbox" id="wires" src={blueWire} />
            <img className="electricalbox" id="wires" src={redWire} />
          </>
        )}
        <div className="onelectricalbox">
          <button onClick={handleFixBlue} className="bluewire2"></button>
          <button onClick={handleFixBlue} className="bluewire"></button>
          <button onClick={handleFixRed} className="redwire2"></button>
          <button onClick={handleFixRed} className="redwire"></button>
        </div>

        <div id="paintingcontents">
          <img
            src="images/face.png"
            style={{
              position: "absolute",
              width: "530px",
              top: "-50px",
              left: "20px",
              zIndex: 21,
            }}
          />

          <img
            id="pupils"
            src={pupils}
            style={{
              position: "absolute",
              width: "530px",
              zIndex: 19,
            }}
          />

          <img
            src="images/foeglass.png"
            style={{
              position: "absolute",
              width: "530px",
              top: "-50px",
              left: "20px",
              zIndex: 18,
            }}
          />
        </div>

        {/* {(document.getElementById("pupils").style.width = left)} */}
        {console.log()}
      </div>
    </div>
  );
}
