
import './style.css';
import {newGame,gridEvents} from './dom.js';
import gameBoard from './gameBoard';
import shipFactory from './ship';

const p1Board = gameBoard();
const p1carrier =shipFactory("carrier")

p1Board.shipHorizontal(p1carrier, 0, 1);

//places goes through the name and placement options
document.body.appendChild(newGame());
gridEvents();




//attempt to get the selection from the dom now in the game loop file














