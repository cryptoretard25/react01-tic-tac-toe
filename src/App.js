import "./App.css";
import "./styles/marks.css";
import React from "react";
import { useState } from "react";

function Square() {
  const [mark, setMark] = useState(null)

  function handleClick(e){
    setMark(()=>{
      const random = Math.floor(Math.random()*2)
      return random === 0? 'circle': 'cross'
    })
  }

  return <div className={`square ${mark}`} onClick={handleClick}></div>;
}

function Board() {
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
