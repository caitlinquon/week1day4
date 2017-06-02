var countdownGenerator = function (x) {
  var number = x

  return function(){
    var i = number --
    if (i > 0){
      console.log('T-minus ' + number)
    } else if ( i >= 0){
      console.log ('Blast off!')
    } else if(i < 0) {
      console.log('Rockets already gone, bub!')
    }

  }
};






var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!