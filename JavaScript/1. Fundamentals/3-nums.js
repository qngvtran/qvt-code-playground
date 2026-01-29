// Numbers

const pi = 3.141;

console.log(pi.toFixed(0));

console.log(pi.toFixed(2));

console.log(pi.toFixed(10));

console.log(pi.valueOf());

console.log(Number("3.141"));

console.log(Number(new Date()));

console.log(parseInt("2 apples"));

console.log(parseFloat("2.1 apples"));

console.log(Math.max(4, 7, 5));

console.log(Math.min(1, 3, 2));

console.log(Math.round(0.7));

console.log(Math.floor(7.89));

console.log(Math.ceil(5.4));

console.log(Math.abs(-20));

const num = 1000000;

console.log(num.toLocaleString("en-US"));

console.log(
  num.toLocaleString("en-US", { style: "currency", currency: "USD" }),
);

const number = 1234;

console.log(number.toString(2));
