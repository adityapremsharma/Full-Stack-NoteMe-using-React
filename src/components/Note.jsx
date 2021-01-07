import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function Note(props) {
  function deleteElement() {
    props.deleteCard(props.id);
  }

  function disableNewlines(event) {
    if (event.charCode === 13) {
      event.preventDefault();
    }
  }

  return (
    <div className="note">
      <h1
        onKeyPress={disableNewlines}
        contentEditable="true"
        suppressContentEditableWarning={true}
      >
        {props.title}
      </h1>
      <p contentEditable="true" suppressContentEditableWarning={true}>
        {props.content}
      </p>

      <p className="dateAndTime">{props.time}</p>
      <button onClick={deleteElement}>
        <HighlightOffIcon />
      </button>
    </div>
  );
}

export default Note;
