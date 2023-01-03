import { useEffect, useState } from "react";
import { Image } from "./Images/Image";
import axios from "axios";

export function FindInImageGame() {
  let [imagesFound, setImagesFound] = useState([]);
  const [show, setShow] = useState(true);
  const [images, setImages] = useState([]);

  const handleIndexImages = () => {
    axios.get("http://localhost:3000/images.json").then((response) => {
      console.log(response);
      setImages(response.data);
    });
  };

  const handleImageClick = () => {
    setShow(false);
  };

  useEffect(handleIndexImages, []);

  return (
    <div>
      <Image show={show} click={handleImageClick} images={images} />
    </div>
  );
}
