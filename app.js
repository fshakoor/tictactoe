const formControl = {
    form: document.getElementById("myform"),
    curPlayerText: document.querySelector(".cur-player-text"),
    p1Name: document.getElementById("player1Name"),
    p2Name: document.getElementById("player2Name"),
    p1choice: document.getElementById("player1Choice"),
    p2choice: document.getElementById("player2Choice"),
    body: document.querySelector('body'),
    formDisplay: document.querySelector('.form-display'),

    updatePlayer2Options: function() {
        const player1Choice = document.getElementById('player1Choice').value;
        const player2Choice = document.getElementById('player2Choice');
        player2Choice.innerHTML = '';
        player2Choice.add(new Option('X', 'X', player1Choice !== 'X'));
        player2Choice.add(new Option('O', 'O', player1Choice !== 'O'));
    },
    updatePlayer1Options: function() {
        const player2Choice = document.getElementById('player2Choice').value;
        const player1Choice = document.getElementById('player1Choice');
        player1Choice.innerHTML = '';
        player1Choice.add(new Option('X', 'X', player2Choice !== 'X'));
        player1Choice.add(new Option('O', 'O', player2Choice !== 'O'));
    },

    handle_form_submission: function() {
        Gameboard.curPlayer = this.p1choice.value
        Gameboard.p1Text = this.p1Name.value + "'s Turn (" + this.p1choice.value + ")"
        Gameboard.p2Text = this.p2Name.value + "'s Turn (" + this.p2choice.value + ")"
        this.body.removeChild(this.formDisplay)
        this.curPlayerText.innerText = Gameboard.p1Text
        Gameboard.topLeft.style.cursor = 'pointer'
        Gameboard.topMid.style.cursor = 'pointer'
        Gameboard.topRight.style.cursor = 'pointer'
        Gameboard.midLeft.style.cursor = 'pointer'
        Gameboard.mid.style.cursor = 'pointer'
        Gameboard.bottomLeft.style.cursor = 'pointer'
        Gameboard.bottomMid.style.cursor = 'pointer'
        Gameboard.bottomRight.style.cursor = 'pointer'
        Gameboard.init();
        return false;
    }
}

