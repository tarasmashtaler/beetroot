// Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl +, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

// document.addEventListener('keydown', (event) => {
//   let divElement = document.getElementsByClassName('text')[0];

//   if (event.key === '+' && event.ctrlKey === true) {
//     event.preventDefault();
//     let textareaTag = document.getElementById("textareaID")
//     let textareaContent = textareaTag.value
//     divElement.innerHTML = textareaContent;
//     console.log(textareaContent);
//     divElement.hidden = false;
//     textareaTag.hidden = true;
//     return;
//   }
//   if (event.code === 'KeyE' && event.ctrlKey === true) {
//     event.preventDefault();
//     let divcontent = divElement.textContent;
//     let textareaElement = "<textarea id='textareaID'>" + divcontent + "</textarea>";
//     let element = document.getElementsByClassName('wrap')[0];
//     element.insertAdjacentHTML('beforeend', textareaElement);
//     divElement.hidden = true;
//     return;
//   }
// });


// Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.
const headings = document.querySelectorAll('th');
const headingsValue = [];
const mainContentValue = [];
function sortTable(headingObject, index) {

}
function getHeadings() {
  headings.forEach((element, index) => {
    let headingObject = {
      name: element.dataset.name,
      type: element.dataset.type
    }
    headingsValue.push(headingObject)
    element.addEventListener('click', function () {
      sortTable(headingObject, index);
    })
  });
}
function getTableInfo() {
  const tableRows = document.querySelectorAll('tr.main-content');

  tableRows.forEach((element, index) => {
    let infoItems = element.querySelectorAll('td');
    console.log(infoItems);
  });

  // console.log(tableRows);
}
// console.log(headingsValue);
getHeadings();
getTableInfo();












