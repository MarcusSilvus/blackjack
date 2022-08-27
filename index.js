
let firstCard;
let secondCard;
let sum;
let randomCard;
let message = "";

let hasBlackjack = false;
let isAlive = true;

// create function that randomly generate a value between 2 -11
function random() {
  let min = Math.ceil(2);
  let max = Math.floor(12);
  randomCard = Math.floor(Math.random() * (max - min) + min);  
}

random();
firstCard = randomCard;
console.log(firstCard);

random();
secondCard = randomCard;
console.log(secondCard);

sum = firstCard + secondCard + 5;
console.log("Sum: " + sum);

if (sum <= 20)  {
  message = "Would you like another card?";
  // if user says yes, 
    //random();
    //sum+= randomCard;
} else if (sum === 21) {
    message = "BLACKJACK! You win!";
    hasBlackjack = true;
    
} else {
    message = "BUSTED! You lose!";
    isAlive = false;
  
}

console.log(message);
console.log("Has blackjack: " + hasBlackjack);
console.log("Is alive: " + isAlive);


