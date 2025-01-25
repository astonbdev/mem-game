console.log("Hello from game.js!");

const COLORS = ["red", "blue", "green", "yellow", "purple", "orange"];

export class Game{

  constructor(width = 4, height = 3){
      this.width = width;
      this.height = height;
      this.numColors = (width * height) / 2;
      this.board = this.generateBoard();
  }

  generateBoard(){
    const boardValues = this.shuffle(COLORS);

    const board = []

    for(let row = 0; row < this.height; row++){
      board.push(new Array());

      for(let col = 0; col < this.width; col++){
        board[row].push(boardValues.pop());
      } 
    }

    return board;
  }

  shuffle(items){
    // Create a copy of the array to avoid mutating the original
    const shuffledItems = [...items, ...items];

    // Loop through the array backwards
    for (let i = shuffledItems.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i (inclusive)
      const randomIndex = Math.floor(Math.random() * (i + 1));

      // Swap the current element with the element at the random index
      [shuffledItems[i], shuffledItems[randomIndex]] = [shuffledItems[randomIndex], shuffledItems[i]];
    }

    return shuffledItems;
  }

  areCellsSameColor(cell1, cell2){
    if(this.board[cell1.row][cell2.col] === this.board[cell2.row][cell2.col]){
      return true;
    }

    return false;
  }

}