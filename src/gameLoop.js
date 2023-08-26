
import './style.css';
import { newGame } from './dom.js';
import gameBoard from './gameBoard';
import shipFactory from './ship';
import player from './player';

import { fillBoard, fillBoardTemp } from './gameLogic';



const AI = player();

let p1Board = gameBoard();
let AIBoard = gameBoard();


//fills the board with the corrrect ships

AIBoard = fillBoard(AIBoard);
p1Board = fillBoardTemp(p1Board);//player board temporarily


document.body.appendChild(newGame());


//get the blocks from the enemy grid
let enemyGrid = document.getElementById("enemyGrid");

const addGridListeners = () => {
  for (const gridElement of enemyGrid.children) {
    gridElement.addEventListener('click', event => {
      //handle click
      let row = gridElement.getAttribute("data-rows")
      let column = gridElement.getAttribute("data-column");
      handleAttack(row, column, gridElement);
    }
    )
  }
};

//handleAttack event 

addGridListeners();



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

const runBtn = document.querySelector(".setup");









