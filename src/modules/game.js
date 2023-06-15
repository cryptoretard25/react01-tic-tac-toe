const { log } = console;

const game = {
  player: "x",
  board: (() =>
    Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => false)))(),
  nextTurn() {
    this.player = this.player === "x" ? "o" : "x";
  },
  hit(pos){}
};

log(game.player);
game.nextTurn();
log(game.player);
log(game.board);
