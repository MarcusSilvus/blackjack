let hasBlackjack = false;
let isAlive = false;
let firstCard;
let secondCard;
let cards;
let sum;
let message = "";

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let cardSumEl = document.getElementById("cardSum-el");
let playerEl = document.getElementById("player-el");

let player = {
  name: "Mark",
  chips: 150
}




// create function that randomly generate a value between 2 -11
function getRandomCard() {
  let min = Math.ceil(2);
  let max = Math.floor(12);
  let randomCard = Math.floor(Math.random() * (max - min) + min); 
  return randomCard; 
}

function startGame() {

  isAlive = true;
  playerEl.textContent = player.name + ": $" + player.chips;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];  
  sum = firstCard + secondCard;

  renderGame();
}
    
function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
  cardsEl.textContent += cards[i] + " ";
  }

  cardSumEl.textContent = sum;
     
  if (sum <= 20)  {
    message = "Would you like another card?";
  } else if (sum === 21) {
      message = "BLACKJACK! You win!";
      hasBlackjack = true;        
  } else {
      message = "BUSTED! You lose!";
      isAlive = false; 
  }
    
   messageEl.textContent = message;
  }

  function newCard() {
    if (isAlive && !hasBlackjack) {
    let drawCard = getRandomCard();
    cards.push(drawCard);
    sum += drawCard;
    renderGame();
   }
  }