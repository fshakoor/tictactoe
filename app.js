// TODO: store the gameboard as an array inside of a Gameboard object

const Gameboard = {
    gameBoard: [
        ['','',''],
        ['','',''],
        ['','','']
    ]
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
    console.log(Gameboard.gameBoard[0])
    console.log(Gameboard.gameBoard[1])
    console.log(Gameboard.gameBoard[2])
})

// "Show the dialog" button opens the dialog modally
topLeft.addEventListener("click", () => {
    console.log('clicked.')
    Gameboard.gameBoard[0][0] = 'X';
});
topMid.addEventListener("click", () => {
    console.log('clicked.')
    Gameboard.gameBoard[0][1] = 'X';
});
topRight.addEventListener("click", () => {
    console.log('clicked.')
    Gameboard.gameBoard[0][2] = 'X';
});

midLeft.addEventListener("click", () => {
    console.log('clicked.')
    Gameboard.gameBoard[1][0] = 'X';
});
mid.addEventListener("click", () => {
    console.log('clicked.')
    Gameboard.gameBoard[1][1] = 'X';
});
midRight.addEventListener("click", () => {
    console.log('clicked.')
    Gameboard.gameBoard[1][2] = 'X';
});

bottomLeft.addEventListener("click", () => {
    console.log('clicked.')
    Gameboard.gameBoard[2][0] = 'X';
});
bottomMid.addEventListener("click", () => {
    console.log('clicked.')
    Gameboard.gameBoard[2][1] = 'X';
});
bottomRight.addEventListener("click", () => {
    console.log('clicked.')
    Gameboard.gameBoard[2][2] = 'X';
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