import "./VideoModal.css";

export function VideoModal(props) {
  if (props.show) {
    return (
      <div className="comp-modal-background">
        <section className="comp-modal-main-video">
          {props.children}
          <button className="close" type="button" onClick={props.onClose}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}
