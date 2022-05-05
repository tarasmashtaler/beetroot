document.addEventListener('keydown', (event) => {
  let divElement = document.getElementsByClassName('text')[0];
  const keyName = event.key;
  console.log(event);


  if (event.key === '+' && event.ctrlKey === true) {
    event.preventDefault();
    let textareaTag = document.getElementById("textareaID")
    let textareaContent = textareaTag.value
    divElement.innerHTML = textareaContent;   
    console.log(textareaContent);
    divElement.hidden = false;
    textareaTag.hidden = true;
    return;
  } 
  if (event.code === 'KeyE' && event.ctrlKey === true) {
    event.preventDefault();
    
    let divcontent = divElement.textContent;
    // console.log(divcontent, divElement); 
    let textareaElement = "<textarea id='textareaID'>" + divcontent + "</textarea>";
    let element = document.getElementsByClassName('wrap')[0];
    element.insertAdjacentHTML('beforeend', textareaElement);
    divElement.hidden = true;
    return;
  }
});















  