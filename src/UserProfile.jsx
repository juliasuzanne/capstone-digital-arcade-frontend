import { useState } from "react";

export function UserProfile(props) {
  console.log(props.user);
  return (
    <div id="user-profile">
      {props.user.map((user) => (
        <div key={user.id} id="user">
          <h2>{user.name}</h2>
          <img src={user.image_url} alt="" />
          <p> {user.email}</p>
          <p> {user.points}</p>
          {/* <button onClick={() => props.onSelectArtifact(artifact)}>More Info</button> */}
        </div>
      ))}
    </div>
  );
}
