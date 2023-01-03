export function Image2(props) {
  if (props.show) {
    return (
      <div>
        <button onClick={props.click}>Test 2</button>
      </div>
    );
  }
}
