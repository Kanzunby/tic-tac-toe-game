import Square from "./Square";

function Board({ xIsNext, board, onPlay }) {
  function handleClick(i) {
    if (board[i] || calculateWinner(board)) return;

    const newBoard = board.slice();

    newBoard[i] = xIsNext ? "X" : "O";
    onPlay(newBoard);
  }

  function calculateWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      // const a = lines[i][0]
      // const b = lines[i][1]
      // const c = lines [i][2]
      const [a, b, c] = lines[i];

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return false;
  }

  const winner = calculateWinner(board);
  // console.log(winner);

  let status = "";
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        <Square value={board[0]} onSquareClick={() => handleClick(0)} />
        <Square value={board[1]} onSquareClick={() => handleClick(1)} />
        <Square value={board[2]} onSquareClick={() => handleClick(2)} />
        <Square value={board[3]} onSquareClick={() => handleClick(3)} />
        <Square value={board[4]} onSquareClick={() => handleClick(4)} />
        <Square value={board[5]} onSquareClick={() => handleClick(5)} />
        <Square value={board[6]} onSquareClick={() => handleClick(6)} />
        <Square value={board[7]} onSquareClick={() => handleClick(7)} />
        <Square value={board[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board;
