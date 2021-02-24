// Vasya and Stairs: https://www.codewars.com/kata/55251c0d2142d7b4ab000aef

function numberOfSteps(steps, m) {
  if (m > steps) {return -1}
  let bigSteps = Math.floor(steps / 2); 
  let littleSteps = steps - bigSteps * 2;
  if ((bigSteps + littleSteps) % m == 0) {return bigSteps + littleSteps}
  do {
    bigSteps--;
    littleSteps += 2;
  } while ((bigSteps + littleSteps) % m != 0)
  return bigSteps + littleSteps;  
}
