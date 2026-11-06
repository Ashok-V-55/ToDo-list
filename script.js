

let todoInput = document.querySelector("#todo-input");
let addBtn = document.querySelector("#add-btn");
let todoList = document.querySelector("#todo-list");
let emptyMessage = document.querySelector("#empty-message");



function addTask() {

    let taskValue = todoInput.value.trim();



    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }



    let existingTasks = todoList.querySelectorAll(".todo-item");

    for (let task of existingTasks) {

        let existingText = task.querySelector("span").textContent;

        if (existingText.toLowerCase() === taskValue.toLowerCase()) {
            alert("This task already exists!");
            return;
        }
    }



    let li = document.createElement("li");
    li.classList.add("todo-item");




    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";



    let span = document.createElement("span");
    span.textContent = taskValue;


    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");




    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");



    checkbox.addEventListener("change", function() {

        if (checkbox.checked) {
            li.classList.add("completed");
        }
        else {
            li.classList.remove("completed");
        }

    });




    editBtn.addEventListener("click", function() {

        let updatedTask = prompt("Edit your task:", span.textContent);

        if (updatedTask === null) {
            return;
        }

        updatedTask = updatedTask.trim();

        if (updatedTask === "") {
            alert("Task cannot be empty!");
            return;
        }



        let allTasks = todoList.querySelectorAll(".todo-item");

        for (let task of allTasks) {

            if (task === li) {
                continue;
            }

            let currentText = task.querySelector("span").textContent;

            if (currentText.toLowerCase() === updatedTask.toLowerCase()) {
                alert("This task already exists!");
                return;
            }
        }

        span.textContent = updatedTask;

    });



    deleteBtn.addEventListener("click", function() {

        li.remove();

        checkEmptyList();

    });


    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);




    todoList.appendChild(li);



    todoInput.value = "";


 

    checkEmptyList();

}


addBtn.addEventListener("click", addTask);


todoInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});



function checkEmptyList() {

    if (todoList.children.length === 0) {
        emptyMessage.style.display = "block";
    }
    else {
        emptyMessage.style.display = "none";
    }

}



let clearAllBtn = document.createElement("button");

clearAllBtn.textContent = "Clear All";
clearAllBtn.style.backgroundColor = "#dc2626";
clearAllBtn.style.color = "white";
clearAllBtn.style.marginTop = "15px";

document.querySelector(".container").appendChild(clearAllBtn);




clearAllBtn.addEventListener("click", function() {

    todoList.innerHTML = "";

    checkEmptyList();

});



checkEmptyList();
