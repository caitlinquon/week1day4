var wrapLog = function (callback, name) {


  return function (a, b) {

    console.log(name + callback(a,b));

  }

};


var sum = function (a,b) { return a + b; };
var multiply = function (a,b) { return a * b; };


var logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5


// console.log(callback(a + b));


// wrapLog(callback, name)


