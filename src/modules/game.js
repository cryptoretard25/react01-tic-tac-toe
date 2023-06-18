const { log } = console;

class Game {
  constructor(size) {
    this.size = size;
    this.player = null;
    this.gameStarted = false;
    this.gameEnded = false;
    this.board = (() =>
      Array.from({ length: size }, () =>
        Array.from({ length: size }, () => false)
      ))();
  }
  nextTurn() {
    if (!this.player) return (this.player = "x");
    return (this.player = this.player === "x" ? "o" : "x");
  }

  checkWin() {
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
        return winner;
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
        return winner;
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
      return winner;
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
      return winner;
    }
  }
}

/*
const game = new Game(4);
game.board[1][0] = "x";
game.board[1][1] = "x";
game.board[1][2] = "x";
game.board[1][3] = "x";

game.board[0][0] = "x";
game.board[1][0] = "x";
game.board[2][0] = "x";
game.board[3][0] = "x";

game.board[0][0] = "x";
game.board[1][1] = "x";
game.board[2][2] = "x";
game.board[3][3] = "x";

game.board[0][3] = "o";
game.board[1][2] = "o";
game.board[2][1] = "o";
game.board[3][0] = "o";

game.player = "x";
log(game.board);
log(game.checkWin());
*/