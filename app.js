// TODO: store the gameboard as an array inside of a Gameboard object

let curPlayer = 'X';

const Gameboard = {
    gameBoard: [
        ['','',''],
        ['','',''],
        ['','','']
    ]
}

function checkWin() {
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

let topLeft = document.querySelector('.upper-left')
let topMid = document.querySelector('.upper-mid')
let topRight = document.querySelector('.upper-right')

let midLeft = document.querySelector('.mid-left')
let mid = document.querySelector('.middle')
let midRight = document.querySelector('.mid-right')

let bottomLeft = document.querySelector('.bottom-left')
let bottomMid = document.querySelector('.bottom-mid')
let bottomRight = document.querySelector('.bottom-right')


let consoleCheck = document.querySelector('.check-console')
consoleCheck.addEventListener("click", () => {
    for (i = 0; i<3; i++) {
        console.log(Gameboard.gameBoard[i])
    }
})

// PUT THESE IN FACTORY
// TODO: check for win (3 in a row)
topLeft.addEventListener("click", () => {
    console.log('clicked.');
    if (Gameboard.gameBoard[0][0] === '') {
        Gameboard.gameBoard[0][0] = curPlayer;
        topLeft.innerHTML = curPlayer;
        (curPlayer === 'X') ? curPlayer = 'O' : curPlayer = 'X';
        checkWin()
    }
});
topMid.addEventListener("click", () => {
    console.log('clicked.')
    if (Gameboard.gameBoard[0][1] === '') {
        Gameboard.gameBoard[0][1] = curPlayer;
        topMid.innerHTML = curPlayer;
        (curPlayer === 'X') ? curPlayer = 'O' : curPlayer = 'X';
        checkWin()
    }
});
topRight.addEventListener("click", () => {
    console.log('clicked.')
    if (Gameboard.gameBoard[0][2] === '') {
        Gameboard.gameBoard[0][2] = curPlayer;
        topRight.innerHTML = curPlayer;
        (curPlayer === 'X') ? curPlayer = 'O' : curPlayer = 'X';
        checkWin()
    }
});

midLeft.addEventListener("click", () => {
    console.log('clicked.')
    if (Gameboard.gameBoard[1][0] === '') {
        Gameboard.gameBoard[1][0] = curPlayer;
        midLeft.innerHTML = curPlayer;
        (curPlayer === 'X') ? curPlayer = 'O' : curPlayer = 'X';
        checkWin()
    }
});
mid.addEventListener("click", () => {
    console.log('clicked.')
    if (Gameboard.gameBoard[1][1] === '') {
        Gameboard.gameBoard[1][1] = curPlayer;
        mid.innerHTML = curPlayer;
        (curPlayer === 'X') ? curPlayer = 'O' : curPlayer = 'X';
        checkWin()
    }
});
midRight.addEventListener("click", () => {
    console.log('clicked.')
    if (Gameboard.gameBoard[1][2] === '') {
        Gameboard.gameBoard[1][2] = curPlayer;
        midRight.innerHTML = curPlayer;
        (curPlayer === 'X') ? curPlayer = 'O' : curPlayer = 'X';
        checkWin()
    }
});

bottomLeft.addEventListener("click", () => {
    console.log('clicked.')
    if (Gameboard.gameBoard[2][0] === '') {
        Gameboard.gameBoard[2][0] = curPlayer;
        bottomLeft.innerHTML = curPlayer;
        (curPlayer === 'X') ? curPlayer = 'O' : curPlayer = 'X';
        checkWin()
    }
});
bottomMid.addEventListener("click", () => {
    console.log('clicked.')
    if (Gameboard.gameBoard[2][1] === '') {
        Gameboard.gameBoard[2][1] = curPlayer;
        bottomMid.innerHTML = curPlayer;
        (curPlayer === 'X') ? curPlayer = 'O' : curPlayer = 'X';
        checkWin()
    }
});
bottomRight.addEventListener("click", () => {
    console.log('clicked.')
    if (Gameboard.gameBoard[2][2] === '') {
        Gameboard.gameBoard[2][2] = curPlayer;
        bottomRight.innerHTML = curPlayer;
        (curPlayer === 'X') ? curPlayer = 'O' : curPlayer = 'X';
        checkWin()
    }
});



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