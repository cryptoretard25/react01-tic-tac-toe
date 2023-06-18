import "./App.css";
import "./styles/marks.css";
import React from "react";
import { useState } from "react";
import Game from "./modules/game";

const game = new Game(3);

function Square() {
  const [mark, setMark] = useState(null)

  function handleClick(e){
    setMark(()=>{
      return game.nextTurn();
    })
  }

  return <div className={`square ${mark}`} onClick={handleClick}></div>;
}

function Board() {
  const [cells, setCells] = useState(game.board)
  return (
    <>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
