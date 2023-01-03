export function Image1(props) {
  if (props.show) {
    return (
      <div>
        <button id="image1" className="showhide" onClick={props.click}>
          Test 1
        </button>
      </div>
    );
  }
}
