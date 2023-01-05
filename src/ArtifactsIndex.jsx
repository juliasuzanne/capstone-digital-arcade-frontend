import { useState } from "react";

export function ArtifactsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      Search Filter:
      <input
        className="container"
        type="text"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
      />
      <div id="artifacts-index">
        {props.artifacts
          .filter((artifacts) => artifacts.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((artifact) => (
            <div key={artifact.id} id="artifact">
              <h2> User: {artifact.username}</h2>
              <p> Name: {artifact.name} </p>
              <img className="showingartifact" src={artifact.image} alt="" />
              <p> Price: {artifact.price}</p>
              {/* <button onClick={() => props.onReturnArtifact(artifact)}> Return Artifact, no refunds!</button> */}
            </div>
          ))}
      </div>
    </div>
  );
}
