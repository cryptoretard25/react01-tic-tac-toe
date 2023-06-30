const size = 3;

const board = (() =>
  Array.from({ length: size }, () => Array.from({ length: size }, () => "")))();

function isWin(board) {
  const lines = [
    [ [0, 0], [0, 1], [0, 2], ],
    [ [1, 0], [1, 1], [1, 2], ],
    [ [2, 0], [2, 1], [2, 2], ],

    [ [0, 0], [1, 0], [2, 0], ],
    [ [0, 1], [1, 1], [2, 1], ],
    [ [0, 2], [1, 2], [2, 2], ],

    [ [0, 0], [1, 1], [2, 2], ],
    [ [2, 0], [1, 1], [0, 2], ],
  ];

  for (const row of lines) {
    const [a, b, c] = row;
    const [valueA, valueB, valueC] = [
      board[a[0]][a[1]],
      board[b[0]][b[1]],
      board[c[0]][c[1]],
    ];
    if (valueA && valueA === valueB && valueA === valueC) {
      return valueA;
    }
  }
  return null;
}

function isDraw(board){
  if(!isWin(board)&&board.every(item => item.every(cell=>cell))){
    return true;
  }
}

export {board, isWin, isDraw}
