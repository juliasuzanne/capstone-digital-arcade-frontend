import { useState } from "react";

export function ArtifactsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <div className="containerHeader">
        <h2> Your Items: </h2>
        Search Filter:
        <input
          className="myform"
          type="text"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
        />{" "}
      </div>
      <div id="artifacts-index">
        {props.artifacts
          .filter((artifacts) => artifacts.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((artifact) => (
            <div key={artifact.id} id="artifact">
              <h5> {artifact.name} </h5>
              <img className="showingartifact" src={artifact.image} alt="" />
              <p className="descript"> {artifact.description} </p>
              {/* <button onClick={() => props.onReturnArtifact(artifact)}> Return Artifact, no refunds!</button> */}
            </div>
          ))}
      </div>
    </div>
  );
}
