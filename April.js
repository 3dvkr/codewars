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

//https://www.codewars.com/kata/54ff3102c1bad923760001f3

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