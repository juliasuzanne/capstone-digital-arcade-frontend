import axios from "axios";
import { useState, useEffect } from "react";
import { SubmitScore } from "./SubmitScore";

export function Home() {
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
      <SubmitScore user={currentUser} />
    </div>
  );
}
