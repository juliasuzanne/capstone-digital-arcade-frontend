import axios from "axios";
import { useState, useEffect } from "react";
import { UserProfile } from "./UserProfile";

export function Home() {
  let [currentUser, setCurrentUser] = useState([]);
  const [errors, setErrors] = useState([]);
  const [points, setPoints] = useState(0);

  const handleCurrentUser = () => {
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response);
      setCurrentUser(response.data);
    });
  };

  const getTenPoints = () => {
    console.log(currentUser);
    console.log(currentUser.points);
    currentUser.points = currentUser.points + points;
    axios
      .patch("http://localhost:3000/users", { points: currentUser.points })
      .then((window.location.href = "/"))
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
    setPoints(0);
  };

  const getPoints = () => {
    setPoints(points + 1);
  };

  useEffect(handleCurrentUser, []);

  return (
    <div>
      <UserProfile user={currentUser} />
      <button onClick={getPoints}> accrue</button>
      <p>{points}</p>
      <button onClick={getTenPoints}> submit score </button>
      <h1> test</h1>
    </div>
  );
}
