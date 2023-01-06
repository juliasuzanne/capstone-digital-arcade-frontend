import { useEffect, useState } from "react";
import { Curtain } from "./Images/Curtain";
import { Light } from "./Images/Light";
import { Header } from "./Header";
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
  const [image, setImage] = useState("./src/assets/images/curtainclosebutton.png");

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

  const seeArtifacts = () => {
    window.location.href = "/artifacts/all";
  };
  const catalog = () => {
    window.location.href = "/artifactroom";
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

      <button onClick={handleShowLight}>
        <img id="lightswitch" src="./src/assets/images/lightswitch.png" />
      </button>
      <button id="artifactbox" onClick={seeArtifacts}></button>
      <button onClick={exitRoom}>
        <img id="exit" src="./src/assets/images/exit.png" />
      </button>
      <button
        id="opencurtain"
        onMouseEnter={() => setImage("./src/assets/images/curtainopenbutton.png")}
        onMouseLeave={() => setImage("./src/assets/images/curtainclosebutton.png")}
        onClick={catalog}
      ></button>
      {/* <Curtain show={openCurtain} /> */}
      <img className="counterJulia" src="./src/assets/images/counterJulia.png" />
      <img className="counter" src="./src/assets/images/counter.png" />
      <img className="roombackground" src="./src/assets/images/home_background.png" />
      <img className="opencurtain" src={image} />
      <Light show={showLight} />
      <button className="talk" onClick={handleShowConversation}>
        {" "}
        talk{" "}
      </button>
      <ConversationModal show={isConversationVisible} onClose={handleCloseConversation}>
        <Home />
      </ConversationModal>

      <div id="artifactsinbox">
        {" "}
        {items.slice(0, 10).map((item) => (
          <img src={item.image_url} width="30px" />
        ))}{" "}
      </div>
    </div>
  );
}
