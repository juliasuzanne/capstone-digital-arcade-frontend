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
          <div>
            <div>
              <li>
                <img src={currentUser.image_url} className="circular-images" />
              </li>
              <li>
                <LogoutLink />
              </li>
              <ShowPoints user={currentUser} />
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
