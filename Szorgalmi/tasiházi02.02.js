let a = [];

let n = 1;

for (let i = 0; i < 100; i++) {
  a.push(n);
  n++;
}

for (let i = 0; i < 100; i++) {
  if (a[i] % 5 === 0 && a[i] % 3 === 0) {
    a[i] = 'FizzBuzz';
  } else if (a[i] % 3 === 0) {
    a[i] = 'Fizz';
  } else if (a[i] % 5 === 0) {
    a[i] = 'Buzz';
  }
}

console.log(a);
