import axios from "axios";
import { useState, useEffect } from "react";

export function UpdateUsers() {
  const [errors, setErrors] = useState([]);
  const [items, setItems] = useState([]);

  const [id, setId] = useState(0);

  const handleChangeId = (change) => {
    setId(change);
    console.log({ id });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    setErrors([]);
    axios
      .patch(`https://moon--egg.fly.dev/users/${id}`, params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((errors) => {
        console.log(errors.response);
        setErrors(["Unsuccessful"]);
      });
  };

  const handleGetItems = () => {
    axios.get("https://moon--egg.fly.dev/users/all.json").then((response) => {
      console.log(response);
      setItems(response.data);
    });
  };

  const handleShowItems = () => {
    handleGetItems();
  };

  useEffect(handleShowItems, []);

  return (
    <div id="editItem">
      <h1>Edit User</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <p> ID Selection: </p>

      <div id="artifactsinbox">
        {items.map((item) => (
          <>
            <button onClick={() => handleChangeId(item.id)}>
              <p>{item.name} </p>

              <p> {item.id} </p>
            </button>
          </>
        ))}
      </div>

      <p>{id}</p>

      <form onSubmit={handleSubmit}>
        <div>
          New Points
          <input name="points" className="form-control" type="integer" />
        </div>
        <div>
          Fixed lights?
          <input name="fixed" className="form-control" type="boolean" />
        </div>

        <button className="btn btn-secondary mt-3 submit">Change</button>
      </form>
    </div>
  );
}
