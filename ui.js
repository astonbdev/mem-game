import { Game } from "./game.js";

const game = new Game();

const $gameContainer = document.getElementById("Game-Container");

let activeCells = [];

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
  activeCells.push(cellCoords);


  if(activeCells.length < 2) return;
  
  const playResults = game.playCells(activeCells);

  if(playResults.gameOver) {
    endGame();
  }
  if(playResults.correctPlay){
    activeCells = [];
    return;
  } 

  setTimeout(()=>{
    const $cells = []

    for(let cell of activeCells){
      const $cell = document.getElementById(`cell-${cell.row}-${cell.col}`);
      $cells.push($cell);
    }

    resetCells($cells);
    activeCells = [];
  },
  500);
}

function endGame(){
  $gameContainer.removeEventListener("click", clickCell);
  $gameContainer.innerHTML = "";
  $gameContainer.textContent = "YOU WIN! :D"
}

function resetCells($cells){
  for(let $cell of $cells){
    $cell.style.backgroundColor = "";
  }
}

$gameContainer.addEventListener("click", clickCell);