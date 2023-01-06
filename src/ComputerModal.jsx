import "./ComputerModal.css";

export function ComputerModal(props) {
  if (props.show) {
    return (
      <div className="comp-modal-background">
        <section className="comp-modal-main">
          {props.children}
          <button className="close" type="button" onClick={props.onClose}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}
