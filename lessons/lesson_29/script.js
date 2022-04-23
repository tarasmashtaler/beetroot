/* Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного бака, середня витрата палива на 100 км., водії), і наступні функції для роботи з цим об'єктом:
Висновок на екран з інформацією про автомобіль.
Додавання водія, який має право керувати автомобілем.
Заправка автомобіля.
Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину, а також потрібно перевіряти чи має право водій керувати даним автомобілем (ім'я водія функція приймає другим аргументом). Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки, якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.*/
let car = {
  brand: 'Opel',
  model: 'Astra',
  year: 2013,
  avgSpeed: 100,
  fuelVolume: 56,
  avgFuel: 4.4,
  drivers: [
    {
      name: 'Taras',
      permission: true  
    },
    {
      name: 'Yana',
      permission: false  
    }
  ]
}
console.log('Висновок на екран з інформацією про автомобіль', car);
console.log('Додавання водія, який має право керувати автомобілем');
car.drivers.forEach(function(element) {
  if(element.permission){
    console.log(`${element.name} має право керувати`);
  }
});
console.log('Заправка автомобіля: ' + car.fuelVolume + ' л.');
function travelTimeCheck(distance, car, driver){
  let driverInfo = car.drivers.find(element => element.name == driver);

  if(driverInfo === undefined){
    console.log("Такого водія не існує!");
    return false;
  } else if(!driverInfo.permission){
    console.log("Водій не має права керувати дани автомобілем!");
    return false;
  }

  let travelFuelVolume = distance / 100 * car.avgFuel;
  console.log(travelFuelVolume);
  if(travelFuelVolume > car.fuelVolume){
    console.log('Вам необхідна дозапрвка');
  }
  let travelTime = distance / car.avgSpeed;
  travelTime = travelTime.toFixed();
  travelTime = +travelTime + (travelTime / 4);
  console.log(`На поїздку необхідно ${travelTime} годин`); 
} 
travelTimeCheck(2000, car, 'Taras');

/* Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
Для виведення часу на екран.
Зміни часу на передане кількість секунд.
Зміни часу на передане кількість хвилин.
Зміни часу на передане кількість годин.
Врахуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:30:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин. */ 
const currentTime = {
  hour: 12,
  minute: 0,
  second: 0,
  showTime: function(){
    return this.hour + ' hour ' + this.minute + ' minute ' + this.second + ' second ';   
  },
  changeTime: function(type, time){
    if(type == 'minutes'){
      time = time * 60;
    } else if (type == 'hours'){
      time = time * 3600;
    } 
    
    let timeInSeconds = (this.hour * 3600) + (this.minute * 60) + this.second;
    let changedTime = time + timeInSeconds;

    this.hour   = Math.floor(changedTime / 3600); 
    this.minute = Math.floor((changedTime - (this.hour * 3600)) / 60);
    this.second = changedTime - (this.hour * 3600) - (this.minute * 60);
    
    return this.showTime();  
  }
};  
console.log(currentTime.showTime());
console.log(currentTime.changeTime('seconds', 600));
console.log(currentTime.changeTime('minutes', 70));
console.log(currentTime.changeTime('hours', 2));
