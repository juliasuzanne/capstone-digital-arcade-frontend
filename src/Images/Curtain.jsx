export function Curtain(props) {
  <button onClick={props.click}> toggle curtain </button>;
  if (props.show) {
    return (
      <div>
        <img className="curtains" src="./assets/images/curtainclosed.png" />
      </div>
    );
  }
}
