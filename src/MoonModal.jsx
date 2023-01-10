import "./MoonModal.css";

export function MoonModal(props) {
  if (props.show) {
    return (
      <div className="moon-modal-background">
        <section className="moon-modal-main">
          {props.children}
          <button className="close" type="button" onClick={props.onClose}>
            (leave conversation)
          </button>
        </section>
      </div>
    );
  }
}
