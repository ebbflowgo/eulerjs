function multiple_three_five(number){
  if (number % 3 === 0 || number % 5 === 0) {
    return true;
  }
}

var x = 0;
for (var i=0; i< 1000; i++) {
  if (multiple_three_five(i) === true) {
    x = x + i;
  }
}

console.log(x);

// answer 233168
