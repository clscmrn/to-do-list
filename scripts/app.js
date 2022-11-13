
//This function is for adding what was in the input box
// and add it to the to-do list after clicking add
function addTodo(event) {
    // Prevents form from submitting
    event.preventDefault();
    // To-Do Div
    todoDiv.classList.add("todo");
    //Create LI
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Check Mark Button
    completedButton.innerHTML = '<i class="faas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Check Trash Button
    completedButton.innerHTML = '<i class="faas fa-trash"></i>';
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);

}






(function newFact() {
    var facts = ['Fact 1', 'Fact 2', 'Fact 183'];
    var randomFact = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').innerHTML = facts[randomFact];
  })();