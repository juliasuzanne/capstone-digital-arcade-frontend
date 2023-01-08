import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div id="modal-background">
        <section id="modal-main">
          {props.children}
          <button className="close" type="button" onClick={props.onClose}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}
