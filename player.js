export default class Player {
    constructor(name) {
        this.name = name;
        this.wins = 0;
        this.losses = 0;
        this.gamesPlayed = 0;

    }
    display() {
        document.getElementById("pWins").innerHTML = `Games Won: ${this.wins}`
        document.getElementById("pLosses").innerHTML = `Games Lost: ${this.losses}`
        document.getElementById("gamesPlayed").innerHTML = `Games Played: ${this.gamesPlayed}`
    }
}

function getWord() {
    let word = fetch('http://example.com/movies.json')
        .then(response => response.json())
        .then(data => console.log(data));
}