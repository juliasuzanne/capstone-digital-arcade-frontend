import axios from "axios";
import { useState, useEffect } from "react";

export function Index() {
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
      <p>Welcome, {currentUser.name} </p>
      <img src={currentUser.image_url} className="circular-images" />
    </div>
  );
}
