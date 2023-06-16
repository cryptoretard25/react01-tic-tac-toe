import logo from "./logo.svg";
import "./App.css";
import "./styles/marks.css";
import React from "react";

function Square({ mark, value }) {
  return <div className={`square ${mark}`}>{value}</div>;
}

function Board() {
  return (
    <>
      <div className="row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
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
