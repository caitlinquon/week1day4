var words = ["ground", "control", "to", "major", "tom"];

var results = map(words,function(word) {
  return word.length;
});

function map(words, callback) {
  var arr = [];
  for (let i = 0; i < words.length; i++){
    var lengOfThisWord = callback(words[i]);
    arr.push(lengOfThisWord);
  }
  return arr;
}
console.log(results);
// 2 arguments
// 1st array to map
//2nd call back function
//return a new array of the length of the each word