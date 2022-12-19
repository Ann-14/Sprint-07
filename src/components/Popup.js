
import { Card } from "../styles/StyledComponents"

import "../styles/styles.css";

export const Popup = (props) => {
  return (
    <>
    <div className='backdrop' onClick={props.onConfirm}></div>
    <Card className="modal">
        <div className="content">
            <p>{props.message}</p>
        </div>
        <footer className="actions">
        <button onClick={props.onConfirm}>Okay!</button>
        </footer>
    </Card>
    </>
  )
}
