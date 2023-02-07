import { useEffect, useState } from "react";
import { Light } from "./Images/Light";
import axios from "axios";
import { Modal3 } from "./Modal3";
import { Login } from "./Login";
import { Sound } from "./Sound";
import React, { Suspense } from "react";
import homeBackground from "/images/home_background.png";
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
  const [image, setImage] = useState("images/closecurtainorange.png");
  const [stairs, setStairs] = useState("https://ibb.co/hMrwmH0");
  let [currentUser, setCurrentUser] = useState([]);
  const [items, setItems] = useState([]);

  const handleCurrentUser = () => {
    axios.get("https://moon--egg.fly.dev//users.json").then((response) => {
      console.log(response);
      setCurrentUser(response.data);
    });
  };

  const checkBoxFixed = () => {
    if (currentUser.fixed === true) {
      setIsBoxFixed("images/closedbox.png");
      setFixed(true);
    } else {
      setIsBoxFixed("images/openwire.png");
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
    axios.get("https://moon--egg.fly.dev//artifacts/all.json").then((response) => {
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
        <Login />
      ) : (
        <>
          <button onClick={toggleTalking} hidden={isTalking} id="talkingtome">
            <p>{talkText}</p>
          </button>
          <Sound />
          <img src="images/room_unpacking.png" className="artifactRoom" />
          <button onClick={exitRoom}>
            <img id="exit" src="images/exit.png" />
          </button>
          <Suspense fallback={<div>Loading...</div>}>
            <img className="top-box" src={isBoxFixed} />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            {" "}
            <img src="images/eyespainting.png" className="eyesPaintingActual" />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <button className="eyesPainting" onClick={movingEyes}></button>
          </Suspense>
          <Suspense>
            <button onClick={computer}>
              <img id="computer" src="images/computer.png" />
            </button>
          </Suspense>
          <Suspense>
            <button onClick={handleShowLight}>
              <img id="lightswitch" src="images/lightswitch.png" />
            </button>
          </Suspense>
          <Suspense>
            <button id="artifactbox" onClick={seeArtifacts}></button>
          </Suspense>
          <Suspense>
            <button onClick={exitRoom}>
              <img id="exit" src="images/exit.png" />
            </button>
          </Suspense>
          <Suspense>
            <button
              id="opencurtain"
              onMouseEnter={() => setImage("images/opencurtainorange.png")}
              onMouseLeave={() => setImage("images/closecurtainorange.png")}
              onClick={catalog}
            ></button>
          </Suspense>
          <Suspense>
            <button
              id="stairs"
              onMouseEnter={() => setStairs("images/stairslight.png")}
              onMouseLeave={() => setStairs("https://ibb.co/hMrwmH0")}
              onClick={exitRoom}
            ></button>
          </Suspense>
          <Suspense>
            <button
              id="grate"
              onMouseEnter={() => setGrate("images/eyeballgrate.png")}
              onMouseLeave={() => setGrate("")}
              onClick={exitRoom}
            ></button>
          </Suspense>
          <Suspense>
            <img className="counterJulia" src="images/counterJulia.gif" />
          </Suspense>
          <Suspense>
            <img className="counter" src="images/counter.png" />
          </Suspense>
          <Suspense>
            <img className="note" src="images/note.png" />
          </Suspense>
          <Suspense>
            <img className="roombackground" src="images/home_background.png" />
          </Suspense>
          <Suspense>
            <img className="opencurtain" src={image} />
          </Suspense>
          <Suspense>
            <img className="stairsImage" src={stairs} />
          </Suspense>
          <Suspense>
            <img className="grateImage" src={grate} />
          </Suspense>

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
          <Suspense>
            <div id="artifactsinbox">
              {" "}
              {items.slice(0, 10).map((item) => (
                <img src={item.image_url} width="30px" />
              ))}{" "}
            </div>
          </Suspense>
        </>
      )}
    </div>
  );
}
