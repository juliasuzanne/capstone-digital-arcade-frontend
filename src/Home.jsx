import axios from "axios";
import { useState, useEffect } from "react";
import { SubmitScore } from "./SubmitScore";
import { TextAdventure } from "./TextAdventure";

export function Home(props) {
  let [currentUser, setCurrentUser] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleCurrentUser = () => {
    axios.get("https://patient-wood-4884.fly.dev/users.json").then((response) => {
      console.log(response);
      setCurrentUser(response.data);
    });
  };

  useEffect(handleCurrentUser, []);

  return (
    <div>
      <TextAdventure user={currentUser} onClose={props.onClose} />
    </div>
  );
}
