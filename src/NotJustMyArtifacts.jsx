import { useEffect, useState } from "react";
import { NotJustMyArtifactsIndex } from "./NotJustMyArtifactsIndex";
import { Modal } from "./Modal";
import axios from "axios";
import { ArtifactShow } from "./ArtifactShow";

export function NotJustMyArtifacts() {
  let [artifacts, setArtifacts] = useState([]);
  let [isArtifactsShowVisible, setIsArtifactsShowVisible] = useState(false);
  let [currentUser, setCurrentUser] = useState([]);

  let [currentArtifact, setCurrentArtifact] = useState({});

  const handleIndexArtifacts = () => {
    axios.get("https://moon--egg.fly.dev/artifacts/all.json").then((response) => {
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

  const handleCurrentUser = () => {
    axios.get("https://moon--egg.fly.dev/users.json").then((response) => {
      console.log(response);
      setCurrentUser(response.data);
    });
  };

  const handleBuyArtifact = (id) => {
    axios.patch(`https://moon--egg.fly.dev/artifacts/${id}.json`, { user_id: currentUser.id }).then((response) => {
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

  useEffect(handleCurrentUser, []);

  return (
    <div className="greenglass">
      <img id="handsonbox" src="https://ibb.co/1LLygkM" />
      <h1> Artifacts Available</h1>

      <NotJustMyArtifactsIndex artifacts={artifacts} onShowArtifact={handleShowArtifact} />
      <Modal show={isArtifactsShowVisible} onClose={handleClose}>
        <ArtifactShow artifact={currentArtifact} onBuyArtifact={handleBuyArtifact} />
      </Modal>
    </div>
  );
}
