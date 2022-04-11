export default class Player {
    constructor() {
        this.wins = 0;
        this.losses = 0;
        this.gamesPlayed = 0;

    }
    display() {
        document.getElementById("pWins").innerHTML = `Player wins: ${this.wins}`
        document.getElementById("pLosses").innerHTML = `Player losses: ${this.losses}`
        document.getElementById("gamesPlayed").innerHTML = `Games Played: ${this.gamesPlayed}`
    }
    reset() {
    document.getElementById('cheatWord').innerHTML = "Cheater"
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
    tile.remove();
    });
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
    key.remove();
    });
    }

    makeVisible() {
        let ids = ["tile-board", "key-board", "display"];
        ids.forEach(ele => {
            document.getElementById(ele).style.visibility = 'visible';
            let popup =document.getElementById("gamePop")
            popup.style.position = 'fixed'; 
            popup.style.visibility = 'hidden';
    })
        }

    }
