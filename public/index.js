// import all modules 

import Player from "./player.js/index.js";
import GameBoard from "./public/gameboard.js/index.js";
import Keyboard from "./keyboard.js/index.js";

// activate gameboard, keyboard, and player. 
const board = new GameBoard();
let keyBoard = new Keyboard();
let p1 = new Player("Devin");
getWord()

// Gets called by getWord() once promise is completed adds word and starts game. 
function myFunc(data) {
    let word = data.toString();
    board.word = word.toUpperCase()
    board.array = Array.from(board.word);
    set()
}

function getWord() {
    fetch('http://161.35.128.37:2020/wordList')
    .then(res => res.json())
    .then(data => myFunc(data))
    .catch(err => console.log(err)) 
}


function set(){ 
    p1.startPopUp()
    board.makeGameBoard();
    keyBoard.makeKeyboard();
    writeNcheck();
    board.currentRow = 0;
    board.currentTile = 0;
}

p1.display();

p1.gamesPlayed = 0
function writeNcheck() {
    document.querySelectorAll('.key').forEach(item => {
        item.addEventListener('click', event => {
            let letter = event.target.innerText
            board.letter = letter
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
                console.log(board.letter)
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
        winLoseDraw()
        return
    }
    
    keyBoard.blackKey()
}


function winLoseDraw(){
    let playerGuess =  board.tileRows[board.currentRow].join('')
    if (board.word === playerGuess){
        getWord()
        p1.wins++;;
        p1.reset()
        p1.display();
        
    }
    if(board.currentRow == 5 && board.currentTile == 4){
        getWord()
        p1.losses++;
        p1.gamesPlayed++
        p1.display();
        p1.reset()
}

}
