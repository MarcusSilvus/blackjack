let hasBlackjack = false;
let isAlive = true;
let firstCard;
let secondCard;
let cards = [firstCard, secondCard];
let sum;
let randomCard;
let message = "";

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let cardSumEl = document.getElementById("cardSum-el");

// create function that randomly generate a value between 2 -11
function random() {
  let min = Math.ceil(2);
  let max = Math.floor(12);
  randomCard = Math.floor(Math.random() * (max - min) + min);  
}

function startGame() {

  isAlive = true;
  random();
  let firstCard = randomCard;
  console.log(firstCard);

  random();
  let secondCard = randomCard;
  console.log(secondCard);

  sum = firstCard + secondCard;
  console.log("Sum: " + sum);

  renderGame();
}
    

function renderGame() {
    
  cardsEl.textContent = cards[0] + ", " + cards[1];
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

   console.log("Has blackjack: " + hasBlackjack);
  console.log("Is alive: " + isAlive);
  }

  function newCard() {
    random();
    let drawCard = randomCard;
    sum += drawCard;
    console.log("New Card: " + drawCard);
    console.log("New Sum: " + sum);
    renderGame();
  }