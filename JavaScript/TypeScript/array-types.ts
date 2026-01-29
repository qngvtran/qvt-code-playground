// Array & Tuple types

let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Ronaldo", "Messi", "Neymar"];

console.log(numbers);
console.log(names);

numbers.push(6, 7);
// numbers.push("8") => not possible

console.log(numbers);

let cristiano: [string, number] = ["Ronaldo", 7];

console.log(cristiano[0]);
console.log(cristiano[1]);

let lionel: [string, number?] = ["Messi"];

console.log(lionel[0]);

type ScoreSheet = [string, ...number[]];

let data: ScoreSheet = ["Ronaldo", 50, 52, 49];
console.log(data);
