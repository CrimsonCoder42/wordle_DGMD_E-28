export default class GameBoard {
    constructor(row, tile, word) {
        this.word = word;
        this.win = 0;
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
    // Generate all the game board. 
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

    //Delete anything in present row.  
    deleteTile() {
        if (this.currentTile > 0) {
            this.currentTile--
            let tilePosition = document.getElementById(`${this.currentRow}${this.currentTile}`)
            tilePosition.textContent = " "
            tilePosition.style.backgroundColor = 'hsl(240, 3%, 7%)';
            this.tileRows[this.currentRow][this.currentTile] = " "
        }
    }
    greenTiles() {
       let tile = document.getElementById(`${this.currentRow}${this.currentTile}`)
       tile.style.backgroundColor = 'hsl(116, 30%, 40%)';
    }
    yellowTiles() {
        let tile = document.getElementById(`${this.currentRow}${this.currentTile}`)     
        tile.style.backgroundColor = 'hsl(50, 50%, 50%)';
    }
    blackTiles() {
        document.getElementById(`${this.currentRow}${this.currentTile}`).style.backgroundColor = 'hsl(245, 3%, 20%)';
    }
}