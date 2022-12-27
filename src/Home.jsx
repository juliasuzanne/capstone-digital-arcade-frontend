import axios from "axios";
import { useState, useEffect } from "react";
import { ArtifactsIndex } from "./ArtifactsIndex";

export function Home() {
  let [artifacts, setArtifacts] = useState([]);

  const handleIndexArtifacts = () => {
    axios.get("http://localhost:3000/artifacts.json").then((response) => {
      console.log(response);
      setArtifacts(response.data);
    });
  };

  useEffect(handleIndexArtifacts, []);
  return (
    <div>
      <h1> test</h1>
      <ArtifactsIndex artifacts={artifacts} />
    </div>
  );
}
