import axios from "axios";
import { useState, useEffect } from "react";

export function TextAdventure(props) {
  console.log(props);
  const [errors, setErrors] = useState([]);
  const [points, setPoints] = useState(0);
  let [text, setText] = useState("Let's get started");
  let [step, setStep] = useState(0);
  let [buttonText, setButtonText] = useState("Start");
  let [buttonTextTwo, setButtonTextTwo] = useState("Second button");

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
      setText("Step2");
      setButtonText("Go to Step 2");
      setButtonTextTwo("Go to Step 1");
      setStep(1);
    } else if (step === 1) {
      setText("Step 1");
      setStep(2);
      setButtonText("Go to Step 3");
      setButtonText("Got to Step 4");
    }
  };

  return (
    <div>
      <p>{text}</p>
      <button className="plain" onClick={handleChangeText}>
        {" "}
        {buttonText}
      </button>
      <button className="plain" onClick={handleChangeText}>
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
