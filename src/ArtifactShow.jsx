import { ReduceScore } from "./ReduceScore";
import axios from "axios";
import { useState, useEffect } from "react";

export function ArtifactShow(props) {
  let [currentUser, setCurrentUser] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleBuy = () => {
    props.onBuyArtifact(props.artifact.id);
  };

  const handleCurrentUser = () => {
    axios.get("https://moon--egg.fly.dev/users.json").then((response) => {
      console.log(response);
      setCurrentUser(response.data);
    });
  };

  useEffect(handleCurrentUser, []);

  return (
    <div>
      <h2> This is a {props.artifact.name} </h2>
      <p> {props.artifact.description}</p>
      <p> Price: {props.artifact.price_in_points} </p>
      <ReduceScore user={currentUser} artifact={props.artifact} onBuy={handleBuy} />
    </div>
  );
}
