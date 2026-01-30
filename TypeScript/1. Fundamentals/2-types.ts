// Array & Tuples

let numbers: number[] = [1, 2, 3, 4, 5];

console.log(numbers);

numbers.push(6, 7);

console.log(numbers);

let names: Array<string> = ["Ronaldo", "Messi", "Neymar"];

console.log(names);

const colors: readonly string[] = ["red", "green", "blue"];

// push method is now allowed here due to "readonly"

let person1: [string, number] = ["Ronaldo", 7];

console.log(person1[0]);
console.log(person1[1]);

let person2: [string, number?] = ["Ronaldo"];

console.log(person2); // if person2[1] => undefined

type ScoreBoard = [string, ...number[]];

let player2: ScoreBoard = ["Ronaldo", 62, 49, 50];

console.log(player2);

let playerInfo: [name: string, age: number] = ["Ronaldo", 40];

console.log(playerInfo[0]);
console.log(playerInfo[1]);

// Union & Intersections

let value: string | number;

console.log((value = "bread"));
console.log((value = 10));
console.log((value = "")); // if true / false => ERROR

type Dog = { bark: () => void };
type Cat = { meow: () => void };

let pet: Dog | Cat;

pet = { bark: () => console.log("Woof!") };
pet = { meow: () => console.log("Meow!") };

function makeSound(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound({ bark: () => console.log("Woof!") });
makeSound({ meow: () => console.log("Meow!") });

type Person = { name: string };
type Employee = { club: string };

type Coach = Person & Employee;

let footballCoach: Coach = {
  name: "Jose Mourinho",
  club: "Benfica",
};

console.log(footballCoach);

interface HasName {
  name: string;
}

interface HasAge {
  age: number;
}

type PersonDetails = HasName & HasAge;

let user: PersonDetails = { name: "Ronaldo", age: 40 };

console.log(user.age);

// Enums

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
console.log(move);

/*
enum Status {
  Pending,
  Approved,
  Rejected,
}

console.log(Status.Pending);
console.log(Status.Approved);
*/

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

let userRole: Role = Role.Admin;
console.log(userRole);

enum Sizes {
  Small = 10,
  Medium = Small * 2,
  Large = Medium * 2,
}

console.log(Sizes.Large);

enum Status {
  Active = "ACTIVE",
  Inactive = 0,
  Pending = 1,
}

console.log(Status.Active);
console.log(Status.Pending);

const enum Size {
  Small = "S",
  Medium = "M",
  Large = "L",
}

let tShirt: Size = Size.Medium;
console.log(tShirt);
