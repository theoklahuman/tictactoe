const boxes = document.querySelector(".game-board");
let boxPosition;

boxes.addEventListener("click", function (event) {
  boxPosition = event.target.textContent;
  Gameboard.pushTogameBoard(+boxPosition);
  Gameboard.getPlayerSelections();
  Gameboard.checkForWin();
});

const Gameboard = (function () {
  let gameBoard = [];
  const checkForWin = function () {
    if (gameBoard.length >= 5) {
      checkWinner();
    }
  };
  const endRoundAndRestartGame = function () {
    gameBoard = [];
    playerOne = [];
    playerTwo = [];
  };
  const pushTogameBoard = (content) => {
    gameBoard.push(content);
  };
  const showEntries = () => {
    console.log(gameBoard);
  };
  let playerOne = [];
  let playerTwo = [];
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

    showEntries();
    console.log(`playerOne array is ${playerOne}`);
    console.log(`playerTwo array is ${playerTwo}`);
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
        alert(`Player One is the winner!`);
        endRoundAndRestartGame();
        return;
      } else if (testIsInPlayerTwo) {
        alert(`Player Two is the winner!`);
        endRoundAndRestartGame();
        return;
      }
    }
  };
  return {
    pushTogameBoard,
    showEntries,
    getPlayerSelections,
    checkForWin,
    checkWinner,
  };
})();

// const user1 = player("Matt", "X");
// const user2 = player("Ashley", "O");
