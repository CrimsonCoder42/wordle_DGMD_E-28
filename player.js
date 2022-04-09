export default class Player {
    constructor(name) {
        this.name = name;
        this.wins = 0;
        this.losses = 0;
        this.gamesPlayed = 0;

    }
    display() {
        document.getElementById("pWins").innerHTML = `${this.name} wins: ${this.wins}`
        document.getElementById("pLosses").innerHTML = `${this.name} losses: ${this.losses}`
        document.getElementById("gamesPlayed").innerHTML = `Games Played: ${this.gamesPlayed}`
    }
    // use same starter board just change content depending on amount of games played. 
    startPopUp() {
        let firstBoard = ['greeting', 'enterName', 'playerName', 'play']
        for (let i = 0; i < firstBoard.length; i++) {
            const popUp = document.getElementById('gamePop')
            const popUpDiv = document.createElement("div");
            popUpDiv.classList.add("popUpDiv");
            popUpDiv.id = firstBoard[i];
            popUp.append(popUpDiv);
            if (i == 0) {
                let greeting = document.getElementById('greeting')

                // if games played more than 0 display Play Again?. If not then display Welcome to Wordle.

                if (this.gamesPlayed == 0) {
                    greeting.innerText = 'Welcome to Wordle'
                } else {
                    greeting.innerText = 'Play Again?'
                }

            } else if (i == 1 && this.gamesPlayed == 0) {

                document.getElementById('enterName').innerText = 'Enter your name.'

            } else if (i == 2 && this.gamesPlayed == 0) {

                let input = document.getElementById('playerName')
                let text = document.createElement("input")
                text.id = 'textInput';
                input.append(text)

            } else if (i == 3) {
                let playButton = document.getElementById('play')
                if (this.gamesPlayed == 0) {
                    playButton.innerText = 'Play'
                    
                } else {
                    playButton.innerText = 'Play Again?'
                }
                let ids = ["tile-board", "key-board", "display"];
                    playButton.addEventListener('click', () => {
                        ids.forEach(ele => {
                        document.getElementById(ele).style.visibility = 'visible';
                        let popup =document.getElementById("gamePop")
                        popup.style.position = 'fixed'; 
                        popup.style.visibility = 'hidden';
                        if(this.gamesPlayed > 0){
                            document.querySelectorAll('key').style.back
                        }
                    })
                    
                })
            }
        }
    }
}

