function palindrome (word, length) {
  let k = 0;
  let newword = '';
  for (let i = length - 1; i >= 0; i--) {
    if (word[i] === word[k]) {
      newword += word[k];
      k++;
    } else {
      return false;
    }
  }
  return newword === word;
}

let szó = 'gorog';
let szóhossz = szó.length;

let eredmény = palindrome(szó, szóhossz);
console.log(eredmény);
