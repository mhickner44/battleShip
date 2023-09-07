

import shipFactory from './ship';
import { dropCheck } from './dom';
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

///random numbers
function fillBoard(board) {
    //what am i using player for
    //random numbers fucntino
    let AIplayer = player();


    //random row and column
    let spot = AIplayer.AISpotPlacement()
    let row = spot[0]
    let column = spot[1]
    //random orientation
    //1 = vertical
    //0=horizontal
    let orientation = AIplayer.AIShipOrientation()
    if (orientation == 0) {
        orientaion = "vertical"
    } else {
        orientaion = "horizontal"
    }


    //each ship 
    //need to double up on 3 or use the ship values
    for (const ship in ships) {
        //pass dropcheck the non ship object arguments 
        if (dropCheck(row, column, orientation, length) == true) {

            if (orientation == "vertical") {
                //
                board.shipVertical(ship, row, column);
            } else {
                board.shipHorizontal(ship, row, column);
            }
        }

    }

    return board;
}


export { fillBoard }





