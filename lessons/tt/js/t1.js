const todoButton = document.getElementById('js-todo-button');
const todoList = document.getElementById('js-todo-list');

const newTodoItem = () => {
  const Inputvalue = document.getElementById('js-todo-input').value;
  if (Inputvalue) {
    // if (Inputvalue.lenght > 5) {
    const li = document.createElement('li');
    li.classList.add('todo__item');
    li.innerText = Inputvalue;
    li.addEventListener('click', () => {
      li.remove();
    });
    todoList.appendChild(li);
    document.getElementById('js-todo-input').value = '';
    // } else {
    //   alert('Впишіть мінімум 5 символів!')  
    // }    
  } else {
    alert('Впишіть завдання!')
  }
};

todoButton.addEventListener('click', newTodoItem);

export { newTodoItem, Inputvalue }