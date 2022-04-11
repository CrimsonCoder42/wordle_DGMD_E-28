// import all modules 
import Player from "./player.js";
import GameBoard from "./gameboard.js";
import Keyboard from "./keyboard.js";

// activate gameboard, keyboard, and player. 
const board = new GameBoard();
let keyBoard = new Keyboard();
let p1 = new Player("Devin");
startPopUp()

// initial pop up that calls start game when button is pressed. 
function startPopUp() {
    let playButton = document.getElementById('play')
    playButton.innerText = "Let's Play!"
    playButton.addEventListener('click', startGame)
    }

// calls myFunc to get a new word
function startGame(){
    p1.makeVisible()
	getWord().then(myFunc);
}

async function getWord(){
	const url = "https://random-word-api.herokuapp.com/all";
  	const res = await fetch(url);
  	const allWords = await res.json();
  	const fiveLetterWords = allWords.filter(word => word.length === 5);
  	const randIndex = Math.floor(Math.random() * fiveLetterWords.length);
      const word = fiveLetterWords[randIndex];
	return word;
}

function myFunc(word) {
    board.word = word.toUpperCase()
    board.array = Array.from(board.word);
    set()
}


// creates gameboard and display
function set(){ 
    document.getElementById("wordle").textContent = 'WORDLE'
    document.getElementById('cheatWord').innerHTML = "Cheater"
    board.makeGameBoard();
    keyBoard.makeKeyboard();
    writeNcheck();
    board.currentRow = 0;
    board.currentTile = 0;
    p1.display();
}

// checks input letter and pushes to current tile  
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
            if (board.currentTile == 5)
             {  
                winLoseDraw()
                board.currentTile = 0;
                board.currentRow++
            }
        })
    })
}

//checks letter to make sure change color 

function checkLetter() {
    let playerLetter = board.tileRows[board.currentRow][board.currentTile];
    if ( board.array[board.currentTile] == playerLetter) {
        board.greenTiles()
        return
    }
    if(board.array.includes(playerLetter)) {
        board.yellowTiles()
        return
    }   
    keyBoard.blackKey()
}


function winLoseDraw(){
    let showWin = document.getElementById("wordle")
    let playerGuess =  board.tileRows[board.currentRow].join('')
    if (board.word === playerGuess){
        showWin.textContent = "You Win!!!"
        p1.wins++;
        p1.gamesPlayed++;
        p1.display();
        startGame();
        p1.reset();            
    }
    if(board.currentRow == 5 && board.currentTile == 5){
        showWin.textContent = "You Lose!!"
        p1.losses++;
        p1.gamesPlayed++
        p1.display();
        startGame();
        p1.reset()
}

}
