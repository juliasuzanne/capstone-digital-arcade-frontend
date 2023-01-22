import axios from "axios";
import { useState } from "react";
// import * as ReactDOM from "react-dom";

export function Signup() {
  const [errors, setErrors] = useState([]);
  let [portrait, setPortrait] = useState("https://i.ibb.co/pvGJDfR/moon.png");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    params.append("image_url", `${portrait}`);
    axios
      .post("https://moon-egg.fly.dev/users", params)
      .then((response) => {
        console.log(response);
        event.target.reset();
        window.location.href = "/login";
      })
      .catch((errors) => {
        console.log(errors.response.data.errors);
        setErrors(errors.response.data.errors);
      });
  };

  const handleSetPortrait1 = () => {
    setPortrait("/images/egg.png");
    console.log({ portrait });
  };
  const handleSetPortrait2 = () => {
    setPortrait("https://i.ibb.co/pvGJDfR/moon.png");
    console.log({ portrait });
  };

  const handleTest = () => {
    console.log({ portrait });
  };

  // const root = ReactDOM.createRoot(document.getElementById("root"));

  return (
    <div id="signup">
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <div>
          Name:
          <input name="name" className="form-control" type="string" />
        </div>
        <div>
          <p>Choose a portrait: </p>
          <button onClick={handleSetPortrait1} type="button">
            <img className="circular-images-signup" src="/images/egg.png" />
          </button>
          <button type="button" onClick={handleSetPortrait2}>
            <img className="circular-images-signup" src="https://i.ibb.co/pvGJDfR/moon.png" />
          </button>
          <div>
            <p>Selected Portrait:</p>
            <img className="circular-images-large" src={portrait} />
          </div>
          <div>
            E-mail:
            <input name="email" className="form-control" type="email" />
          </div>
        </div>
        <div>
          Password:
          <input name="password" className="form-control" type="password" />
        </div>
        <div>
          Password Confirmation:
          <input name="password_confirmation" className="form-control" type="password" />
        </div>
        <button type="submit" className="btn btn-secondary mt-3 submit">
          Signup
        </button>
      </form>
    </div>
  );
}
