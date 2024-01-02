const Gameboard = {
    gameBoard: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ],

    curPlayer: 'X',

    topLeft: document.querySelector('.upper-left'),
    topMid: document.querySelector('.upper-mid'),
    topRight: document.querySelector('.upper-right'),
    midLeft: document.querySelector('.mid-left'),
    mid: document.querySelector('.middle'),
    midRight: document.querySelector('.mid-right'),
    bottomLeft: document.querySelector('.bottom-left'),
    bottomMid: document.querySelector('.bottom-mid'),
    bottomRight: document.querySelector('.bottom-right'),
    
    init: function() {
        this.topLeft.addEventListener("click", this.createClickListener(0, 0, this.topLeft));
        this.topMid.addEventListener("click", this.createClickListener(0, 1, this.topMid));
        this.topRight.addEventListener("click", this.createClickListener(0, 2, this.topRight));
        this.midLeft.addEventListener("click", this.createClickListener(1, 0, this.midLeft));
        this.mid.addEventListener("click", this.createClickListener(1, 1, this.mid));
        this.midRight.addEventListener("click", this.createClickListener(1, 2, this.midRight));
        this.bottomLeft.addEventListener("click", this.createClickListener(2, 0, this.bottomLeft));
        this.bottomMid.addEventListener("click", this.createClickListener(2, 1, this.bottomMid));
        this.bottomRight.addEventListener("click", this.createClickListener(2, 2, this.bottomRight));
    },

    createClickListener: function(row, col, element) {
        return () => {
            if (this.gameBoard[row][col] === '') {
                this.gameBoard[row][col] = this.curPlayer;
                element.innerHTML = this.curPlayer;
                this.curPlayer = (this.curPlayer === 'X') ? 'O' : 'X';
                this.checkWin();
            }
        };
    },

    checkWin: function() {
        if (Gameboard.gameBoard[0][0] == Gameboard.gameBoard[0][1] && Gameboard.gameBoard[0][0] == Gameboard.gameBoard[0][2] && Gameboard.gameBoard[0][0] !== '') {
            console.log('W')
        }
        if (Gameboard.gameBoard[1][0] == Gameboard.gameBoard[1][1] && Gameboard.gameBoard[1][0] == Gameboard.gameBoard[1][2] && Gameboard.gameBoard[1][0] !== '') {
            console.log('W')
        }
        if (Gameboard.gameBoard[2][0] == Gameboard.gameBoard[2][1] && Gameboard.gameBoard[2][0] == Gameboard.gameBoard[2][2] && Gameboard.gameBoard[2][0] !== '') {
            console.log('W')
        }
        if (Gameboard.gameBoard[0][0] == Gameboard.gameBoard[1][0] && Gameboard.gameBoard[0][0] == Gameboard.gameBoard[2][0] && Gameboard.gameBoard[0][0] !== '') {
            console.log('W')
        }
        if (Gameboard.gameBoard[0][1] == Gameboard.gameBoard[1][1] && Gameboard.gameBoard[0][1] == Gameboard.gameBoard[2][1] && Gameboard.gameBoard[0][1] !== '') {
            console.log('W')
        }
        if (Gameboard.gameBoard[0][2] == Gameboard.gameBoard[1][2] && Gameboard.gameBoard[0][2] == Gameboard.gameBoard[2][2] && Gameboard.gameBoard[0][2] !== '') {
            console.log('W')
        }
        if (Gameboard.gameBoard[0][0] == Gameboard.gameBoard[1][1] && Gameboard.gameBoard[0][0] == Gameboard.gameBoard[2][2] && Gameboard.gameBoard[0][0] !== '') {
            console.log('W')
        }
        if (Gameboard.gameBoard[0][2] == Gameboard.gameBoard[1][1] && Gameboard.gameBoard[0][2] == Gameboard.gameBoard[2][0] && Gameboard.gameBoard[0][2] !== '') {
            console.log('W')
        }
    }
};

Gameboard.init();

let consoleCheck = document.querySelector('.check-console')
consoleCheck.addEventListener("click", () => {
    for (i = 0; i<3; i++) {
        console.log(Gameboard.gameBoard[i])
    }
})

// TODO: check for draw

// TODO: Try tucking as much as you can inside factories. If you only need a single 
// instance of something (e.g. the gameboard, the displayController etc.) then 
// wrap the factory inside an IIFE (module pattern) so it cannot be reused
// to create additional instances.

// TODO:  think carefully about where each bit of logic should reside. 
// Each little piece of functionality should be able to fit in the game,
// player or gameboard objects.

// LOGIC/PARTS/TODO:
// Clicking a div/tile adds an X or O to the tile AND to the gameboard array
// Logic to check for win
// Show who's move it is

// TODO: Focus on getting a working game in the console first before styling/DOM

// TODO: Once you have a working console game, create an object that will handle 
// the display/DOM logic. Write a function that will render the contents of the gameboard 
// array to the webpage (for now, you can always just fill the gameboard array 
// with "X"s and "O"s just to see what’s going on).

// TODO: Write the functions that allow players to add marks to a specific spot on 
// the board by interacting with the appropriate DOM elements (e.g. letting players 
// click on a board square to place their marker). Don’t forget the logic that keeps 
// players from playing in spots that are already taken!

// TODO: Clean up the interface to allow players to put in their names, include a button
// to start/restart the game and add a display element that shows the results upon game end!