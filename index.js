/*
function chooseNum () {
  let randomNum = Math.ceil(Math.random() * 6);
  // let imgSrc = "./images/dice" + randomNum.toString() + ".png";
  return randomNum;
}

function showDice(player1Roll, player2Roll) {
  let dice1 = "./images/dice" + player1Roll.toString() + ".png";
  document.querySelector(".player1__img").setAttribute("src", dice1);

  let dice2 = "./images/dice" + player2Roll.toString() + ".png";
  document.querySelector(".player2__img").setAttribute("src", dice2);
}

function setWinner(player1, player2) {
  if (player1 > player2) {
    document.querySelector(".header").textContent = "🚩 Player 1 Wins!"
  } else if (player1 == player2) {
    document.querySelector(".header").textContent = "Tie Game!"
  } else {
    document.querySelector(".header").textContent = "Player 2 Wins! 🚩"
  }
  document.querySelector(".play-again").classList.add("play-again--show");
}

function diceRoll() {
  let player1Num = chooseNum();
  let player2Num = chooseNum();
  showDice(player1Num, player2Num);
  setWinner(player1Num, player2Num);
}
*/ 

// ------

let diceImg1 = document.querySelector(".player1__img");
let diceImg2 = document.querySelector(".player2__img");

function diceRoll() {
  // choose random numbers
  let player1Score = Math.ceil(Math.random() * 6);
  let player2Score = Math.ceil(Math.random() * 6);

  // change dice images
  let player1Dice = "./images/dice" + player1Score.toString() + ".png";
  diceImg1.setAttribute("src", player1Dice);
  
  let player2Dice = "./images/dice" + player2Score.toString() + ".png";
  diceImg2.setAttribute("src", player2Dice);

  // change header
  let headerText = document.querySelector(".header");
  if (player1Score > player2Score) {
    headerText.textContent = "🚩 Player 1 Wins!"
  } else if (player1Score == player2Score) {
    headerText.textContent = "Tie Game!"
  } else {
    headerText.textContent = "Player 2 Wins! 🚩"
  }

  // play again?
  document.querySelector(".play-again").classList.add("play-again--show");
}