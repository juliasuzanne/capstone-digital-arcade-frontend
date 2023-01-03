export function Image4(props) {
  if (props.show) {
    return (
      <div>
        <button id="image4" className="showhide" onClick={props.click}>
          Test 4
        </button>
      </div>
    );
  }
}
