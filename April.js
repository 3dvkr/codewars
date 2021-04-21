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