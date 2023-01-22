import axios from "axios";
import { useState, useEffect } from "react";
import { ShowMap } from "./ShowMap.jsx";
import { Face } from "./Face.jsx";

export function Index() {
  let [currentUser, setCurrentUser] = useState([]);
  const [errors, setErrors] = useState([]);

  let [isMapVisible, setIsMapVisible] = useState(false);
  let image = "/images/map.png";

  const handleShowMap = () => {
    setIsMapVisible(true);
  };

  const handleClose = () => {
    setIsMapVisible(false);
  };

  const handleCurrentUser = () => {
    axios.get("https://moon--egg.fly.dev/users.json").then((response) => {
      console.log(response);
      setCurrentUser(response.data);
    });
  };

  useEffect(handleCurrentUser, []);

  return (
    <div>
      {/* <ShowMap
        show={isMapVisible}
        image={<img src="/images/map.png" width="500" />}
        onClose={handleClose}
      ></ShowMap>
      <div>
        <button onClick={handleShowMap}>
          <img className="hand" src="/images/hand_map.png" width="200px" />
        </button>
      </div> */}
      {/* <div>
        <img className="scene" src="/images/scene.jpg"/>
      </div> */}
      <Face />
    </div>
  );
}
