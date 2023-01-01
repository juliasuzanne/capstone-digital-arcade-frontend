import axios from "axios";
import { useState, useEffect } from "react";

export function ReduceScore(props) {
  console.log(props);
  const [errors, setErrors] = useState([]);
  const [points, setPoints] = useState(0);

  const currentPoints = props.user.points;

  const handlePurchaseArtifact = () => {
    let newPoints = props.user.points - props.artifact.price_in_points;
    axios
      .patch("http://localhost:3000/users", { points: newPoints })
      .then((window.location.href = "/"))
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
    props.onBuy();

    setPoints(0);
  };

  return (
    <div>
      <p>{currentPoints}</p>

      {localStorage.jwt === undefined ? (
        <p>Login to purchase</p>
      ) : (
        <button className="buttonGrey" onClick={handlePurchaseArtifact}>
          {" "}
          Buy
        </button>
      )}
    </div>
  );
}
