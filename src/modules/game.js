const { log } = console;

export default class Game {
  constructor(size) {
    this.size = size;
    this.player = "x";
    this.winner = null;
    this.draw = null;
    this.gameStarted = false;
    this.gameEnded = false;
    this.board = (() =>
      Array.from({ length: size }, () =>
        Array.from({ length: size }, () => "")
      ))();
  }
  nextTurn() {
    this.player = this.player === "x" ? "o" : "x";
  }

  checkWin() {
    if (this.board.every((item) => item.every((cell) => cell))) {
      this.gameEnded = true;
      this.draw = true;
    }
    // horisontal
    for (let x = 0; x < this.board.length; x++) {
      let winner = this.board[x][0];
      let isWin = true;
      for (let y = 0; y < this.board.length; y++) {
        if (this.board[x][y] !== winner) {
          isWin = false;
          break;
        }
      }
      if (winner && isWin) {
        this.gameEnded = true;
        this.winner = winner;
        return;
      }
    }

    // vertical
    for (let y = 0; y < this.board[0].length; y++) {
      let winner = this.board[0][y];
      let isWin = true;
      for (let x = 0; x < this.board.length; x++) {
        if (this.board[x][y] !== winner) {
          isWin = false;
          break;
        }
      }
      if (winner && isWin) {
        this.gameEnded = true;
        this.winner = winner;
        return;
      }
    }

    // main diagonal
    let winner = this.board[0][0];
    let isWin = true;
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i][i] !== winner) {
        isWin = false;
        break;
      }
    }
    if (winner && isWin) {
      this.gameEnded = true;
      this.winner = winner;
      return;
    }

    // side diagonal
    winner = this.board[0][this.board.length - 1];
    isWin = true;
    for (let i = 1; i < this.board.length; i++) {
      if (this.board[i][this.board.length - 1 - i] !== winner) {
        isWin = false;
        break;
      }
    }
    if (winner && isWin) {
      this.gameEnded = true;
      this.winner = winner;
      return;
    }
  }
}