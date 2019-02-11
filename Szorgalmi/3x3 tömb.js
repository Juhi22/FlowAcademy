let a = [];
let n = 1;

for (let i = 0; i < 3; i++) {
  let b = [];
  for (let j = 0; j < 3; j++) {
    b[j] = n;
    n++;
  }
  a.push(b);
}

console.log(a);

for (let k = 0; k < 3; k++) {
  console.log(a[k][0], a[k][1], a[k][2]);
}
