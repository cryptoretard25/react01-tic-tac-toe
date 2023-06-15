import logo from "./logo.svg";
import "./App.css";
import "./styles/marks.css";

// const game = {
//   player: "x",
//   board: (() =>
//     Array.from({ length: 3 }, (_, row) =>
//       Array.from({ length: 3 }, (item, col) => {
//         item = <Square />;
//         console.log(row + ": " + col);
//       })
//     ))(),
//   nextTurn() {
//     this.player = this.player === "x" ? "o" : "x";
//   },
// };

const field = Array.from({length:3},()=>Array.from({length:3},()=><Square/>))



function Square() {
  function handleClick(e) {
    e.target.classList.add("cross");
  }
  return <div className="square" onClick={handleClick}></div>;
}

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
