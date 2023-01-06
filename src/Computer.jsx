import { Snake } from "./Snake";
import { ComputerModal } from "./ComputerModal";
import { useState } from "react";
import "./computer.css";

export function Computer() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      <div className="computerbackground"></div>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={handleShow}>
        <img id="snake" src="./src/assets/images/snakegame.png" />
      </button>
      <ComputerModal show={show} onClose={handleClose}>
        <div id="snakeDiv">
          <Snake />
        </div>
      </ComputerModal>
      <button onClick={handleShow}>
        <img id="tasks" src="./src/assets/images/tasklist.png" />
        play snake
      </button>
      <button onClick={handleShow}>
        <img id="romancemovie" src="./src/assets/images/romancemovie.png" />
      </button>
    </div>
  );
}
