
import './style.css';
import { newGame } from './dom.js';
import gameBoard from './gameBoard';
import shipFactory from './ship';



let selection;

const p1Board = gameBoard();
const p1carrier = shipFactory("carrier")

p1Board.shipHorizontal(p1carrier, 0, 1);

//places goes through the name and placement options
document.body.appendChild(newGame());





const addGridListeners = () => {
  document.querySelectorAll('.block').forEach(gridElement => {
    gridElement.addEventListener('click', event => {
      //handle click
      let row = gridElement.getAttribute("data-rows")
      let column = gridElement.getAttribute("data-column");

      //get current shot location
      selection = { row, column }
      console.log(selection);
      //update the dom - this becomes a function later
      p1Board.recieveAttack(row, column);

      if (p1Board.getSpot(row, column)==7) {
        gridElement.style.backgroundColor="white";
      }else{
        gridElement.style.backgroundColor="red";
      }




      //future call shot control method
      //this will essentially be game play
    })
  })
};

//handleAttack event 

addGridListeners();

const runBtn = document.querySelector(".setup");









