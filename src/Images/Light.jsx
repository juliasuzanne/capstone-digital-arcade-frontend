export function Light(props) {
  if (props.show) {
    return (
      <div>
        <img className="light" src="./assets/images/lightson.png" />
      </div>
    );
  }
}
