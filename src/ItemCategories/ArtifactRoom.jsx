import axios from "axios";
import { Modal } from "../Modal";
import { Media } from "./Media";
import { Painting } from "./Painting";
import { Sewing } from "./Sewing";
import { Baking } from "./Baking";
import { Misc } from "./Misc";
import { useState, useEffect } from "react";

export function ArtifactRoom() {
  const [errors, setErrors] = useState([]);
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [mediaShow, setMediaShow] = useState(false);
  const [mediaImage, setMediaImage] = useState("https://i.ibb.co/XpxxNR7/closedboxmedia.png");
  const [paintingImage, setPaintingImage] = useState("https://i.ibb.co/nRN1gRf/paintingsclosed.png");
  const [bakingImage, setBakingImage] = useState("https://i.ibb.co/jHNVJkN/pastryclosed.png");
  const [miscImage, setMiscImage] = useState("https://i.ibb.co/0FGHGpZ/mysteryclosed.png");
  const [clothesImage, setClothesImage] = useState("https://i.ibb.co/Tb1Shjj/fullclothes.png");
  const [paintingShow, setPaintingShow] = useState(false);
  const [sewingShow, setSewingShow] = useState(false);
  const [bakingShow, setBakingShow] = useState(false);
  const [miscShow, setMiscShow] = useState(false);

  const [category, setCategory] = useState("");
  const [currentItem, setCurrentItem] = useState([]);

  const handleGetItems = () => {
    axios.get(`https://moon-egg.fly.dev/items.json?cat=painting`).then((response) => {
      console.log(response);
      setItems(response.data);
    });
  };

  const handleNewArtifact = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateArtifact(params);
    event.target.reset();
  };

  const handleCreateArtifact = (params) => {
    axios
      .post("https://moon-egg.fly.dev/artifacts", params)
      // .then((window.location.href = "/artifacts/all"))
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
    handleNoCatalog();
  };

  const handleCatalog = () => {
    setShow(true);
  };

  const handleNoCatalog = () => {
    setShow(false);
  };

  const handleToggleMedia = () => {
    if (mediaShow === false) {
      setMediaShow(true);
      setMediaImage("https://i.ibb.co/sqCYg3t/openedboxmedia.png");
    } else {
      setMediaShow(false);
      setMediaImage("https://i.ibb.co/XpxxNR7/closedboxmedia.png");
    }
  };

  const handleTogglePainting = () => {
    if (paintingShow === false) {
      setPaintingShow(true);
      setPaintingImage("https://i.ibb.co/qpcVTR7/paintingsopen.png");
    } else {
      setPaintingShow(false);
      setPaintingImage("https://i.ibb.co/nRN1gRf/paintingsclosed.png");
    }
  };

  const handleToggleBaking = () => {
    if (bakingShow === false) {
      setBakingShow(true);
      setBakingImage("https://i.ibb.co/p4b9GTZ/pastryopen.png");
    } else {
      setBakingShow(false);
      setBakingImage("https://i.ibb.co/jHNVJkN/pastryclosed.png");
    }
  };

  const handleToggleMisc = () => {
    if (miscShow === false) {
      setMiscShow(true);
      setMiscImage("https://i.ibb.co/JchLGNM/mysteryopen.png");
    } else {
      setMiscShow(false);
      setMiscImage("https://i.ibb.co/0FGHGpZ/mysteryclosed.png");
    }
  };

  const handleToggleSewing = () => {
    if (sewingShow === false) {
      setSewingShow(true);
      setClothesImage("https://i.ibb.co/4PFT5Kc/emptyclothes.png");
    } else {
      setSewingShow(false);
      setClothesImage("https://i.ibb.co/Tb1Shjj/fullclothes.png");
    }
  };

  return (
    <div className="roomy">
      <button onClick={handleToggleMedia}>
        {" "}
        <img id="mediaImage" src={mediaImage} />{" "}
      </button>
      <button onClick={handleTogglePainting}>
        {" "}
        <img id="paintingImage" src={paintingImage} width="300px" />{" "}
      </button>
      <button onClick={handleToggleBaking}>
        {" "}
        <img id="bakingImage" src={bakingImage} />{" "}
      </button>
      <button onClick={handleToggleMisc}>
        {" "}
        <img id="miscImage" src={miscImage} width="300px" />{" "}
      </button>
      <button onClick={handleToggleSewing}>
        {" "}
        <img id="clothesImage" src={clothesImage} width="300px" />{" "}
      </button>
      <button onClick={handleTogglePainting}> </button>
      <button onClick={handleToggleSewing}> </button>
      <Media show={mediaShow} />
      <Painting show={paintingShow} />
      <Sewing show={sewingShow} />
      <Baking show={bakingShow} />
      <Misc show={miscShow} />
      {items.map((item) => (
        <button
          onClick={() => {
            handleCatalog();
            setCurrentItem(item.image_url);
            console.log(currentItem);
          }}
        >
          <img src={item.image_url} width="200px" />
        </button>
      ))}
    </div>
  );
}
