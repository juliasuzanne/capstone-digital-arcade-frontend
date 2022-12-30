import { useState } from "react";

export function UserProfile(props) {
  console.log(props.user);
  return (
    <div id="user-profile">
      <div key={props.user.id} id="user">
        <h2>Name: {props.user.name}</h2>
        <img src={props.user.image_url} alt="" />
        <p> Email: {props.user.email}</p>
        <p> Points: {props.user.points}</p>
        {/* <button onClick={() => props.onSelectArtifact(artifact)}>More Info</button> */}
      </div>
    </div>
  );
}
