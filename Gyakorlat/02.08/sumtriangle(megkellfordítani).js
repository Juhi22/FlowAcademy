// a kiírás fordítva kell, hogy legyen
function sumtriangle (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i] + arr[i + 1]);
  }
  let result = newArr;
  console.log(arr);
  if (result.length === 1) {
    return console.log(result);
  } else {
    return sumtriangle(arr = result);
  }
}

let A = [1, 2, 3, 4, 5];

let eredmeny = sumtriangle(A);
