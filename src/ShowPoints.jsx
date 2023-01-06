export function ShowPoints(props) {
  console.log(props.user);
  return (
    <div id="user-profile">
      <div key={props.user.id} id="user">
        {localStorage.jwt === undefined ? (
          <p>Guest</p>
        ) : (
          <div>
            <p>Points: {props.user.points}</p>
          </div>
        )}

        {/* <button onClick={() => props.onSelectArtifact(artifact)}>More Info</button> */}
      </div>
    </div>
  );
}
