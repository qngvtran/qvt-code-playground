// Ternary Operators practice

const favPlayer = prompt(
  "Are you Ronaldo or Messi fan? (Enter their iconic number)",
);

let result = favPlayer;

if (isNaN(favPlayer)) {
  result = "Enter a number";
} else result;

console.log(result);
