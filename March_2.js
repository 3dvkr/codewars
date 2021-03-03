// Count Repeats https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061

function countRepeats(str) {
  return str.length - str.split('').filter((x, i, arr) => x != arr[i + 1]).length;
}

// Find Multiples of a Number https://www.codewars.com/kata/58ca658cc0d6401f2700045f

function findMultiples(integer, limit) {
  let arr = [];
  for (let i = integer; i <= limit; i += integer) {
    arr.push(i);
  }
  return arr;
}

// Total pressure calculation https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a

solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  return ((givenMass1 / molarMass1) + (givenMass2 / molarMass2)) * (0.082 * (temp + 
273.15)) / volume;
}

// Urban Dictionary https://www.codewars.com/kata/5631ac5139795b281d00007d

var WordDictionary = function () {
  this.allWords = [];
};

WordDictionary.prototype.addWord = function (word) {
  this.allWords.push(word);
};

WordDictionary.prototype.search = function (word) {
  let pattern = '';
  for (let letter of word) {
    if (letter == '.') {
      pattern += '[a-z]';
    } else {pattern += letter}
  }
  pattern = new RegExp(pattern);
  for (let w of this.allWords) {
    if (w.length == word.length && w.match(pattern)){return true}
  }
  return false;
}

// Money, Money, Money https://www.codewars.com/kata/563f037412e5ada593000114

function calculateYears(principal, interest, tax, desired) {
  if (principal == desired) {return 0}
  let years = 0, amount = principal, accrued = 0;
  do {
    accrued = amount * (interest);
    amount += Math.round(accrued * (1 - tax));
    ++years;
  } while (amount < desired)
  return years;
}

// The highest profit wins! https://www.codewars.com/kata/559590633066759614000063

function minMax(arr){
  return [Math.min(...arr),Math.max(...arr)]; 
}

// Is it even? https://www.codewars.com/kata/555a67db74814aa4ee0001b5

function testEven(n) {
    return n % 2 == 0;
}

