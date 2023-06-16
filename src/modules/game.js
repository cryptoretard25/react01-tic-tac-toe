const { log } = console;

export default class Game {
  constructor() {
    this.player = "x";
    this.board = (() =>
      Array.from({ length: 3 }, () =>
        Array.from({ length: 3 }, () => false)
      ))();
  }
  nextTurn() {
    this.player = this.player === "x" ? "o" : "x";
  }
  hit(pos) {}
}
