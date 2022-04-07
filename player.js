class Player {
    constructor(name) {
        this.name = name;
        this.wins = 0;
        this.losses = 0;
        this.gamesPlayed = 0;

    }
}


function getWord() {
    let word = fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
}


export { Player };