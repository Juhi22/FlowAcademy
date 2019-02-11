function selection (array) {
  for (let i = 0; i < array.length - 1; i++) {
    let max = array[i];
    for (let k = i + 1; k < array.length; k++) {
      if (max < array[k]) {
        max = array[k];
        let temp = array[i];
        array[i] = array[k];
        array[k] = temp;
      }
    }array[i] = max;
  }
  return array;
}
let tömb = [1, 34, 54, 23, 2, 10];

let result = selection(tömb);
console.log(result);
