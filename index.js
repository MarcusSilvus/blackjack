// create an array of values from 1 - 11

let firstCard;
let secondCard;
let sum;
let randomCard;

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

sum = firstCard + secondCard;
console.log("Sum: " + sum);

if (sum < 21) {
  console.log("Do you want another card?");
  // if user says yes, 
    //random();
    //sum+= randomCard;
} else if (sum === 21) {
  console.log("BLACKJACK! You win!");
} else {
  console.log("BUSTED! You lose!");
}
// if == 21, you win
// if > 21, busted
// if < 21, prompt user if they want another card
  // if yes, randomly generate a card

