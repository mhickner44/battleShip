
import './style.css';
import {newGame,gridEvents} from './dom.js';
import gameBoard from './gameBoard';
import shipFactory from './ship';

import { selection } from './dom.js';



const p1Board = gameBoard();
const p1carrier =shipFactory("carrier")

p1Board.shipHorizontal(p1carrier, 0, 1);

//places goes through the name and placement options
document.body.appendChild(newGame());
gridEvents();
const runBtn= document.querySelector(".setup");
const gridContainers=document.querySelectorAll("");

document.querySelectorAll('.gridContainer').forEach(grid => {
    grid.addEventListener('click', event => {
        //handle click
      //copmnare selection to the logial dom board
      //dont need to compare need to see if that spot on the board is taken/ hit
      row=selection[0];
      column=selection[1];
      //check for attack
            p1Board.recieveAttack(row,column);
      //check spot and change the dom to the corresponding color
            
        //.change that spot of the board to white if its a miss
            //if ( p1Board.getSpot(row,column)==hit make it red)
     
    })
})















