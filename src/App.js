import "./App.css";
import "./styles/marks.css";
import React from "react";
import { useState } from "react";
import { board, isWin, isDraw } from "./modules/gamerules";

function Square({ mark, onSquareClick }) {
  return <div className={`square ${mark}`} onClick={onSquareClick}></div>;
}

function Button({ name, onButtonClick }) {
  return (
    <button className="btn" onClick={onButtonClick}>
      {name}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const handleSquareClick = (x, y) => {
    if (squares[x][y] || isWin(squares)) return;
    const nextSquares = [...squares.map((cells) => [...cells])];
    const player = xIsNext ? "x" : "o";
    nextSquares[x][y] = player;
    onPlay(nextSquares);
  };

  return (
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
  );
}

function Gamelog({ history, onGoClick }) {
  const moves = history.map((item, index) => {
    let description = index > 0 ? `Go to move #${index}` : "Go to game start";

    return (
      <li key={index}>
        <Button name={description} onButtonClick={() => onGoClick(index)} />
      </li>
    );
  });

  return (
    <div className="gamelog">
      <ol>{moves}</ol>
    </div>
  );
}

function App() {
  const [xIsNext, setXisNext] = useState(true);
  const [history, setHistory] = useState([board]);
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares) => {
    setHistory([...history, nextSquares]);
    setXisNext(!xIsNext);
  };

  const handleRestartButton = () => {
    setHistory([board]);
    setXisNext(true);
  };

  const handleGo = (index) => {
    const currHistory = history.splice(0, index + 1);
    setHistory([...currHistory.map((item) => [...item])]);
    setXisNext(index % 2 === 0);
    console.log(currHistory);
  };

  const status = (squares) => {
    const winner = isWin(squares);
    if (winner) return `Winner: ${winner.toUpperCase()}`;
    if (isDraw(squares)) return `It's a draw`;
    else return `Next player: ${xIsNext ? "X" : "O"}`;
  };

  return (
    <div className="App">
      <div className="status">
        <h3>{status(currentSquares)}</h3>
      </div>
      <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
      <div className="ui">
        <Button name={"Restart"} onButtonClick={handleRestartButton} />
      </div>
      <Gamelog history={history} onGoClick={handleGo} />
    </div>
  );
}

export default App;
