import "./App.css";
import "./styles/marks.css";
import React from "react";
import { useState } from "react";
import { board, isWin, isDraw } from "./modules/gamerules";

function Square({ mark, onSquareClick }) {
  return <div className={`square ${mark}`} onClick={onSquareClick}></div>;
}

function Button({name, onButtonClick}){
  return <button className="btn" onClick={onButtonClick}>{name}</button>;
}

function Board() {
  const [squares, setSquares] = useState(board);
  const [xIsNext, setXisNext] = useState(true);

  const status = () => {
    const winner = isWin(squares);
    if (winner) return `Winner: ${winner.toUpperCase()}`;
    if (isDraw(squares)) return `It's a draw`;
    else return `Next player: ${xIsNext ? "X" : "O"}`;
  };

  const handleSquareClick = (x, y) => {
    if (squares[x][y] || isWin(squares)) return;
    const nextSquares = [...squares.map((cells) => [...cells])];
    const player = xIsNext ? "x" : "o";
    nextSquares[x][y] = player;
    setSquares(nextSquares);
    setXisNext(!xIsNext);
  };

  const handleRestartButton = ()=>{
    setSquares(board);
    setXisNext(true);
  }

  return (
    <>
      <div className="status">
        <h3>{status()}</h3>
      </div>
      <div className="board-container">
        <div>
          {squares.map((row, x) => {
            return (
              <div className="row" key={x}>
                {row.map((cell, y) => {
                  return (
                    <Square
                      key={[x, y]}
                      mark={cell}
                      onSquareClick={() => handleSquareClick(x, y)}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="ui">
        <Button name={"Restart"} onButtonClick={handleRestartButton} />
      </div>
    </>
  );
}

function App() {
  // const [xIsNext, setXisNext] = useState(true);
  // const [history, setHistory] = useState([board])
  // const currentSquares = history[history.length-1]

  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
