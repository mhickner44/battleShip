

const box = document.getElementById("box");
const Board = require('./gameBoard.js');
const root = document.getElementById("root");
const game = Board();

// import { p1Board, p1carrier } from './gameLogic.js';

function newGame() {
    let component = document.createElement('div');
    component.classList="boardContainer";
    let grid1= game.renderBoard();
    let grid2=game.renderBoard();

    component.appendChild(grid1);
    component.appendChild(grid2);


    return component;
}

// function shipPlacement() {
//     //try to get one of the grid div elements that is on the board.
//     document.querySelectorAll('.some-class').forEach(gridElement => {
//         gridElement.addEventListener('click', event => {
//             //handle click
//             let row = gridElement.getAttribute("data-rows")
//             let column = gridElement.getAttribute("data-column");
//             //place a ship on this spot 
// //or return the cooridnates to the game loop and plaec the ship

//            // p1Board.shipHorizontal(p1carrier, 0, 1);
           
//         })
//     })
// }

function gridSelection() {

}





module.exports = newGame;