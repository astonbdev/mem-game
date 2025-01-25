import { Game } from "./game.js"

export default function createBoard(game){
  for(let row = 0; row < game.height; row++){
    document.createElement
    for(let col = 0; col < game.width; col++){
      const cell = {row: row, col: col}
      const $cell = document.createElement("div");

      $cell.style.backgroundColor = game.getCellState(cell);
      $cell.classList.add("cell");
      
      const $game = document.getElementById("Game-Container");
      $game.appendChild($cell);
    } 
  }
}