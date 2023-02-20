const boxes = document.querySelector(".game-board");
const boardSection = document.querySelectorAll(".board-section");
let boxPosition;

boxes.addEventListener("click", function (event) {
  boxPosition = event.target.textContent;
  Gameboard.pushTogameBoard(+boxPosition);
  Gameboard.getPlayerSelections();
  Gameboard.renderGameBoard();
  Gameboard.checkForWin();
  boardSection[boxPosition - 1].classList.add("already-played");
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
        console.log(playerOneScore);
        ++playerOneScore;
        countScore();
        return;
      } else if (testIsInPlayerTwo) {
        alert(`Player Two won this round`);
        startNewRound();
        ++playerTwoScore;
        countScore();
        return;
      }
    }
  };
  const countScore = function () {
    if (playerOneScore === 3 || playerTwoScore === 3) {
      if (playerOneScore > playerTwoScore) {
        alert(`Congratulations! Player One has won the game!!!`);
      } else {
        alert(`Congratulations! Player Two has won the game!!!`);
      }
    }
  };
  return {
    pushTogameBoard,
    getPlayerSelections,
    checkForWin,
    renderGameBoard,
  };
})();
