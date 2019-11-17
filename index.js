"use strict";

let player1;
let player2;
let player1Health;
let player2Health;

// function runGame() {}

function startGame() {
  let startUp = prompt("Do you want to play?", "Yes or No");

  if (startUp.toLowerCase() == "yes") {
    player1 = prompt("Player One's Name:");
    player2 = prompt("Player Two's Name:");
    player1Health = prompt("Player One's Health:");
    player2Health = prompt("Player Two's Health:");
    // runGame();
  } else if (startUp == "No") {
    alert("No? Are you afraid you will loose?");
  } else {
    alert("Invalid, Yes or No response only.");
    startGame();
  }
}

function gameOver() {
  if (player1Health === 0 && player2Health === 0) {
    console.log("You both died");
  } else if (player2Health === 0) {
    console.log(`Congratulations ${player1} you won!`);
  } else if (player1Health === 0) {
    console.log(`Congratulations ${player2} you won!`);
  }
}

startGame();


window.fight(player1, player2, player1Health, player2Health);