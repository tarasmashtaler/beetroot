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















  // let playList = [
  //   {
  //     author: "LED ZEPPELIN",
  //     song: "STAIRWAY TO HEAVEN"
  //   },
  //   {
  //     author: "QUEEN",
  //     song: "BOHEMIAN RHAPSODY"
  //   },
  //   {
  //     author: "LYNYRD SKYNYRD",
  //     song: "FREE BIRD"
  //   },
  //   {
  //     author: "DEEP PURPLE",
  //     song: "SMOKE ON THE WATER"
  //   },
  //   {
  //     author: "JIMI HENDRIX",
  //     song: "ALL ALONG THE WATCHTOWER"
  //   },
  //   {
  //     author: "AC/DC",
  //     song: "BACK IN BLACK"
  //   },
  //   {
  //     author: "QUEEN",
  //     song: "WE WILL ROCK YOU"
  //   },
  //   {
  //     author: "METALLICA",
  //     song: "ENTER SANDMAN"
  //   }
  // ]
  // function showPlayList(playList) {

  //   let playListHtml = '<div class="playlist"><ol>';
  //   playList.forEach(element => {
  //     playListHtml += `
  //     <li>
  //       ${element.author}, ${element.song} 
  //     </li>
  //   `
  //   });
  //   playListHtml += '</ol></div>';
  //   let bodyElement = document.querySelector('body');
  //   bodyElement.insertAdjacentHTML('beforeend', playListHtml);
  // }
  // showPlayList(playList);