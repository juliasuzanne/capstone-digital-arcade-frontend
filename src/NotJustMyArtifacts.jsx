import { useEffect, useState } from "react";
import { NotJustMyArtifactsIndex } from "./NotJustMyArtifactsIndex";
import axios from "axios";

export function ArtifactsAll() {
  let [artifacts, setArtifacts] = useState([]);

  const handleIndexArtifacts = () => {
    axios.get("http://localhost:3000/artifacts/all.json").then((response) => {
      console.log(response);
      setArtifacts(response.data);
    });
  };

  useEffect(handleIndexArtifacts, []);

  return <NotJustMyArtifactsIndex artifacts={artifacts} />;
}
