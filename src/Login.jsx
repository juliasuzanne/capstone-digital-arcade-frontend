import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    setErrors([]);
    axios
      .post("https://moon--egg.fly.dev/sessions", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((errors) => {
        console.log(errors.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login">
      <h1>Login</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <p>
        Hello! Thank you for visiting my website. It is slowly becoming a point-and-click adventure game. All the
        artwork is original. It's still under development, and any suggestions or comments would be greatly appreciated!
        You can email me at julia.s.grimes@gmail.com, or see my
        <a href="https://juliasuzannegrimes.netlify.app/">
          <h2 className="personalsite"> personal website here! </h2>
        </a>
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          E-mail:
          <input name="email" className="form-control" type="email" />
        </div>
        <div>
          Password:
          <input name="password" className="form-control" type="password" />
        </div>
        <button className="btn btn-secondary mt-3 submit">Login</button>
      </form>
      <br></br>
      <a href="/signup" className="signupButton">
        {" "}
        No account? Signup{" "}
      </a>
    </div>
  );
}
