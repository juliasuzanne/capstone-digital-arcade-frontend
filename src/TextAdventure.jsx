import axios from "axios";
import { useState, useEffect } from "react";

export function TextAdventure(props) {
  console.log(props);
  const [errors, setErrors] = useState([]);
  const [points, setPoints] = useState(0);
  let [text, setText] = useState("Let's get started");
  let [step, setStep] = useState(0);
  let [buttonText, setButtonText] = useState("Start");
  let [buttonTextTwo, setButtonTextTwo] = useState("Now");

  const currentPoints = props.user.points;

  const getPoints = () => {
    setPoints(points + 1);
  };

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

  const handleChangeText = () => {
    if (step === 0) {
      setText("We've started");
      setButtonText("Now what happens?");
      setButtonTextTwo("I don't understand.");
      setStep(1);
      setPoints(points + 20);
    }
  };

  const handleChangeTextTwo = () => {
    if (step === 0) {
      setText("Now?");
      setButtonText("Yes, Now");
      setButtonTextTwo("Tell me a story");
      setStep(2);
      setPoints(points + 20);
    } else if (step === 1) {
      setText("Please try harder to understand.");
      setStep(4);
      setButtonText("End");
      setButtonText("End");
    } else if (step === 2) {
      setText("Here is your story:");
      setStep(4);
      setButtonText("End");
      setButtonText("End");
    }
  };

  return (
    <div>
      <p>{text}</p>
      <button className="plain" onClick={handleChangeText}>
        {" "}
        {buttonText}
      </button>
      <button className="plain" onClick={handleChangeTextTwo}>
        {" "}
        {buttonTextTwo}
      </button>
      <p>{points}</p>
      <button className="buttonGrey" onClick={handleGetPoints}>
        {" "}
        submit score{" "}
      </button>
    </div>
  );
}
