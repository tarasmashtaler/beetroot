// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

class circle {
  radius = 10;
  constructor(radius) {
    this.radius = radius;
  }
  get circleRadius() {
    return `Радіус кола: ${this.radius}`;
  }
  set circleRadius(radius) {
    this.radius = radius;
  }
  get diameter() {
    return 'Діаметр кола: ' + this.calculateDiameter();
  }
  calculateDiameter() {
    return 2 * this.radius;
  }
  get area() {
    return this.areaCircle();
  }
  areaCircle() {
    return (Math.pow(this.radius, 2) * Math.PI).toFixed(2);

  }
  get length() {
    return this.lengthCircle();
  }
  lengthCircle() {
    return (2 * this.radius * Math.PI).toFixed(2);
  }
}

const square = new circle(10);
console.log(square.circleRadius);
square.circleRadius = 30;
console.log(square.area);
console.log(square.length);
console.log(square.circleRadius);
console.log(square.diameter);
console.log('----------------------');
const squareSecond = new circle(10);
console.log(squareSecond.circleRadius);
squareSecond.circleRadius = 15;
console.log(squareSecond.area);
console.log(squareSecond.length);
console.log(squareSecond.circleRadius);
console.log(squareSecond.diameter);


// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.
// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().
// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().
class employee {
  constructor(fullName, age, yearsExperience, salary) {
    this.fullName = fullName;
    this.age = age;
    this.yearsExperience = yearsExperience;
    this.salary = salary;
  }

  get tableRow() {
    return `
      <tr>
        <td>${this.fullName}</td>
        <td>${this.age}</td>
        <td>${this.yearsExperience}</td>
        <td>${this.salary}</td>
      </tr>
    `;
  }
}
let employeesList = [
  new employee('Taras', 47, 26, 28000),
  new employee('Ivan', 37, 15, 16000),
  new employee('Jora', 28, 6, 11000),
  new employee('Ulya', 22, 2, 8000)
];
class empTable {
  constructor(employeesArray) {
    this.employeesArray = employeesArray;
  }
  get employees() {
    let tableHtml =  '<table>';
    
    this.employeesArray.forEach(element => {
      tableHtml += element.tableRow;
    });

    tableHtml += '</table>';

    return tableHtml;
  }
}

let employeesTable = new empTable(employeesList);

console.log(employeesTable.employees)

let employeesElement = document.getElementsByClassName('employees')[0];
employeesElement.insertAdjacentHTML('afterbegin', employeesTable.employees);
