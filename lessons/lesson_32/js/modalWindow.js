const modalWindow = () => {
  document.getElementById('js-todo').classList.toggle('show');
}

const clickButton = document.getElementsByClassName('js-todo-button');
for (const item of clickButton) {
  item.addEventListener('click', modalWindow);
}

export { modalWindow, clickButton };