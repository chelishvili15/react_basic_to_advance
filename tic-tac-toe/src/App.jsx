import { useState } from "react"

import { Board } from "./components/Board"
import { Scores } from "./components/Scores"
import { Reset } from "./components/Reset"

function App() {
  const winPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlayed, setXPlayed] = useState(true)
  const [scores, setScores] = useState({xScore: 0, oScore: 0})
  const [gameOver, setGameOver] = useState(false)

  const handleBoardClick = (boxIndex) => {
    if (!board[boxIndex]) {
      const updateBoard = board.map((val, index) => {
        if (index === boxIndex) {
          return xPlayed ? 'X' : 'O'
        } else {
          return val
        }
      })

      setBoard(updateBoard)
  
      if (checkWinner(updateBoard)) {
        let {xScore, oScore} = scores

        if (checkWinner(updateBoard) === 'X') {
          xScore += 1
          setScores({ xScore, oScore })
          setGameOver(true)
        } else if (checkWinner(updateBoard) === 'O') {
          oScore += 1
          setScores({ xScore, oScore })
          setGameOver(true)
        }
      }

      setXPlayed(!xPlayed)
    }
  }

  const checkWinner = (board) => {
    for (let i of winPositions) {
      const [a, b, c] = i
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a]
      }
    }

    return null
  }

  const resetBoard = () => {
    const resetBoard = board.map(() => null)
    setGameOver(false)
    setBoard(resetBoard)
  }

  return (
    <div className='bg-gray-100 flex flex-col justify-center items-center h-screen'>
      <span className="text-5xl">React + tailwind</span>
      <span className="text-2xl">Tic Tac Toe</span>
      <div>
        <Scores xScore={scores.xScore} oScore={scores.oScore} isActiveX={xPlayed} />
        <Board board={board} onClick={!gameOver && handleBoardClick} />
        <Reset onClick={resetBoard} />
      </div>
    </div>
  )
}

export default App
