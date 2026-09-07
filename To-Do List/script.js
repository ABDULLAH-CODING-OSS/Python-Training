let tasks = JSON.parse(localStorage.getItem("tasks")) || [{id: 1, text: "Learn FlexBox",column: "todo"}];

const columns = {
    todo:document.getElementById("todo").querySelector(".task-list"),
    "in-progress": document.getElementById("in-progress").querySelector(".task-list"),
    done: document.getElementById("done").querySelector(".task-list")
};


function render(){
    columns.todo.innerHTML="";
    columns["in-progress"].innerHTML="";
    columns.done.innerHTML="";

tasks.forEach(task=> { 
    const card = document.createElement("div");
    card.className ="task-card";

    const text = document.createElement("span");
    text.textContent=  task.text;
   
    const moveBtn = document.createElement("button");
    moveBtn.className = "move-btn";
    moveBtn.textContent="->";

    moveBtn.addEventListener("click", function(){
        moveTask(task.id);
    });

    const editBtn = document.createElement("button");
    editBtn.className ="move-btn";
    editBtn.textContent="✎";
    editBtn.addEventListener("click", function(){
        editTask(task.id);
    });

    const deleteBtn= document.createElement("button");
    deleteBtn.className="move-btn"
    deleteBtn.textContent="X";
    deleteBtn.addEventListener("click", function(){
        deleteTask(task.id);
    });

    const actions = document.createElement("div")
    actions.className="actions";
    actions.appendChild(editBtn);
    actions.appendChild(moveBtn);
    actions.appendChild(deleteBtn);
  

    

    card.appendChild(text);
    card.appendChild(actions);
    columns[task.column].appendChild(card); 
});
}


function moveTask(id) {
    const order = ["todo", "in-progress", "done"];
    const task= tasks.find(t=> t.id===id);
    const currentIndex = order.indexOf(task.column);

    if(currentIndex < order.length-1){ 
        task.column=order[currentIndex + 1];
    }
    saveTasks();
    render();
}

function deleteTask(id){
    tasks = tasks.filter(t=> t.id!==id);
    saveTasks();
    render();
}

function editTask(id){
    const task =tasks.find(t=> t.id===id);
    const newText = prompt("Edit Task:",task.text);
    if (newText !== null && newText.trim() !=="") {
        task.text=newText.trim();
    }
    saveTasks();
    render();
}

render();

const form = document.querySelector(".add-task-form");
const input = form.querySelector("input");
form.addEventListener("submit", function(event){
    event.preventDefault();
    const newTask = {
        id: Date.now(),
        text: input.value,
        column: "todo"
    };
    tasks.push(newTask);
    saveTasks();
    render();

    input.value="";
});

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}