export function Image3(props) {
  if (props.show) {
    return (
      <div>
        <button id="image3" className="showhide" onClick={props.click}>
          Test 3
        </button>
      </div>
    );
  }
}
