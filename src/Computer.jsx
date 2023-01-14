import { Snake } from "./Snake";
import { ComputerModal } from "./ComputerModal";
import { useState } from "react";
import "./computer.css";
import { Romeo } from "./Romeo";
import { VideoModal } from "./VideoModal";

export function Computer() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const [show3, setShow3] = useState(false);

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

  const handleShow3 = () => {
    setShow3(true);
    document.body.style.overflow = "hidden";
  };
  const handleClose3 = () => {
    setShow3(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div scroll="no">
      <div className="computerbackground"></div>
      <br></br>
      <br></br>
      <br></br>

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

      <VideoModal show={show3} onClose={handleClose3}>
        <div id="movieplayer">
          <li>Fix the lights - 500pts</li>
          <li>Play snake - 5pts /apple</li>
          <li>Catalog an item - 1pt</li>
        </div>
      </VideoModal>

      <button
        onClick={() => {
          handleShow();
        }}
      >
        <img id="snake" src="/images/snakegame.png" />
      </button>

      <button
        onClick={() => {
          handleShow2();
        }}
      >
        <img id="romancemovie" src="/images/romancemovie.png" />
      </button>
      <button
        onClick={() => {
          handleShow3();
        }}
      >
        <img id="tasks" src="/images/tasklist.png" />
      </button>
    </div>
  );
}
