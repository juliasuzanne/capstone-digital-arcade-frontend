import { useState } from "react";

export function NotJustMyArtifactsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="artifacts-index">
      {/* Search Filter:
      <input
        className="container"
        type="text"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
      /> */}
      {props.artifacts
        .filter((artifacts) => artifacts.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((artifact) => (
          <div key={artifact.id} id="artifact">
            <img className="showingartifact" src={artifact.image_url} alt="" />
            <div className="displayBox">
              <p id="onlabel"> This is a {artifact.name}.</p>
              <p id="onlabel2"> It costs {artifact.price_in_points} points. </p>
            </div>
            <button className="showartifact" onClick={() => props.onShowArtifact(artifact)}>
              Take a closer look
            </button>
          </div>
        ))}
    </div>
  );
}
