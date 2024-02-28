import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])


  const handleGamePlay = (CurrentSquare) => {
    const updatedBoard = [...board]
      updatedBoard[CurrentSquare] = "🌳"
      setBoard(updatedBoard)
  }
  //or
  // const handleGamePlay = (CurrentSquare) => {
  //     board[CurrentSquare] = "🌳"
  //     setBoard([...board])
  // }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
      {board.map((square, index) => {
        return (
        <Square 
        square={square} 
        key={index}
        index={index} 
        handleGamePlay={handleGamePlay}/>
        )
      })}
      </div>
    </>
  )
}

export default App
