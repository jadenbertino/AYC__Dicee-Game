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