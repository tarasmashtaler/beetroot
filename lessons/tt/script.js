// import { newTodoItem, Inputvalue } from './js/t1';
// import {showPlayList} from './js/t2';

// newTodoItem();

document.getElementById('js-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.target);
  const firstName = form.get('firstName');
  const secondName = form.get('secondName');
  console.log(firstName);
  console.log(secondName);
});
document.getElementById('js-form').addEventListener('submit', firstName);  
document.getElementById('js-form').addEventListener('submit', secondName);  


