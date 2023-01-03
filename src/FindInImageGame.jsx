import { useEffect, useState } from "react";
import { Image1 } from "./Images/Image1";
import { Image2 } from "./Images/Image2";
import { Image3 } from "./Images/Image3";
import { Image4 } from "./Images/Image4";
import { SubmitScore } from "./SubmitScore";
import axios from "axios";

export function FindInImageGame(props) {
  let [imagesFound, setImagesFound] = useState(0);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);
  const [points, setPoints] = useState(0);

  const currentPoints = props.user.points;

  const handleGetPoints = () => {
    let newPoints = points + props.user.points;
    axios
      .patch("http://localhost:3000/users", { points: newPoints })
      .then((window.location.href = "/"))
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
    setPoints(0);
  };

  const checkWin = () => {
    if (imagesFound === 3) {
      setMessage("You found everything!");
      handleGetPoints();
    } else {
      setMessage("Keep looking ...");
    }
  };

  const foundImage = () => {
    checkWin();
    console.log(points);
    console.log(imagesFound);
  };

  const handleImageClick1 = () => {
    setShow1(false);
    setImagesFound(imagesFound + 1);
    setPoints(points + 1);
    foundImage();
  };

  const handleImageClick2 = () => {
    setShow2(false);
    setImagesFound(imagesFound + 1);
    setPoints(points + 1);
    foundImage();
  };

  const handleImageClick3 = () => {
    setShow3(false);
    setImagesFound(imagesFound + 1);
    setPoints(points + 1);
    foundImage();
  };

  const handleImageClick4 = () => {
    setShow4(false);
    setImagesFound(imagesFound + 1);
    setPoints(points + 1);
    foundImage();
  };

  return (
    <div>
      <Image1 show={show1} click={handleImageClick1} image={Image1} />
      <Image2 show={show2} click={handleImageClick2} image={Image2} />
      <Image3 show={show3} click={handleImageClick3} image={Image3} />
      <Image4 show={show4} click={handleImageClick4} image={Image4} />
      <p>Message: {message}</p>
      <p> {points} </p>
      <p> {imagesFound} </p>
      <img
        className="imagegamebackground"
        src="https://s3.amazonaws.com/finegardening.s3.tauntoncloud.com/app/uploads/2018/03/22095154/IMG_4045.jpg"
      />
    </div>
  );
}
