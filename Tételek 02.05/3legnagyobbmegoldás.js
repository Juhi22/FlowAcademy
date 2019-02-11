function top3 (array) {
  let result = [];
  for (let i = 0; i < 3; i++) {
    let max = -300000000;
    for (let k = 0; k < array.length; k++) {
      if (max < array[k]) {
        max = array[k];
        console.log(max);
      }
    }
    result.push(max);
    let newArray = [];
    for (let k = 0; k < array.length; k++) {
      if (max !== array[k]) {
        newArray.push(array[k]);
      }
    }
    array = newArray;
  }
  return result;
}

let tömb = [1, 23, 2, 34, 65, 12];

let eredmeny = top3(tömb);
console.log(eredmeny);
