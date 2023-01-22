import axios from "axios";
import { useState, useEffect } from "react";

export function TextAdventure(props) {
  console.log(props);
  const [errors, setErrors] = useState([]);
  const [points, setPoints] = useState(0);
  let [text, setText] = useState("Hello, welcome.");
  let [step, setStep] = useState(0);
  let [buttonText, setButtonText] = useState("Hello, how are you?");
  let [buttonTextTwo, setButtonTextTwo] = useState("Can you help me? I'm having trouble finding my way around.");

  const currentPoints = props.user.points;

  const getPoints = () => {
    setPoints(points + 1);
  };

  const handleGetPoints = () => {
    let newPoints = points + props.user.points;
    axios
      .patch("https://moon--egg.fly.dev/users", { points: newPoints })
      .then((window.location.href = "/"))
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
    setPoints(0);
  };

  const handleChangeText = () => {
    if (step === 0) {
      setText("I'm the same as I was yesterday and the same as I will be tomorrow.");
      setButtonText("Can I buy something here?");
      setButtonTextTwo("What is your name?");
      setStep(1);
    } else if (step === 1) {
      setText(
        "You can buy things here only with points you earn from this world. I can show you what's currently available if you click on this case below my hands."
      );
      setButtonText("Thanks, that's enough.");
      setButtonTextTwo("How do I earn points from this world?");
      setStep(2);
    } else if (step === 2) {
      props.onClose();
    } else if (step === 3) {
      setText(
        "Use the exit to go outside. You can go in this curtained room here to catalog artifacts for display. You can go explore downstairs. Also - just poke around and see what you can find. There are always new mysteries waiting to be solved."
      );
      setStep(7);
      setButtonText("Okay, thanks.");
      setButtonTextTwo("Mysteries?");
    } else if (step === 5) {
      setText("Just use the exit.");
      setStep(10);
      setButtonText("");
      setButtonTextTwo("");
    } else if (step === 6) {
      props.onClose();
    } else if (step === 7) {
      props.onClose();
    } else if (step === 4) {
      props.onClose();
    } else if (step === 11) {
      props.onClose();
    }
  };

  const handleChangeTextTwo = () => {
    if (step === 0) {
      setText("Sure, I can help you. What do you want to know?");
      setButtonText("Can you give me an overview on how this room works?");
      setButtonTextTwo("I'm feeling lost in life in general. I could use any advice.");
      setStep(3);
    } else if (step === 1) {
      setText("My name is Julia.");
      setButtonText("Mine, too.");
      setButtonTextTwo("So is mine.");
      setStep(11);
    } else if (step === 2) {
      setText(
        "You earn points by fixing things around here and cleaning up. To see what tasks need to get done, you can check this computer over to my left."
      );
      setButtonText("Okay, I'll do that.");
      setButtonTextTwo("I don't feel like working. Can you tell me a story?");
      setStep(6);
    } else if (step === 3) {
      setText("I can give you a psychic reading. Would you be interested in that?");
      setStep(4);
      setButtonText("Yes, absolutely.");
      setButtonTextTwo("No, thanks.");
    } else if (step === 4) {
      setText(
        "Okay, well we have a belief here that if you go outside and talk to the moon, she can give you some good advice as well."
      );
      setButtonText("Where do I find her?");
      setButtonTextTwo("");
      setStep(5);
    } else if (step === 6) {
      setText("Insert story here");
      setButtonText("");
      setButtonTextTwo("...");
      setStep(8);
    } else if (step === 7) {
      setText("Yes, mysteries.");
      setButtonText("");
      setButtonTextTwo("");
    } else if (step === 8) {
      props.onClose();
    } else if (step === 11) {
      props.onClose();
    }
  };

  return (
    <div>
      <p>{text}</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <button className="plain" onClick={handleChangeText}>
        {" "}
        {buttonText}
      </button>
      <br></br>
      <button className="plain" onClick={handleChangeTextTwo}>
        {" "}
        {buttonTextTwo}
      </button>
      {/* <p>{points}</p>
      <button className="buttonGrey" onClick={handleGetPoints}>
        {" "}
        submit score{" "}
      </button> */}
    </div>
  );
}
