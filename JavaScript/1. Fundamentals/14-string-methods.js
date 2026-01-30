let userName = "Cristiano Ronaldo";

console.log(userName.length);

console.log(userName.indexOf("r"));

console.log(userName.lastIndexOf("o"));

console.log(userName.slice(0, 9));

console.log(userName.slice(10));

console.log(userName.replace(" ", " dos Santos Aveiro "));

console.log(userName.toLocaleUpperCase());

console.log(userName.toLocaleLowerCase());

console.log(userName[3]); // s

console.log(userName.split(" "));

console.log(userName.split(""));

console.log(userName.startsWith("Cris"));

console.log(userName.endsWith("aldo"));

console.log(userName.includes(" "));

console.log(Array.from(userName).reverse().join(""));

// Random

function add(a, b) {
  return a + b;
}

console.log(add(5, 10));

function multiply(x, y) {
  return x * y;
}

console.log(multiply(5, 10));

function toMinutes(m) {
  return m / 60;
}

console.log(toMinutes(120));

function sayHello(name) {
  return `Hello, ${name}!`;
}

console.log(sayHello("Ronaldo"));

function isPositive(num) {
  if (num < 0) return false;
}

console.log(isPositive(-5));

function countItems(num) {
  return num.length;
}

console.log(countItems(["apple", "banana", "cherry"]));
