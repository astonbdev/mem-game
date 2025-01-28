import { useState, useRef } from 'react'
import './index.css'
import {Game} from "./game.ts";
import GameContainer from "./GameContainer.tsx"

function App() {
  const [activeTiles, setActiveTiles] = useState([]);

  const game = useRef(new Game());

  return (
    <GameContainer cells={game.current.board}/>
  )
}

export default App
