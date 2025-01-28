import Cell from "./Cell.tsx";

type GameContainerProps = {
  cells: (string | null)[][];
}

export default function GameContainer({cells}: GameContainerProps){
  console.log("GameContainer");

  function createBoard(){
    const gameCells = [];

    for(let row = 0; row < cells.length; row++){
      let rowCells: any = [];
      gameCells.push(<div>{rowCells}</div>)
      for(let col = 0; col < cells[0].length; col++){
        rowCells.push(<Cell id={`cell-${row}-${col}`}/>)
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