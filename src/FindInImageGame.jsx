import { useEffect, useState } from "react";
import { Image1 } from "./Images/Image1";
import { Image2 } from "./Images/Image2";

export function FindInImageGame() {
  let [imagesFound, setImagesFound] = useState([]);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);

  const handleImageClick1 = () => {
    console.log("1");
    setShow1(false);
  };
  const handleImageClick2 = () => {
    console.log("2");
    setShow2(false);
  };

  return (
    <div>
      <Image1 show={show1} click={handleImageClick1} />
      <Image2 show={show2} click={handleImageClick2} />
    </div>
  );
}
