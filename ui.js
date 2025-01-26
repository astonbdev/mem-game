export default function createBoard(game){
  for(let row = 0; row < game.height; row++){
    const $cellRow = document.createElement("div");

    for(let col = 0; col < game.width; col++){
      const cell = {row: row, col: col}
      const $cell = document.createElement("div");

      $cell.classList.add("cell");
      
      $cellRow.appendChild($cell);
    } 

    const $game = document.getElementById("Game-Container");
    $game.appendChild($cellRow);
  }
}