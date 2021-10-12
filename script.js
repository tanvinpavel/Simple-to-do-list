let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let incompleteUL = document.querySelector('#items');
let completeUL = document.querySelector('.complete-list ul');


let newList = function(labelText){
    let newList = document.createElement('li');
    let newCheckbox = document.createElement('input');
    let newLabel = document.createElement('label');

    newCheckbox.setAttribute('type','checkbox');
    newLabel.innerHTML = labelText;

    newList.appendChild(newCheckbox);
    newList.appendChild(newLabel);

    return newList;
}

let addList = function(event){
    event.preventDefault();
    let listItem =  newList(newTask.value);

    incompleteUL.appendChild(listItem);
    newTask.value = "";

    bindIncompleteItems(listItem, completeTask);
}

let completeTask = function(){
    let li = this.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);

    li.removeChild(this);
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.className = 'delete';

    li.appendChild(deleteBtn);
    completeUL.appendChild(li);

    bindcompleteItems(li, deleteCompleteTask);
}


let deleteCompleteTask = function(){
    let compli = this.parentNode;
    let compul = compli.parentNode;
    compul.removeChild(compli);
}

let bindIncompleteItems = function(listItem, completeTask){
    let checkboxItem = listItem.querySelector('input[type="checkbox"]');
    checkboxItem.onclick = completeTask;
}

let bindcompleteItems = function(li, deleteCompleteTask){
    let deleteBtn = li.querySelector('.delete');
    deleteBtn.onclick = deleteCompleteTask;
}

for(let i=0;i<incompleteUL.childElementCount;i++){
    bindIncompleteItems(incompleteUL.children[i], completeTask);
}

for(let i=0;i<completeUL.childElementCount;i++){
    bindcompleteItems(completeUL.children[i], deleteCompleteTask);
}

form.addEventListener('submit', addList);
