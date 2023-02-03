const boxes = document.querySelector(".game-board");
let boxPosition;

boxes.addEventListener("click", function (event) {
  boxPosition = event.target.textContent;
  console.log(boxPosition);
});
