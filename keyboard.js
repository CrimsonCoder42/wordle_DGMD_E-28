export default class Keyboard {
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
            keyboard.append(keyDiv);
        })
    }

}

