

import shipFactory from './ship';
import { dropCheck, gameBoard } from './gameBoard';
import { player } from './player';

//ships
const botCarrier = shipFactory("carrier");
const botBattleship = shipFactory("battleship");
const botCruiser = shipFactory("cruiser");
const botSubmarine = shipFactory("submarine");
const botDestroyer = shipFactory("destroyer");



let ships = {
    one: botCarrier,
    two: botBattleship,
    three: botCruiser,
    four: botSubmarine,
    five: botDestroyer,
}

ships = Object.values(ships)

///random numbers
function fillBoard(board) {
    //temp board
    let checkBoard = gameBoard();


    //random numbers fucntino
    let AIplayer = player();

    //each ship 
    //need to double up on 3 or use the ship values
    for (let i = 0; i < 5;) {
        //random row and column
        let spot = AIplayer.AISpotPlacement()
        let row = spot[0]
        let column = spot[1]
        //random orientation
        //1 = vertical
        //0=horizontal
        let orientation = AIplayer.AIShipOrientation()

        if (orientation[0] == 0) {
            orientation = "vertical"
        } else {
            orientation = "horizontal"
        }
        //pass dropcheck the non ship object arguments 
        //what if the row and column is bad?
        let result = dropCheck(row, column, orientation, length, checkBoard)
        checkBoard = result[0]

        if (result[1] == true) {
            if (orientation == "vertical") {
                checkBoard.shipVertical(ships[i], row, column);
            } else {
                checkBoard.shipHorizontal(ships[i], row, column);
            }
            i++
        }

    }

    return checkBoard;
}


export { fillBoard }





