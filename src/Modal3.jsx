import "./Modal3.css";

export function Modal3(props) {
  if (props.show) {
    return (
      <div className="modal-background3">
        <section className="modal-main3">
          {props.children}
          <button className="close" type="button" onClick={props.onClose}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}
