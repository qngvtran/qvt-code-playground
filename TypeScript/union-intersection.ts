// Union & Intersection type practice

let value: string | number;

console.log((value = "Ronaldo"));
console.log((value = 7));

type Dog = { bark: () => void };
type Cat = { meow: () => void };

let pet: Dog | Cat;

pet = { bark: () => console.log("Woof woof") };
pet = { meow: () => console.log("Meow meow") };

function makeSound(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound({ bark: () => console.log("Woof!") });
makeSound({ meow: () => console.log("Meow!") });

type Player = { name: string };
type JerseyNumber = { jerseyNumber: number };
type Club = { team: string };

type Contract = Player & JerseyNumber & Club;

let player1: Contract = {
  name: "Ronaldo",
  jerseyNumber: 7,
  team: "Al Nasser",
};

console.log(player1.name);
console.log(player1.team);

interface hasName {
  name: string;
}

interface hasNumber {
  jerseyNumber: number;
}

type FootballPlayer = hasName & hasNumber;

let player2: FootballPlayer = { name: "Ronaldo", jerseyNumber: 7 };

console.log(player2);

// PRACTICE TIME

// Exercise 1

type Car = {
  manufacturer: string;
  model: string;
  year: number;
  isElectric: boolean;
};

let myCar: Car = {
  manufacturer: "Audi",
  model: "A5",
  year: 2025,
  isElectric: false,
};

// Exercise 2

// let GuestList: Array<string> = ["Ronaldo", "Messi", "Neymar"];
type GuestList = string[];

type UserRecord = [number, string];

let birthdayParty: GuestList = ["Ronaldo", "Messi", "Neymar"];

let bestTime: UserRecord = [60, "10k run"];

console.log(birthdayParty);
console.log(bestTime);

// Exercise 3

type Padding = string | number;

let itemPadding: Padding;

console.log((itemPadding = "20px"));
console.log((itemPadding = 50));

// Exercise 4

type Person = { name: string };

type Employee = { employeeId: number };

type Staff = Person & Employee;

let newHire: Staff = {
  name: "Ronaldo",
  employeeId: 7,
};

console.log(newHire);

// Exercise 5

type Status = "active" | "pending" | "inactive";

let userStatuses: Status[] = ["active", "pending", "inactive"];

console.log(userStatuses);
