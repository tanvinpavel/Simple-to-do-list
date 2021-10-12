let formElement = document.querySelector('form');
let taskName = document.querySelector('#new-task');
let incompleteTask = document.querySelector('#items');
let completeTask = document.querySelector('.complete-list ul')

//createTask function
let createTask = function(newTaskLabel){
    let newLi = document.createElement('li');
    let newcheckbox = document.createElement('input');
    let newLabel = document.createElement('label');

    newcheckbox.setAttribute('type', 'checkbox');
    newLabel.innerHTML = newTaskLabel;

    newLi.appendChild(newcheckbox);
    newLi.appendChild(newLabel);

    return newLi;
}

//add a new task on incomplete list
let addTask = function(event){
    event.preventDefault();
    let newTask = createTask(taskName.value);
    incompleteTask.appendChild(newTask);

    taskName.value = "";
    clickTocompleteTask(newTask);
}

//delete the completed task
let deleteTask = function(listItem){
    let deleteBtn = listItem.querySelector('button');

    deleteBtn.addEventListener('click', function(){ 
        let compul = listItem.parentNode;

        compul.removeChild(listItem);
    });
}

//first: remove task from incomplete list
//second: add the task in the complete list
let taskCompleted = function(){
    let li = this.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);

    li.removeChild(this);
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.innerHTML = 'Delete';

    li.appendChild(deleteBtn);
    completeTask.appendChild(li);

    deleteTask(li);
}

//addEventListener for the checkbox
let clickTocompleteTask = function(li){
    let checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.onchange = taskCompleted;
}

//addEventlistener for the existing incomplete task 
for(let i=0;i<incompleteTask.childElementCount;i++){
    clickTocompleteTask(incompleteTask.children[i]);
}

// Note: check diffrent between completeTask and incompleteTask, for deleteBtn is not find
//addEventListener for the existing complete task
for(let i=0;i<completeTask.childElementCount;i++){
    deleteTask(completeTask.children[i]);
}

formElement.addEventListener('submit', addTask);

