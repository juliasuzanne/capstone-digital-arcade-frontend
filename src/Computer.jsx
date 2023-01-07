import { Snake } from "./Snake";
import { ComputerModal } from "./ComputerModal";
import { useState } from "react";
import "./computer.css";
import { Romeo } from "./Romeo";
import { VideoModal } from "./VideoModal";

export function Computer() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleShow = () => {
    setShow(true);
    document.body.style.overflow = "hidden";
  };
  const handleClose = () => {
    setShow(false);
    document.body.style.overflow = "unset";
  };

  const handleShow2 = () => {
    setShow2(true);
    document.body.style.overflow = "hidden";
  };
  const handleClose2 = () => {
    setShow2(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div scroll="no">
      <div className="computerbackground"></div>
      <br></br>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          handleShow();
        }}
      >
        <img id="snake" src="./src/assets/images/snakegame.png" />
      </button>
      <ComputerModal show={show} onClose={handleClose}>
        <div id="snakeDiv">
          <Snake />
        </div>
      </ComputerModal>
      <VideoModal show={show2} onClose={handleClose2}>
        <div id="movieplayer">
          <Romeo />
        </div>
      </VideoModal>
      <button
        onClick={() => {
          handleShow();
        }}
      >
        <img id="tasks" src="./src/assets/images/tasklist.png" />
      </button>
      <button
        onClick={() => {
          handleShow2();
        }}
      >
        <img id="romancemovie" src="./src/assets/images/romancemovie.png" />
      </button>
    </div>
  );
}
