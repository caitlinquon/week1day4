var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 260];

function compareNumbers(a, b) {
  return a - b;
}
console.log('Sorted without a compare function:', mixedNumericArray.sort(compareNumbers));
