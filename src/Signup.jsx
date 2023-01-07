import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  let [portrait, setPortrait] = useState("/src/assets/images/julia.png");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((errors) => {
        console.log(errors.response.data.errors);
        setErrors(errors.response.data.errors);
      });
  };

  const handleSetPortrait1 = () => {
    setPortrait("/src/assets/images/egg.png");
    console.log({ portrait });
  };
  const handleSetPortrait2 = () => {
    setPortrait("/src/assets/images/moon.png");
    console.log({ portrait });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <div>
          Name:
          <input name="name" className="form-control" type="string" />
        </div>
        <div>
          <button onClick={handleSetPortrait1} type="button">
            <img className="circular-images-signup" src="/src/assets/images/egg.png" />
          </button>
          <button type="button" onClick={handleSetPortrait2}>
            <img className="circular-images-signup" src="/src/assets/images/moon.png" />
          </button>
        </div>
        <div hidden>
          <input name="image_url" className="form-control" type="string" defaultValue="/src/assets/images/moon.png" />
        </div>
        <div>
          E-mail:
          <input name="email" className="form-control" type="email" />
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
