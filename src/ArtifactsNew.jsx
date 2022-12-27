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
      .post("http://localhost:3000/artifacts", params)
      .then((window.location.href = "/"))
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
      ;
      <form onSubmit={handleNewArtifact}>
        <div>
          Name:
          <input name="name" type="string" />
        </div>
        <div>
          Image Url:
          <input name="image_url" type="url" />
        </div>
        <div>
          Price:
          <input name="price_in_points" type="integer" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
