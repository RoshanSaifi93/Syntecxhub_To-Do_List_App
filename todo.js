const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
loadTasks();    
addBtn.addEventListener("click", addTask);

function addTask() {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskInput.value}</span>
        <div>
            <button class="complete"> ✅ </button>
            <button class="delete"> 🗑️ </button>
        </div>  
    `;
    taskList.appendChild(li);
    taskInput.value = "";
    saveTasks();
}

taskList.addEventListener("click", function(e) {
    if (e.target.classList.contains("complete")) {
        e.target.parentElement.parentElement.classList.toggle("completed");
        saveTasks();
    }
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
        saveTasks();
    }
});
function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}
function loadTasks() {
    taskList.innerHTML = localStorage.getItem("tasks") || "";
}