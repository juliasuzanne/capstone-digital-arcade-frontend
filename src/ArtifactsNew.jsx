import { useState } from "react";
import axios from "axios";

export function ArtifactsNew() {
  const [errors, setErrors] = useState([]);

  const handleNewArtifact = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateArtifact(params);
    event.target.reset();
  };

  const handleCreateArtifact = (params) => {
    axios
      .post("https://patient-wood-4884.fly.dev/artifacts", params)
      // .then((window.location.href = "/artifacts/all"))
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="artifacts-new">
      <h1>New artifact</h1>
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}

      <form onSubmit={handleNewArtifact}>
        <div>
          Name:
          <input name="name" className="form-control" type="string" />
        </div>
        <div>
          Price:
          <input className="form-control" name="price_in_points" type="integer" />
        </div>
        <div>
          <input
            hidden
            className="form-control"
            name="image_url"
            type="string"
            defaultValue="./src/assets/images/egg.png"
          ></input>
        </div>
        <img src="./src/assets/images/egg.png" width="300px" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
