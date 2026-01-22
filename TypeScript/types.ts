let jerseyNumber: number = 7;
let username: string = "Quang";
let isAdmin: boolean = true;
let city: string = "Prague";

console.log(`Ronaldo wears number ${jerseyNumber}`);
console.log(username);
console.log(isAdmin);
console.log(city);

const scores: number[] = [1, 2, 3];

const namesArr: Array<string> = ["Quang, Radek"];

const x: any = "computer";
const xArr: any[] = ["ronaldo still plays", 7, true]; // we don't know specific type

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(6, 7));

const result = (c: number, d: number) => {
  return c + d;
};

console.log(result(2, 3));
