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
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response);
      setCurrentUser(response.data);
    });
  };

  useEffect(handleCurrentUser, []);

  return (
    <div>
      <h2> {props.artifact.name} </h2>
      <p> ID: {props.artifact.id} </p>
      <p> {props.artifact.price} </p>
      <p> {props.artifact.description}</p>
      <ReduceScore user={currentUser} artifact={props.artifact} onBuy={handleBuy} />
    </div>
  );
}
