import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arr, setArr] = useState([]);
  const [backupArr, setBackupArr] = useState([]);

  function createCard(text) {
    text.time = new Date().toLocaleTimeString();
    setArr((prevVal) => {
      return [...prevVal, text];
    });
  }

  function deleteCard(id) {
    setBackupArr((prevVal) => {
      const [deletedCard] = arr.filter((val, index) => {
        return index === id;
      });
      return [...prevVal, deletedCard];
    });

    setArr((prevVal) => {
      return prevVal.filter((val, index) => {
        return index !== id;
      });
    });
  }

  function deleteAllCards() {
    setBackupArr((prevVal) => {
      return [...prevVal, ...arr]
    });
    setArr([]);
  }

  console.log(backupArr);

  return (
    <div>
      <Header deleteAllCards={deleteAllCards} />
      <CreateArea createCard={createCard} />
      {arr.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteCard={deleteCard}
            time={val.time}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
