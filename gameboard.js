export default class GameBoard {
    constructor(row, tile, word) {
        this.word = word;
        this.currentRow = row;
        this.currentTile = tile;
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
        if (rowWord == this.word) {
            console.log('got it!')
        }
        }

}


