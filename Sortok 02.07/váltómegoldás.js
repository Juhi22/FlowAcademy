function exchange (array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let k = i + 1; k < array.length; k++) {
      if (array[i] < array[k]) {
        let temp = array[i];
        array[i] = array[k];
        array[k] = temp;
      }
    }
  }
  return array;
}

let tömb = [1, 34, 54, 23, 2, 10];

let result = exchange(tömb);
console.log(result);
