import axios from "axios";
import { useState, useEffect } from "react";

export function SubmitScore(props) {
  console.log(props);
  const [errors, setErrors] = useState([]);
  const [points, setPoints] = useState(0);

  const currentPoints = props.user.points;

  const getPoints = () => {
    setPoints(points + 1);
  };

  const handleGetPoints = () => {
    let newPoints = points + props.user.points;
    axios
      .patch("https://moon--egg.fly.dev/users", { points: newPoints })
      .then((window.location.href = "/"))
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
    setPoints(0);
  };

  return (
    <div>
      <p>{currentPoints}</p>
      <button className="buttonGrey" onClick={getPoints}>
        {" "}
        accrue
      </button>
      <p>{points}</p>
      <button className="buttonGrey" onClick={handleGetPoints}>
        {" "}
        submit score{" "}
      </button>
    </div>
  );
}
