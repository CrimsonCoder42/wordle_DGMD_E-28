import Player from "./player.js";
import GameBoard from "./gameboard.js";
import Keyboard from "./keyboard.js";


const board = new GameBoard();
let keyBoard = new Keyboard;
let p1 = new Player("Devin");
let word;

const getWord = () => {
    fetch('http://localhost:2020/wordList')
    .then(res => res.json())
    .then(data => {
        word = data
        makeBoard()
    })
    .catch(err => console.log(err))
}

getWord()
  
p1.display();
board.makeGameBoard();
keyBoard.makeKeyboard();


function makeBoard(){
    board.word = word.toUpperCase()
}
console.log(board.word)
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
    console.log(gameArray[board.currentTile])
    console.log(board.tileRows[board.currentRow][board.currentTile])
    if ( gameArray[board.currentTile] == playerLetter) {
        board.greenTiles()
        winLoseDraw()
        return
    }
    if(gameArray.includes(playerLetter)) {
        board.yellowTiles()
        return
    }
    keyBoard.blackKey()
    winLoseDraw()
}


function winLoseDraw(){
    let playerGuess =  board.tileRows[board.currentRow].join('')
    console.log('boardword '+ board.word)
    console.log('playerGuess '+ playerGuess)

    if (board.word === playerGuess){
        console.log("Test")
        p1.wins++;
        p1.display();
        console.log('You WIN!')
    }
    if(board.currentRow == 5 && board.currentTile == 4){
    console.log("You loose")
}

}
//console.log('got it!')
// p1.wins++;
// p1.display();
// document.getElementById('wordle').innerText = "You Won!!"