import { useState, useRef } from 'react'
import './index.css'
import {Game} from "./game.ts";
import GameContainer from "./GameContainer.tsx"

export type FlipCell= (event: React.MouseEvent<HTMLElement>) => void;

const startColors = [
  ["","","",""],
  ["","","",""],
  ["","","",""]
]

function App() {
  const [activeCells, setActiveCells] = useState<{row:number, col:number}[]>([]);
  const [cellColors, setCellColors] = useState<string[][]>(startColors);
  const [gameOver, setGameOver] = useState(false);

  function flipCell(evt: React.MouseEvent<HTMLElement>){
    const $cell = evt.target as HTMLElement;

    const idParts = $cell.id.split("-");
    const cellCoords = {
      row: Number(idParts[1]), 
      col: Number(idParts[2])
    }

    const cellState = game.current.getCellState(cellCoords);

    if(cellState === null) return;

    changeCellColor(cellCoords, game.current.board[cellCoords.row][cellCoords.col] as string)
    activeCells.push(cellCoords);


    if(activeCells.length < 2) return;
    
    const playResults = game.current.playCells(activeCells);

    if(playResults.gameOver) {
      setGameOver(true);
    }
    if(playResults.correctPlay){
      setActiveCells([])
      return;
    } 

    setTimeout(()=>{
      console.log("timer done");
      resetCells(activeCells);
      setActiveCells([])
    },
    500);
  }

  function changeCellColor(cell: {row:number, col:number}, color: string){
    setCellColors((prevColors) => {
      const newColors = prevColors.map((row) => [...row]); // Create deep copies of the rows
      newColors[cell.row][cell.col] = color; // Reset the specific cells
      return newColors;
    });
  }
  function resetCells(activeCells: {row:number, col:number}[]){
    setCellColors((prevColors) => {
      const newColors = prevColors.map((row) => [...row]); // Create deep copies of the rows
      activeCells.forEach(({ row, col }) => {
        newColors[row][col] = ""; // Reset the specific cells
      });
      return newColors;
    });
  }

  const game = useRef(new Game());

  return (
    <>
    { gameOver ? (<div>You Win! :D</div>) 
      : <GameContainer cells={cellColors} flipCell={flipCell}/>}
    </>
  )
}

export default App
