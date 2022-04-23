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
