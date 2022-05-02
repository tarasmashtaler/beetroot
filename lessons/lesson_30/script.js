// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
function ageValidation() {
  let userName = prompt('Який Ваш вік?');

  if (userName >= 0 && userName <= 11) {
    alert('Ви дитина');
  } else if (userName >= 12 && userName <= 17) {
    alert('Ви підліток');
  } else if (userName >= 18 && userName <= 59) {
    alert('Ви дорослий');
  } else if (userName >= 60 && userName <= 120) {
    alert('Ви пенсіонер');
  } else {
    alert('Введіть коректний вік!');
    ageValidation();
  }
}
ageValidation();

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
const specialSymbol = ['0', '!', '@', '#', '$', '%', '^', '&', '*', '('];
function showUserNumeric() {
  let userNumeric = prompt('Введи число від 0 до 9');
  userNumeric = +userNumeric;
  if (isNaN(userNumeric) || userNumeric <= 0 || userNumeric >= 10) {
    alert('Введіть коректне число!');
    showUserNumeric();
    return;
  }
  showSpecialSymbol(userNumeric);
}
showUserNumeric();
function showSpecialSymbol(userNumeric) {
  alert('Спецсимвол до Вашого числа: ' + specialSymbol[userNumeric]);
}


// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
function showSumNumber(minNumber, maxNumber) {
  let sumNumber = 0;

  for (let i = minNumber; i <= maxNumber; i++) {
    sumNumber += i;
  }
  alert(`Сума всіx чисел: ${sumNumber}`);
}
showSumNumber(20, 25);

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.
let purchaseAmount = prompt('Введіть суму покупки в грн.');
let purchaseAmountDiscount = 0;

if (purchaseAmount > 0 && purchaseAmount < 200) {
  alert('Сума покупки замала для отримання знижки');
} else if (purchaseAmount >= 200 && purchaseAmount < 300) {
  purchaseAmountDiscount = (purchaseAmount * 0.97).toFixed(2);
  alert(`Сума до оплати зі знижкою: ${purchaseAmountDiscount} грн.`);
} else if (purchaseAmount >= 300 && purchaseAmount < 500) {
  purchaseAmountDiscount = (purchaseAmount * 0.95).toFixed(2);
  alert(`Сума до оплати зі знижкою: ${purchaseAmountDiscount} грн.`);
} else if (purchaseAmount >= 500) {
  purchaseAmountDiscount = (purchaseAmount * 0.93).toFixed(2);
  alert(`Сума до оплати зі знижкою: ${purchaseAmountDiscount} грн.`);
} else {
  alert('Введіть коректну суму покупки!');
}

// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
for (let i = 2; i <= 9; i++) {
  for (let k = 1; k <= 10; k++) {
    console.log(i * k);
  }
}


// Запитай у користувача число і виведи всі дільники цього числа.
let numberDivisors = [];
function showUserNumericOne() {
  let userNumericOne = prompt('Введи будь яке число більше 0');
  userNumericOne = +userNumericOne;

  if (isNaN(userNumericOne) || userNumericOne <= 0) {
    alert('Введіть коректне число!');
    showUserNumericOne();
    return;
  } else {
    for (let i = 1; i <= userNumericOne; i++) {
      if (userNumericOne % i == 0) {
        numberDivisors.push(i);
      }
    }
    alert(`Всі дільники числа якого Ви ввели: ${numberDivisors}`);
    console.log(numberDivisors);
  }
}
showUserNumericOne();



// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
function guessNumber() {
  let userNumber = prompt('Загадай число від 0 до 100');
  userNumber = +userNumber;
  if (userNumber < 0 || userNumber >= 100 || isNaN(userNumber)) {
    alert('Введіть коректне число');
    guessNumber();
    return;
  }
  guessNumberProcess();
}
guessNumber();
function guessNumberProcess(proposedNumber = 50, minOldProposedNumber = 0, maxOldProposedNumber = 100) {
  proposedNumber = Math.trunc(proposedNumber);

  let userAnswer = prompt(`${proposedNumber} Це Ваше число? Вкажіть < > =`);

  if (userAnswer == '<') {
    guessNumberProcess((proposedNumber + minOldProposedNumber) / 2, minOldProposedNumber, proposedNumber);
  } else if (userAnswer == '>') {
    guessNumberProcess((proposedNumber + maxOldProposedNumber) / 2, proposedNumber, maxOldProposedNumber);
  } else if (userAnswer == '=') {
    alert('Це ваше число!');
  } else {
    alert('Вкажіть < > =');
    guessNumberProcess(proposedNumber, minOldProposedNumber, maxOldProposedNumber);
  }
}