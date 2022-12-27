import { useState } from "react";

export function ArtifactsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  console.log(props.posts);
  return (
    <div id="artifacts-index">
      Search Filter:
      <input
        className="container"
        type="text"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
      />
      {props.artifacts
        .filter((artifacts) => artifacts.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((artifact) => (
          <div key={artifact.id} id="artifact">
            <h2>{artifact.name}</h2>
            <img src={artifact.image_url} alt="" />
            <p> {artifact.price_in_points}</p>
            {/* <button onClick={() => props.onSelectArtifact(artifact)}>More Info</button> */}
          </div>
        ))}
    </div>
  );
}
