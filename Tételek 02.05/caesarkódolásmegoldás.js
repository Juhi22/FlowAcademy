function caesar (szöveg, eltolás) {
  let hossz = szöveg.length;
  let code = '';
  for (i = 0; i < hossz; i++) {
    ascii = szöveg.charCodeAt(i) + eltolás;
    code += (String.fromCharCode(ascii));
  }
  return code;
}

let string = "Hello World";
let plusz = 2;

let result = caesar(string, plusz);
console.log(result);
