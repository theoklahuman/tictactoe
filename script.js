const boxes = document.querySelector(".game-board");
const boardSection = document.querySelectorAll(".board-section");
const newRoundButton = document.body.lastElementChild;
const scoreBoard = document.body.getElementsByTagName("h4");
let boxPosition;

boxes.addEventListener("click", function (event) {
  boxPosition = event.target.textContent;
  Gameboard.pushTogameBoard(+boxPosition);
  Gameboard.getPlayerSelections();
  boardSection[boxPosition - 1].classList.add("already-played");
  boardSection[boxPosition - 1].disabled = true;
  Gameboard.renderGameBoard();
  Gameboard.checkForWin();
});

newRoundButton.addEventListener("click", () => {
  Gameboard.resetGameBoard();
  newRoundButton.classList.toggle("visible");
});

const Gameboard = (function () {
  let gameBoard = [];
  const renderGameBoard = function () {
    for (const elements of gameBoard) {
      if (
        gameBoard.indexOf(elements) === 0 ||
        gameBoard.indexOf(elements) % 2 === 0
      ) {
        boardSection[elements - 1].textContent = "X";
      } else {
        boardSection[elements - 1].textContent = "O";
      }
    }
  };

  const resetGameBoard = function () {
    let indexForBoard = 1;
    for (let i = 0; i < 9; i++) {
      boardSection[i].classList.remove("already-played");
      boardSection[i].textContent = indexForBoard;
      indexForBoard++;
    }
  };

  const checkForWin = function () {
    if (gameBoard.length >= 5) {
      checkWinner();
    }
  };

  const startNewRound = function () {
    gameBoard = [];
    playerOne = [];
    playerTwo = [];
  };

  const beginRound = function () {
    newRoundButton.classList.toggle("visible");
    for (let i = 0; i < 9; i++) {
      boardSection[i].disabled = false;
    }
  };

  const pushTogameBoard = (content) => {
    gameBoard.push(content);
  };
  let playerOne = [];
  let playerTwo = [];
  let playerOneScore = 0;
  let playerTwoScore = 0;
  const getPlayerSelections = function () {
    for (const selections of gameBoard) {
      if (playerOne.includes(selections) || playerTwo.includes(selections)) {
        continue;
      } else if (
        gameBoard.indexOf(selections) === 0 ||
        gameBoard.indexOf(selections) % 2 === 0
      ) {
        playerOne.push(selections);
      } else {
        playerTwo.push(selections);
      }
    }
  };
  const checkWinner = function () {
    let test1 = [1, 2, 3];
    let test2 = [4, 5, 6];
    let test3 = [7, 8, 9];
    let test4 = [1, 4, 7];
    let test5 = [2, 5, 8];
    let test6 = [3, 6, 9];
    let test7 = [1, 5, 9];
    let test8 = [3, 5, 7];
    const testArray = [test1, test2, test3, test4, test5, test6, test7, test8];
    let testIsInPlayerOne;
    let testIsInPlayerTwo;
    for (const testArrayItems of testArray) {
      testIsInPlayerOne = testArrayItems.every((item) =>
        playerOne.includes(item)
      );
      testIsInPlayerTwo = testArrayItems.every((item) =>
        playerTwo.includes(item)
      );
      if (testIsInPlayerOne) {
        alert(`Player One won this round!`);
        startNewRound();
        ++playerOneScore;
        countScore();
        beginRound();
        return;
      } else if (testIsInPlayerTwo) {
        alert(`Player Two won this round`);
        startNewRound();
        ++playerTwoScore;
        countScore();
        beginRound();
        return;
      } else if (
        gameBoard.length === 9 &&
        testIsInPlayerOne === false &&
        testIsInPlayerTwo === false
      ) {
        alert(`This round ended in a draw! No winner!!!`);
        beginRound();
        return;
      }
    }
  };

  const countScore = function () {
    for (let i = 0; i < 2; i++) {
      scoreBoard[i].className = "visible";
      if (i === 0) {
        scoreBoard[i].textContent = `Player One Score: ${playerOneScore}`;
      } else {
        scoreBoard[i].textContent = `Player Two Score: ${playerTwoScore}`;
      }
    }
    declareWinner();
  };

  const declareWinner = function () {
    if (playerOneScore === 3 || playerTwoScore === 3) {
      if (playerOneScore > playerTwoScore) {
        alert(`Congratulations! Player One has won the game!!!`);
      } else {
        alert(`Congratulations! Player Two has won the game!!!`);
      }
      playerOneScore = 0;
      playerTwoScore = 0;
    }
  };
  return {
    pushTogameBoard,
    getPlayerSelections,
    checkForWin,
    renderGameBoard,
    resetGameBoard,
  };
})();
