import "./App.css";
import "./styles/marks.css";
import React from "react";
import { useState } from "react";
import Game from "./modules/game";

let game = new Game(3);

const handlers = (() => {
  const oneSquareEnter = (e) => {
    if (e.target.classList.contains("o") || e.target.classList.contains("x")||game.gameEnded)
      return;
    game.player === "x"
      ? e.target.classList.add("xhover")
      : e.target.classList.add("ohover");
  };

  const onSquareLeave = (e) => {
    e.target.classList.remove("xhover");
    e.target.classList.remove("ohover");
  };

  const onStartClick = (e) => {
    console.log("click");
  };

  return { oneSquareEnter, onSquareLeave, onStartClick };
})();

function GameOver({onclk}) {
  const result = ()=>{
    if(game.draw) return `Game over! It's a draw!`
    else return `Game over! ${game.winner.toUpperCase()} wins!`
  }

  return (
    <div className="result">
      <h1>{result()}</h1>
      <Button name={"Restart"} onclk={onclk} />
    </div>
  );
}

function Square({ mark, onSquareClick }) {
  return (
    <div
      className={`square ${mark}`}
      onClick={onSquareClick}
      onMouseEnter={handlers.oneSquareEnter}
      onMouseLeave={handlers.onSquareLeave}
    ></div>
  );
}

function Board({ squares, onSquareClick}) {
  return (
    <div className="board-container">
      <div>
        {game.board.map((row, x) => {
          return (
            <div className="row" key={x}>
              {row.map((_, y) => {
                return (
                  <Square key={`[${x}][${y}]`} mark={squares[x][y]} onSquareClick={() => { onSquareClick(x, y); }} />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Gamelog() {
  return (
    <div className="gamelog">
      <h3>Game log:</h3>
      {game.gameLog.map((entry, index) => (
        <div key={index}>{entry}</div>
      ))}
    </div>
  );
}

function Gameflow({onRestartClick}) {
  const [squares, setSquares] = useState(game.board);

  const onSquareClick = (x, y) => {
    if (!game.board[x][y] && !game.gameEnded) {
      game.board[x][y] = game.player;
      const copy = [...game.board];
      console.log(game.board);
      setSquares(copy);
      game.checkWin();
      game.log(x, y);
      game.nextTurn();
    }
  };

  const onEndGame = ()=>{
    if(game.winner || game.draw) return <GameOver onclk={onRestartClick}/>
  }

  return (
    <>
      {onEndGame()}
      <Board squares={squares} onSquareClick={onSquareClick} />
      <Gamelog />
    </>
  )
}

function Button({ name, onclk }) {
  return (
    <button className="btn" onClick={onclk}>
      {name}
    </button>
  );
}

function Start({ setGameStarted }) {
  const onStartClick = () => {
    game = new Game(3)
    console.log("click");
    game.gameStarted = true;
    setGameStarted(game.gameStarted);
  };

  return (
    <div className="start-div">
      <div className="welcome">
        <h1 style={{ textAlign: "center" }}>Welcome to React Tic Tac Toe</h1>
        <ol>
          <li>The game is played on a grid of 3x3 squares.</li>
          <li>
            Two players take turns to mark empty squares with their respective
            symbols.
          </li>
          <li>
            Player 1 usually uses "X" as their symbol, and Player 2 uses "O".
          </li>
          <li>
            The players alternate placing their symbols on the empty squares.
          </li>
          <li>
            The goal is to get three of their symbols in a horizontal, vertical,
            or diagonal row.
          </li>
          <li>
            If all squares are filled and no player has three symbols in a row,
            the game ends in a draw.
          </li>
          <li>
            The game can also end if one player achieves three in a row and wins
            the game.
          </li>
        </ol>
      </div>
      <div className="ui">
        <Button onclk={onStartClick} name={"Start"} />
      </div>
    </div>
  );
}

function App() {
  const [gameStarted, setGameStarted] = useState(game.gameStarted);
  const onGameRestartClick = ()=>{
    game = new Game(3);
    setGameStarted(game.gameStarted);
  }

  return (
    <div className="App">
      {gameStarted ? <Gameflow onRestartClick={onGameRestartClick} /> : <Start setGameStarted={setGameStarted} />}
    </div>
  );
}

export default App;
