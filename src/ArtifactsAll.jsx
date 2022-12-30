import { useEffect, useState } from "react";
import { ArtifactsIndex } from "./ArtifactsIndex";
import axios from "axios";

export function ArtifactsAll() {
  let [artifacts, setArtifacts] = useState([]);

  const handleIndexArtifacts = () => {
    axios.get("http://localhost:3000/artifacts.json").then((response) => {
      console.log(response);
      setArtifacts(response.data);
    });
  };

  useEffect(handleIndexArtifacts, []);

  return <ArtifactsIndex artifacts={artifacts} />;
}
