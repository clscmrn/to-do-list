
const todoItem = document.getElementById('todo-item')
const todoInput = document.getElementById('todo-input')
const addnewBtn = document.getElementById('addnew-btn')
const trashButton = document.createElement('button');
const completedButton = document.createElement('button');
const newTodo = document.createElement('li');
const todoDiv = document.createElement('div');



//Event Listners
addnewBtn.addEventListener('click', function() {addList(todo-input.value);});
todoButton.addEventListener('click', addTodo);




//Declare List

let quotes = [

 "\u201CThe best way to predict your future is to create it.\u201D - Abraham Lincoln",
 "\u201CDo what you can, with what you have, where you are.\u201D - Theodore Roosevelt",
    
];