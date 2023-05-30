import { Board } from "./components/Board"

function App() {
  const board = ['X','X','X','X','X','X','X','X','X']

  return (
    <div className='bg-gray-100 flex flex-col justify-center items-center h-screen'>
      <span className="text-5xl">Hello React + tailwind</span>
      <span className="text-2xl">Tic Tac Toe</span>
      <Board board={board} />
    </div>
  )
}

export default App
