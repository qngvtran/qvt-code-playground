interface playerJersey {
  name: string;
  jerseyNumber: number;
  size: "Small" | "Medium" | "Large";
}

const jersey1: playerJersey = {
  name: "Ronaldo",
  jerseyNumber: 7,
  size: "Medium",
};

const jersey2: playerJersey = {
  name: "Messi",
  jerseyNumber: 10,
  size: "Small",
};

console.log(jersey1, jersey2);
