import { useState } from "react"

import { Board } from "./components/Board"
import { Scores } from "./components/Scores"

function App() {
  const winner = [
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

  const handleBoardClick = (boxIndex) => {
    if (!board[boxIndex]) {
      const updateBoard = board.map((val, index) => {
        if (index === boxIndex) {
          return xPlayed ? 'X' : 'O'
        } else {
          return val
        }
      })
  
      checkWinner(updateBoard)
      setBoard(updateBoard)
      setXPlayed(!xPlayed)
    }
  }

  const checkWinner = (board) => {
    for (let i of winner) {
      const [a, b, c] = i
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a]
      }
    }

    return null
  }

  return (
    <div className='bg-gray-100 flex flex-col justify-center items-center h-screen'>
      <span className="text-5xl">Hello React + tailwind</span>
      <span className="text-2xl">Tic Tac Toe</span>
      <div>
        <Scores xScore={10} oScore={7} isActiveX={xPlayed} />
        <Board board={board} onClick={handleBoardClick} />
      </div>
    </div>
  )
}

export default App
