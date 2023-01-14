export function Light(props) {
  if (props.show) {
    return (
      <div>
        <img className="light" src="/src/assets/images/lightson.png" />
      </div>
    );
  }
}
