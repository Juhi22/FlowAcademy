function closest (array1, array2) {
  let min = 300000; // legkisebbet keressük
  let array3 = []; // ebbe tolom bele majd a legkisebb indexeket
  for (let i = 0; i < array1.length; i++) { // vizsgálja az első tömböt
    for (let k = 0; k < array2.length; k++) { // vizsgálja a második tömböt
      let difference = Math.abs(array1[i] - array2[k]);// mekkora a különbség
      if (difference < min) {
        min = difference; // megkeressük a legkisebb kül.-t adott i-hez
        array3[0] = array1[i]; // segéd tömb megkapja az 1. és 2. indexbe a 2 indexet
        array3[1] = array2[k];
      }
    }
  }
  return array3;
}

let elsőtömb = [-1, 5, 10, 20, 28, 3];
let másodiktömb = [26, 134, 135, 50, 17];

let eredmény = closest(elsőtömb, másodiktömb);
console.log(eredmény);
