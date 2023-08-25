

const box = document.getElementById("box");

const root = document.getElementById("root");

import gameBoard from "./gameBoard";

const game = gameBoard();
let selection;
// import { p1Board, p1carrier } from './gameLogic.js';

function newGame() {
    let component = document.createElement('div');
    component.classList = "boardContainer";
    let grid1 = game.renderBoard();
    let grid2 = game.renderBoard();

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
//function gridSelection(playerBoard1,playerBoard2) {
function gridEvents() {
    
    document.querySelectorAll('.block').forEach(gridElement => {
        gridElement.addEventListener('click', event => {
            //handle click
            let row = gridElement.getAttribute("data-rows")
            let column = gridElement.getAttribute("data-column");
            //place a ship on this spot 
            //or return the cooridnates to the game loop and placethe ship
            //return the grid that was selected

            //will need to add what grid the selection came from
            //blur the other one or something
            selection = {row,column}
            console.log(selection);
        })
    })
}





export  {gridEvents,newGame,selection};