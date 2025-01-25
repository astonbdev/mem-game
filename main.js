import { Game } from "./game.js";
import createBoard from "./ui.js";

const game = new Game();

createBoard(game);

console.log(game);