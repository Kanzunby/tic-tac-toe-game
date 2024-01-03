import { useState } from "react";
import Board from "./component/Board";

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrrentMove] = useState(0);
  const currentBoard = history[currentMove];
  console.log(currentMove);

  function jumpTo(nextMove) {
    setCurrrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  function handlePlay(newBoard) {
    const nextHistory = [...history.slice(0, currentMove + 1), newBoard];
    setHistory(nextHistory);
    setCurrrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  const moves = history.map((board, number) => {
    let description = "";
    if (number > 0) {
      description = "Go to Number#" + number;
    } else {
      description = "Start Game";
    }

    return (
      <li key={number}>
        <button onClick={() => jumpTo(number)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <h1 className="game-title">Tic-Tac-Toe Game</h1>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} board={currentBoard} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}

export default App;
