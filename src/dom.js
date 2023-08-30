

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

    //add all elements
    popUpContainer.appendChild(text);
    popUpContainer.appendChild(winnerText);
    popUpContainer.appendChild(replayBtn);

    document.body.appendChild(popUpContainer);
  }

}

//add ship placement listeners
function addPlacementListeners(grid) {
  for (let i = 0; i <= 99; i++) {

    grid[i].addEventListener("dragover", (event) => {
      // prevent default to allow drop
      event.preventDefault();
      //set the hover for multeiple here?
    });
    grid[i].addEventListener("drop", (event) => {
      // prevent default to allow drop
      event.preventDefault();
      let blockID = event.dataTransfer.getData("textID");
      let infoData = event.dataTransfer.getData("data");
      let blok = document.querySelector(blockID);
      event.target.appendChild(blok);
      event.target.dataset.length = infoData;
      //change logical board 
      //get the lenght of the incoming block
      let lengthData = event.dataTransfer.getData("length");



    });


  }
}



function boardSetup() {
  const setupContainer = document.createElement("div");
  setupContainer.classList = "setupContainer";

  //Place Ships text
  const text = document.createElement("h2");
  text.textContent = "Place your ships";
  //change orientation button
  const orientBtn = document.createElement("button");
  orientBtn.textContent = "horizontal";
  orientBtn.classList = "orientBtn";

  //grid
  let grid = game.renderBoard();

  //add the listneers to the blocks of the grid
  addPlacementListeners(grid.childNodes);


  let shipContainer = placementShips();

  //add draggable ship elemenets
  //do this in a loop 
  //ship divs functino call


  //add the ship elements here
  // set draggable



  //add ships to ship container


  //append all nodes
  setupContainer.appendChild(text);
  setupContainer.appendChild(orientBtn);
  setupContainer.appendChild(grid);
  setupContainer.appendChild(shipContainer)

  return setupContainer;

}

function placementShips() {
  //draggable ship container
  const shipContainer = document.createElement("div");
  shipContainer.classList.add("shipContainer");
  
  //ship type and length
  let ships = [
    { length: 5, shipType: 5 },
    { length: 4, shipType: 4 },
    { length: 3, shipType: 3 },
    { length: 3, shipType: 2 },
    { length: 2, shipType: 1 },]

  //create the ship


  //add the blocks of the ship
  for (let i = 0; i < 5; i++) {
    let placementShip = document.createElement("div");
    placementShip.classList = "ship" + i;


    //create the number of blocks that are needed .
    for (let ii = 0; ii < ships[i].length; ii++) {
      let shipBlock = document.createElement("div");
      shipBlock.id = "innerShip"
      placementShip.appendChild(shipBlock);
    }


    placementShip.setAttribute("draggable", true)

    placementShip.addEventListener("dragstart", (event) => {
      // store a ref. on the dragged elem
      // dragged = event.target;
      event.dataTransfer.setData("textID", "."+event.target.classList);
      // event.dataTransfer.setData("data", event.target.dataset.length);
    });
    shipContainer.appendChild(placementShip)
  }
  return shipContainer;
}


export { newGame, addGridListeners, endGame, boardSetup };