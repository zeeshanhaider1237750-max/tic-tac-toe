// phase 1: make a function which allows the players to add "O" or "X", and each player will have one turn meaning that the player whose turn is it, will select a box then the next turn will be automatically turned towards the next player.
// phase 2: A function will be made (plus another button after that form to activate the function); this function brings a circular draw to select which player will have first turn and the player 1 will have "O" while the player 2 will have "X".
// phase 3:this function will check using the index numbers that who is winning; if a players get the needed index first the whole middle section will be wiped out and the message will appear "Player one has won" or "Player two has won" or "Tie! no one has won."
// phase 4: Add a forth function and a button that resets each and everything back to the normal page without refereshing the page.
// well, i have some other plans (two kills with one shot), as we have discussed to show whose turn is it and whose turn will be next; first kill, next this looping problem; second kill.
// so i will make a function which increases this number in the  whose turn is it and whose turn will be next sentence and by using that, that looping problem can be solved
// well, for ease, i think i should add two more buttons under that turn finder button, both half the width of the turn finder button, first button will show "start game" with yellow background color and the moment a player wins, it displays player 1 has won etc with red background color and while the game is running, it shows game is running with green background color. The second button will show that turn 1: player one turn is it, turn 2:player two turn is it, while that turn finder button only shows what we have coded it till now.

const TurnFinder = document.querySelector('#turn-finder');
const p1Name = document.querySelector('#playerOne');
const p2Name = document.querySelector('#playerTwo');
const TurnFinderbtn = document.querySelectorAll('.square-cell')
const gamestarter = document.querySelector('#game-starter');
const moveTrackerBox = document.querySelector('#turn-shower');
let moveCount = 0;
let currentTurn;
let p1Value;
let p2Value;

let turnchecker = () => {
    if(currentTurn === "O"){
        currentTurn = "X";
        return;
    }
    else if(currentTurn === "X"){
        currentTurn = "O";
        return;
    }
}



TurnFinder.addEventListener('click', () => {
    p1Value = p1Name.value || "Player One";
    p2Value = p2Name.value || "Player Two";
      const selector = Math.floor(Math.random() * 2);
      if(selector === 0){
        TurnFinder.innerHTML = `${p1Value} has first turn`;
      }
      else if(selector === 1){
        TurnFinder.innerHTML = `${p2Value} has first turn`;
      }
})

  TurnFinderbtn.forEach((cell) => {
    cell.addEventListener('click', (event) => {
    if(TurnFinder.innerHTML === `${p1Value} has first turn`){
        event.target.innerHTML = "O";
        event.target.style.backgroundColor = "blue";
        currentTurn = "O";
        moveCount++;
    }
    else if(TurnFinder.innerHTML === `${p2Value} has first turn`){
        event.target.innerHTML = "X";
        event.target.style.backgroundColor = "red";
        currentTurn = "X";
    }
    else if(currentTurn === "O"){
        event.target.innerHTML = "O";
        event.target.style.backgroundColor = "blue";
        currentTurn = "O";
    }
    else if(currentTurn === "X"){
        event.target.innerHTML = "X";
        event.target.style.backgroundColor = "blue";
        currentTurn = "X";
    }
}) 
})
  