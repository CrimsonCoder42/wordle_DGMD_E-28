export default class Keyboard {
    constructor() {
        this.playLoc = ''
        this.letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'ENT', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<<', 'CHEAT']
    }

    makeKeyboard() {
        this.letters.forEach(letter => {
            const keyboard = document.querySelector('.key-board');
            const keyDiv = document.createElement("div");
            keyDiv.innerText = letter;
            keyDiv.classList.add("key");
            keyDiv.id = `${letter}`;
            keyDiv.dataset.key = `${letter}`
            keyboard.append(keyDiv);
        })
    }
    blackKey(){
            let location = document.getElementById(this.playLoc).textContent
            let key = document.getElementById(location)
            key.style.backgroundColor = 'hsl(245, 3%, 20%)';
            key.removeEventListener('click', event)
    
    }
}