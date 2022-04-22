// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let a = 0.1;
let b = 0.2;
let c = a + b;
c = c.toFixed(1); 
console.log(c);

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
let aa = '1';
let bb = 2;
let cc = +aa + bb;
console.log(cc);

// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
let flashVolume = prompt('Вкажи обсяг флешки в Гб?');
let filesNumber = flashVolume / 820 *1000;
filesNumber = filesNumber.toFixed();
alert('На флешку поміститься ' + filesNumber + ' файлів розміром 820Мб');

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
let moneySum = prompt('Вкажи суму коштів в гаманці у гривнях?');
let chokolatePrice = prompt('Вкажи вартість однієї шоколадки у гривнях?');
let chokolateNumber = moneySum / chokolatePrice;
chokolateNumber = chokolateNumber.toFixed();
let lastMoney = moneySum % chokolatePrice;
alert('Ви можете купити ' + chokolateNumber + ' шоколадок' + ' і у Вас залишиться ' + lastMoney + ' гривні');

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).
let number = prompt('Введи тризначне число:');
let number3 = number % 10;
console.log(number3);
number = Math.trunc(number / 10);
console.log(number);
let number2 = number % 10;
number = Math.trunc(number / 10);
number1 = number;
alert('Ваше число задом наперед: ' + number3 + number2 + number1); 

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
let sumBank = prompt('Введіть суму вкладу в гривнях?');
let mounths = prompt('Вкажіть термін вкладу в місяцях?');
let sumDeposit = (sumBank * 5 / 100) / 12 * mounths;
sumDeposit = sumDeposit.toFixed(2);
console.log(sumDeposit);
alert('Cума нарахованих відсотків на кінець вкладу становить: ' + sumDeposit + ' гривень');
