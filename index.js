import { Player } from "./player.js";
import  GameBoard  from "./gameboard.js";
import Keyboard from "./keyboard.js";


// create gameboard and game tiles.  
const board = new GameBoard(0,0,'HELLO');
board.makeGameBoard()
let showKeyBoard = new Keyboard;
showKeyBoard.makeKeyboard();
let p1 = new Player("Devin");

// add event listener and write to tiles from keyboard while checking input. 
document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('click', event => {
    let letter = event.target.innerText
    if (letter == 'ENTER') {
        board.checkWord()
        return
        }
    if (letter == '<<') {
        board.deleteTile()
        return
    }
    let tilePosition = document.getElementById(`${board.currentRow}${board.currentTile}`)
     
     if (board.currentRow < 6 && board.currentTile < 5) {
        tilePosition.textContent = letter
        board.tileRows[board.currentRow][board.currentTile] = letter;
         board.currentTile++
     }
     if (board.currentTile == 5) {
         board.checkWord()
         board.currentRow++
         board.currentTile = 0
         }
    })
  })

  console.log(p1.word)



