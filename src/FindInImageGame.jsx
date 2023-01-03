import { useEffect, useState } from "react";

export function FindInImageGame() {
  let [imagesFound, setImagesFound] = useState([]);
  let [show1, setShow1] = useState("true");
  let [show2, setShow2] = useState("true");

  const handleImageClick1 = () => {
    console.log("1");
    setShow1("false");
  };
  const handleImageClick2 = () => {
    console.log("2");
    setShow2("false");
  };

  return (
    <div>
      <button show={show1} onClick={handleImageClick1}>
        image1
      </button>
      <button show={show2} onClick={handleImageClick2}>
        image2
      </button>
    </div>
  );
}
