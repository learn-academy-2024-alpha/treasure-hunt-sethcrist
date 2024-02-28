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
//winning square
  const [treasureLocation, setTreasureLocation] = useState (Math.floor(Math.random() * board.length))
  console.log('Shiny',treasureLocation);

//losing square
const [bombLocation, setBombLocation] = useState (Math.floor(Math.random() * board.length))
console.log('Boom', bombLocation);


  const handleGamePlay = (CurrentSquare) => {
    if(CurrentSquare === treasureLocation) {
      board[CurrentSquare] = "💎"
          setBoard([...board])
          alert("NOT ME TREASURE!")
    } else if(CurrentSquare === bombLocation) {
            board[CurrentSquare] = "💣"
              setBoard([...board])
            alert("KABOOM, Ya aint got no legs")
    } else {
      board[CurrentSquare] = "🌳"
          setBoard([...board])
      }
    }
  

  const playAgain = () => {
    setTreasureLocation(Math.floor(Math.random() * board.length))
    setBombLocation(Math.floor(Math.random() * board.length))
    
    setBoard([
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

  }

      

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
        handleGamePlay={handleGamePlay}
        />
        )
      })}
      <button onClick={playAgain}>Play Again</button>
      </div>
    </>
  )
}

export default App
