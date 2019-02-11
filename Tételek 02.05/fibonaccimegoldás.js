function fibonacci (n) {
  let x = 1;
  let y = 1;
  let number = 0;
  for (let i = 0; i !== n; i++) {
    number = x + y;
    x = y;
    y = number;
  }
  return number;
}

let ndikszám = 8;

let eredmeny = fibonacci(ndikszám);
console.log(eredmeny);
