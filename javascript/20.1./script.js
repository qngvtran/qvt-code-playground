// Ternary Operators practice

const favPlayer = prompt(
  "Are you Ronaldo or Messi fan? (Enter their iconic number)",
);

const msgRonaldo = "GOOD CHOICE!! THE REAL GOAT SUII";
const msgMessi = "2nd best player.";
const msgOther = "I said either 7 or 10..";

let result;

if (favPlayer === null || favPlayer.trim() === "") {
  result = "You forgot to type a number bruh";
} else {
  const playerNumber = Number(favPlayer);

  if (isNaN(playerNumber)) {
    result = "Enter a valid number";
  } else if (playerNumber === 7) {
    result = msgRonaldo;
  } else if (playerNumber === 10) {
    result = msgMessi;
  } else {
    result = msgOther;
  }
}
console.log(result);
