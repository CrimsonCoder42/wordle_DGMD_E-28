// import all modules 

import Player from "./player.js";
import GameBoard from "./gameboard.js";
import Keyboard from "./keyboard.js";

// activate gameboard, keyboard, and player. 
const board = new GameBoard();
let keyBoard = new Keyboard();
let p1 = new Player("Devin");

// calls fetch 
function myFunc(data) {
    let word = data.toString();
    board.word = word.toUpperCase()
    board.array = Array.from(board.word);
}

fetch('http://161.35.128.37:2020/wordList')
.then(res => res.json())
.then(data => myFunc(data))
.catch(err => console.log(err))

p1.display();
board.makeGameBoard();
keyBoard.makeKeyboard();

p1.gamesPlayed = 0
p1.startPopUp()
writeNcheck();
function writeNcheck() {
    document.querySelectorAll('.key').forEach(item => {
        item.addEventListener('click', event => {
            let letter = event.target.innerText
            let tilePosition = document.getElementById(`${board.currentRow}${board.currentTile}`)
            if (letter == 'CHEAT') {
                document.getElementById("cheatWord").innerHTML = board.word
                return
            }
            if (letter == 'ENT') {
                console.log("ENT")
                checkLetter()
                return
            }
            if (letter == '<<') {
                board.deleteTile()
                return
            }
            if (board.currentRow < 6 && board.currentTile < 5) {
                tilePosition.textContent = letter
                keyBoard.playLoc = `${board.currentRow}${board.currentTile}` 
                board.tileRows[board.currentRow][board.currentTile] = letter;
                checkLetter()
                board.currentTile++
            }
            if (board.currentTile == 5) {
                board.currentTile = 0;
                board.currentRow++
            }
        })
    })
}

function checkLetter() {
    let playerLetter = board.tileRows[board.currentRow][board.currentTile];
    if ( board.array[board.currentTile] == playerLetter) {
        board.greenTiles()
        winLoseDraw()
        return
    }
    if(board.array.includes(playerLetter)) {
        board.yellowTiles()
        return
    }
    keyBoard.blackKey()
    winLoseDraw()
}


function winLoseDraw(){
    let playerGuess =  board.tileRows[board.currentRow].join('')
    if (board.word === playerGuess){
        p1.wins++;
        p1.display();
    }
    if(board.currentRow == 5 && board.currentTile == 4){
        p1.losses++;
        p1.display();
}

}
//console.log('got it!')
// p1.wins++;
// p1.display();
// document.getElementById('wordle').innerText = "You Won!!"