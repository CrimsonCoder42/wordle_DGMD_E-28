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
    // use same starter board just change content depending on amount of games played. 
    startPopUp() {
            let playButton = document.getElementById('play')
                playButton.innerText = "Let's Play!"
                let ids = ["tile-board", "key-board", "display"];
                    playButton.addEventListener('click', () => {
                        ids.forEach(ele => {
                        document.getElementById(ele).style.visibility = 'visible';
                        let popup =document.getElementById("gamePop")
                        popup.style.position = 'fixed'; 
                        popup.style.visibility = 'hidden';
                    })
                    
                })
            }
        }


