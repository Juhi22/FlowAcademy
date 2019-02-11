// köszön, mid fáj, adjon egy számot amire igazak a feltételek (1-1000000 között találjon számot)
let readlineSync = require('readline-sync');

// a két szám között keressen
let minnum = 1;
let maxnum = 1000000;

// köszönt, nevet kér
let userName = readlineSync.question('Üdvözlöm! Én vagyok a szisztuszi fényjáró. Mi az Ön neve? ');
console.log('Az Univerzum azt súgja az Ön neve: ' + userName);

// megkérdezi mi fáj
let testrészek = ['Fej', 'Jobb kéz', 'Bal kéz', 'Törzs', 'Bal láb', 'Jobb láb'];
let index = readlineSync.keyInSelect(testrészek, 'Melyik testrészed fáj?');
console.log('Érzem minden aura csakrájában, hogy a fájdalmai innen sugároznak: ' + testrészek[index] + '.');

// random számot ad
let getRandom = (min, max) => {
  return Math.floor(Math.random * max) + min;
};

// itt a random számunk
let randomnum = getRandom(minnum, maxnum);

// fej osztható , nem osztható  //ASDASDASDASDASDASDADASDASDASDASDASDASDSDAD
let divide1 = (num) => {
  for (let i = 0; i < 2; i++) {
    if (num % 3 === 0 && num % 4 !== 0) {
      return num;
    } else {
      console.log(num);
      num = num * 3;
    }
  }
};

// jobb kéz osztható , nem osztható //ASDASDASDASDADASDASDASDASDASDASDASDASDASD inkább ez mint a másik (divide 1)
let divide2 = (num) => {
  if (num % 5 === 0 && num % 7 !== 0) {
    return num;
  } else {
    return divide2(randomnum);
  }
};

// bal kéz prím szám    // ASDASDSADASDASDASDASDSDA
let primenum = (num) => {

};

// törzs, fibonacci   // ASDASDSADASDASDASDASDSDA
let fibonacci = (num) => {

};

// bal láb, pozitív egész // ASDASDSADASDASDASDASDSDA
let positive = (num) => {

};

// jobb láb, iker prímek    // ASDASDSADASDASDASDASDSDA
let twinprimenum = (num) => {

};

// kiválasztja melyik testrész és elindítja a szám megadását
let algorithmPicker = i => {
  switch (i) {
    case 0: // fej, 3-al osztható, 4-el nem
      let fejnum = divide1(randomnum);
      return fejnum;
    case 1: // jobb kéz, 5el osztható, 7-el nem
      let jobbkeznum = divide2(randomnum);
      return jobbkeznum;
    case 2: // bal kéz, prím szám
      let balkeznum = primenum(randomnum); // asd
      return balkeznum;
    case 3: // törzs, fibonacci
      let torzsnum = fibonacci(randomnum); // asd
      return torzsnum;
    case 4: // bal láb, pozitív egész
      let ballabnum = positive(randomnum); // asd
      return ballabnum;
    case 5: // jobb láb, iker prímek
      let jobblabnum = twinprimenum(randomnum); // asd
      return jobblabnum;
  }
};

// melyik testrészt választja
let curenum = algorithmPicker(index);
console.log('Az univerzum a következő gyógyító erejű számot küldi Önnek: ' + curenum);
console.log('Ezt a számot kántálja fejen pörögve, egy gyertya körül egész nap és garantáltan meggyógyul!');
console.log('Az Univerzum békéje éljen Önben tovább!');
