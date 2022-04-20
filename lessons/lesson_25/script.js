// Створення змінних
let firstName = 'Taras';
let fullName = 'Mashtaler';
let yearOld = 47;
let myCity = 'Ivano-frankivsk';
alert('Привіт, ' + firstName + '!');

// Обчислення віку людини
const YEAR_NOW = 2022;
let yearBirthday = prompt('Привіт, який твій рік народження?');
let result = YEAR_NOW - yearBirthday;
alert('Твій вік: ' + result + ' років!'); 

// Обчислення параметру квадрату
let sideSquare = prompt('Вкажи довжину сторони квадрата і ти отримаєш його периметр?');
let perimeterSquare = sideSquare * 4;
perimeterSquare = perimeterSquare.toFixed(2);
alert('Периметер квадрата рівний: ' + perimeterSquare + ' сантиметрів.');

// Обчислення площі круга
let radiusCircle = prompt('Вкажи радіус кола і ти отримаєш площу його окружності?');
let areaCircle = Math.PI * Math.pow(radiusCircle, 2);
// другий спосіб
// let areaCircle = Math.PI * radiusCircle ** 2;
console.log(areaCircle);
areaCircle = areaCircle.toFixed();
console.log(areaCircle);
alert('Площа окружності кола рівна: ' + areaCircle + ' сантиметрів.');

// Відстань і швидкість між містами
let distCity = prompt('Вкажи відстань між містами куди рухатимешся в кілометрах?');
let distCityTime = prompt('Вкажи час за який плануєш проїхати цю відстань в годинах?');
let distCitySpeed = distCity / distCityTime;
distCitySpeed = distCitySpeed.toFixed();
alert('Середня швидкість руху повинна бути не менше ' + distCitySpeed + ' км/год');

// Обмін валют
const MANY_DOLLAR_EVRO = 0.93;
let manyDollar = prompt('Введіть суму в долларах:');
let manyEvro = (MANY_DOLLAR_EVRO * manyDollar);
manyEvro = manyEvro.toFixed(2);
alert('Після конвертації валют Ви отримаєте: ' + manyEvro + ' Evro');


 