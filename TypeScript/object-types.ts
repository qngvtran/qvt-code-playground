// Object types

interface playerJersey {
  name: string;
  jerseyNumber: number;
  size?: "Small" | "Medium" | "Large";
}

const jersey1: playerJersey = {
  name: "Ronaldo",
  jerseyNumber: 7,
  size: "Medium",
};

const jersey2: playerJersey = {
  name: "Messi",
  jerseyNumber: 10,
};

console.log(jersey1, jersey2);

// "?" Question mark - makes the property optional,
// so e.g. in jersey2 variable the size is not mentioned

interface Merchandise {
  price: number;
  discount?: number;
  isSigned: boolean;
}

interface Retailer {
  store?: string;
  isAvailable: boolean;
}

interface playerShirt extends Merchandise, Retailer {
  name: string;
  shirtNumber: number;
}

const jersey3: playerShirt = {
  name: "Neymar",
  store: "Nike.com",
  isAvailable: true,
  shirtNumber: 11,
  price: 110,
  isSigned: false,
};

const jersey4: playerShirt = {
  name: "Zidane",
  isAvailable: false,
  shirtNumber: 5,
  price: 150,
  discount: 20,
  isSigned: true,
};

console.log(jersey3, jersey4);

// Added "extension" and trying multiple
// Next => Nested Interfaces, Methods and Dynamic Keys

// Nested Interface
interface Coach {
  name: string;
  surname: string;
}

interface Address {
  country: string;
  city: string;
}

interface Club {
  name: string;
  stadium: Address;
  headCoach: Coach;
  players: string[];
}

const players: string[] = ["Cunha", "Bruno"];

const manUnited: Club = {
  name: "Manchester United F.C.",
  stadium: {
    country: "UK",
    city: "Manchester",
  },
  headCoach: {
    name: "Michael",
    surname: "Carrick",
  },
  players,
};

console.log(manUnited);
console.log(manUnited.headCoach.name);
console.log(manUnited.headCoach.surname);

// Keys
interface Leaderboard {
  [playerName: string]: number | string;
}

const topScorers: Leaderboard = {
  Ronaldo: 62,
  Messi: 59,
  Suarez: 56,
  Neymar: "Injured",
};

console.log(topScorers);

// Practice 24th Jan 26

type Player = {
  name: string;
  age: number;
};

let person: Player = { name: "Ronaldo", age: 40 };

// Interface is similar to Type, but interface can be extended amd implemented in classes.
// Interfaces are preferred.

// "readonly" value cannot be changed

interface Calculator {
  result(a: number, b: number): number;
}

let myCalc: Calculator = {
  // result: (a, b) => a + b,
  // result: (a, b) => a - b,
  // result: (a, b) => a * b,
  result: (a, b) => a / b,
};
console.log(myCalc.result(10, 5));

// Combining types

type A = { x: number };
type B = { y: number };

type AB = A & B;

let point: AB = { x: 10, y: 20 };

console.log(point);

// Record<K, V>
// K = keys
// V = values
// Defines object type where keys map to values

type PlayerRating = Record<string, number | string>;
let rating: PlayerRating = {
  Ronaldo: "PERFECT RATING",
  Messi: 9.7,
};

console.log(rating.Ronaldo);
console.log(rating.Messi);

// Omit - removes a property (K) from type (T) while keeping the rest of the properties

type FootballPlayer = {
  name: string;
  age: number;
  jerseyNumber: number;
};

type FootballClub = {
  club: string;
  country: string;
};

type PlayerID = Omit<FootballPlayer, "age"> & FootballClub;

let player: PlayerID = {
  name: "Ronaldo",
  jerseyNumber: 7,
  club: "All Nassr",
  country: "Saudi Arabia",
};

console.log(player);
console.log(player.club);
