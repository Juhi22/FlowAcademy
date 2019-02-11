const osszeadas = (a, b) => {
    let eredmeny = a + b;
    return eredmeny;
};

function kivonas (a, b) {
    let eredmeny = a - b;
    return eredmeny;
}

const szorzas = (a, b) => a * b;

let pelda1 = osszeadas (1, 5);
console.log(pelda1);

let pelda2 = osszeadas (4, 6);
console.log(pelda2);

let pelda3 = kivonas(10, 5);
console.log(pelda3);

let pelda4 = szorzas(10, 5);
console.log(pelda4);

const hello = (name = 'Béla') => {
  console.log(`Hello ${name}! :)`);
};

hello('Szandra');
hello('Tamás');
hello();

const kisebb = (ez, ennel) => {
  if (ez < ennel) {
    return true;
} else {
         return false
     }
 };

 console.log(kisebb(2, 3));