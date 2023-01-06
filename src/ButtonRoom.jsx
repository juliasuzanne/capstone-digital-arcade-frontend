import { useEffect, useState } from "react";
import { Light } from "./Images/Light";
import axios from "axios";

// import face from "./assets/images/facepainting.png";
// import pupils from "./assets//images/pupilspainting.png";
// import { autoType } from "d3";
import { ConversationModal } from "./ConversationModal";
import { Home } from "./Home";

export function ButtonRoom() {
  const [items, setItems] = useState([]);

  const [mousePos, setMousePos] = useState({});
  const [showLight, setShowLight] = useState(false);
  const [openCurtain, setOpenCurtain] = useState(true);
  let [array, setArray] = useState([]);
  const [image, setImage] = useState("./src/assets/images/closecurtainorange.png");
  const [stairs, setStairs] = useState("./src/assets/images/stairs.png");

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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

  let [isConversationVisible, setIsConversationVisible] = useState(false);

  const handleShowConversation = () => {
    setIsConversationVisible(true);
  };

  const handleCloseConversation = () => {
    setIsConversationVisible(false);
  };

  const exitRoom = () => {
    window.location.href = "/outside";
  };

  const computer = () => {
    window.location.href = "/computer";
  };

  const seeArtifacts = () => {
    window.location.href = "/artifacts/all";
  };
  const catalog = () => {
    window.location.href = "/artifactroom";
  };

  const movingEyes = () => {
    window.location.href = "/face";
  };

  const handleGetItems = () => {
    axios.get("http://localhost:3000/artifacts/all.json").then((response) => {
      console.log(response);
      setItems(response.data);
    });
  };

  const handleShowItems = () => {
    handleGetItems();
  };

  useEffect(handleShowItems, []);

  return (
    <div className="buttonRoom">
      <button onClick={exitRoom}>
        <img id="exit" src="./src/assets/images/exit.png" />
      </button>
      <img src="./src/assets/images/eyespainting.png" className="eyesPaintingActual" />
      <button className="eyesPainting" onClick={movingEyes}></button>
      <button onClick={computer}>
        <img id="computer" src="./src/assets/images/computer.png" />
      </button>

      <button onClick={handleShowLight}>
        <img id="lightswitch" src="./src/assets/images/lightswitch.png" />
      </button>
      <button id="artifactbox" onClick={seeArtifacts}></button>
      <button onClick={exitRoom}>
        <img id="exit" src="./src/assets/images/exit.png" />
      </button>

      <button
        id="opencurtain"
        onMouseEnter={() => setImage("./src/assets/images/opencurtainorange.png")}
        onMouseLeave={() => setImage("./src/assets/images/closecurtainorange.png")}
        onClick={catalog}
      ></button>

      <button
        id="stairs"
        onMouseEnter={() => setStairs("./src/assets/images/stairslight.png")}
        onMouseLeave={() => setStairs("./src/assets/images/stairs.png")}
        onClick={exitRoom}
      ></button>

      {/* <Curtain show={openCurtain} /> */}
      <img className="counterJulia" src="./src/assets/images/counterJulia.gif" />
      <img className="counter" src="./src/assets/images/counter.png" />
      <img className="roombackground" src="./src/assets/images/home_background.png" />
      <img className="opencurtain" src={image} />
      <img className="stairsImage" src={stairs} />
      <Light show={showLight} />
      <button className="talk" onClick={handleShowConversation}>
        {" "}
        talk{" "}
      </button>
      <ConversationModal show={isConversationVisible} onClose={handleCloseConversation}>
        <Home onClose={handleCloseConversation} />
      </ConversationModal>
      <button className="note"></button>
      <div id="artifactsinbox">
        {" "}
        {items.slice(0, 10).map((item) => (
          <img src={item.image_url} width="30px" />
        ))}{" "}
      </div>
    </div>
  );
}
