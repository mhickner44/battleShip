

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


function endGame(result, winner) {
  if (result == true) {
    //place pop up over the board\


    const popUpContainer = document.createElement("div");
    popUpContainer.className = "popUpContainer"
    const text = document.createElement("h2");
    text.textContent = "Game Over!";
    const winnerText = document.createElement("h2");
    winnerText.className = "winnerText";
    winnerText.textContent = "You " + winner;
    const replayBtn = document.createElement("button");
    replayBtn.textContent = "Replay?"


    replayBtn.addEventListener("click", (event) => {
      location.reload();
    })

    //add all elements
    popUpContainer.appendChild(text);
    popUpContainer.appendChild(winnerText);
    popUpContainer.appendChild(replayBtn);

    document.body.appendChild(popUpContainer);
  }



}
//temp board for checking if spot is
let checkBoard = gameBoard();


//add ship placement listeners
function addPlacementListeners(grid) {
  for (let i = 0; i <= 99; i++) {
    grid[i].setAttribute("draggable", false)
    grid[i].addEventListener("dragover", (event) => {
      // prevent default to allow drop
      event.preventDefault();
      //set the hover for multeiple here?
    });
    grid[i].addEventListener("drop", (event) => {

      // prevent default to allow drop
      event.preventDefault();

      let row = event.target.getAttribute("data-rows")
      let column = event.target.getAttribute("data-column")

      let blockID = event.dataTransfer.getData("textID");
      let shipType = event.dataTransfer.getData("shipType");
      let orientation = event.dataTransfer.getData("orientation");
      if (blockID == "") {
        //do nothing
      } else {
        let blok = document.querySelector(blockID);
        let shipLength = blok.getAttribute("data-length")

        if (dropCheck(parseInt(row), parseInt(column), orientation, parseInt(shipLength)) == true) {
          event.target.appendChild(blok);
          //setting the grid element ship type dataset
          event.target.dataset.shipType = shipType;
          event.target.dataset.orientation = orientation;

          blok.style.cursor = "not-allowed"
          blok.setAttribute("draggable", false)
        }
      }

    });
  }
}




function dropCheck(row, column, orientation, shipLength) {


  if (orientation == "vertical") {
    //check for edges 
    if (row + shipLength > 10) {
      alert("Piece must be on the board")
      return false;
    }

    for (let i = 0; i < shipLength; i++) {
      if (checkBoard.board[row + i][column] == 1) {
        //cannot place
        alert("Ship is already there!")
        return false
      } else {
        checkBoard.board[row + i][column] = 1;

      }

    }
    return true;
  } else {
    if (column + shipLength > 10) {
      alert("Piece must be on the board")
      return false;
    }
    for (let i = 0; i < shipLength; i++) {
      //need to start at the column it was placed on 
      if (checkBoard.board[row][column + i] == 1) {
        alert("Ship is already there!")
        return false
      } else {
        //its fine 
        checkBoard.board[row][column + i] = 1;
      }

    }

    return true;
  }
}






function boardSetup() {
  const setupContainer = document.createElement("div");
  setupContainer.classList = "setupContainer";


  //background 
  
  let grid = game.renderBoard();
  grid.setAttribute('id', "placementGrid");
  //Place Ships text
  const text = document.createElement("h2");
  text.textContent = "Place your ships";
  //change orientation button
  const startBtn = document.createElement("button");
  startBtn.classList = "startBtn";
  startBtn.textContent = "Start Game";

  //add the listneers to the blocks of the grid
  addPlacementListeners(grid.childNodes);

  let shipContainer = placementShips();

  const message = document.createElement("h2");
  message.textContent = "Double click to rotate ship"

  //append all nodes
  setupContainer.appendChild(text);
  setupContainer.appendChild(startBtn);
  setupContainer.appendChild(grid);
  setupContainer.appendChild(message)
  setupContainer.appendChild(shipContainer)


  return setupContainer;

}

function placementShips() {
  //draggable ship container
  const shipContainer = document.createElement("div");
  shipContainer.classList.add("shipContainer");

  //ship type and length
  let ships = [
    { length: 5, shipType: 1 },
    { length: 4, shipType: 2 },
    { length: 3, shipType: 3 },
    { length: 3, shipType: 4 },
    { length: 2, shipType: 5 },]

  //create the ship


  //add the blocks of the ship
  for (let i = 0; i < 5; i++) {
    let placementShip = document.createElement("div");
    placementShip.classList = "ship" + i;
    placementShip.dataset.shipType = ships[i].shipType;
    placementShip.dataset.length = ships[i].length;
    placementShip.dataset.orientation = "vertical"
    placementShip.id = "vertical";
    //create the number of blocks that are needed .
    for (let ii = 0; ii < ships[i].length; ii++) {
      let shipBlock = document.createElement("div");
      shipBlock.id = "innerShip"
      placementShip.appendChild(shipBlock);
      shipBlock.setAttribute("draggable", false)
    }


    placementShip.setAttribute("draggable", true)
    placementShip.addEventListener("dragstart", (event) => {
      // store a ref. on the dragged elem
      // dragged = event.target;
      event.dataTransfer.setData("textID", "." + event.target.classList);
      event.dataTransfer.setData("shipType", event.target.dataset.shipType);
      event.dataTransfer.setData("shipLength", event.target.dataset.length);
      event.dataTransfer.setData("orientation", event.target.dataset.orientation);


    });

    placementShip.addEventListener("dblclick", (event) => {

      if (placementShip.dataset.orientation == "vertical") {
        placementShip.dataset.orientation = "horizontal"
        placementShip.id = "horizontalShip"
      } else {
        placementShip.dataset.orientation = "vertical"
        placementShip.id = ""
      }
      //remove draggable option


    });
    shipContainer.appendChild(placementShip);
  }
  return shipContainer;
}


export { newGame, addGridListeners, endGame, boardSetup,dropCheck };