const Gameboard = {
    gameBoard: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ],

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
    board: document.querySelector('.gameboard'),
    
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
            if (this.gameBoard[row][col] === '' && this.gameOver !== true) {
                this.gameBoard[row][col] = this.curPlayer;
                element.innerHTML = this.curPlayer;
                element.style.cursor = 'default';
                this.curPlayer = (this.curPlayer === 'X') ? 'O' : 'X';
                formControl.curPlayerText.innerText = (formControl.curPlayerText.innerText === this.p1Text) ? this.p2Text : this.p1Text;
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
            if (Gameboard.gameBoard[0][0] === formControl.p1choice.value) {formControl.curPlayerText.innerText = formControl.p1Name.value + ' Wins!'}
            else {formControl.curPlayerText.innerText = formControl.p2Name.value + ' Wins!'}
            this.gameOver = true;
            this.addRestartButton()
        }
        if (Gameboard.gameBoard[1][0] == Gameboard.gameBoard[1][1] && Gameboard.gameBoard[1][0] == Gameboard.gameBoard[1][2] && Gameboard.gameBoard[1][0] !== '') {
            if (Gameboard.gameBoard[1][0] === formControl.p1choice.value) {formControl.curPlayerText.innerText = formControl.p1Name.value + ' Wins!'}
            else {formControl.curPlayerText.innerText = formControl.p2Name.value + ' Wins!'}
            this.gameOver = true;
            this.addRestartButton()
        }
        if (Gameboard.gameBoard[2][0] == Gameboard.gameBoard[2][1] && Gameboard.gameBoard[2][0] == Gameboard.gameBoard[2][2] && Gameboard.gameBoard[2][0] !== '') {
            if (Gameboard.gameBoard[2][0] === formControl.p1choice.value) {formControl.curPlayerText.innerText = formControl.p1Name.value + ' Wins!'}
            else {formControl.curPlayerText.innerText = formControl.p2Name.value + ' Wins!'}
            this.gameOver = true;
            this.addRestartButton()
        }
        if (Gameboard.gameBoard[0][0] == Gameboard.gameBoard[1][0] && Gameboard.gameBoard[0][0] == Gameboard.gameBoard[2][0] && Gameboard.gameBoard[0][0] !== '') {
            if (Gameboard.gameBoard[1][0] === formControl.p1choice.value) {formControl.curPlayerText.innerText = formControl.p1Name.value + ' Wins!'}
            else {formControl.curPlayerText.innerText = formControl.p2Name.value + ' Wins!'}
            this.gameOver = true;
            this.addRestartButton()
        }
        if (Gameboard.gameBoard[0][1] == Gameboard.gameBoard[1][1] && Gameboard.gameBoard[0][1] == Gameboard.gameBoard[2][1] && Gameboard.gameBoard[0][1] !== '') {
            if (Gameboard.gameBoard[0][1] === formControl.p1choice.value) {formControl.curPlayerText.innerText = formControl.p1Name.value + ' Wins!'}
            else {formControl.curPlayerText.innerText = formControl.p2Name.value + ' Wins!'}
            this.gameOver = true;
            this.addRestartButton()
        }
        if (Gameboard.gameBoard[0][2] == Gameboard.gameBoard[1][2] && Gameboard.gameBoard[0][2] == Gameboard.gameBoard[2][2] && Gameboard.gameBoard[0][2] !== '') {
            if (Gameboard.gameBoard[0][2] === formControl.p1choice.value) {formControl.curPlayerText.innerText = formControl.p1Name.value + ' Wins!'}
            else {formControl.curPlayerText.innerText = formControl.p2Name.value + ' Wins!'}
            this.gameOver = true;
            this.addRestartButton()
        }
        if (Gameboard.gameBoard[0][0] == Gameboard.gameBoard[1][1] && Gameboard.gameBoard[0][0] == Gameboard.gameBoard[2][2] && Gameboard.gameBoard[0][0] !== '') {
            if (Gameboard.gameBoard[1][1] === formControl.p1choice.value) {formControl.curPlayerText.innerText = formControl.p1Name.value + ' Wins!'}
            else {formControl.curPlayerText.innerText = formControl.p2Name.value + ' Wins!'}
            this.gameOver = true;
            this.addRestartButton()
        }
        if (Gameboard.gameBoard[0][2] == Gameboard.gameBoard[1][1] && Gameboard.gameBoard[0][2] == Gameboard.gameBoard[2][0] && Gameboard.gameBoard[0][2] !== '') {
            if (Gameboard.gameBoard[0][2] === formControl.p1choice.value) {formControl.curPlayerText.innerText = formControl.p1Name.value + ' Wins!'}
            else {formControl.curPlayerText.innerText = formControl.p2Name.value + ' Wins!'}
            this.gameOver = true;
            this.addRestartButton()
        }

        if (this.checkFull(this.gameBoard) === true && this.gameOver === false) {
            formControl.curPlayerText.innerText = 'The game is a draw!';
            this.addRestartButton()
        }
    },

    addRestartButton: function() {
        let container = document.querySelector('.container');
        let restartBtn = document.createElement('button');
        restartBtn.classList.add('restart');
        restartBtn.innerText = 'Restart';
        container.appendChild(restartBtn);
        restartBtn.addEventListener('click', () => {
            this.resetGame();
            container.removeChild(restartBtn);
        })
    },

    resetGame : function() {
        this.gameOver = false;
        this.gameBoard =  [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
        this.topLeft.style.cursor = 'pointer'
        this.topMid.style.cursor = 'pointer'
        this.topRight.style.cursor = 'pointer'
        this.midLeft.style.cursor = 'pointer'
        this.mid.style.cursor = 'pointer'
        this.bottomLeft.style.cursor = 'pointer'
        this.bottomMid.style.cursor = 'pointer'
        this.bottomRight.style.cursor = 'pointer'
        this.topLeft.innerText = '';
        this.topMid.innerText = '';
        this.topRight.innerText = '';
        this.midLeft.innerText = '';
        this.mid.innerText = '';
        this.midRight.innerText = '';
        this.bottomLeft.innerText = '';
        this.bottomMid.innerText = '';
        this.bottomRight.innerText = '';
        this.curPlayer = (this.curPlayer === 'X') ? 'O' : 'X';
        formControl.curPlayerText.innerText = (formControl.curPlayerText.innerText === this.p1Text) ? this.p2Text : this.p1Text;
    }
};