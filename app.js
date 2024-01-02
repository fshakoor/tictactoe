const formControl = {}

function updatePlayer2Options() {
    const player1Choice = document.getElementById('player1Choice').value;
    const player2Choice = document.getElementById('player2Choice');
    
    player2Choice.innerHTML = '';
    player2Choice.add(new Option('X', 'X', player1Choice !== 'X'));
    player2Choice.add(new Option('O', 'O', player1Choice !== 'O'));
}

function updatePlayer1Options() {
    const player2Choice = document.getElementById('player2Choice').value;
    const player1Choice = document.getElementById('player1Choice');
    
    player1Choice.innerHTML = '';
    player1Choice.add(new Option('X', 'X', player2Choice !== 'X'));
    player1Choice.add(new Option('O', 'O', player2Choice !== 'O'));
}

const Gameboard = {
    gameBoard: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ],

    curPlayer: 'X',
    gameOver: false,

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
                element.style.cursor = 'default';
                this.curPlayer = (this.curPlayer === 'X') ? 'O' : 'X';
                this.checkWin();
            }
        };
    },

    checkFull: function(gameBoard) {
        for (let row = 0; row < gameBoard.length; row++) {
            if (gameBoard[row].some(cell => cell === '')) {
                return false;
            }
        }
        return true;
    },

    checkWin: function() {
        if (Gameboard.gameBoard[0][0] == Gameboard.gameBoard[0][1] && Gameboard.gameBoard[0][0] == Gameboard.gameBoard[0][2] && Gameboard.gameBoard[0][0] !== '') {
            console.log('W');
            this.gameOver = true;
            console.log(this.gameOver)
        }
        if (Gameboard.gameBoard[1][0] == Gameboard.gameBoard[1][1] && Gameboard.gameBoard[1][0] == Gameboard.gameBoard[1][2] && Gameboard.gameBoard[1][0] !== '') {
            console.log('W');
            this.gameOver = true;
            console.log(this.gameOver)
        }
        if (Gameboard.gameBoard[2][0] == Gameboard.gameBoard[2][1] && Gameboard.gameBoard[2][0] == Gameboard.gameBoard[2][2] && Gameboard.gameBoard[2][0] !== '') {
            console.log('W');
            this.gameOver = true;
            console.log(this.gameOver)
        }
        if (Gameboard.gameBoard[0][0] == Gameboard.gameBoard[1][0] && Gameboard.gameBoard[0][0] == Gameboard.gameBoard[2][0] && Gameboard.gameBoard[0][0] !== '') {
            console.log('W');
            this.gameOver = true;
            console.log(this.gameOver)
        }
        if (Gameboard.gameBoard[0][1] == Gameboard.gameBoard[1][1] && Gameboard.gameBoard[0][1] == Gameboard.gameBoard[2][1] && Gameboard.gameBoard[0][1] !== '') {
            console.log('W');
            this.gameOver = true;
            console.log(this.gameOver)
        }
        if (Gameboard.gameBoard[0][2] == Gameboard.gameBoard[1][2] && Gameboard.gameBoard[0][2] == Gameboard.gameBoard[2][2] && Gameboard.gameBoard[0][2] !== '') {
            console.log('W');
            this.gameOver = true;
            console.log(this.gameOver)
        }
        if (Gameboard.gameBoard[0][0] == Gameboard.gameBoard[1][1] && Gameboard.gameBoard[0][0] == Gameboard.gameBoard[2][2] && Gameboard.gameBoard[0][0] !== '') {
            console.log('W');
            this.gameOver = true;
            console.log(this.gameOver)
        }
        if (Gameboard.gameBoard[0][2] == Gameboard.gameBoard[1][1] && Gameboard.gameBoard[0][2] == Gameboard.gameBoard[2][0] && Gameboard.gameBoard[0][2] !== '') {
            console.log('W');
            this.gameOver = true;
            console.log(this.gameOver)
        }

        if (this.checkFull(this.gameBoard) === true && this.gameOver === false) {console.log('draw')}
    }
};

Gameboard.init();

let form = document.getElementById("myform");
let p1Name = document.getElementById("player1Name");
let p2Name = document.getElementById("player2Name");
let p1choice = document.getElementById("player1Choice");
let p2choice = document.getElementById("player2Choice");

function handle_form_submission()
{
  console.log(p1Name.value)
  console.log(p1choice.value)
  console.log(p2Name.value)
  console.log(p2choice.value)
  return false;
}

// TODO: Show who's move it is

// TODO: Draw line on 3 in a row

// TODO: Clean up the interface to allow players to put in their names

// TODO: include a button to start/restart the game

// TODO: add a display element that shows the results upon game end!