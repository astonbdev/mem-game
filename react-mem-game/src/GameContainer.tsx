import Cell from "./Cell.tsx";
import { FlipCell } from "./App.tsx";

type GameContainerProps = {
  cells: (string)[][];
  flipCell: FlipCell;
}

export default function GameContainer({cells, flipCell}: GameContainerProps){
  console.log("GameContainer", cells);

  function createBoard(){
    console.log("createBoard");
    const gameCells = [];

    for(let row = 0; row < cells.length; row++){
      let rowCells: any = [];
      gameCells.push(<div>{rowCells}</div>)
      for(let col = 0; col < cells[0].length; col++){
        rowCells
        .push(<Cell id={`cell-${row}-${col}`} color={cells[row][col] as string} flipCell={flipCell}/>)
      } 
    }

    return gameCells;
  }

  return(
    <div className="game-container">
      {createBoard()}
    </div>
  )
}