
import './style.css';
import { newGame, addGridListeners, endGame } from './dom.js';
import gameBoard from './gameBoard';
import { fillBoard, fillBoardTemp } from './gameLogic';
import { player } from './player';
import { boardSetup } from './dom.js';







document.body.appendChild(newGame());

//need for AI decisions
let AI = player();

//create the boards
let p1Board = gameBoard();
let AIBoard = gameBoard();

//fill the boards/ will turn into ship placement
AIBoard = fillBoard(AIBoard);



//adds grid listeners 
let enemyGrid = document.getElementById("enemyGrid");
addGridListeners(enemyGrid);

//
//display the popup selection for ship placement
document.body.appendChild(boardSetup());

//start butten listener
let startBtn = document.querySelector(".startBtn");
startBtn.addEventListener('click', finalizePlacement)

//handle turns
function handleAttack(row, column, gridElement) {
    //players attack

    if (AIBoard.getSpot(row, column) == 7 || (AIBoard.getSpot(row, column) == 6)) {
        //try again
    } else {
        AIBoard.recieveAttack(row, column);



        if (AIBoard.getSpot(row, column) == 7) {
            gridElement.style.backgroundColor = "white";
        } else {
            gridElement.style.backgroundColor = "red";
            //check whether all ships are sunk here or at the end 

            //function to change dom to display winner 
            endGame(AIBoard.gameOver(), "Won");
        }

        gridElement.classList.add("selected");
        //AI attacks now
        //get rand spot for AI attack

        //check if all ships have been sunk 
        AITurn();
    }


}




function AITurn() {
    let AIShot = AI.AISpotPlacement();
    //get rid of gridelement 
    let playerGrid = document.getElementById("playerGrid");

    //get the dom cell that will change
    let AIDomShotElement;
    for (const playerElement of playerGrid.children) {
        if (playerElement.getAttribute("data-rows") == AIShot[0] && playerElement.getAttribute("data-column") == AIShot[1]) {
            AIDomShotElement = playerElement;
            break;
        }

    }

    //check if spot has already been taken
    if (p1Board.getSpot(AIShot[0], AIShot[1]) == 7 || p1Board.getSpot(AIShot[0], AIShot[1]) == 6) {
        //AI decides 
        AITurn();
    } else {
        p1Board.recieveAttack(AIShot[0], AIShot[1]);
        if (p1Board.getSpot(AIShot[0], AIShot[1]) == 7) {
            AIDomShotElement.style.backgroundColor = "white";
        } else {
            AIDomShotElement.style.backgroundColor = "red";
            //check whether the game is over
            endGame(p1Board.gameOver(), "lost");
        }
    }


}




function finalizePlacement() {
    let placementBoard = document.getElementById("placementGrid");
    placementBoard = placementBoard.childNodes;
    //logicval board
    let rows = 0;
    let columns = 0
    //loop through transfering the ship type from the board to the logical board 
    for (let i = 0; i <= 99; i++) {
        //naviatet he two dimensionsal array while the other does it in order 
        //every ten restart the column 
        //everyten add one to rows
        if (i % 10 == 0 && i != 0) {
            rows += 1;
            columns = 0;
        }
        if (placementBoard[i].dataset.shipType != undefined) {
            p1Board.board[rows][columns] = placementBoard[i].dataset.shipType
        }
        columns++;
    }
    let setupContainer=document.querySelector(".setupContainer")
    //hide the setupBoard
    setupContainer.remove();

}


export { handleAttack };