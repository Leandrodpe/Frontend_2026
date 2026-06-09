const textInput = document.getElementById('taskInput');
const textList = document.getElementById('taskList');

function addTask(){
  const temTexto = textInput.value.trim();
  if(temTexto !== ''){
    const taskAdd = document.createElement('li');
    taskAdd.innerHTML = 
    `<span>${temTexto}</span>
    <button onclick="">editar</button>
    <button onclick="remover(this)">remover</button>
    <button onclick="concluir(this)">confirmar</button>`
    taskList.appendChild(taskAdd);
  }
}
function remover(button){
  const itemToRemove= button.parentElement;
  taskList.removeChild(itemToRemove);
}
function concluir(button){
  const itemToMark= button.parentElement;
  itemToMark.classList= 'completed';
}


