import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

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
  return (
    <div id="signup">
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <div>
          Name:
          <input name="name" className="form-control" type="text" />
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
        <button className="btn btn-secondary mt-3 submit">Signup</button>
      </form>
    </div>
  );
}
