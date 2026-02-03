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

// Any, Unknown, Void, Undefined, Never types

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
  console.log(data.toUpperCase());
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

// Type assertions

let someValue: unknown = "Hello, TypeScript!";

// Method 1: Using 'as' syntax (Recommended)
let strLength: number = (someValue as string).length;

// Method 2: Using angle-bracket syntax
let strLength2: number = (<string>someValue).length;

function getUserInput(): unknown {
  return "Hello World";
}

let input = getUserInput();

// console.log(input.toUpperCase()); // TypeScript Error => Property 'toUpperCase' does not exist on type 'unknown'.

console.log((input as string).toUpperCase()); // Works fine

let inputElement = document.getElementById("username") as HTMLInputElement;

inputElement.value = "TypeScript is awesome!";

let myCanvas = document.getElementById("canvas")!;

function getFormattedValue(value: string | number) {
  if ((value as string).toUpperCase) {
    return (value as string).toUpperCase();
  }
  return value;
}

console.log(getFormattedValue("hello"));
console.log(getFormattedValue(42));

// let num1 = "123" as number; // TypeScript Error => Can't convert string to number
let num: number = Number("123");

let value: unknown = "Hello";
console.log(value as any as number); // No error, but incorrect!

const user1 = {
  name: "Alice",
  age: 30,
} satisfies User;

const user2 = {
  name: "Alice",
  age: 30,
} as const satisfies User;

type TypeOfObject = {
  firstName: string;
  lastName: string;
};

const myObject: TypeOfObject = {
  firstName: "John",
  lastName: "Doe",
};

Object.keys(myObject).map((item) => {
  // Gives error: "Element implicitly has an 'any' type because expression of ..."
  // myObject[item];

  // When the type of the object is known
  myObject[item as keyof TypeOfObject];

  // When the type of the object is not known
  myObject[item as keyof typeof myObject];
});
