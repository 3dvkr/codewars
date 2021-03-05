// Is this my tail? https://www.codewars.com/kata/56f695399400f5d9ef000af5

function correctTail(bod, tail){
  
  sub = bod.substr(bod.length-(tail.length))
  
  if (sub == tail) {
    return true
  }
  else {
    return false
  }

}


// Total amount of points https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
    let total = 0;
    for (let score of games) {
      let [a, b] = score.split(':');
      a > b ? total += 3 : a == b ?  total += 1 : null;
    }
    return total;
}