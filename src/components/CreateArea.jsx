import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";

function CreateArea(props) {
  const [text, setText] = useState({
    title: "",
    content: "",
    time: ""
  });

  function getText(event) {
    const { value, name } = event.target;

    setText((prevVal) => {
      return {
        ...prevVal,
        [name]: value
      };
    });
  }

  function dispText(event) {
    props.createCard(text);
    event.preventDefault();
    setText({
      title: "",
      content: "",
      time: ""
    });
  }

  function onEnterPress(event) {
    if (event.keyCode === 13 && event.shiftKey === false) {
      dispText(event);
    }
  }

  return (
    <div>
      <form onSubmit={dispText}>
        <input
          onChange={getText}
          value={text.title}
          name="title"
          placeholder="Topic"
        />
        <textarea
          onChange={getText}
          value={text.content}
          name="content"
          placeholder="Note here..."
          rows="3"
          onKeyDown={onEnterPress}
        />
        <button type="submit">
          <CreateIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
