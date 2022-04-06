let winWord = 'SUPER'

class Player {
    constructor(name, word) {
        this.name = name;
        this.word = word;
        this.wins = 0;
        this.losses = 0;
        this.gamesPlayed;

    }
}
class GameBoard {
    constructor() {
        this.currentRow = 0;
        this.currentTile = 0;
        this.color = ' ';
        this.tileRows = [
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', '']
        ]
    }
    makeGameBoard() {
        this.tileRows.forEach((row, rowIndex) => {
            row.forEach((tile, tileIndex) => {
                const tileBoard = document.querySelector('.tile-board')
                const tileDiv = document.createElement("div")
                tileDiv.classList.add(`tile`)
                tileDiv.id = `${rowIndex}${tileIndex}`;
                tileBoard.append(tileDiv);
            })
        })
    }

    deleteTile() {
        if (this.currentTile > 0) {
            this.currentTile--
            let tilePosition = document.getElementById(`${this.currentRow}${this.currentTile}`)
            tilePosition.textContent = " "
            this.tileRows[this.currentRow][this.currentTile] = " "
        }
    }

    checkWord() {
        let rowWord = this.tileRows[this.currentRow].join('')
        if (rowWord = )
        }

}

class Keyboard {
    constructor() {
        this.letters = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','ENTER','Z','X','C','V','B','N','M','<<',
        ]
    }

    makeKeyboard() {
        this.letters.forEach(letter => {
            const keyboard = document.querySelector('.key-board');
            const keyDiv = document.createElement("div");
            keyDiv.innerText = letter;
            keyDiv.classList.add("key");
            keyDiv.id = `${letter}`;
            keyDiv.dataset.key = `${letter}`
            keyDiv.addEventListener('click', () => keyClick(letter))
            keyboard.append(keyDiv);
        })
    }

}



let boardControl = new GameBoard();
boardControl.makeGameBoard();
let showKeyBoard = new Keyboard();
showKeyBoard.makeKeyboard();


function keyClick(letter) {
    if (letter == 'ENTER') {
        boardControl.checkWord()
        return
    }
    if (letter == '<<') {
        boardControl.deleteTile()
        return
    }
    let tilePosition = document.getElementById(`${boardControl.currentRow}${boardControl.currentTile}`)
    if (boardControl.currentRow < 6 && boardControl.currentTile < 5) {
    tilePosition.textContent = letter
    boardControl.tileRows[boardControl.currentRow][boardControl.currentTile] = letter;
    boardControl.currentTile++
    }
    if (boardControl.currentTile == 5) {
    boardControl.checkWord()
    boardControl.currentRow++
    boardControl.currentTile = 0
    }
}

function getWord() {
    let word = fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
}