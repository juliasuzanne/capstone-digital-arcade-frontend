import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { useState, useEffect } from "react";
import { ShowPoints } from "./ShowPoints";
import axios from "axios";
import { UserProfile } from "./UserProfile";

export function Header() {
  let [currentUser, setCurrentUser] = useState([]);

  const handleCurrentUser = () => {
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response);
      setCurrentUser(response.data);
    });
  };

  useEffect(handleCurrentUser, []);

  return (
    <div>
      <header>
        <div className="container-fluid">
          <a className="navbar-brand" to="#">
            Arcade
          </a>
          <a className="navbar-brand">
            <ShowPoints user={currentUser} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/game">
                Game
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/artifacts">
                My Artifacts
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/artifacts">
                All Artifacts
              </Link>
            </li> */}
            {localStorage.jwt === undefined ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-link text-decoration-none">
                <LogoutLink />
              </li>
            )}
          </ul>
        </div>
      </header>
    </div>
  );
}
