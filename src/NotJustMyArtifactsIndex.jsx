import { useState } from "react";

export function NotJustMyArtifactsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="artifacts-index">
      {props.artifacts
        .filter((artifacts) => artifacts.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((artifact) => (
          <div key={artifact.id}>
            <img className="showingartifact" src={artifact.image_url} alt="" />

            <div className="displayBox">
              <button onClick={() => props.onShowArtifact(artifact)}>
                <p id="onlabel"> This is a {artifact.name}.</p>
                <p id="onlabel2"> It costs {artifact.price_in_points} points. </p>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
