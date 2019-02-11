let prr = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i] + arr[i + 1]);
  }
  if (newArr.length > 1) {
    prr(newArr);
  } else {
    console.log([arr[0] + arr[1]]);
  }
  console.log(arr);
};

let myArr = [3, 5, 8, 2, 15];
prr(myArr);
