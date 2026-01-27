function add(x: number, y: number): number {
  return x + y;
}

console.log(add(7, 10));

function greet(name: string, message?: string): string {
  return `Hello, ${name}! ${message || "How are you?"}`;
}

console.log(greet("Ronaldo"));
console.log(greet("Messi", "You are not the GOAT LMAO"));

function format(input: number): number;
function format(input: string): string;

function format(input: string | number): string | number {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input * 2;
  }
}

console.log(format("suiii"));
console.log(format(3.5));
