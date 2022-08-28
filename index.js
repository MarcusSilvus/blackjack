
let hasBlackjack = false;
let isAlive = true;
let firstCard;
let secondCard;
let cards;
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

  cards = [firstCard, secondCard];
  

  sum = firstCard + secondCard;
  console.log("Sum: " + sum);

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
    random();
    let drawCard = randomCard;
    cards.push(drawCard);
    
    sum += drawCard;
    console.log("Array Length: " + cards);
    console.log("New Card: " + drawCard);
    console.log("New Sum: " + sum);
    renderGame();
  }