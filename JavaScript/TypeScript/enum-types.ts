enum Direction {
  Up,
  Right,
  Down,
  Left,
}

let moveUp: Direction = Direction.Up;
let moveRight: Direction = Direction.Right;
let moveDown: Direction = Direction.Down;
let moveLeft: Direction = Direction.Left;

console.log(moveUp);
console.log(moveRight);
console.log(moveDown);
console.log(moveLeft);

enum Status {
  Pending = 5, // if the first value is assigned, the rest auto-increments, so Approved is gonna be 6, Rejected 7
  Approved,
  Rejected,
}

console.log(Status.Approved);
console.log(Status.Rejected);

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

let userRole: Role = Role.Admin;

console.log(userRole);

enum Sizes {
  Small = 10,
  Medium = Small * 1.5,
  Large = Medium * 1.5,
}

console.log(Sizes.Small);
console.log(Sizes.Medium);
console.log(Sizes.Large);

enum Color {
  Red = 5,
  Green,
  Blue,
}

console.log(Color.Green); // Output is gonna be 6, because Red is 5
console.log(Color[7]); // Output Blue
