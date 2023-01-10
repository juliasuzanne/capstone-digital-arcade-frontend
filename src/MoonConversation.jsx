import axios from "axios";
import { useState, useEffect } from "react";

export function MoonConversation(props) {
  console.log(props);
  const [errors, setErrors] = useState([]);
  const [points, setPoints] = useState(0);
  let [text, setText] = useState("HELLO, WHO IS THERE?");
  let [step, setStep] = useState(0);
  let [buttonText, setButtonText] = useState("Can't you see me?");
  let [buttonTextTwo, setButtonTextTwo] = useState("It's a friend.");

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
      setText(`No, ${props.user.name}, you are very far away.`);
      setButtonText("Then how do you know my name?");
      setButtonTextTwo("I can see you.");
      setStep(1);
    } else if (step === 1) {
      setText("I'm just a piece of code. So I guess, in a way, I do see you. But not in the way I think you meant.");
      setButtonText("Thanks, that's enough.");
      setButtonTextTwo("But I thought you were going to give me advice! It was supposed to be life changing advice!");
      setStep(2);
    } else if (step === 2) {
      props.onClose();
    } else if (step === 3) {
      setText(`${props.user.name}, ${props.user.name}, ${props.user.name}...`);
      setStep(7);
      setButtonText("Okay, thanks.");
      setButtonTextTwo("...");
    } else if (step === 5) {
      setText("You'll have enlightening dreams.");
      setStep(10);
      setButtonText("Can you give me an example?");
      setButtonTextTwo("");
    } else if (step === 6) {
      props.onClose();
    } else if (step === 7) {
      props.onClose();
    } else if (step === 4) {
      setText("You do? That's alarming.");
      setStep(7);
      setButtonText("Okay, thanks.");
      setButtonTextTwo("Yeah, it is.");
    } else if (step === 11) {
      props.onClose();
    } else if (step === 8) {
      props.onClose();
    }
  };

  const handleChangeTextTwo = () => {
    if (step === 0) {
      setText("A friend?");
      setButtonText(`Yes, it's me, ${props.user.name}.`);
      setButtonTextTwo("...");
      setStep(3);
    } else if (step === 1) {
      setText("Well, I still can't see you.");
      setButtonText("Try harder.");
      setButtonTextTwo("Sorry.");
      setStep(11);
    } else if (step === 2) {
      setText("Hm ... I'm not sure I'm interested in this conversation anymore.");
      setButtonText("...");
      setButtonTextTwo("Why are you being like this?");
      setStep(6);
    } else if (step === 3) {
      setText(
        `Omg! ${props.user.name}, I'm so happy to see you. I'm so bored up here. My mind feels like a pile of goo.`
      );
      setStep(4);
      setButtonText("That's interesting. I see something that looks like goo behind you.");
      setButtonTextTwo("Mine, too.");
    } else if (step === 4) {
      setText("Something that helps me sometimes is to take a nap.");
      setButtonText("And what does that do?");
      setButtonTextTwo("Maybe I'll try that.");
      setStep(5);
    } else if (step === 5) {
      props.onClose();
    } else if (step === 6) {
      setText("Hm ... like what?");
      setButtonText("Charming");
      setButtonTextTwo("Difficult.");
      setStep(8);
    } else if (step === 7) {
      props.onClose();
    } else if (step === 8) {
      props.onClose();
    } else if (step === 10) {
      setText(
        `No. If you're really curious, I think there's a book somewhere down there that can explain it to you. I'm tired now. Goodnight, ${props.user.name}`
      );
      setButtonText("Okay, goodnight I guess.");
      setButtonTextTwo("Goodnight.");
      setStep(11);
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
