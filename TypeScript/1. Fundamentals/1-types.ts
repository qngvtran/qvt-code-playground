// Type assignment

let firstName: string = "Cristiano";

// Simple types

let age: number = 40;

let price: number;

price = 99.99;

let hex: number = 0xff;

let binary: number = 0b1010;

let isRetired: boolean = false;

let bigNumber: bigint = 83218321893219n;

let anotherBigInt: bigint = BigInt(8918321932181293812);

let uniqueKey: symbol = Symbol("key");

let emptyValue: null = null;

let notAssigned: undefined;

// Object Types

let player: { name: string; age: number } = {
  name: "Ronaldo",
  age: 40,
};

console.log(player);

type Player = {
  name: string;
  age: number;
};

let footballer: Player = { name: "Ronaldo", age: 40 };

console.log(footballer);

interface Contract {
  club: string;
  duration: number;
  transferFee: number;
}

let player1: Contract = { club: "All Nassr", duration: 2, transferFee: 200 };

console.log(player1);
console.log(
  `Ronaldo signed a contract at ${player1.club} for ${player1.transferFee} million EUR`,
);

interface Club {
  name: string;
  country: string;
}

interface Manager {
  name: string;
  surname: string;
  club: Club;
}

let coach: Manager = {
  name: "Michael",
  surname: "Carrick",
  club: {
    name: "Manchester United F.C.",
    country: "UK",
  },
};

console.log(coach);

interface JerseyNumber {
  number: number;
}
interface Jersey extends JerseyNumber {
  player: string;
  club: string;
}

let ronaldoShirt: Jersey = { player: "Ronaldo", club: "All Nassr", number: 7 };

console.log(ronaldoShirt.player);

type A = { a: number };
type B = { b: number };

type AB = A & B;

let point: AB = { a: 10, b: 20 };

//Record<K, V> utility type defines an object type where keys (K) map to values (V)

type GoalScorers = Record<string, number>;

let scoreboard: GoalScorers = {
  Ronaldo: 62,
  Messi: 58,
  Neymar: 39,
};

console.log(scoreboard);

// Omit removes a property K from type T while keeping the rest of the properties
// In the example below the isProfessional property is removed from FootballPlayer before merging

type FootbalPlayer = {
  name: string;
  age: number;
  isProfessional: boolean;
};

type FootballClub = {
  name?: string;
  country: string;
};

type PlayerWithoutContract = Omit<FootbalPlayer, "isProfessional"> &
  FootballClub;

let amateur: PlayerWithoutContract = {
  name: "Quang",
  age: 21,
  country: "Czechia",
};

console.log(amateur);
