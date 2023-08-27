

const box = document.getElementById("box");

const root = document.getElementById("root");




import gameBoard from "./gameBoard";
import { handleAttack } from "./gameDriver";

const game = gameBoard();



function newGame() {
  let component = document.createElement('div');
  let playerBoardLabel = document.createElement('h2');
  playerBoardLabel.textContent = "Player One";

  let AIBoardLabel = document.createElement('h2');
  AIBoardLabel.textContent = "Enemy";


  component.classList = "boardContainer";



  let grid1 = game.renderBoard();
  let grid2 = game.renderBoard();
  grid2.id = "enemyGrid";
  grid1.id = "playerGrid";

  component.appendChild(playerBoardLabel);
  component.appendChild(grid1);
  component.appendChild(grid2);
  component.appendChild(AIBoardLabel);

  //run button
  let runBtn = document.createElement("button");
  runBtn.classList = "setup";
  runBtn.textContent = "run";
  component.appendChild(runBtn);


  return component;
}


const addGridListeners = (enemyGrid) => {
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


function endGame(result,winner) {
  if (result == true) {
    //place pop up over the board\


    const popUpContainer = document.createElement("div");
    popUpContainer.className="popUpContainer"
    const text = document.createElement("h2");
    text.textContent="Game Over!";
    const winnerText = document.createElement("h2");
    winnerText.className="winnerText";
    winnerText.textContent="You "+winner;
    const replayBtn=document.createElement("button");
    replayBtn.textContent="Replay?"

    //add all elements
    popUpContainer.appendChild(text);
    popUpContainer.appendChild(winnerText);
    popUpContainer.appendChild(replayBtn);
    
    document.body.appendChild(popUpContainer);
  }

}



//function gridSelection(playerBoard1,playerBoard2) {
// function gridEvents() {

//     document.querySelectorAll('.block').forEach(gridElement => {
//         gridElement.addEventListener('click', event => {
//             //handle click
//             let row = gridElement.getAttribute("data-rows")
//             let column = gridElement.getAttribute("data-column");
//             //place a ship on this spot 
//             //or return the cooridnates to the game loop and placethe ship
//             //return the grid that was selected

//             //will need to add what grid the selection came from
//             // //blur the other one or something
//             selection = {row,column}
//             console.log(selection);
//         })
//     })
// }
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




export { newGame, addGridListeners,endGame };