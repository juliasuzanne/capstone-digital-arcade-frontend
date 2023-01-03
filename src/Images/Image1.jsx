export function Image1(props) {
  if (props.show) {
    return (
      <div>
        <button onClick={props.click}>Test 1</button>
      </div>
    );
  }
}
