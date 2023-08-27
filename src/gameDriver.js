
import './style.css';
import { newGame,addGridListeners } from './dom.js';
import gameBoard from './gameBoard';
import { fillBoard,fillBoardTemp } from './gameLogic';
import { player } from './player';


//player board temporarily


document.body.appendChild(newGame());

//need for AI decisions
let AI=player();

//create the boards
let p1Board = gameBoard();
let AIBoard = gameBoard();

//fill the boards/ will turn into ship placement
 AIBoard = fillBoard(AIBoard);
 p1Board = fillBoardTemp(p1Board);

//adds grid listeners 
let enemyGrid = document.getElementById("enemyGrid");
addGridListeners(enemyGrid);

//handle turns


function handleAttack(row, column, gridElement) {
    //players attack
    AIBoard.recieveAttack(row, column);
    console.log("row" + row + "column" + column)

    
    if (AIBoard.getSpot(row, column) == 7) {
      gridElement.style.backgroundColor = "white";
    } else {
      gridElement.style.backgroundColor = "red";
    }
  
    //AI attacks now
    //get rand spot for AI attack
  AITurn();
  
}




function AITurn(){
    let AIShot = AI.AISpotPlacement();
  
    console.log("AI shot "+AIShot[0]+" "+AIShot[1]);
    //get rid of gridelement 
    let playerGrid = document.getElementById("playerGrid");
  
    //get the dom cell that will change
    let AIDomShotElement;
    for (const playerElement of playerGrid.children) {
      if (playerElement.getAttribute("data-rows") ==AIShot[0] && playerElement.getAttribute("data-column")==AIShot[1]) {
        AIDomShotElement=playerElement;
        break;
      }
  
    }
  
    p1Board.recieveAttack(AIShot[0], AIShot[1]);
  
    if (p1Board.getSpot(AIShot[0], AIShot[1]) == 7) {
      AIDomShotElement.style.backgroundColor="white";
    } else {
       AIDomShotElement.style.backgroundColor = "red";
    }
  }


  export {handleAttack};