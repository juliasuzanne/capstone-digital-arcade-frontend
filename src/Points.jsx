import { useState } from "react";
import axios from "axios";

export function Points(props) {
  let [points, setPoints] = useState(0);

  function getPoints() {
    setPoints(points + 1);
  }

  return (
    <div>
      <p>Points: {points}</p>
      <button onClick={getPoints}> Get Points </button>
    </div>
  );
}
