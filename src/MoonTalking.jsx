import axios from "axios";
import { useState, useEffect } from "react";
import { SubmitScore } from "./SubmitScore";
import { MoonConversation } from "./MoonConversation";

export function MoonTalking(props) {
  let [currentUser, setCurrentUser] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleCurrentUser = () => {
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response);
      setCurrentUser(response.data);
    });
  };

  useEffect(handleCurrentUser, []);

  return (
    <div>
      <MoonConversation user={currentUser} onClose={props.onClose} />
    </div>
  );
}
