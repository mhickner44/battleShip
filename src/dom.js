

const box = document.getElementById("box");
const Board = require('./gameBoard.js');
const root = document.getElementById("root");
const game = Board();



function newGame() {
    let component = document.createElement('div');
    let playerName = document.createElement('h2');
    let playerTextInput = document.createElement('input');
    let enterBtn = document.createElement('button');


    component.appendChild(playerName);
    component.appendChild(playerTextInput);
    component.appendChild(enterBtn);

    component.classList = "container";
    playerName.classList = "player";
    playerTextInput.id = "playerTextInput";
    enterBtn.classList = "enter";

    enterBtn.textContent = 'Enter';
    playerName.textContent = "Player";


    enterBtn.addEventListener("click", function () {
        //take the name of the player input 
        const textInput = document.querySelector('#playerTextInput')

        root.innerHTML = "";

        const gridContainer = game.renderBoard();
        const playerName = document.createElement('h2');
        const orientBtn = document.createElement('button');
        orientBtn.textContent="ROTATE";
        orientBtn.classList="orientBtn";

        gridContainer.classList = "gridContainer ";
   
        //get text of playername and display it 

        playerName.textContent = textInput.value;

    

        const container = document.createElement('div');
        container.classList="container";

        container.appendChild(playerName);
        container.appendChild(orientBtn);
        container.appendChild(gridContainer);

        root.appendChild(container);
        shipPlacement()

    });

    return component;
}

function shipPlacement(){
    //try to get one of the grid div elements that is on the board.
    let gridElements=document.querySelectorAll("block");
    console.log("we gottem"+gridElements.length);
    //dont think this worked

}





module.exports = newGame;