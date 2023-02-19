const boxes = document.querySelector(".game-board");
let boxPosition;

boxes.addEventListener("click", function (event) {
  boxPosition = event.target.textContent;
  Gameboard.pushTogameBoard(+boxPosition);
  Gameboard.getPlayerSelections();
});

const Gameboard = (function () {
  let gameBoard = [];
  const pushTogameBoard = (content) => {
    gameBoard.push(content);
  };
  const showEntries = () => {
    console.log(gameBoard);
  };
  let playerOne = [];
  let playerTwo = [];
  const getPlayerSelections = function () {
    // let indexToUse = 0;
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
      // indexToUse++;
    }
    showEntries();
    console.log(`playerOne array is ${playerOne}`);
    console.log(`playerTwo array is ${playerTwo}`);
  };
  return {
    pushTogameBoard,
    showEntries,
    getPlayerSelections,
    playerOne,
    playerTwo,
  };
})();

// const player = function (name, marker) {
//   let selections = [];
//   const makeSelection = (choice) => {
//     selections.push(choice);
//   }
//   return {
//     name,
//     marker,
//     makeSelection,
//     selections,
//   };
// };

// const user1 = player("Matt", "X");
// const user2 = player("Ashley", "O");
