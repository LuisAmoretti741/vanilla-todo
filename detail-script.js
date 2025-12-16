function displayTodo(todo) {
    const titleHeader = document.getElementById('todo-title');
    titleHeader.innerHTML = todo.title;

    const descriptionMain = document.getElementById('todo-description');
    descriptionMain.innerHTML = 'Description: ' + todo.description;

    const createDataMain = document.getElementById('todo-createDate');
    createDataMain.innerHTML = 'Creation Date: ' + todo.creationDate;

    const endDataMain = document.getElementById('todo-endDate');
    endDataMain.innerHTML = 'End Date: ' + todo.endDate;

    const colorMain = document.getElementById('todo-color');
    colorMain.innerHTML = 'Color: ' + todo.color;

    const doneMain = document.getElementById('todo-done');
    doneMain.innerHTML = 'Done: ' + todo.done;
}

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('todoId');

console.log(id);

getTodo(id).then(result => displayTodo(result));
