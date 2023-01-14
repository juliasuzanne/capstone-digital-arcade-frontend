import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { useState, useEffect } from "react";
import { ShowPoints } from "./ShowPoints";
import axios from "axios";
import { UserProfile } from "./UserProfile";
import "./header.css";

export function Header() {
  let [currentUser, setCurrentUser] = useState([]);

  const handleCurrentUser = () => {
    axios.get("https://moon-egg.fly.dev/users.json").then((response) => {
      console.log(response);
      setCurrentUser(response.data);
    });
  };

  useEffect(handleCurrentUser, []);

  const handleSeeArtifacts = () => {
    window.location.href = "/artifacts";
  };
  const handleGoHome = () => {
    window.location.href = "/hotel";
  };

  return (
    <div className="user-item">
      <header>
        <p>Welcome, {currentUser.name} </p>

        {localStorage.jwt === undefined ? (
          <>
            <li>
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
            <div>
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </div>
          </>
        ) : (
          <>
            <div>
              <li>
                <img src={currentUser.image_url} className="circular-images" />
              </li>
              <li>
                <LogoutLink />
              </li>
              <ShowPoints user={currentUser} />
            </div>
            <button onClick={handleGoHome}>Home</button>
            <div>
              <button onClick={handleSeeArtifacts} className="bag"></button>
              <img width="100px" src="/images/bag.png" />
            </div>
          </>
        )}
      </header>
    </div>
  );
}
