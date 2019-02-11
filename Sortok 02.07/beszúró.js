function insertion (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i-1]) {
      let temp = array[i];
      array[i] = array[i-1];
      array[i-1] = temp;
    }
  }
  return array;
}

let tömb = [1, 34, 54, 23, 2, 10];

let result = insertion(tömb);
console.log(result);
