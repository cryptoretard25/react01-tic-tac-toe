import "./App.css";
import "./styles/marks.css";
import React from "react";
import { useState } from "react";
import Game from "./modules/game";

const game = new Game(3);

function clickme(e){
  console.log(e.target)
}

function Win() {
  return <h1>{game.winner} wins!</h1>;
}

function Draw() {
  return <h1>It's a draw!</h1>;
}

function Square({ mark, onSquareClick, handleMouseEnter, handleMouseLeave }) {
  return (
    <div
      className={`square ${mark}`}
      onClick={onSquareClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></div>
  );
}

function Board({ squares, onenter, onleave, onclick }) {
  return (
    <>
      {game.board.map((row, x) => {
        return (
          <div className="row" key={x}>
            {row.map((_, y) => {
              return (
                <Square
                  key={`[${x}][${y}]`}
                  mark={squares[x][y]}
                  onSquareClick={() => {
                    onclick(x, y);
                  }}
                  handleMouseEnter={onenter}
                  handleMouseLeave={onleave}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
}

function Gameflow() {
  const [squares, setSquares] = useState(game.board);

  const onclick = (x, y) => {
    if (!game.board[x][y] && !game.gameEnded) {
      game.board[x][y] = game.player;
      const copy = [...game.board];
      console.log(game.board);
      setSquares(copy);
      game.checkWin();
      game.nextTurn();
    }
  };

  const onenter = (e) => {
    if (e.target.classList.contains("o") || e.target.classList.contains("x"))
      return;
    game.player === "x"
      ? e.target.classList.add("xhover")
      : e.target.classList.add("ohover");
  };

  const onleave = (e) => {
    e.target.classList.remove("xhover");
    e.target.classList.remove("ohover");
  };

  if (!game.gameEnded) {
    return (
      <Board squares={squares} onenter={onenter} onleave={onleave} onclick={onclick} />
    );
  } else {
    if (game.winner) return <Win />;
    else if (game.draw) return <Draw />;
  }
}

function Button({name}){
  return <button className="btn" onClick={clickme}>{name}</button>
}

function App() {
  return (
    <div className="App">
      <div>
        <Gameflow />
      </div>
      <div className="ui">
        <Button name={"Start"}/>
      </div>
    </div>
  );
}

export default App;
