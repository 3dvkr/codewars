// Strings:  -------------------------------
// https://www.codewars.com/kata/55a70521798b14d4750000a4

function greet(name){
    return `Hello, ${name} how are you doing today?`;
  }

// https://www.codewars.com/kata/51c8991dee245d7ddf00000e

function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers){
  return '' + Math.max(...numbers.split(' ')) + ' '+ Math.min(...numbers.split(' '))
}

// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  var vowelsCount = 0;
  
  for (letter of str) {
    if (['a', 'e', 'i', 'o', 'u'].includes(letter)) {
      vowelsCount++;
    }
  }  
  return vowelsCount;
}

// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
  return str.split('').filter(x => !'aeiou'.includes(x.toLowerCase())).join('');
}

// Arrays: ---------------------------------
// https://www.codewars.com/kata/523f5d21c841566fde000009
function arrayDiff(a, b) {
  return a.filter(x => !b.includes(x))
}

// https://www.codewars.com/kata/52597aa56021e91c93000cb0
var moveZeros = function (arr) {
  let zeroSort = arr.filter(x => x !== 0);
  return zeroSort.concat(new Array(arr.length - zeroSort.length).fill(0));  
}

// https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers) {
  let p = numbers.map(x => String(x));
  return `(${p[0]+p[1]+p[2]}) ${p[3]+p[4]+p[5]}-${p[6]+p[7]+p[8]+p[9]}`;
}

// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name){
  let initials = name.toUpperCase().split(' ');
    return initials[0][0] + '.' + initials[1][0];
}

// https://www.codewars.com/kata/5949481f86420f59480000e7

function oddOrEven(array) {
  return array.reduce((acc, el) => acc + el, 0) % 2 == 0 ? 'even' : 'odd';
}