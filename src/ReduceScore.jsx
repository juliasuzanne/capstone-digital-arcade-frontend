import axios from "axios";
import { useState, useEffect } from "react";

export function ReduceScore(props) {
  console.log(props);
  const [errors, setErrors] = useState([]);
  const [points, setPoints] = useState(0);

  const currentPoints = props.user.points;

  const handlePurchaseArtifact = (event) => {
    event.preventDefault();

    setErrors([]);
    if (parseInt(props.artifact.price_in_points) < parseInt(props.user.points)) {
      let newPoints = props.user.points - props.artifact.price_in_points;
      axios
        .patch("https://moon-egg.fly.dev/users", { points: newPoints })
        .then((window.location.href = "/"))
        .catch((errors) => {
          console.log(errors.response.data.errors);
          setErrors(errors.response.data.errors);
        });
      props.onBuy();

      setPoints(0);
    } else {
      console.log("Not enough points to purchase");
      setErrors("Not enough points to purchase");
    }
  };

  return (
    <div>
      <p id="red">{errors}</p>
      <p> Your Current Points: {currentPoints}</p>
      {localStorage.jwt === undefined ? (
        <p>Login to purchase</p>
      ) : (
        <button className="submitbutton" onClick={handlePurchaseArtifact}>
          {" "}
          Buy
        </button>
      )}
    </div>
  );
}
