function firstNumber() {
  console.log('firstNumber');
}
firstNumber();

const secondNumber = function(a, b) {
  console.log('secondNumber', a, b);
}
secondNumber(2, 3);

const comparedNumber = function(a, b) {
  let result = -1;
  if (a > b) {
    result = 1;
  } else if ( a == b) {
    result = 0;
  }
  console.log('comparedNumber', result);
}
comparedNumber(4, 3);

const factorial = function(number) {
  if (number < 0) {
    return false;
  } else if (number == 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
console.log(factorial(5));