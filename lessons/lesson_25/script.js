// Створення змінних
let firstName = 'Taras';
let fullName = 'Mashtaler';
let yearOld = 47;
let myCity = 'Ivano-frankivsk';
alert('Привіт, ' + firstName);

// Обчислення віку людини
const yearNow = 2022;
let yearBirthday = prompt('Привіт, який твій рік народження?');
let result = (yearNow - yearBirthday);
alert('Твій вік: ' + result + ' років!'); 

// Обчислення параметру квадрату
let sideSquare = prompt('Вкажи довжину сторони квадрата і ти отримаєш його периметр:');
let perimeterSquare = (sideSquare * 4);
alert('Периметер квадрата рівний: ' + perimeterSquare + ' сантиметрів.');

// Обчислення площі круга
let radiusCircle = prompt('Вкажи радіус кола і ти отримаєш площу його окружності:');
let areaCircle = (Math.PI * Math.pow(radiusCircle, 2));
// другий спосіб
// let areaCircle = (Math.PI * radiusCircle ** 2);
console.log(areaCircle);
let areaCircleRound = areaCircle.toFixed();
console.log(areaCircleRound);
alert('Площа окружності кола рівна: ' + areaCircleRound + ' сантиметрів.');

// Відстань і швидкість між містами
let distCity = prompt('Вкажи відстань між містами куди рухатимешся в кілометрах:');
let distCityTime = prompt('Вкажи час за який плануєш проїхати цю відстань в годинах:');
let distCitySpeed = (distCity / distCityTime);
alert('Середня швидкість руху повинна бути не менше ' + distCitySpeed + 'км/год');

// Обмін валют
const manyDollarEvro = 0.93;
let manyDollar = prompt('Введіть суму в долларах:');
let manyEvro = (manyDollarEvro * manyDollar);
alert('Після конвертації валют Ви отримаєте: ' + manyEvro + ' Evro');


 