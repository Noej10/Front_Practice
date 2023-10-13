function addTodo() {
    let todo = document.getElementById('search-input').value;
    let todolistall = document.getElementsByClassName('todolist')[0];

    if(todo===''||todo.replace(/ /g,'')===''){
        document.getElementById('search-input').value = "";
        return;
    }

       
    let todolist = document.createElement('li');
    todolist.innerText = todo;
    todolistall.appendChild(todolist);

    let removeBtn = document.createElement('button');
    removeBtn.className = 'todo-remove-btn';
    removeBtn.innerHTML = '<i class="fa-solid fa-eraser"></i>';

    todolist.appendChild(removeBtn);
    
    
    document.getElementById('search-input').value = "";

    removeBtn.onclick = function removeTodo(){
        this.parentNode.remove();
        
    }

    todolist.onclick = function todoline(){
        if(todolist.style.textDecoration === "line-through")
        todolist.style.textDecoration = 'none';
        else
        todolist.style.textDecoration = "line-through";
    }

}


