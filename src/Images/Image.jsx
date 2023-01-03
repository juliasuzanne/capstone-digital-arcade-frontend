export function Image(props) {
  if (props.show) {
    return (
      <div>
        {props.images.map((image) => (
          <div key={image.id} id="artifact">
            <h2> Name: {image.name}</h2>
            <button onClick={props.click}>
              <img src={image.image_url} width="50" alt="" />
            </button>
            <p> Price: {image.price}</p>
            {/* <button onClick={() => props.onShowArtifact(artifact)}>More Info</button> */}
          </div>
        ))}
      </div>
    );
  }
}
