import { useState } from "react";
import axios from "axios";

export function Points() {
  let [points, setPoints] = useState(0);

  function getPoints() {
    setPoints(points + 1);
  }

  const [errors, setErrors] = useState([]);
  const handleUpdatePoints = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleSetPoints(params);
    event.target.reset();
  };

  const handleSetPoints = (params) => {
    axios
      .patch("http://localhost:3000/users", params)
      .then((window.location.href = "/"))
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="update-points">
      <div>
        <p>Points: {points}</p>
        <button onClick={getPoints}> Get Points </button>
      </div>
      <h1>Update Points</h1>
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
      ;
      <form onSubmit={handleUpdatePoints}>
        <div>
          Points to add:
          <input name="points" type="integer" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
