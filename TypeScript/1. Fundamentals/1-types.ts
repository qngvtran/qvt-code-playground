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
