function feltoltes (a, f) {
  let matrix1 = [];
  for (let i = 0; i < a; i++) {
    let b = [];
    for (k = 0; k < a; k++) {
      b.push(f);
    }
    matrix1.push(b);
  }
  return (matrix1);
}

let matrix = feltoltes(20, 0);

const feltoltesx = (number, matrix, szorzó) => {
  let n = 0;
  while (n < number) {
    let i = getRandomInt(0, 19);
    let k = getRandomInt(0, 19);
    if (matrix[i][k] !== 'X') {
      matrix[i][k] = 'X';
      n++;
    }
  }
  return matrix;
};

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let eredmeny = feltoltesx(13, matrix, 100);
console.log(eredmeny);
