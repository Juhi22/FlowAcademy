let vampir= {no: {db : 3, hp: 2}, ferfi:{db: 8, hp: 4}, alfa:{db: 1, hp: 12}};
let ember= {Sam:{tar : 3, golyo : 8},Dean: {tar: 4, golyo: 10}};

const osszeadas = (a, b) => {
  return a + b;
};

const szorzas = (a, b) => {
  return a * b;
};

// Dean tölténye

let elsokerdes = szorzas(ember.Dean.golyo, ember.Dean.tar);
console.log(elsokerdes);

// Sam tölténye

let masodikkerdes = szorzas(ember.Sam.tar, ember.Sam.golyo);
console.log(masodikkerdes);

// összes töltény

let harmadik = osszeadas(elsokerdes, masodikkerdes);
console.log(harmadik);

// Kinek van több tölténye

function kinektobb (a, b) {
  if (a > b) {
    return 'Dean-nek van több.';
  } else if (a === b) {
    return 'Ugyan annyi lőszerük van.';
  } else {
    return 'Sam-nek van több.';
  }
}

let negyedik = kinektobb(elsokerdes, masodikkerdes);
console.log(negyedik);

// Összes vámpír kivégzéséhez mennyi lőszer kell

const killemall = (a, b, c) => {
  return a + b + c;
};

let otodik = killemall(vampir.alfa.hp, vampir.ferfi.hp, vampir.no.hp);
console.log(otodik);

// Samnek, Deannek hány tölténye marad, a max lelőhető vámpírok után


// Szükséges volt e Castiel közbelépése

function castieljon(a, b) {
  if (a >= b) {
    return ('Castiel nem jön.');
  } else {
    return ('Castiel jön.');
  }
}

let ossznohp = szorzas(vampir.no.db, vampir.no.hp);
let osszferfihp = szorzas(vampir.ferfi.hp, vampir.ferfi.db);
let osszalfahp = szorzas(vampir.alfa.db, vampir.alfa.hp);

let osszesvampirhp = osszalfahp + osszferfihp + ossznohp;

let szukseg = castieljon(harmadik, osszesvampirhp);
console.log(szukseg);

