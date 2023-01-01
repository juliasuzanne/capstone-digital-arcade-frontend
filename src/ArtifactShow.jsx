export function ArtifactShow(props) {
  const handleClick = () => {
    props.onBuyArtifact(props.artifact.id);
  };

  return (
    <div>
      <h2> {props.artifact.name} </h2>
      <p> ID: {props.artifact.id} </p>
      <p> {props.artifact.price} </p>
      <p> {props.artifact.description}</p>
      <button onClick={handleClick}>Buy Artifact</button>
    </div>
  );
}
