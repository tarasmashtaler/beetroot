// Напиши всі можливі варіанти створення функцій.
function firstNumber() {
  console.log('firstNumber');
}
firstNumber();

// Створи функцію, яка буде виводити кількість переданих їй аргументів.
const secondNumber = function (a, b) {
  console.log('secondNumber', a, b);
}
secondNumber(2, 3);

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.
const comparedNumber = function (a, b) {
  let result = -1;
  if (a > b) {
    result = 1;
  } else if (a == b) {
    result = 0;
  }
  console.log('comparedNumber', result);
}
comparedNumber(4, 3);

// Напиши функцію, яка обчислює факторіал переданого їй числа.
const factorial = function (number) {
  if (number < 0) {
    return false;
  } else if (number == 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
console.log('factorial', factorial(5));

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function threeNumber(one, two, three) {
  return one.toString() + two.toString() + three.toString();
}
console.log('threeNumber', threeNumber(5, 9, 6));

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function areaRectangle(width, height = null) {
  if (height === null) {
    return width * 4;
  }
  return width * height;
}
console.log('areaRectangle', areaRectangle(5, 6));

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
function findPerfectNumber(number) {
  let sumOfNumbers = 0;

  for (let i = number - 1; i > 0; i--) {
    if (number % i == 0) {
      sumOfNumbers = sumOfNumbers + i;
    }
  }

  if (sumOfNumbers == number) {
    return true;
  } else {
    return false;
  }
}

let numberPerfectCheck = findPerfectNumber(28);

if (numberPerfectCheck) {
  console.log('Досконале число');
} else {
  console.log('Не досконале число');
}

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function findPerfectNumberInRange(minNumber, maxNumber) {
  let numberCheck;

  for (let i = minNumber; i < maxNumber; i++) {
    numberCheck = findPerfectNumber(i);
    // console.log(numberCheck, i);
    if (numberCheck) {
      console.log(`Досконале число: ${i}`);
    }
  }
}
findPerfectNumberInRange(100, 2000)
