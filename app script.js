// --------- API FETCH FEATURE ---------
const fetchBtn = document.getElementById("fetchBtn");
const apiDataDiv = document.getElementById("apiData");

fetchBtn.addEventListener("click", fetchJoke);

function fetchJoke() {
    // Fetching a random joke from an open API
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            apiDataDiv.textContent = `${data.setup} — ${data.punchline}`;
        })
        .catch(error => {
            apiDataDiv.textContent = "Failed to fetch joke.";
            console.error(error);
        });
}

// --------- TO DO LIST FEATURE ---------
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark complete on click
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Delete button for each task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.style.background = "#dc3545";
    deleteBtn.style.color = "white";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}
