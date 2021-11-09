"use strict";

// let dice = [];
// Math.trunc(Math.random() * 6) + 1;
// for (let i = 0; i <= 2; i++) {
//   Math.trunc(Math.random() * 6) + 1;
//   dice[i].push();
// }

//1- Roll Dice
// Math.trunc(Math.random() * 6) + 1;

const randomDice = function () {
  return Math.floor(Math.random() * 6 + 1);
};

const rollDice = function () {
  return [randomDice(), randomDice(), randomDice()];
};

// Arash solution
const currentScore = function (round, dice) {
  let diceAndRound = 0;
  // console.log(`Round: ${round}`);
  // console.log(`Dices: ${dice}`);

  dice.forEach(function (d, i) {
    if (d === round) {
      diceAndRound++;
      diceAndRound > d;
    }
    console.log(`Total score with dice ${i + 1}: ${diceAndRound}`);
  });
  if (diceAndRound === 3) return 21;
  if (diceAndRound === 2) return 2;
  if (diceAndRound === 1) return 1;

  if (diceAndRound === 0 && dice[0] === dice[1] && dice[1] === dice[2])
    return 5;
  return 0;
};

//
// Pasha solution
// const currentScore = function (round, dice) {
//   console.log(`Dice round: ${round}`);
//   console.log(`Dices: ${dice}`);
//   let rCount = 0;
//   let temp = 0;
//   let dCount = 0;
//   dice.forEach((d) => {
//     if (d === round) rCount++;

//     d === temp ? dCount++ : (temp = d);
//   });
//   console.log("rCount: ", rCount);
//   console.log("dCount: ", dCount);
//   console.log("temp: ", temp);

//   if (dCount === 2 && rCount === 0) return 5;
//   if (rCount === 3) return 21;
//   return rCount;
// };

///
// console.log("-------------------------Play Game------------------------");

const playGame = function () {
  let round = 1;
  // let Player = 1;
  let totalScore = 0;
  console.log("please roll dice!");
  //user push roll dice btn

  let dice = rollDice();
  displayDice(dice);

  let current = currentScore(round, dice);
  displayCurrentScore(current);

  while (current > 0) {
    totalScore += current;
    displayTotalScore(totalScore);

    console.log("please roll dice again");

    //user push roll dice btn
    dice = rollDice();
    console.log(dice);
    current = currentScore(round, dice);
    displayCurrentScore(current);
  }
  displayTotalScore(totalScore);
  switchPlayer();
  console.log("");
  console.log("");

  return totalScore;
};

document.querySelector(".btn-dice").addEventListener("click", playGame);

// resetGame();

//displays
const switchPlayer = function () {
  console.log("%cSwitching Player", "color: green; font-size: 1rem");
};

const displayDice = function (dice) {
  document.querySelector(".dice").textContent = [...dice];
};

const displayTotalScore = function (score) {
  document.querySelector(".total-score-1").textContent;

  console.log("Total: ", score);
};

const displayCurrentScore = function (score) {
  document.querySelector(".current-score-1").textContent = score;
  console.log("Current: ", score);
};

// playGame();

// const result = function () {
//   let p1 = 0;
//   let p2 = 0;
//   let set = 1;
//   while (p1 <= 21 && p2 <= 21) {
//     //p1 start the game
//     p1 += playGame();

//     //p2 start the game
//     p2 += playGame();
//     set++;
//   }

//   // to use color and change the size of the txt in console.log
//   console.log(
//     `%c${p1 > p2 ? "player 1" : "player 2"} won This Round in ${set} set!
//   player 1 final score: ${p1}
//   player 2 final score: ${p2}`,
//     "color: red; font-size: 1rem"
//   );
// };

// result();
// console.log("%cHello", "color: green; background: yellow; font-size: 1rem");
