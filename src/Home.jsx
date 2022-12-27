import axios from "axios";
import { useState, useEffect } from "react";
import { ArtifactsIndex } from "./ArtifactsIndex";
import { UserProfile } from "./UserProfile";

export function Home() {
  let [artifacts, setArtifacts] = useState([]);
  let [user, setUser] = useState([]);

  const handleIndexArtifacts = () => {
    axios.get("http://localhost:3000/artifacts.json").then((response) => {
      console.log(response);
      setArtifacts(response.data);
    });
  };

  const handleUserProfile = () => {
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response);
      setUser(response.data);
    });
  };

  useEffect(handleIndexArtifacts, []);
  useEffect(handleUserProfile, []);

  return (
    <div>
      <h1> test</h1>
      <ArtifactsIndex artifacts={artifacts} />
      <UserProfile user={user} />
    </div>
  );
}
