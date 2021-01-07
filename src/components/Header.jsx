import React from "react";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import BackupIcon from "@material-ui/icons/Backup";

function Header(props) {
  function deleteAll() {
    props.deleteAllCards();
  }

  return (
    <div>
      <header>
        <h1>NoteMe</h1>
        <button onClick={deleteAll}>
          <DeleteSweepIcon />
        </button>
        <button>
          <BackupIcon />
        </button>
      </header>
    </div>
  );
}

export default Header;
