import { Game } from "./game.js";

const game = new Game();

let activeCells = 0;

export default function createBoard(){
  for(let row = 0; row < game.height; row++){
    const $cellRow = document.createElement("div");

    for(let col = 0; col < game.width; col++){
      const $cell = document.createElement("div");

      $cell.classList.add("cell");
      $cell.id = `cell-${row}-${col}`
      
      $cellRow.appendChild($cell);
    } 

    const $game = document.getElementById("Game-Container");
    $game.appendChild($cellRow);
  }
}

function clickCell(evt){
  if(!evt.target.id.includes("cell")) return;

  const $cell = evt.target;
  const idParts = evt.target.id.split("-");
  const cellCoords = {row: idParts[1], col: idParts[2]}

  const cellState = game.getCellState(cellCoords);

  if(cellState === null) return;

  $cell.style.backgroundColor = cellState;
}

const $gameContainer = document.getElementById("Game-Container")
$gameContainer.addEventListener("click", clickCell);