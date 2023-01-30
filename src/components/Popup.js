import "../styles/styles.css";

export const Popup = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onConfirm}>
        <div className="modal">
          <div className="content">
            <p>{props.message}</p>
            <button
              type="button"
              onClick={props.onConfirm}
              className="btn-close btn-popUp"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};
