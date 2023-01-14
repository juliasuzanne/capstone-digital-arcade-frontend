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
  const [mediaImage, setMediaImage] = useState("/src/assets/images/closedboxmedia.png");
  const [paintingImage, setPaintingImage] = useState("/src/assets/images/paintingsclosed.png");
  const [bakingImage, setBakingImage] = useState("/src/assets/images/pastryclosed.png");
  const [miscImage, setMiscImage] = useState("/src/assets/images/mysteryclosed.png");
  const [clothesImage, setClothesImage] = useState("/src/assets/images/fullclothes.png");
  const [paintingShow, setPaintingShow] = useState(false);
  const [sewingShow, setSewingShow] = useState(false);
  const [bakingShow, setBakingShow] = useState(false);
  const [miscShow, setMiscShow] = useState(false);

  const [category, setCategory] = useState("");
  const [currentItem, setCurrentItem] = useState([]);

  const handleGetItems = () => {
    axios.get(`https://patient-wood-4884.fly.dev/items.json?cat=painting`).then((response) => {
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
      .post("https://patient-wood-4884.fly.dev/artifacts", params)
      // .then((window.location.href = "/artifacts/all"))
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
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
      setMediaImage("/src/assets/images/openedboxmedia.png");
    } else {
      setMediaShow(false);
      setMediaImage("/src/assets/images/closedboxmedia.png");
    }
  };

  const handleTogglePainting = () => {
    if (paintingShow === false) {
      setPaintingShow(true);
      setPaintingImage("/src/assets/images/paintingsopen.png");
    } else {
      setPaintingShow(false);
      setPaintingImage("/src/assets/images/paintingsclosed.png");
    }
  };

  const handleToggleBaking = () => {
    if (bakingShow === false) {
      setBakingShow(true);
      setBakingImage("/src/assets/images/pastryopen.png");
    } else {
      setBakingShow(false);
      setBakingImage("/src/assets/images/pastryclosed.png");
    }
  };

  const handleToggleMisc = () => {
    if (miscShow === false) {
      setMiscShow(true);
      setMiscImage("/src/assets/images/mysteryopen.png");
    } else {
      setMiscShow(false);
      setMiscImage("/src/assets/images/mysteryclosed.png");
    }
  };

  const handleToggleSewing = () => {
    if (sewingShow === false) {
      setSewingShow(true);
      setClothesImage("/src/assets/images/emptyclothes.png");
    } else {
      setSewingShow(false);
      setClothesImage("/src/assets/images/fullclothes.png");
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
      <Modal show={show} onClose={handleNoCatalog}>
        <form onSubmit={handleNewArtifact}>
          <div>
            Name:
            <input name="name" className="myform" type="string" />
          </div>
          <div>
            Price:
            <input className="myform" name="price_in_points" type="integer" />
          </div>
          <div>
            <input hidden name="image_url" type="string" defaultValue={currentItem}></input>
          </div>
          <img src={currentItem} className="myimage" width="300px" />
          <div>
            <button type="submit" background-color="black">
              submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
