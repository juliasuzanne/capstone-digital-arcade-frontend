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
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response);
      setCurrentUser(response.data);
    });
  };

  useEffect(handleCurrentUser, []);

  return (
    <div>
      <header>
        <p className="header-item">Welcome, {currentUser.name} </p>
        <div className="header-item">
          {" "}
          <ShowPoints user={currentUser} />
        </div>
        <div className="user-item">
          <img src={currentUser.image_url} className="circular-images" />
          {localStorage.jwt === undefined ? (
            <>
              <li className="header-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="header-item">
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
        </div>
      </header>
    </div>
  );
}
