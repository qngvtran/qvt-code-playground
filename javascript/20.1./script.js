// Ternary Operators practice

const favPlayer = prompt(
  "Are you Ronaldo or Messi fan? (Enter their iconic number)",
);

let result = favPlayer;

if (isNaN(result)) {
  result = "Enter a number";
} else if (favPlayer === null || favPlayer === "") {
  result = "You forgot to type a number bruh";
} else result;

console.log(result);
