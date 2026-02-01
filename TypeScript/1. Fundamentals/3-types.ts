// Function Types

function add(x: number, y: number): number {
  return x + y;
}

console.log(add(3, 4));

function greet(name: string, message?: string): string {
  return `Hello, ${name}! ${message || "How are you?"}`;
}

console.log(greet("Ronaldo"));
console.log(greet("Cristiano, SUIII"));

function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));
console.log(sum(5, 10));

function format(input: number): number;
function format(input: string): string;

function format(input: string | number): string | number {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input * 2;
  }
}

console.log(format("hello"));
console.log(format(10));
// console.log(format(true)); // Error: Argument of type 'boolean' is not assignable to 'string | number'

let multiply1: (x: number, y: number) => number;
multiply1 = (a, b) => a * b;
console.log(multiply1(4, 5));

interface MathOperation {
  (x: number, y: number): number;
}

let multiply2: MathOperation = (a, b) => a * b;
console.log(multiply2(3, 4));

function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello!");

function throwError(message: string): never {
  throw new Error(message);
}

type GreetFunction = (name: string) => string;
const sayHello: GreetFunction = (name) => `Hello, ${name}!`;
console.log(sayHello("Cristiano"));

let value: any;

value = 10;
value = "Hello";
value = true;

let userInput: any;
userInput = 5;
userInput.toUpperCase(); // No error in TypeScript, but will fail at runtime

let data: unknown;
data = "TypeScript";

if (typeof data === "string") {
  console.log(data.toUpperCase()); // Safe operation
}

// data.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'unknown'

function textMessage(message: string): void {
  console.log(message);
}

textMessage("Hello!");

function giveError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    console.log("Running forever...");
  }
}
