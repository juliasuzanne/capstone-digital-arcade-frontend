export function Light(props) {
  if (props.show) {
    return (
      <div>
        <img className="light" src="/images/lightson.png" />
      </div>
    );
  }
}
