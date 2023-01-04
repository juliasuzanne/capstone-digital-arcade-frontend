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

  const handleRemoveUserIdFromArtifact = (artifact) => {
    artifact.user_id = null;
    console.log("USER ID:" + artifact.user_id);
  };

  useEffect(handleIndexArtifacts, []);

  return (
    <div>
      <ArtifactsIndex artifacts={artifacts} onReturnArtifact={handleRemoveUserIdFromArtifact} />
    </div>
  );
}
