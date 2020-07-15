/*
Challenge 1 of 3
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls two 6 in a row, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, gamePlaying;

init();



document.querySelector(".btn-roll").addEventListener("click", function () {
  //1.Random number

  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;

  //2. Display the results
  document.getElementById("dice-1").style.display = 'block';
  document.getElementById("dice-2").style.display = 'block';
  document.getElementById("dice-1").src = "../images/dice-" + dice1 + ".png";
  document.getElementById("dice-2").src = "../images/dice-" + dice2 + ".png";

  // 3. Update the round score IF the rolled number was NOT a 1

  if (dice1 !== 1 && dice2 !==1) {
        //Add score
        roundScore += dice1 + dice2;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
      } else {
        //Next player
        nextPlay
      }

//   if (lastDice === 6 && dice === 6) {
//     // Player looses score
//     scores[activePlayer] = 0;
//     document.querySelector("#score-" + activePlayer).textContent = "0";
//     nextPlayer();
//   }
//   if (dice !== 1) {
//     //Add score
//     roundScore += dice;
//     document.querySelector("#current-" + activePlayer).textContent = roundScore;
//   } else {
//     //Next player
//     nextPlayer();
//   }

//   lastDice = dice;
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  // Add CURRENT score to GLOBAL score
  scores[activePlayer] += roundScore;

  // Update the UI
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];

  var input = document.querySelector(".final-score").value;
  var winningScore;
  //Undefined, 0, null or "" are COERCED to false
  //Anything else is COERCED to true

  if (input) {
    winningScore = input;
  } else {
    winningScore = 15;
  }

  // Check if player won the game
  if (scores[activePlayer] >= winningScore) {
    document.querySelector("#name-" + activePlayer).textContent = "Winner!";
    document.getElementById("dice-1").style.display = 'none';
    document.getElementById("dice-2").style.display = 'none';
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
    gamePlaying = false;
  } else {
    //Next player
    nextPlayer();
  }
});

function nextPlayer() {
  //Next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //   document.querySelector('.player-0-panel').classList.remove('active');
  //   document.querySelector('.player-1-panel').classList.add('active');

  document.getElementById("dice-1").style.display = 'none';
  document.getElementById("dice-2").style.display = 'none';
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true; //state varoable

  document.getElementById("dice-1").style.display = 'none';
  document.getElementById("dice-2").style.display = 'none';

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

/*
  query selector
    setter
    document.querySelector('#current-' + activePlayer).textContent = dice;
    document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>'

    getter
    var x = document.querySelector('#score-0').textContent;
    console.log(x);

    === Does not perform type coresion
  */