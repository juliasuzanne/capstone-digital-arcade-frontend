export function Image2(props) {
  if (props.show) {
    return (
      <div>
        <button id="image2" className="showhide" onClick={props.click}>
          Test 2
        </button>
      </div>
    );
  }
}
