

import shipFactory from './ship';


//ships
const botCarrier = shipFactory("carrier");
const botBattleship = shipFactory("battleship");
const botCruiser = shipFactory("cruiser");
const botSubmarine = shipFactory("submarine");
const botDestroyer = shipFactory("destroyer");

const p1Carrier = shipFactory("carrier");
const p1battleship = shipFactory("battleship");
const p1cruiser = shipFactory("cruiser");
const p1submarine = shipFactory("submarine");
const p1destroyer = shipFactory("destroyer");


function fillBoard(board) {
    board.shipHorizontal(botCarrier, 0, 5);
    // board.shipVertical(botBattleship, 0, 1);
    // board.shipHorizontal(botCruiser, 7, 1);
    // board.shipVertical(botSubmarine, 3, 4);
    // board.shipHorizontal(botDestroyer, 8, 7);
    return board;
}

function fillBoardTemp(board) {
    // board.shipHorizontal(p1Carrier, 0, 5);
    // board.shipVertical(p1battleship, 2, 1);
    // board.shipHorizontal(p1cruiser, 3, 4);
    // board.shipHorizontal(p1submarine, 6, 7);
    board.shipHorizontal(p1destroyer, 4, 6);
    return board;
}

// function finalizePlacement() {
//    //can I even access these boards here?
//     let playerGrid = document.getElementById("playerGrid");
//     let placementBoard = document.getElementById("placementGrid");


//     //loop through transfering the ship type from the board to the logical board 
//         for (const grid in placementBoard) {
          
//         }

// }






export { fillBoard, fillBoardTemp }





