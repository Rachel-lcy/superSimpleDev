const todoList = [];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++){
    const todoObject =  todoList[i];
    
    const html = `
      <div>${todoObject.objectName} </div>
      <div>${todoObject.objectDueDate} </div>
      <button onclick = 
        "
        todoList.splice(${i},1);
        renderTodoList();
        " class = "delete-todo-button"
      > Delete </button>
      `;

    // 
    todoListHTML = todoListHTML + html;
    // todoListHTML += html ;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML ;
}


function addTodo(){

  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const inputDateElement = document.querySelector('.js-date-input');
  const dueDate = inputDateElement.value;
  const todoObject = {
    objectName: name,
    objectDueDate: dueDate
  };

  todoList.push(todoObject);
  console.log(todoList);
  inputElement.value = '';



  renderTodoList();
}
