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

// Code understanding:

// It starts with the prompt.
// And we move to the if statement.
// The result serves as a storage for the result we get out of the if statement.
// In the if statement if I forget to type a number or close it, it will say a message which will get "stored" in variable and console logs it.
// However if i typed anything, it has to be a number otherwise we get a message to enter a valid number.
// If i get past this process and actually typed a number, let's say either 7 or 10 we will get a message we set up earlier, msgRonaldo or msgMessi.
// If i didn't type any of these two numbers we will get a message from variable msgOther and with this the script ends.
