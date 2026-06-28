const p1Name = document.querySelector("#playerOne");
const p2Name = document.querySelector("#playerTwo");
let TurnFinderbtn = document.querySelectorAll(".square-cell");
const gamestarter = document.querySelector("#game-starter");
const moveTrackerBox = document.querySelector("#turn-shower");
const winningCombinations = [
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
];
const messageDisplayer = document.querySelector(".gameBoard");
const resetBtn = document.querySelector('#reset');

let moveCount = 0;
let currentTurn = "O";
let p1Value;
let p2Value;
let isGameActive = false;

let turnchecker = () => {
  if (currentTurn === "O") {
    currentTurn = "X";
    return;
  } else if (currentTurn === "X") {
    currentTurn = "O";
    return;
  }
};

resetBtn.addEventListener('click', () => {
    moveCount = 0;
    currentTurn = "O";
    isGameActive = false;
    gamestarter.innerHTML = "Start the Game!"
    gamestarter.style.backgroundColor = "yellow";
    moveTrackerBox.innerHTML = "Turn";
    messageDisplayer.style.backgroundColor = "";
    messageDisplayer.innerHTML = `<button class="square-cell" 
    data-index="0"></button>
        <button class="square-cell" data-index="1"></button>
        <button class="square-cell" data-index="2"></button>
        <button class="square-cell" data-index="3"></button>
        <button class="square-cell" data-index="4"></button>
        <button class="square-cell" data-index="5"></button>
        <button class="square-cell" data-index="6"></button>
        <button class="square-cell" data-index="7"></button>
        <button class="square-cell" data-index="8"></button>`
        TurnFinderbtn = document.querySelectorAll(".square-cell");
        bindGridButtons();
})

let checkWin = () => {
  winningCombinations.forEach((combo) => {
    let a = TurnFinderbtn[combo[0]].innerHTML;
    let b = TurnFinderbtn[combo[1]].innerHTML;
    let c = TurnFinderbtn[combo[2]].innerHTML;
    if (a !== "" && a === b && b === c) {
      isGameActive = false;
      if (a === "O") {
        messageDisplayer.innerHTML = `${p1Value} has won`;
        messageDisplayer.style.backgroundColor = "blue";
        messageDisplayer.style.textAlign = "center";
        messageDisplayer.style.fontSize = "4rem"
      } else if (a === "X") {
        messageDisplayer.innerHTML = `${p2Value} has won`;
        messageDisplayer.style.backgroundColor = "red";
        messageDisplayer.style.textAlign = "center";
        messageDisplayer.style.fontSize = "4rem"
      }
    }
  });
  if(moveCount === 9 && isGameActive === true){
        messageDisplayer.innerHTML = "It's a Tie. No one has won!";
        messageDisplayer.style.backgroundColor = "yellow";
        messageDisplayer.style.textAlign = "center";
        messageDisplayer.style.fontSize = "4rem"
        isGameActive = false;
  }
};

gamestarter.addEventListener("click", () => {
  isGameActive = true;
  gamestarter.innerHTML = "Game is Running";
  gamestarter.style.backgroundColor = "green";
  p1Value = p1Name.value || "Player One";
  p2Value = p2Name.value || "Player Two";
});
let bindGridButtons = () => {
TurnFinderbtn.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    if (isGameActive === false) {
      return;
    }
    moveCount++;
    if (currentTurn === "O") {
      event.target.innerHTML = "O";
      event.target.style.backgroundColor = "blue";
      event.target.disabled = true;
      turnchecker();
    } else if (currentTurn === "X") {
      event.target.innerHTML = "X";
      event.target.style.backgroundColor = "red";
      event.target.disabled = true;
      turnchecker();
    }
    gamestarter.innerHTML = "Game is Running";
    gamestarter.style.backgroundColor = "green";
    moveTrackerBox.innerHTML = `Turn: ${moveCount}`;
    checkWin();
  });
});
}
bindGridButtons();