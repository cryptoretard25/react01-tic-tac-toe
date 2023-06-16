import logo from "./logo.svg";
import "./App.css";
import "./styles/marks.css";
import React from "react";
import Game from "./modules/game";

const game = new Game();

const field = Array.from({ length: 3 }, () =>
  Array.from({ length: 3 }, () => <Square />)
);

function Square() {
  function handleClick(e) {
    e.target.classList.add("cross");
  }
  return <div className="square" onClick={handleClick}></div>;
}

function Field() {
  return game.board.map((row, rowIndex) => {
    return (
      <div className="row" key={rowIndex}>
        {row.map((item, colIndex) => {
          return (
            <Square key={`${rowIndex}${colIndex}`} />
          );
        })}
      </div>
    );
  });
}

function App() {
  return (
    <div className="App">
      <Field />
    </div>
  );
}

export default App;
