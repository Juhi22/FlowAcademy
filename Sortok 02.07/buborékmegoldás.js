function bubble (array, arraylength) {
  for (let i = 0; i < arraylength; i++) {
    for (let j = 0; j < arraylength - i - 1; j++) {
      if (array[j] > array[j+1]) {
        let swap = array[j+1];
        array[j+1] = array[j];
        array[j] = swap;
      }
    }
  }
  return array;
}

let tömb = [1, 34, 54, 23, 2, 10];
let tömbhossz = tömb.length;

let result = bubble(tömb, tömbhossz);
console.log(result);
