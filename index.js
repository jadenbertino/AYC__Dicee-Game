function chooseDice () {
  let randomNum = Math.ceil(Math.random() * 6);
  let imgSrc = "./images/dice" + randomNum.toString() + ".png";
  return imgSrc;
}

function setRandomDice() {
  let dice1 = document.querySelector(".player1__img");
  dice1.setAttribute("src", chooseDice())

  let dice2 = document.querySelector(".player2__img");
  dice2.setAttribute("src", chooseDice())
}