import "./ConversationModal.css";

export function ConversationModal(props) {
  if (props.show) {
    return (
      <div className="cmodal-background">
        <section className="cmodal-main">
          {props.children}
          <button className="close" type="button" onClick={props.onClose}>
            (leave conversation)
          </button>
        </section>
      </div>
    );
  }
}
