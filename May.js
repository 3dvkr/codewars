/* Questions to practice: */

/* One:
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/
function findProduct(inputArr) {
    let product = 1;
    for (let i of inputArr) {
        product *= i;
    }
    return product;
}
// OR

testArr.reduce((acc, el) => acc * el, 1);

/* Two:
You will be given an array of all the family members' ages, in any order. 
The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. 
Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].
*/
function sortFam(inputArr) {
    let [minAge, maxAge] = [Math.min(...inputArr),  Math.max(...inputArr)];
    return [minAge, maxAge, maxAge - minAge];
}


/* Three:
Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
Example:
[ 6, 2, 1, 8, 10 ] => 16
[ 1, 1, 11, 2, 3 ] => 6
*/
function middleSum(inputArr) {
  let minIndex = inputArr.indexOf(Math.min(...inputArr));
  let maxIndex = inputArr.indexOf(Math.max(...inputArr));
  return inputArr.reduce((acc, el, i, arr) => {
    if (![minIndex, maxIndex].includes(i)) {
      acc += el;
    }
    return acc;
  }, 0);
}
// OR
function middleSum(inputArr) {
  return inputArr.reduce((acc, el) => acc + el, 0) - Math.min(...inputArr) - Math.max(...inputArr);
}
