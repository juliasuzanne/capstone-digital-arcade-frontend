import { useEffect, useState } from "react";
import { Light } from "./Images/Light";
import axios from "axios";
import { Modal3 } from "./Modal3";
import { Sound } from "./Sound";

// import face from "./src/assets/images/facepainting.png";
// import pupils from "./src/assets//images/pupilspainting.png";
// import { autoType } from "d3";
import { ConversationModal } from "./ConversationModal";
import { Home } from "./Home";
import { ThreeD } from "./ThreeD";

export function ButtonRoom() {
  const [isTalking, setIsTalking] = useState(false);
  const [talkText, setTalkText] = useState("");
  const [showLight, setShowLight] = useState(false);
  const [openCurtain, setOpenCurtain] = useState(true);
  const [grate, setGrate] = useState("");
  const [fixed, setFixed] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [isBoxFixed, setIsBoxFixed] = useState(false);
  let [array, setArray] = useState([]);
  const [image, setImage] = useState("./assets/images/closecurtainorange.png");
  const [stairs, setStairs] = useState("./assets/images/stairs.png");
  let [currentUser, setCurrentUser] = useState([]);
  const [items, setItems] = useState([]);

  const handleCurrentUser = () => {
    axios.get("https://patient-wood-4884.fly.dev/users.json").then((response) => {
      console.log(response);
      setCurrentUser(response.data);
    });
  };

  const checkBoxFixed = () => {
    if (currentUser.fixed === true) {
      setIsBoxFixed("./assets/images/closedbox.png");
      setFixed(true);
    } else {
      setIsBoxFixed("./assets/images/openwire.png");
      setFixed(false);
    }
  };

  useEffect(handleCurrentUser, []);

  function handleShowLight() {
    if (showLight === false && fixed === true) {
      setShowLight(true);
    } else if (showLight === true && fixed === true) {
      setShowLight(false);
    } else {
      setShowLight(false);
      setIsTalking(false);
      setTalkText("It's been broken for awhile. I think it has something to do with those exposed wires.");
    }
  }

  const handleShowNote = () => {
    setShowNote(true);
  };

  const handleHideNote = () => {
    setShowNote(false);
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
    axios.get("https://patient-wood-4884.fly.dev/artifacts/all.json").then((response) => {
      console.log(response);
      setItems(response.data);
    });
  };

  const handleShowItems = () => {
    handleGetItems();
  };

  const toggleTalking = () => {
    if (isTalking === true) {
      setIsTalking(false);
    } else {
      setIsTalking(true);
    }
  };

  useEffect(handleShowItems, []);
  useEffect(checkBoxFixed);

  return (
    <div className="buttonRoom">
      {localStorage.jwt === undefined ? (
        <img className="top-box" src="./assets/images/openwire.png" />
      ) : (
        <img className="top-box" src={isBoxFixed} />
      )}
      {/* 
      <img className="top-box" width="300px" src="./assets/images/openwire.png" /> */}
      <button onClick={toggleTalking} hidden={isTalking} id="talkingtome">
        <p>{talkText}</p>
      </button>
      <Sound />
      <img src="./assets/images/room_unpacking.png" className="artifactRoom" />
      <button onClick={exitRoom}>
        <img id="exit" src="./assets/images/exit.png" />
      </button>
      <img src="./assets/images/eyespainting.png" className="eyesPaintingActual" />
      <button className="eyesPainting" onClick={movingEyes}></button>
      <button onClick={computer}>
        <img id="computer" src="./assets/images/computer.png" />
      </button>
      <button onClick={handleShowLight}>
        <img id="lightswitch" src="./assets/images/lightswitch.png" />
      </button>
      <button id="artifactbox" onClick={seeArtifacts}></button>
      <button onClick={exitRoom}>
        <img id="exit" src="./assets/images/exit.png" />
      </button>
      <button
        id="opencurtain"
        onMouseEnter={() => setImage("./assets/images/opencurtainorange.png")}
        onMouseLeave={() => setImage("./assets/images/closecurtainorange.png")}
        onClick={catalog}
      ></button>
      <button
        id="stairs"
        onMouseEnter={() => setStairs("./assets/images/stairslight.png")}
        onMouseLeave={() => setStairs("./assets/images/stairs.png")}
        onClick={exitRoom}
      ></button>
      <button
        id="grate"
        onMouseEnter={() => setGrate("./assets/images/eyeballgrate.png")}
        onMouseLeave={() => setGrate("")}
        onClick={exitRoom}
      ></button>

      {/* <Curtain show={openCurtain} /> */}
      <img className="counterJulia" src="./assets/images/counterJulia.gif" />
      <img className="counter" src="./assets/images/counter.png" />
      <img className="roombackground" src="./assets/images/home_background.png" />
      <img className="opencurtain" src={image} />
      <img className="stairsImage" src={stairs} />
      <img className="grateImage" src={grate} />
      <Light show={showLight} />
      <button className="talk" onClick={handleShowConversation}>
        {" "}
        talk{" "}
      </button>
      <ConversationModal show={isConversationVisible} onClose={handleCloseConversation}>
        <Home onClose={handleCloseConversation} />
      </ConversationModal>
      <button className="note" onClick={handleShowNote}></button>
      <Modal3 show={showNote} onClose={handleHideNote}>
        <ThreeD />
      </Modal3>
      <div id="artifactsinbox">
        {" "}
        {items.slice(0, 10).map((item) => (
          <img src={item.image_url} width="30px" />
        ))}{" "}
      </div>
    </div>
  );
}
