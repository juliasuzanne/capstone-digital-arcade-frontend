import { useEffect, useState } from "react";
import { NotJustMyArtifactsIndex } from "./NotJustMyArtifactsIndex";
import { Modal } from "./Modal";
import axios from "axios";
import { ArtifactShow } from "./ArtifactShow";

export function NotJustMyArtifacts() {
  let [artifacts, setArtifacts] = useState([]);
  let [isArtifactsShowVisible, setIsArtifactsShowVisible] = useState(false);
  let [currentArtifact, setCurrentArtifact] = useState({});

  const handleIndexArtifacts = () => {
    axios.get("http://localhost:3000/artifacts/all.json").then((response) => {
      console.log(response);
      setArtifacts(response.data);
    });
  };

  const handleShowArtifact = (artifact) => {
    setIsArtifactsShowVisible(true);
    setCurrentArtifact(artifact);
  };

  const handleClose = () => {
    setIsArtifactsShowVisible(false);
  };

  const handleBuyArtifact = (id) => {
    axios.patch(`http://localhost:3000/artifacts/${id}.json`).then((response) => {
      console.log(response.data);
      setArtifacts(
        artifacts.map((artifact) => {
          if (artifact.id === response.data.id) {
            return response.data;
          } else {
            return artifact;
          }
        })
      );

      handleClose();
    });
  };

  useEffect(handleIndexArtifacts, []);

  return (
    <div>
      <NotJustMyArtifactsIndex artifacts={artifacts} onShowArtifact={handleShowArtifact} />
      <Modal show={isArtifactsShowVisible} onClose={handleClose}>
        <ArtifactShow artifact={currentArtifact} onBuyArtifact={handleBuyArtifact} />
      </Modal>
    </div>
  );
}
