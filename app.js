"use strict";

// create the random number between 1 and 10 / used for damage
const randomDamage = () => Math.floor(Math.random() * 10) + 1;

// arrow function that creates random number 1 or 0, than returns opt1 or opt2
const chooseOption = (opt1, opt2) => {
  let randNum = Math.round(Math.random());
  return randNum == 0 ? opt1 : opt2;
};

// Damages player
const attackPlayer = function(health) {
  return health - randomDamage();
};

// will show the health of the damaged player
const logHealth = (player, health) =>
  console.log(`${player} health: ${health}`);

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

const isDead = health => {
  if (health <= 0) {
    return true;
  } else {
    return false;
  }
};

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    // player one will attack player twos health
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
    // will log the winner and loser otherwise will damage player 2
    if (isDead(player2Health)) {
      logDeath(player1, player2);
      break;
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
    }

    // will declare the winner and loser if player ones health falls below zero
    if (isDead(player1Health)) {
      logDeath(player2, player1);
      break;
    }
  }
}
}
