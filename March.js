// The Feast of Many Beasts https://www.codewars.com/kata/5aa736a455f906981800360d

function feast(beast, dish) {
  console.log(beast, dish);
  return beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1];
}

// Exclusive "or" (xor) Logical Operator https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c

function xor(a, b) {
  return a != b;
}

// How many lightsabers do you own? https://www.codewars.com/kata/51f9d93b4095e0a7200001b8

function howManyLightsabersDoYouOwn(name) {
  return name == 'Zach' ? 18 : 0;
}

// Filling an array (part 1) https://www.codewars.com/kata/571d42206414b103dc0006a1

const arr = N => N >= 0 ? new Array(N).fill(0).map((x, i) => i) : [];

// Squash the bugs https://www.codewars.com/kata/56f173a35b91399a05000cb7

function findLongest(str) {
  var spl = str.split(" ");
  var longest = 0;
  
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
    }
  return longest;
}


// Regular Ball Super Ball https://www.codewars.com/kata/53f0f358b9cb376eca001079

var Ball = function (ballType="regular") {
  return {
    ballType
  }
};


// Surface Area and Volume of a Box https://www.codewars.com/kata/565f5825379664a26b00007c

function getSize(width, height, depth){
  return [2 * (width * height + width *  depth + height * depth), width * height * depth ]
}


// Hello, Name or World! https://www.codewars.com/kata/57e3f79c9cb119374600046b

function hello(name) {
  return name && name.length > 0 ? `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!` : 'Hello, World!';
}


// Thinkful - Logic Drills: Traffic light https://www.codewars.com/kata/58649884a1659ed6cb000072

function updateLight(current) {
  let update = {
    red: 'green',
    yellow: 'red',
    green: 'yellow'
  }
  return update[current];
}


// Grasshopper - Check for factor https://www.codewars.com/kata/55cbc3586671f6aa070000fb

function checkForFactor (base, factor) {
  return base % factor == 0
}

// Remove duplicates from list https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118

function distinct(a) {
  return Array.from(new Set(a));
}

// Sleigh Authentication https://www.codewars.com/kata/52adc142b2651f25a8000643

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name == 'Santa Claus' && password == "Ho Ho Ho!";
};


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