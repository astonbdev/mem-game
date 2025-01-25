console.log("Hello from game.js!");

const COLORS = ["red", "blue", "green", "yellow", "purple", "orange"];

export class Game{

  constructor(width = 4, height = 3){
      this.width = width;
      this.height = height;
      this.numColors = (width * height) / 2;
      this.board = this.generateBoard();
  }

  /**
   * generates 2d array containing the state values of the board.
   * these values are all initially colors from the COLORS global
   * values will change to null when the board has 
   * 
   * @returns string[][]
   */
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

  /**
   * shuffles and returns input items
   * @param {*} items 
   * @returns new array of shuffled items
   */
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

  /**
   * Plays a turn. If the input cells have matching states or colors,
   * updates the game board cells to be null values, as they have been selected and
   * correctly identified
   * 
   * returns bool if the play was correct or not
   * @param {row: int, col: int} cell1 
   * @param {row: int, col: int} cell2 
   * @returns bool
   */
  playCells(cell1, cell2){
    if(this.board[cell1.row][cell1.col] === this.board[cell2.row][cell2.col]){
      this.board[cell1.row][cell1.col] = null;
      this.board[cell2.row][cell2.col] = null;

      return true;
    }

    return false;
  }

  /**
   * returns state of the board cell
   * 
   * @param {row: int, col: int} cell 
   * @returns 
   */
  getCellState(cell){
    return this.board[cell.row][cell.col]
  }

}